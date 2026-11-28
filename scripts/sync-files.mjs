#!/usr/bin/env node
/* ============================================================
   sync-files.mjs
   ------------------------------------------------------------
   Regenerates assets/js/files-manifest.js from whatever is
   sitting in the files/ folder.

   GitHub Pages serves static assets but will not list a
   directory, so the /files page needs a manifest to render
   from. This script keeps that manifest honest: drop a file
   into files/, run the script, and the page picks it up.

       node scripts/sync-files.mjs

   Anything you type by hand into the manifest is preserved
   across runs: title, description, tags and the added date are
   keyed by path and copied forward. Only the facts the file
   system owns (name, extension, byte size) are recomputed, and
   entries whose file has gone are dropped.

   The "added" date is settled once, the first time a file is
   seen, and never moves afterwards. It comes from the commit
   that added the file, so the date survives a fresh clone where
   every mtime is checkout time. Files not yet committed fall
   back to their mtime until they are.
   ============================================================ */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, resolve, posix } from 'node:path';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const FILES_DIR = join(ROOT, 'files');
const MANIFEST = join(ROOT, 'assets', 'js', 'files-manifest.js');

/* Not downloads: the page itself, OS litter, and editor leftovers. */
const SKIP = new Set(['index.html', '.DS_Store', 'Thumbs.db']);
const skip = (name) => SKIP.has(name) || name.startsWith('.') || name.startsWith('_') || name.endsWith('~');

/* ── read what is on disk ─────────────────────────────────── */

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (skip(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

/* ── read what the manifest already knows ─────────────────── */

function readExisting() {
  if (!existsSync(MANIFEST)) return new Map();
  const text = readFileSync(MANIFEST, 'utf8');
  const open = text.indexOf('[');
  const close = text.lastIndexOf(']');
  if (open === -1 || close === -1) return new Map();
  try {
    const rows = JSON.parse(text.slice(open, close + 1));
    return new Map(rows.map((r) => [r.path, r]));
  } catch (err) {
    console.error(`! could not parse ${relative(ROOT, MANIFEST)}, starting fresh:`, err.message);
    return new Map();
  }
}

/* ── dates ────────────────────────────────────────────────── */

function gitAddedDate(relPath) {
  try {
    const out = execFileSync(
      'git',
      ['log', '--diff-filter=A', '--follow', '--format=%aI', '-1', '--', relPath],
      { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
    return out ? out.slice(0, 10) : '';
  } catch {
    return '';
  }
}

const isoDay = (ms) => new Date(ms).toISOString().slice(0, 10);

/* ── titles ───────────────────────────────────────────────── */

function titleFromName(name) {
  return name
    .replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ── build ────────────────────────────────────────────────── */

if (!existsSync(FILES_DIR)) {
  console.error(`! no files/ directory at ${FILES_DIR}`);
  process.exit(1);
}

const existing = readExisting();
const items = [];
let added = 0;
let kept = 0;

for (const full of walk(FILES_DIR)) {
  const relPath = posix.join(...relative(ROOT, full).split(/[\\/]/));
  const name = relPath.split('/').pop();
  const ext = (name.includes('.') ? name.split('.').pop() : '').toLowerCase();
  const stat = statSync(full);
  const prev = existing.get(relPath);

  if (prev) kept++;
  else added++;

  items.push({
    path: relPath,
    name,
    ext,
    title: prev?.title || titleFromName(name),
    description: prev?.description || '',
    tags: prev?.tags || [],
    /* settled once, then carried forward untouched */
    added: prev?.added || gitAddedDate(relPath) || isoDay(stat.mtimeMs),
    size: stat.size
  });
}

const dropped = [...existing.keys()].filter((p) => !items.some((i) => i.path === p));

/* newest first, then alphabetical so the order is stable run to run */
items.sort((a, b) => (a.added === b.added ? a.title.localeCompare(b.title) : b.added.localeCompare(a.added)));

const header = `/* ============================================
   Files manifest - GENERATED, but safe to edit.

   Run \`node scripts/sync-files.mjs\` after adding or
   removing anything in files/. The script rewrites name,
   ext and size from disk and prunes deleted files; the
   title, description, tags and added date you set here
   are preserved across runs.

   Last sync: ${isoDay(Date.now())}
   ============================================ */

SITE_DATA.files = `;

writeFileSync(MANIFEST, `${header}${JSON.stringify(items, null, 2)};\n`, 'utf8');

console.log(`${relative(ROOT, MANIFEST)} written`);
console.log(`  ${items.length} file${items.length === 1 ? '' : 's'}  (${added} new, ${kept} carried over, ${dropped.length} removed)`);
for (const p of dropped) console.log(`  - dropped ${p}`);

# reachadi

Personal portfolio site for Adi Sharma. Eleven static pages, no framework and no build step. Deployed straight from `main` with GitHub Pages.

The interesting part is not the pages. It is that none of them contain any content. Every page is an empty shell; all of the words live in one data file, and one renderer turns that data into HTML in the browser.

---

## Why it is built this way

A portfolio changes constantly. A new job, a renamed project, a metric that needs updating. The usual failure mode is that the same fact ends up in four places: the page, the nav, the CV page, the meta description. One of them is always stale.

So the site is split in two:

| | What it holds | How often it changes |
| --- | --- | --- |
| `assets/js/data.js` | Every word, date, number, link and image path | Constantly |
| `assets/js/main.js` | How that data becomes HTML | Rarely |
| `*.html` | Nothing but the shell | Almost never |

Updating the site means editing one object in one file. You should almost never have to open an HTML file.

The constraint that shapes everything: **GitHub Pages serves static files and nothing else.** No server, no build step, no templating. So the content store has to be readable by the browser directly, which rules out a `.json` file loaded over `fetch()` (that breaks when you open the site from `file://`, and adds a network round trip before anything renders). Instead the data is JSON-shaped data in a plain `.js` file, loaded with a `<script>` tag. Same structure, zero plumbing.

---

## How it fits together

```
about.html                 assets/js/data.js           assets/js/main.js
<body data-page="about">   SITE_DATA = {               renderers = {
<main id="page-content">     about: { ... },    ──►      about: renderAbout,
                             projects: [ ... ],          projects: renderProjects,
      │                      ...                         ...
      │                    }                           }
      │                                                       │
      └──────────────────  innerHTML  ◄─────────────────────  ┘
```

1. Each page declares who it is: `<body data-page="about">`.
2. On `DOMContentLoaded`, `main.js` reads that attribute and looks it up in the `renderers` map.
3. The matching render function reads its slice of `SITE_DATA` and writes template literals into `#page-content`.
4. The nav, footer and theme toggle are rendered the same way on every page, so there is exactly one copy of each.

Adding a page is four steps: a new key in `SITE_DATA`, a `renderX()` function, an entry in the `renderers` map, and a copy of any existing HTML shell with the `data-page` and `<title>` changed.

---

## Editing content

Open `assets/js/data.js`. The top-level keys map one to one onto pages:

| Key | Page | Shape |
| --- | --- | --- |
| `meta` | all | Title and description defaults |
| `nav` | all | Array of `{ label, href, page }` |
| `hero` | `index.html` | Name, title, logos, headshot |
| `about` | `about.html` | Bio, skills, education, leadership |
| `experience` | `experience.html` | Array of companies, each with `roles[]` |
| `projects` | `projects.html` | Array of cards |
| `patents` | `patents.html` | Array (shown as "IPR") |
| `awards` | `awards.html` | Array |
| `interviews` | `interviews.html` | Round by round write-ups |
| `gallery` | `gallery.html` | Image paths and captions |
| `contact` | `contact.html` | Form endpoint and socials |
| `files` | `files/` | Generated and unlisted, see below |

Two things to know:

**Order matters.** Arrays render in the order you write them. `experience`, `projects` and `interviews` are all reverse chronological by hand, not sorted at runtime. Put new entries in the right place rather than at the end.

**The nav is data too.** To add a page to the header and the mobile menu, add one object to `nav`. The active state is worked out from `data-page`, so there is nothing else to wire up.

### Adding a job

Companies group their own roles, so a promotion is a second entry under one header rather than a second company:

```js
{
  company: "Nike",
  logo: "assets/images/logos/nike.svg",
  location: "Bengaluru, India",
  span: "Oct 2026 - Present",
  current: true,
  roles: [
    {
      title: "Software Engineer II",
      meta: "Full-time · On-site",
      period: "Oct 2026 - Present",
      current: true,
      summary: "One sentence on the team and the system.",
      highlights: ["What you did, with a number in it."],
      tags: ["Microservices", "Distributed Systems"]
    }
  ]
}
```

`logo` is optional. If the file is missing or fails to load, the tile falls back to the first letter of the company name, so a broken path degrades to something presentable instead of a gap.

---

## The files page

`/files` lists everything in the `files/` folder, newest first, with search and type filters.

**It is unlisted on purpose.** There is no entry for it in `nav`, so it appears in neither the header nor the mobile menu, and the page carries `robots: noindex, nofollow` so it stays out of search results. The only way in is typing or sharing the URL. To list it, add `{ label: "Files", href: "files/", page: "files" }` to `nav` and drop the robots meta from `files/index.html`.

GitHub Pages will not list a directory, so the page renders from a manifest at `assets/js/files-manifest.js`. The manifest is generated:

```bash
# drop a PDF into files/, then
node scripts/sync-files.mjs
```

The script scans `files/`, rewrites the facts the file system owns (name, extension, byte size), prunes entries whose file is gone, and leaves everything you typed alone:

| Field | Owner |
| --- | --- |
| `path`, `name`, `ext`, `size` | The script, rewritten every run |
| `title`, `description`, `tags` | You. Edit them in the manifest; they survive re-syncs |
| `added` | Settled once on first sight, then frozen |

`added` is what the list sorts on. The first time a file is seen the script takes the date from the commit that added it, falling back to the file's mtime if it is not committed yet. Reading it from git matters because a fresh clone resets every mtime to checkout time, which would otherwise reshuffle the whole page. Once recorded, the date never moves, so re-running the script is always safe. Override it by hand if you want a file to sit somewhere else in the order.

The page itself lives at `files/index.html` so that the clean URL `/files` works. It carries `<base href="../">`, which is what lets it share the same stylesheet, scripts and nav paths as the root level pages without rewriting any of them.

---

## Design system

All colour, type, spacing and radius values are CSS custom properties on `:root` in `assets/css/style.css`, with a `[data-theme="dark"]` block that redefines the colours. Nothing else in the stylesheet hard-codes a colour, so retheming the site means editing the thirty-odd lines at the top.

Theme choice is stored in `localStorage` and applied by a small inline script in each page's `<head>`, before the stylesheet renders, so there is no flash of the wrong theme on load.

Other conventions worth preserving:

- **Mobile first, measured.** Layouts are checked for horizontal overflow from phone widths up to 1920px. The experience and files pages widen on screens above 1140px.
- **Scroll reveal that does not hide content.** Anything within 1.5 viewports of the top is revealed synchronously on load; only deeper content waits for the observer. Without that, a section ending near the fold looks like the end of the page.
- **Decorative images are decorative.** Logo tiles carry `alt=""` and `aria-hidden`, because the name is always in text beside them.
- **`prefers-reduced-motion` is respected** and disables the reveal animations entirely.

---

## Running it locally

Most of the site opens fine by double-clicking `index.html`. The `/files` route needs a real server, because `files/` resolves to a directory listing over `file://`:

```bash
python3 -m http.server 8000
# then http://localhost:8000
```

There is nothing to install and nothing to compile. Edit a file, reload the page.

---

## Deploying

Push to `main`. GitHub Pages serves the repository root as-is.

No step rewrites or minifies anything, which means **whatever is in the repo is what visitors get**. Anything you drop into `files/` is public the moment it is pushed, whether or not it is listed in the manifest, and whether or not the page that lists it is linked from anywhere. Unlisted means hard to find, not private.

---

## Layout

```
.
├── index.html              home
├── about.html              bio, skills, education, leadership
├── experience.html         work history
├── projects.html           project cards
├── patents.html            IPR (title says IPR, filename is historical)
├── awards.html             recognition
├── interviews.html         interview write-ups
├── gallery.html            photos with lightbox
├── contact.html            form and socials
├── adi-sharma-cv-doc.html  embedded CV viewer
├── files/
│   ├── index.html          the /files page, unlisted
│   └── *.pdf               the downloads themselves
├── scripts/
│   └── sync-files.mjs      regenerates the files manifest
└── assets/
    ├── css/style.css       everything, tokens first
    ├── js/data.js          all content
    ├── js/files-manifest.js  generated by sync-files.mjs
    ├── js/main.js          renderers and page behaviour
    └── images/             headshot, logos, gallery
```

---

## Known gaps

- `contact.formAction` is still the Formspree placeholder `https://formspree.io/f/YOUR_FORM_ID`. Until a real form ID is set, submitting the contact form shows the success toast but sends nothing.
- `about.resumeEnabled` is `false`, which hides the resume download button on the About page. The CVs remain reachable through `/files`.
- `assets/images/headshot.jpg` is no longer referenced by anything.

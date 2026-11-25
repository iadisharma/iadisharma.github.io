/* ============================================
   Adi Sharma - Portfolio
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  renderNav(page);
  renderFooter();
  initTheme();
  initMobileNav();

  const renderers = {
    home: renderHome,
    about: renderAbout,
    experience: renderExperience,
    projects: renderProjects,
    patents: renderPatents,
    awards: renderAwards,
    interviews: renderInterviews,
    gallery: renderGallery,
    contact: renderContact,
    'cv-doc': renderCvDoc
  };

  if (renderers[page]) renderers[page]();

  requestAnimationFrame(() => {
    initScrollReveal();
    if (page === 'gallery') initLightbox();
    if (page === 'contact') initContactForm();
  });
});

/* ── ICONS ──────────────────────────────── */

const ICON = {
  code: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
  brain: '<path d="M12 5a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 6 0v-1a3 3 0 0 0 0-6V8a3 3 0 0 0-3-3Z"/><path d="M9 9H6a3 3 0 0 0 0 6h3M15 9h3a3 3 0 0 1 0 6h-3"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  cloud: '<path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.1 10.2 4 4 0 0 0 7 19h10.5Z"/>',
  package: '<path d="M21 8v8a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.73l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
  grad: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12.5V17c0 1.1 2.7 3 6 3s6-1.9 6-3v-4.5"/><path d="M22 10v6"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  drone: '<circle cx="12" cy="12" r="3"/><path d="M12 9V6M12 18v-3M9 12H6M18 12h-3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 19.24 7 20v2M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 19.24 17 20v2"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 13.37 17 22l-5-3-5 3 1.52-8.63"/>',
  medal: '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2M13 12l5.88-9.8"/><circle cx="12" cy="17" r="5"/>',
  doc: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'
};

function icon(name, size = 18) {
  const d = ICON[name] || ICON.code;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
}

/* Company logo tile. alt="" because the company name always sits beside it. */
function logoTile(src, name, mod = '') {
  const initial = String(name || '?').trim().charAt(0).toUpperCase();
  if (!src) return `<span class="logo-tile${mod} is-fallback" aria-hidden="true">${initial}</span>`;
  return `<span class="logo-tile${mod}" data-initial="${initial}" aria-hidden="true">` +
         `<img src="${src}" alt="" loading="lazy" onerror="logoFallback(this)" /></span>`;
}

function logoFallback(img) {
  const tile = img.parentElement;
  if (!tile) return;
  tile.classList.add('is-fallback');
  tile.textContent = tile.dataset.initial || '?';
}

const ICON_BRAND = {
  github: '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>',
  linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
};

function brandIcon(name, size = 17) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor">${ICON_BRAND[name]}</svg>`;
}

/* ── SHELL ──────────────────────────────── */

function renderNav(activePage) {
  const { nav } = SITE_DATA;

  document.getElementById('nav').innerHTML = `
    <a href="index.html" class="nav-logo" aria-label="Home">&lt;<span>AS</span>/&gt;</a>
    <ul class="nav-links">
      ${nav.map(n => `<li><a href="${n.href}"${activePage === n.page ? ' class="active" aria-current="page"' : ''}>${n.label}</a></li>`).join('')}
    </ul>
    <div class="nav-right">
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle colour theme"></button>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>`;

  document.getElementById('mobile-nav').innerHTML =
    nav.map(n => `<a href="${n.href}"${activePage === n.page ? ' class="active"' : ''}>${n.label}</a>`).join('');
}

function renderFooter() {
  const d = SITE_DATA.footer;
  document.getElementById('footer').innerHTML = `
    <div class="container">
      <p class="footer-text">${d.copyright}</p>
      <p class="footer-tagline">${d.tagline}</p>
    </div>`;
}

function pageHeader(num, label, title, subtitle) {
  return `
    <header class="page-header">
      <p class="eyebrow"><span class="eyebrow-num">${num}</span> ${label}</p>
      <h1 class="page-title">${title}</h1>
      ${subtitle ? `<p class="page-subtitle">${subtitle}</p>` : ''}
    </header>`;
}

/* ── HOME ───────────────────────────────── */

function renderHome() {
  const d = SITE_DATA.hero;

  document.getElementById('page-content').innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-text page-enter">
            <p class="hero-greeting">${d.greeting}</p>
            <h1 class="hero-name">${d.name}</h1>

            <div class="hero-title">
              <span class="hero-title-current">
                <span class="live-dot" aria-hidden="true"></span>
                ${logoTile(d.title.currentLogo && d.title.currentLogo.src,
                           d.title.currentLogo && d.title.currentLogo.name, ' logo-tile--sm')}
                ${d.title.current}
              </span>
              <span class="hero-title-divider" aria-hidden="true"></span>
              <span class="hero-title-past">
                ${logoTile(d.title.pastLogo && d.title.pastLogo.src,
                           d.title.pastLogo && d.title.pastLogo.name, ' logo-tile--sm')}
                ${d.title.past}
              </span>
            </div>

            <p class="hero-tagline">${d.tagline}</p>

            <div class="hero-ctas">
              <a href="${d.cta.link}" class="btn btn-primary">${d.cta.text} ${icon('arrow', 15)}</a>
              <a href="${d.ctaSecondary.link}" class="btn btn-glass">${d.ctaSecondary.text}</a>
            </div>
          </div>

          <div class="hero-visual page-enter">
            <div class="hero-headshot-wrap">
              <img src="${d.headshot}" alt="Portrait of ${d.name}" class="hero-headshot"
                   onerror="this.outerHTML='<div class=\\'hero-headshot-placeholder\\'>portrait<br>assets/images/</div>'" />
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

/* ── ABOUT ──────────────────────────────── */

function renderAbout() {
  const d = SITE_DATA.about;

  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter section-pad">
      ${pageHeader('01', 'About', d.title, d.subtitle)}

      <div class="about-layout">
        <div class="about-bio">
          ${d.summary.map(p => `<p>${p}</p>`).join('')}
          ${d.resumeEnabled ? `
            <a href="${d.resumeLink}" class="btn btn-primary" download>
              ${icon('download', 15)} Download Résumé
            </a>` : ''}
        </div>

        <div class="skills-stack">
          ${d.skills.map((s, i) => `
            <div class="skill-row reveal reveal-d${Math.min(i + 1, 6)}">
              <div class="skill-head">${icon(s.icon, 14)}<h4>${s.category}</h4></div>
              <div class="skill-tags">${s.items.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
            </div>`).join('')}
        </div>
      </div>

      <section class="leadership-section">
        <h3 class="leadership-head">Leadership &amp; Community</h3>
        <div class="leadership-grid">
          ${d.leadership.map(l => `
            <div class="leadership-item">
              <div>
                <strong>${l.role}</strong>
                <span class="leadership-org">${l.org}</span>
              </div>
              <span>${l.period}</span>
            </div>`).join('')}
        </div>
      </section>
    </div>`;
}

/* ── EXPERIENCE ─────────────────────────── */

function renderExperience() {
  const groups = SITE_DATA.experience;

  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter section-pad">
      ${pageHeader('02', 'Experience', "Where I've worked",
        'Order management at Nike, enterprise platforms and applied AI at Dell, robotics research before that.')}

      <div class="xp">
        ${groups.map((g, gi) => `
          <section class="xp-company reveal reveal-d${Math.min(gi + 1, 4)}">
            <header class="xp-company-head">
              <div class="xp-company-id">
                ${logoTile(g.logo, g.company, ' logo-tile--lg')}
                <div class="xp-company-name">
                  <h2>${g.company}</h2>
                  ${g.current ? '<span class="xp-current-badge"><span class="live-dot"></span>Current</span>' : ''}
                </div>
              </div>
              <div class="xp-company-meta">${g.location} · ${g.span}</div>
            </header>

            <div class="xp-roles">
              ${g.roles.map(r => `
                <article class="xp-role${r.current ? ' is-current' : ''}">
                  <div class="xp-role-head">
                    <h3>${r.title}</h3>
                    <span class="xp-period">${r.period}</span>
                  </div>
                  <p class="xp-meta">${r.meta}</p>
                  ${r.summary ? `<p class="xp-summary">${r.summary}</p>` : ''}
                  <ul class="xp-list">
                    ${r.highlights.map(h => `<li>${h}</li>`).join('')}
                  </ul>
                  <div class="xp-tags">${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                </article>`).join('')}
            </div>
          </section>`).join('')}
      </div>
    </div>`;
}

/* ── PROJECTS ───────────────────────────── */

function renderProjects() {
  const d = SITE_DATA.projects;

  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter section-pad">
      ${pageHeader('03', 'Projects', "Things I've built",
        'Production platforms, applied AI systems, and research work.')}

      <div class="projects-grid">
        ${d.map((p, i) => `
          <article class="project-card card card-hover reveal reveal-d${Math.min(i + 1, 6)}">
            <div class="project-top">
              <div class="project-icon">${icon(p.icon, 17)}</div>
              ${p.org ? `<span class="project-org">${p.org}</span>` : ''}
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.description}</p>
            <div class="project-footer">
              <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
              ${(p.links.github || p.links.live) ? `
                <div class="project-links">
                  ${p.links.github ? `<a href="${p.links.github}" target="_blank" rel="noopener" aria-label="${p.title} on GitHub">${brandIcon('github', 15)}</a>` : ''}
                  ${p.links.live ? `<a href="${p.links.live}" target="_blank" rel="noopener" aria-label="${p.title} live site">${icon('external', 15)}</a>` : ''}
                </div>` : ''}
            </div>
          </article>`).join('')}
      </div>
    </div>`;
}

/* ── PATENTS ────────────────────────────── */

function renderPatents() {
  const d = SITE_DATA.patents;

  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter section-pad">
      ${pageHeader('04', 'IPR', 'Intellectual property',
        `${d.length} IPR filings at Dell Technologies spanning on-device AI, display systems and agentic governance.`)}

      <div class="patents-list">
        ${d.map((p, i) => `
          <article class="patent-card card card-hover reveal reveal-d${Math.min(i + 1, 4)}">
            <div class="patent-top">
              <span class="patent-badge">${icon('doc', 12)} ${p.status}</span>
              <span class="patent-year">${p.year}</span>
            </div>
            <h2 class="patent-title">${p.title}</h2>
            <p class="patent-meta">${p.authority}</p>
            <p class="patent-desc">${p.description}</p>
            <div class="patent-innovations">
              <h4>Key innovations</h4>
              <ul>${p.keyInnovations.map(k => `<li>${k}</li>`).join('')}</ul>
            </div>
          </article>`).join('')}
      </div>
    </div>`;
}

/* ── AWARDS ─────────────────────────────── */

function renderAwards() {
  const d = SITE_DATA.awards;

  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter section-pad">
      ${pageHeader('05', 'Recognition', 'Awards & achievements',
        'Milestones from industry, academia and the community.')}

      <div class="awards-list">
        ${d.map((a, i) => `
          <div class="award-row reveal reveal-d${Math.min(i + 1, 6)}">
            <div class="award-icon">${icon(a.icon, 17)}</div>
            <div class="award-body">
              <div class="award-head">
                <h3 class="award-title">${a.title}</h3>
                <span class="award-year">${a.year}</span>
              </div>
              <p class="award-issuer">${a.issuer}</p>
              <p class="award-desc">${a.description}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ── INTERVIEWS ─────────────────────────── */

function renderInterviews() {
  const d = SITE_DATA.interviews;

  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter section-pad">
      ${pageHeader('06', 'Interviews', d.title, d.subtitle)}

      <div class="iv-list">
        ${d.entries.map((e, i) => `
          <article class="iv-card card reveal reveal-d${Math.min(i + 1, 4)}">
            <header class="iv-head">
              <div class="iv-head-main">
                <h2 class="iv-company">${e.company}</h2>
                <p class="iv-role">${e.role}</p>
                <p class="iv-meta">${e.mode} · ${e.location} · ${e.date}</p>
              </div>
              <span class="iv-outcome iv-outcome--${e.result}">
                ${icon(e.result === 'offer' ? 'check' : 'x', 13)} ${e.outcome}
              </span>
            </header>

            <p class="iv-summary">${e.summary}</p>

            <ol class="iv-rounds">
              ${e.rounds.map((r, ri) => `
                <li class="iv-round">
                  <span class="iv-round-num">${String(ri + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 class="iv-round-name">${r.name}</h3>
                    <p class="iv-round-detail">${r.detail}</p>
                  </div>
                </li>`).join('')}
            </ol>

            ${e.note ? `<p class="iv-note">${e.note}</p>` : ''}

            ${e.link ? `
              <a href="${e.link}" target="_blank" rel="noopener" class="iv-link">
                Read the full write-up on GeeksforGeeks ${icon('external', 13)}
              </a>` : ''}
          </article>`).join('')}
      </div>
    </div>`;
}

/* ── GALLERY ────────────────────────────── */

function renderGallery() {
  const d = SITE_DATA.gallery;

  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter section-pad">
      ${pageHeader('07', 'Gallery', d.title, d.subtitle)}

      <div class="gallery-grid">
        ${d.images.map((img, i) => `
          <figure class="gallery-item reveal reveal-d${Math.min(i + 1, 6)}">
            <img src="${img.src}" alt="${img.alt}" loading="lazy"
                 onerror="this.parentElement.insertAdjacentHTML('afterbegin','<div class=\\'gallery-placeholder\\'>Photo ${i + 1}<br>assets/images/gallery/</div>');this.remove();" />
            <figcaption class="gallery-caption">${img.caption}</figcaption>
          </figure>`).join('')}
      </div>
    </div>

    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
      <div class="lightbox-bg"></div>
      <button class="lightbox-close" aria-label="Close preview">&times;</button>
      <img id="lightbox-img" src="" alt="" />
    </div>`;
}

/* ── CONTACT ────────────────────────────── */

function renderContact() {
  const d = SITE_DATA.contact;

  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter section-pad">
      ${pageHeader('08', 'Contact', d.title, d.subtitle)}

      <div class="contact-layout">
        <form class="contact-form" id="contact-form" action="${d.formAction}" method="POST">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="What are you working on?" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send message ${icon('send', 15)}</button>
        </form>

        <div class="contact-side">
          <a class="contact-row" href="mailto:${d.email}">
            <div class="contact-icon">${icon('mail', 16)}</div>
            <div>
              <div class="contact-label">Email</div>
              <div class="contact-value">${d.email}</div>
            </div>
          </a>
          <a class="contact-row" href="tel:${d.phone.replace(/\s/g, '')}">
            <div class="contact-icon">${icon('phone', 16)}</div>
            <div>
              <div class="contact-label">Phone</div>
              <div class="contact-value">${d.phone}</div>
            </div>
          </a>
          <div class="contact-row">
            <div class="contact-icon">${icon('pin', 16)}</div>
            <div>
              <div class="contact-label">Location</div>
              <div class="contact-value">${d.location}</div>
            </div>
          </div>

          <div class="social-links">
            <a href="${d.social.linkedin}" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">${brandIcon('linkedin')}</a>
            <a href="${d.social.github}" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">${brandIcon('github')}</a>
            <a href="${d.social.email}" class="social-link" aria-label="Email">${icon('mail', 17)}</a>
          </div>
        </div>
      </div>
    </div>`;
}

/* ── CV VIEWER ──────────────────────────── */

function renderCvDoc() {
  const file = SITE_DATA.about.resumeLink;

  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter section-pad">
      ${pageHeader('09', 'Curriculum Vitae', 'Adi Sharma',
        `${SITE_DATA.hero.title.current} · ${SITE_DATA.hero.title.past}`)}

      <div class="card" style="overflow:hidden;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 18px;border-bottom:1px solid var(--line);flex-wrap:wrap;">
          <span class="mono" style="font-size:0.75rem;color:var(--text-3);">${file}</span>
          ${SITE_DATA.about.resumeEnabled ? `
            <a href="${file}" download class="btn btn-primary" style="font-size:0.8rem;padding:8px 16px;">
              ${icon('download', 14)} Download PDF
            </a>` : ''}
        </div>
        <iframe src="${file}" title="Adi Sharma CV" style="width:100%;height:78vh;border:0;display:block;background:var(--surface);"></iframe>
      </div>
    </div>`;
}

/* ── THEME ──────────────────────────────── */

function initTheme() {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', theme);
  paintThemeIcon();

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    paintThemeIcon();
  });
}

function paintThemeIcon() {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.getElementById('theme-toggle').innerHTML = icon(dark ? 'sun' : 'moon', 16);
}

/* ── MOBILE NAV ─────────────────────────── */

function initMobileNav() {
  const burger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-nav');
  const backdrop = document.getElementById('mobile-backdrop');

  const close = () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
    backdrop.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('active');
    burger.classList.toggle('active', open);
    backdrop.classList.toggle('active', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  backdrop.addEventListener('click', close);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── SCROLL REVEAL ──────────────────────── */

function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => obs.observe(el));
}

/* ── LIGHTBOX ───────────────────────────── */

function initLightbox() {
  const box = document.getElementById('lightbox');
  if (!box) return;
  const img = document.getElementById('lightbox-img');

  const close = () => box.classList.remove('active');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const source = item.querySelector('img');
      if (!source) return;
      img.src = source.src;
      img.alt = source.alt;
      box.classList.add('active');
    });
  });

  box.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── CONTACT FORM ───────────────────────── */

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    if (form.action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      showToast('Form not connected yet. Add your Formspree ID in data.js');
    }
  });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('visible');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('visible'), 4200);
}

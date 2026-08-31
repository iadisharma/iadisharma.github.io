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
    gallery: renderGallery,
    contact: renderContact,
    'cv-doc': renderCvDoc
  };

  if (renderers[page]) renderers[page]();

  requestAnimationFrame(() => {
    initScrollReveal();
    if (page === 'home') {
      initTypingEffect();
      initParticleCanvas();
      initHeadshotTilt();
    }
    if (page === 'gallery') initLightbox();
    if (page === 'contact') initContactForm();
  });
});

/* ── NAV ── */
function renderNav(activePage) {
  const d = SITE_DATA;
  document.getElementById('nav').innerHTML = `
    <a href="index.html" class="nav-logo">&lt;<span>AS</span>/&gt;</a>
    <ul class="nav-links">
      ${d.nav.map(n => `<li><a href="${n.href}" class="${activePage === n.page ? 'active' : ''}">${n.label}</a></li>`).join('')}
    </ul>
    <div class="nav-right">
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme"><span id="theme-icon">☾</span></button>
      <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>`;

  document.getElementById('mobile-nav').innerHTML =
    d.nav.map(n => `<a href="${n.href}" class="${activePage === n.page ? 'active' : ''}">${n.label}</a>`).join('');
}

function renderFooter() {
  const d = SITE_DATA.footer;
  const el = document.getElementById('footer');
  el.innerHTML = `<div class="container">
    <p class="footer-text">${d.copyright}</p>
    <p class="footer-tagline">${d.tagline}</p>
  </div>`;
}

/* ── HOME ── */
function renderHome() {
  const d = SITE_DATA.hero;
  const techBadges = ['Python', 'LLM', 'RAG', 'K8s', 'Go', 'Node.js', 'React', 'Azure'];
  document.getElementById('page-content').innerHTML = `
    <section class="hero">
      <canvas class="hero-canvas" id="hero-canvas"></canvas>
      <div class="container">
        <div class="hero-grid">
          <div class="hero-text page-enter">
            <p class="hero-greeting mono">${d.greeting}</p>
            <h1 class="hero-name"><span class="gradient-text glow-pulse">${d.name}</span></h1>
            <p class="hero-tagline">${d.tagline}</p>
            <div class="hero-roles"><span id="typed-role"></span><span class="cursor"></span></div>
            <div class="hero-ctas">
              <a href="${d.cta.link}" class="btn btn-primary btn-shimmer">${d.cta.text} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              <a href="${d.ctaSecondary.link}" class="btn btn-glass">${d.ctaSecondary.text}</a>
            </div>
          </div>
          <div class="hero-visual page-enter">
            <div class="hero-headshot-wrap hero-3d-tilt" id="hero-tilt">
              <img src="${d.headshot}" alt="${d.name}" class="hero-headshot"
                   onerror="this.outerHTML='<div class=\\'hero-headshot-placeholder\\'>Add headshot.jpg<br>to assets/images/</div>'" />
              <div class="headshot-ring"></div>
              <div class="headshot-ring headshot-ring-2"></div>
            </div>
            <div class="floating-badges" id="floating-badges">
              ${techBadges.map((b, i) => `<span class="floating-badge floating-badge-${i}">${b}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

/* ── ABOUT ── */
function renderAbout() {
  const d = SITE_DATA.about;
  const ld = SITE_DATA.about.leadership;
  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter">
      <div class="page-header">
        <p class="section-label">// about</p>
        <h1 class="page-title">${d.title}</h1>
        <p class="page-subtitle">${d.subtitle}</p>
      </div>
      <div class="about-bio">
        <div class="about-bio-text">
          ${d.summary.map(p => `<p>${p}</p>`).join('')}
        </div>
        <a href="${d.resumeLink}" target="_blank" class="btn btn-primary btn-shimmer" download>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download Resume
        </a>
      </div>
      <div class="skills-section">
        <h3 class="skills-section-title">// technical skills</h3>
        <div class="skills-grid">
          ${d.skills.map((s, i) => `
            <div class="skill-card glass reveal reveal-d${Math.min(i + 1, 6)}">
              <h4>${getSkillIcon(s.icon)} ${s.category}</h4>
              <div class="skill-tags">${s.items.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
            </div>`).join('')}
        </div>
      </div>
      <div class="leadership-section">
        <h3>// leadership &amp; community</h3>
        <div class="leadership-grid">
          ${ld.map((l, i) => `
            <div class="leadership-chip glass reveal reveal-d${Math.min(i + 1, 6)}">
              <strong>${l.role}</strong>
              <span>${l.org} · ${l.period}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

function getSkillIcon(type) {
  const icons = {
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z"/><path d="M9 21h6M10 17v4M14 17v4"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>',
    layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>'
  };
  return icons[type] || '';
}

/* ── EXPERIENCE ── */
function renderExperience() {
  const d = SITE_DATA.experience;
  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter">
      <div class="page-header">
        <p class="section-label">// experience</p>
        <h1 class="page-title">Where I've Worked</h1>
        <p class="page-subtitle">From research intern to SDE-2 — building at scale.</p>
      </div>
      <div class="timeline">
        ${d.map((exp, i) => `
          <div class="timeline-item ${exp.current ? 'current' : ''} reveal reveal-d${Math.min(i + 1, 5)}">
            <div class="timeline-dot"></div>
            <div class="timeline-card glass">
              <div class="timeline-header">
                <div>
                  <div class="timeline-role">${exp.role}</div>
                  <div class="timeline-company">${exp.company} · ${exp.location}</div>
                </div>
                <span class="timeline-period">${exp.period}</span>
              </div>
              <ul class="timeline-highlights">
                ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>
              <div class="timeline-tags">${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ── PROJECTS ── */
function renderProjects() {
  const d = SITE_DATA.projects;
  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter">
      <div class="page-header">
        <p class="section-label">// projects</p>
        <h1 class="page-title">Things I've Built</h1>
        <p class="page-subtitle">From enterprise agents to ML pipelines — highlights from my work.</p>
      </div>
      <div class="projects-grid">
        ${d.map((p, i) => `
          <div class="project-card glass reveal reveal-d${Math.min(i + 1, 6)}">
            <div class="project-icon-area">${getProjectIcon(p.icon)}</div>
            <div class="project-body">
              <h3 class="project-title">${p.title}</h3>
              <p class="project-desc">${p.description}</p>
              <div class="project-footer">
                <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                <div class="project-links">
                  ${p.links.github ? `<a href="${p.links.github}" target="_blank" aria-label="GitHub">${svgGithub()}</a>` : ''}
                  ${p.links.live ? `<a href="${p.links.live}" target="_blank" aria-label="Live">${svgExternal()}</a>` : ''}
                </div>
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function getProjectIcon(type) {
  const icons = {
    monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M7 8h4M7 11h2" stroke-linecap="round"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>',
    drone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/></svg>',
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z"/><path d="M9 21h6M10 17v4M14 17v4"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg>'
  };
  return `<svg width="52" height="52" viewBox="0 0 24 24">${(icons[type] || icons.monitor).replace(/<\/?svg[^>]*>/g, '')}</svg>`;
}

function svgGithub() {
  return '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>';
}

function svgExternal() {
  return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
}

/* ── PATENTS ── */
function renderPatents() {
  const d = SITE_DATA.patents;
  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter">
      <div class="page-header">
        <p class="section-label">// patents</p>
        <h1 class="page-title">Intellectual Property</h1>
        <p class="page-subtitle">IPR filings and innovations at Dell Technologies.</p>
      </div>
      ${d.map(p => `
        <div class="patent-card glass-static reveal">
          <div class="patent-glow"></div>
          <span class="patent-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            ${p.status} · ${p.year}
          </span>
          <h2 class="patent-title">${p.title}</h2>
          <p class="patent-meta">${p.authority} · Filed by ${p.filedBy}</p>
          <p class="patent-desc">${p.description}</p>
          <div class="patent-innovations">
            <h4>Key Innovations</h4>
            <ul>${p.keyInnovations.map(k => `<li>${k}</li>`).join('')}</ul>
          </div>
        </div>`).join('')}
    </div>`;
}

/* ── AWARDS ── */
function renderAwards() {
  const d = SITE_DATA.awards;
  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter">
      <div class="page-header">
        <p class="section-label">// recognition</p>
        <h1 class="page-title">Awards & Achievements</h1>
        <p class="page-subtitle">Milestones along the journey.</p>
      </div>
      <div class="awards-grid">
        ${d.map((a, i) => `
          <div class="award-card glass reveal reveal-d${Math.min(i + 1, 6)}">
            <div class="award-icon">${getAwardIcon(a.icon)}</div>
            <div class="award-content">
              <h4 class="award-title">${a.title}</h4>
              <p class="award-meta">${a.year} · ${a.issuer}</p>
              <p class="award-desc">${a.description}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function getAwardIcon(type) {
  const icons = {
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 19.24 7 20v2"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 19.24 17 20v2"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15l-3 6 1-4-3 1 5-8"/><path d="M12 15l3 6-1-4 3 1-5-8"/><circle cx="12" cy="9" r="6"/></svg>'
  };
  return icons[type] || icons.trophy;
}

/* ── GALLERY ── */
function renderGallery() {
  const d = SITE_DATA.gallery;
  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter">
      <div class="page-header">
        <p class="section-label">// gallery</p>
        <h1 class="page-title">${d.title}</h1>
        <p class="page-subtitle">${d.subtitle}</p>
      </div>
      <div class="gallery-grid">
        ${d.images.map((img, i) => `
          <div class="gallery-item reveal reveal-d${Math.min(i + 1, 6)}" data-index="${i}">
            <img src="${img.src}" alt="${img.alt}"
                 onerror="this.outerHTML='<div class=\\'gallery-placeholder\\'>Photo ${i + 1}<br>Add images to<br>assets/images/gallery/</div>'" />
            <div class="gallery-caption">${img.caption}</div>
          </div>`).join('')}
      </div>
    </div>

    <div class="lightbox" id="lightbox">
      <div class="lightbox-bg"></div>
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <img id="lightbox-img" src="" alt="Gallery preview" />
    </div>`;
}

/* ── CONTACT ── */
function renderContact() {
  const d = SITE_DATA.contact;
  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter">
      <div class="page-header">
        <p class="section-label">// contact</p>
        <h1 class="page-title">${d.title}</h1>
        <p class="page-subtitle">${d.subtitle}</p>
      </div>
      <div class="contact-layout">
        <div class="contact-form-card glass-static">
          <form class="contact-form" id="contact-form" action="${d.formAction}" method="POST">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project or idea..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
        <div class="contact-info-side">
          <div class="contact-info-card glass">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <div>
              <div class="contact-info-label">Phone</div>
              <div class="contact-info-value"><a href="tel:${d.phone}">${d.phone}</a></div>
            </div>
          </div>
          <div class="contact-info-card glass">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
            </div>
            <div>
              <div class="contact-info-label">Email</div>
              <div class="contact-info-value"><a href="mailto:${d.email}">${d.email}</a></div>
            </div>
          </div>
          <div class="contact-info-card glass">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            </div>
            <div>
              <div class="contact-info-label">Website</div>
              <div class="contact-info-value"><a href="${d.website}" target="_blank">iadisharma.github.io</a></div>
            </div>
          </div>
          <div class="social-links">
            <a href="${d.social.linkedin}" target="_blank" class="social-link glass" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="${d.social.github}" target="_blank" class="social-link glass" aria-label="GitHub">
              ${svgGithub()}
            </a>
            <a href="${d.social.website}" target="_blank" class="social-link glass" aria-label="Website">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            </a>
            <a href="${d.social.email}" class="social-link glass" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>`;
}

/* ── CV VIEWER ── */
function renderCvDoc() {
  document.getElementById('page-content').innerHTML = `
    <div class="container page-enter">
      <div class="page-header">
        <p class="section-label">// curriculum vitae</p>
        <h1 class="page-title">Adi Sharma</h1>
        <p class="page-subtitle">Backend & AI-ML Engineer · Dell Technologies</p>
      </div>
      <div class="cv-viewer-card glass-static">
        <div class="cv-viewer-toolbar">
          <span class="cv-viewer-label">Adi_Sharma_CV_2026.pdf</span>
          <a href="Adi_Sharma_CV_2026.pdf" download class="btn btn-primary btn-shimmer" style="font-size:0.82rem;padding:8px 20px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download PDF
          </a>
        </div>
        <div class="cv-viewer-embed">
          <iframe src="Adi_Sharma_CV_2026.pdf" title="Adi Sharma CV" class="cv-iframe"></iframe>
        </div>
        <noscript>
          <p style="text-align:center;padding:40px;">Your browser does not support inline PDF viewing. <a href="Adi_Sharma_CV_2026.pdf" download>Download the PDF</a>.</p>
        </noscript>
      </div>
    </div>`;
}

/* ── THEME ── */
function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  updateThemeIcon();
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    updateThemeIcon();
  });
}

function updateThemeIcon() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.getElementById('theme-icon').textContent = isDark ? '☀' : '☾';
}

/* ── MOBILE NAV ── */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const backdrop = document.getElementById('mobile-backdrop');

  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    backdrop.classList.toggle('active');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  backdrop.addEventListener('click', closeMobile);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));

  function closeMobile() {
    mobileNav.classList.remove('active');
    hamburger.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ── TYPING EFFECT ── */
function initTypingEffect() {
  const roles = SITE_DATA.hero.roles;
  const el = document.getElementById('typed-role');
  if (!el) return;
  let rIdx = 0, cIdx = 0, del = false;
  function tick() {
    const role = roles[rIdx];
    if (!del) {
      el.textContent = role.substring(0, ++cIdx);
      if (cIdx === role.length) { setTimeout(() => { del = true; tick(); }, 2200); return; }
      setTimeout(tick, 75);
    } else {
      el.textContent = role.substring(0, --cIdx);
      if (cIdx === 0) { del = false; rIdx = (rIdx + 1) % roles.length; setTimeout(tick, 500); return; }
      setTimeout(tick, 35);
    }
  }
  setTimeout(tick, 800);
}

/* ── SCROLL REVEAL ── */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── LIGHTBOX ── */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const lbImg = document.getElementById('lightbox-img');
  document.addEventListener('click', e => {
    const item = e.target.closest('.gallery-item');
    if (item) {
      const img = item.querySelector('img');
      if (img && img.src) { lbImg.src = img.src; lightbox.classList.add('active'); }
    }
  });
  lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
}

/* ── CONTACT FORM ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    if (form.action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      showToast('Set up Formspree: replace YOUR_FORM_ID in data.js');
    }
  });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('visible');
  setTimeout(() => t.classList.remove('visible'), 4000);
}

/* ── 3D PARTICLE CONSTELLATION ── */
function initParticleCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles, mouse = { x: -9999, y: -9999 }, animId;
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth < 1024;
  const PARTICLE_COUNT = isMobile ? 35 : isTablet ? 65 : 110;
  const CONNECT_DIST = isMobile ? 100 : 150;
  const MOUSE_RADIUS = 180;
  const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.z = Math.random() * 1.5 + 0.3; // depth: 0.3 to 1.8
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.baseSize = Math.random() * 2 + 0.8;
      this.hue = Math.random() * 60 + 230; // 230–290 (indigo to purple)
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.01 + 0.005;
    }
    update() {
      // Mouse attraction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_RADIUS && dist > 0) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.008;
        this.vx += dx / dist * force;
        this.vy += dy / dist * force;
      }

      // Damping
      this.vx *= 0.995;
      this.vy *= 0.995;

      this.x += this.vx * this.z;
      this.y += this.vy * this.z;
      this.pulse += this.pulseSpeed;

      // Wrap around
      if (this.x < -20) this.x = W + 20;
      if (this.x > W + 20) this.x = -20;
      if (this.y < -20) this.y = H + 20;
      if (this.y > H + 20) this.y = -20;
    }
    draw() {
      const dark = isDark();
      const pulseVal = Math.sin(this.pulse) * 0.3 + 0.7;
      const size = this.baseSize * this.z * pulseVal;
      const alpha = (0.3 + this.z * 0.35) * pulseVal;

      ctx.beginPath();
      ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
      if (dark) {
        ctx.fillStyle = `hsla(${this.hue}, 75%, 72%, ${alpha})`;
      } else {
        ctx.fillStyle = `hsla(${this.hue}, 65%, 55%, ${alpha * 0.7})`;
      }
      ctx.fill();

      // Glow for larger particles
      if (size > 1.8) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `hsla(${this.hue}, 80%, 65%, ${alpha * 0.08})`
          : `hsla(${this.hue}, 60%, 50%, ${alpha * 0.05})`;
        ctx.fill();
      }
    }
  }

  function drawConnections() {
    const dark = isDark();
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = CONNECT_DIST * ((particles[i].z + particles[j].z) / 2);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.2 * ((particles[i].z + particles[j].z) / 3);
          const avgHue = (particles[i].hue + particles[j].hue) / 2;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = dark
            ? `hsla(${avgHue}, 70%, 68%, ${alpha})`
            : `hsla(${avgHue}, 55%, 50%, ${alpha * 0.6})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Mouse connections
    if (mouse.x > 0 && mouse.y > 0) {
      for (let i = 0; i < particles.length; i++) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS) {
          const alpha = (1 - dist / MOUSE_RADIUS) * 0.35;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = dark
            ? `hsla(250, 85%, 75%, ${alpha})`
            : `hsla(250, 70%, 55%, ${alpha * 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    animId = requestAnimationFrame(animate);
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    animate();
  }

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // Touch support
  window.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
      // Re-position particles that are out of bounds
      particles.forEach(p => {
        if (p.x > W) p.x = Math.random() * W;
        if (p.y > H) p.y = Math.random() * H;
      });
    }, 200);
  });

  init();
}

/* ── 3D HEADSHOT TILT ── */
function initHeadshotTilt() {
  const el = document.getElementById('hero-tilt');
  if (!el || window.innerWidth < 768) return;

  const maxTilt = 18;
  let currentX = 0, currentY = 0, targetX = 0, targetY = 0;
  let rafId;

  el.addEventListener('mouseenter', () => {
    el.style.transition = 'none';
  });

  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    targetX = ((e.clientY - cy) / (rect.height / 2)) * -maxTilt;
    targetY = ((e.clientX - cx) / (rect.width / 2)) * maxTilt;
  });

  el.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    el.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  });

  function smoothTilt() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    el.style.transform = `perspective(800px) rotateX(${currentX}deg) rotateY(${currentY}deg)`;
    rafId = requestAnimationFrame(smoothTilt);
  }

  smoothTilt();
}


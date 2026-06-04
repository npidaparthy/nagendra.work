/**
 * Renders CV content from cv-data.js into the DOM.
 * You never need to edit this file — only edit cv-data.js.
 */

// Pagination state — must be declared before any render calls (let/const don't hoist)
const QUOTES_PER_PAGE = 12;
let _quotePage = 0;

// Scripts are at bottom of <body> so DOM is already ready — run immediately
renderPersonal();
renderContact();     // run early — must not be blocked by later failures
renderAbout();
renderExperience();
renderSkills();
renderAwards();
renderProjects();
renderGallery();
renderSanskrit();
renderQuotes();
renderReferences();
renderFooterYear();

function renderPersonal() {
  const p = CV.personal;

  // Photo (hero + contact)
  document.querySelectorAll('.js-photo').forEach(img => {
    img.src = p.photo;
    img.alt = p.name;
  });

  // Name — hero split first/last, plus any plain .js-name elements
  const parts = p.name.split(' ');
  const first = parts[0];
  const rest  = parts.slice(1).join(' ');
  const heroName = document.querySelector('.js-hero-name');
  if (heroName) {
    heroName.innerHTML = `${first}<br /><span class="gradient-text">${rest}</span>`;
  }
  document.querySelectorAll('.js-name').forEach(el => el.textContent = p.name);

  // Title
  document.querySelectorAll('.js-title').forEach(el => el.textContent = p.title);

  // Tagline
  document.querySelectorAll('.js-tagline').forEach(el => el.textContent = p.tagline);

  // Location / available badge
  const badge = document.querySelector('.js-available');
  if (badge) {
    badge.innerHTML = `<span class="badge-dot"></span> ${p.available ? 'Available for Senior Roles' : 'Open to Opportunities'} · ${p.location}`;
    badge.style.display = p.available ? '' : 'none';
  }

  // Cert badges
  const certWrap = document.querySelector('.js-certs');
  if (certWrap) {
    certWrap.innerHTML = CV.certifications
      .map(c => `<span class="cert-badge">${c}</span>`).join('');
  }

  // CV download links
  document.querySelectorAll('.js-cv-link').forEach(a => {
    a.href = p.cvPdf;
  });

  // Contact card
  const cardName = document.querySelector('.js-card-name');
  if (cardName) cardName.textContent = p.name;

  // Current role for contact card (first experience entry)
  const cardRole = document.querySelector('.js-card-role');
  if (cardRole && CV.experience.length) {
    const cur = CV.experience[0];
    cardRole.textContent = `${cur.role} @ ${cur.company}`;
  }

  const cardLoc = document.querySelector('.js-card-loc');
  if (cardLoc) cardLoc.textContent = p.location;
}

function renderAbout() {
  const a = CV.about;

  const textWrap = document.querySelector('.js-about-text');
  if (textWrap) {
    textWrap.innerHTML = a.paragraphs
      .map(p => `<p>${p}</p>`).join('');
  }

  const statsWrap = document.querySelector('.js-about-stats');
  if (statsWrap) {
    statsWrap.innerHTML = a.stats.map((s, i) => `
      <div class="stat-card">
        <span class="stat-num">${s.num}</span>
        <span class="stat-label" data-stat-idx="${i}">${s.label}</span>
      </div>`).join('');
  }
}

function renderProjects() {
  const wrap = document.querySelector('.js-projects-grid');
  if (!wrap || !CV.projects?.length) return;

  wrap.innerHTML = CV.projects.map((p, i) => {
    const impactHTML = p.impact?.length
      ? `<ul class="project-impact">${p.impact.map(b => `<li>${b}</li>`).join('')}</ul>` : '';
    const tagsHTML = p.tags?.length
      ? `<div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>` : '';
    const linkHTML = p.link
      ? `<a href="${p.link}" target="_blank" rel="noopener" class="project-link">${p.linkLabel || 'View Project'} ↗</a>` : '';

    return `
      <div class="project-card" data-animate>
        <div class="project-header">
          <span class="project-icon">${p.icon || '🛠️'}</span>
          <div class="project-meta">
            <h3 class="project-title js-proj-title-${i}">${p.title}</h3>
            <p class="project-subtitle">${p.subtitle}</p>
          </div>
        </div>
        <p class="project-desc js-proj-desc-${i}">${p.desc_en}</p>
        ${impactHTML}
        ${tagsHTML}
        ${linkHTML}
      </div>`;
  }).join('');

  if (window._portfolioObserver) {
    wrap.querySelectorAll('[data-animate]').forEach(el => window._portfolioObserver.observe(el));
  }
}

function renderGallery() {
  const wrap = document.querySelector('.js-gallery-grid');
  if (!wrap || !CV.gallery?.length) return;

  wrap.innerHTML = CV.gallery.map((item, i) => `
    <div class="gallery-item" data-animate>
      <div class="gallery-img-wrap">
        <img src="${item.image}" alt="${item.caption}"
             onerror="this.parentElement.classList.add('img-missing')"
             loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-category">${item.category || ''}</span>
        </div>
      </div>
      <p class="gallery-caption" data-gallery-idx="${i}">${item.caption}</p>
    </div>`).join('');

  if (window._portfolioObserver) {
    wrap.querySelectorAll('[data-animate]').forEach(el => window._portfolioObserver.observe(el));
  }
}

function renderSanskrit() {
  const wrap = document.querySelector('.js-sanskrit-wrapper');
  if (!wrap || !CV.sanskrit) return;

  const s = CV.sanskrit;

  // Group certifications by institution
  const certsByInst = {};
  s.certifications.forEach(c => {
    if (!certsByInst[c.institution]) certsByInst[c.institution] = [];
    certsByInst[c.institution].push(c);
  });

  const certsHTML = Object.entries(certsByInst).map(([inst, certs]) => `
    <div class="sa-inst-group">
      <div class="sa-inst-label">${inst}</div>
      <div class="sa-inst-cards">
        ${certs.map((c, i) => `
          <div class="sa-cert-card" data-cert-inst="${inst}" data-cert-idx="${i}">
            <div class="sa-cert-level">${c.level}</div>
            <div class="sa-cert-name">${c.name}</div>
            <div class="sa-cert-desc js-cert-desc" data-cert-key="${inst}|${i}">${c.desc_en || ''}</div>
          </div>`).join('')}
      </div>
    </div>`).join('');

  const textsHTML = s.texts.map((t, i) => `<span class="sa-text-tag" data-text-idx="${i}">${t.en || t}</span>`).join('');

  const teachingHTML = s.teaching_en ? `
    <div class="sa-block">
      <h4 class="sa-block-title" data-i18n="sa_teaching">Teaching &amp; Mentoring</h4>
      <p class="js-sa-teaching">${s.teaching_en}</p>
    </div>` : '';

  wrap.innerHTML = `
    <p class="js-sa-bio sa-bio">${s.bio_en}</p>

    <div class="sa-block">
      <h4 class="sa-block-title" data-i18n="sa_certs">Certifications</h4>
      <div class="sa-certs-grid">${certsHTML}</div>
    </div>

    <div class="sa-block">
      <h4 class="sa-block-title" data-i18n="sa_texts">Texts Studied</h4>
      <div class="sa-texts-wrap">${textsHTML}</div>
    </div>

    ${teachingHTML}
  `;
}

function renderQuotes() {
  const wrap = document.querySelector('.js-quotes-grid');
  if (!wrap || !CV.quotes?.length) return;

  const parent = wrap.parentElement;

  // Top: pagination + references button
  let topBar = document.querySelector('.js-quotes-topbar');
  if (!topBar) {
    topBar = document.createElement('div');
    topBar.className = 'quotes-topbar js-quotes-topbar';
    topBar.innerHTML = `
      <div class="quotes-pagination js-quotes-pager-top"></div>
      <button class="glossary-link js-glossary-btn" data-i18n="btn_references">
        📖 Source Texts &amp; References
      </button>`;
    parent.insertBefore(topBar, wrap);
    topBar.querySelector('.js-glossary-btn').addEventListener('click', () =>
      document.getElementById('glossary-modal').classList.add('open'));
  }

  // Bottom: pagination only
  let pagerBottom = document.querySelector('.js-quotes-pager-bottom');
  if (!pagerBottom) {
    pagerBottom = document.createElement('div');
    pagerBottom.className = 'quotes-pagination js-quotes-pager-bottom';
    parent.insertBefore(pagerBottom, wrap.nextSibling);
  }

  function makePagerHTML(page, totalPages, total) {
    return `
      <button class="quotes-page-btn js-q-prev" ${page === 0 ? 'disabled' : ''}>← Prev</button>
      <span class="quotes-page-info">${page + 1} / ${totalPages} &nbsp;·&nbsp; ${total} quotes</span>
      <button class="quotes-page-btn js-q-next" ${page >= totalPages - 1 ? 'disabled' : ''}>Next →</button>`;
  }

  function showPage(page) {
    _quotePage = page;
    const total = CV.quotes.length;
    const totalPages = Math.ceil(total / QUOTES_PER_PAGE);
    const start = page * QUOTES_PER_PAGE;
    const slice = CV.quotes.slice(start, start + QUOTES_PER_PAGE);

    wrap.innerHTML = slice.map((q, j) => {
      const i = start + j;
      return `
        <div class="quote-card">
          <div class="quote-inner">
            <div class="quote-front">
              <div class="quote-script devanagari">${q.devanagari.replace(/\n/g,'<br>')}</div>
              <div class="quote-script telugu">${q.telugu.replace(/\n/g,'<br>')}</div>
              <div class="quote-iast">${q.iast.replace(/\n/g,'<br>')}</div>
            </div>
            <div class="quote-back">
              <p class="quote-meaning" data-quote-idx="${i}">${q.meaning_en}</p>
              <span class="quote-source">— ${q.source}</span>
            </div>
          </div>
        </div>`;
    }).join('');

    // Update both pagers
    const html = makePagerHTML(page, totalPages, total);
    document.querySelector('.js-quotes-pager-top').innerHTML = html;
    pagerBottom.innerHTML = html;

    ['.js-quotes-pager-top', '.js-quotes-pager-bottom'].forEach(sel => {
      const el = document.querySelector(sel);
      el.querySelector('.js-q-prev')?.addEventListener('click', () => { showPage(page - 1); wrap.scrollIntoView({ behavior:'smooth', block:'start' }); });
      el.querySelector('.js-q-next')?.addEventListener('click', () => { showPage(page + 1); wrap.scrollIntoView({ behavior:'smooth', block:'start' }); });
    });

    // Re-apply current language
    if (typeof currentLang === 'function') {
      const lang = currentLang();
      const suffix = lang === 'en' ? '' : '_' + lang;
      wrap.querySelectorAll('.quote-meaning[data-quote-idx]').forEach(el => {
        const idx = +el.dataset.quoteIdx;
        const q = CV.quotes[idx];
        if (q) el.textContent = q['meaning' + suffix] || q.meaning_en;
      });
    }
  }

  showPage(0);
}

function renderExperience() {
  const wrap = document.querySelector('.js-timeline');
  if (!wrap) return;

  wrap.innerHTML = CV.experience.map((job, i) => {
    const isLast = i === CV.experience.length - 1;
    const clientsHTML = job.clients
      ? `<p class="exp-clients">${job.clients}</p>` : '';
    const tagsHTML = job.tags.length
      ? `<div class="exp-tags">${job.tags.map(t => `<span>${t}</span>`).join('')}</div>` : '';
    const bulletsHTML = job.bullets.length
      ? `<ul class="exp-bullets">${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : '';
    const locationHTML = job.location ? ` · ${job.location}` : '';
    const currentBadge = job.current
      ? `<span class="exp-badge-current">Current</span>` : '';

    return `
      <div class="timeline-item" data-animate>
        <div class="timeline-connector">
          <div class="timeline-dot${job.current ? ' active' : ''}"></div>
          ${isLast ? '' : '<div class="timeline-line"></div>'}
        </div>
        <div class="exp-card${job.current ? ' current' : ''}">
          <div class="exp-header">
            <div class="exp-logo-wrap">
              <div class="exp-logo" style="background:${job.logoColor}">
                <span>${job.logoText}</span>
              </div>
              ${currentBadge}
            </div>
            <div class="exp-meta">
              <h3 class="exp-company">${job.company}</h3>
              <p class="exp-role">${job.role}</p>
              <p class="exp-dates">${job.dates}${locationHTML}</p>
            </div>
          </div>
          ${clientsHTML}
          ${tagsHTML}
          ${bulletsHTML}
        </div>
      </div>`;
  }).join('');

  // Re-observe newly created elements
  if (window._portfolioObserver) {
    document.querySelectorAll('.timeline-item[data-animate]')
      .forEach(el => window._portfolioObserver.observe(el));
  }
}

function renderSkills() {
  const wrap = document.querySelector('.js-skills-grid');
  if (!wrap) return;

  wrap.innerHTML = CV.skills.map(cat => `
    <div class="skill-category" data-animate>
      <div class="skill-cat-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <div class="skill-tags">
        ${cat.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>`).join('');

  if (window._portfolioObserver) {
    document.querySelectorAll('.skill-category[data-animate]')
      .forEach(el => window._portfolioObserver.observe(el));
  }
}

function renderChessBoard() {
  const lightSq = '#eeeed2';
  const darkSq  = '#769656';
  const sq = 18; // px per square → 144×144 total
  const total = sq * 8;

  // Draw board squares — highlight h7 (the sacrifice target)
  const highlight = { col:7, row:7 }; // h7
  let squares = '';
  for (let r = 8; r >= 1; r--) {
    for (let c = 0; c < 8; c++) {
      const x = c * sq;
      const y = (8 - r) * sq;
      const isHighlight = c === highlight.col && r === highlight.row;
      const fill = isHighlight ? '#e8a020' : ((c + r) % 2 === 0 ? lightSq : darkSq);
      squares += `<rect x="${x}" y="${y}" width="${sq}" height="${sq}" fill="${fill}"/>`;
    }
  }

  // Classic "Greek Gift" sacrifice position — ♗xh7+!! (Bxh7 brilliancy)
  // White: Kg1 Qh5 Bc4 Nf3 Rh1 | Black: Kg8 Rf8 Bc8 Nc6 ♟e6 ♟g6 ♟h7
  const colIdx = { a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7 };
  const pieces = [
    // White pieces
    { sq2:'g1', glyph:'♔', white:true  },
    { sq2:'h5', glyph:'♕', white:true  },
    { sq2:'c4', glyph:'♗', white:true  },
    { sq2:'f3', glyph:'♘', white:true  },
    { sq2:'h1', glyph:'♖', white:true  },
    { sq2:'g2', glyph:'♙', white:true  },
    { sq2:'f2', glyph:'♙', white:true  },
    // Black pieces
    { sq2:'g8', glyph:'♚', white:false },
    { sq2:'f8', glyph:'♜', white:false },
    { sq2:'c8', glyph:'♝', white:false },
    { sq2:'c6', glyph:'♞', white:false },
    { sq2:'h7', glyph:'♟', white:false },
    { sq2:'g6', glyph:'♟', white:false },
    { sq2:'e6', glyph:'♟', white:false },
  ];

  let pieceSVG = '';
  pieces.forEach(({ sq2, glyph, white }) => {
    const c = colIdx[sq2[0]];
    const r = parseInt(sq2[1]);
    const cx = c * sq + sq / 2;
    const cy = (8 - r) * sq + sq / 2;
    // Piece glyph with strong outline for contrast on any square
    pieceSVG += `<text x="${cx}" y="${cy + sq * 0.34}" font-size="${sq * 0.85}"
      text-anchor="middle" dominant-baseline="auto"
      fill="${white ? '#fff' : '#1a1a1a'}"
      stroke="${white ? '#2a2a2a' : '#fff'}" stroke-width="0.8" paint-order="stroke"
      style="font-family:'Segoe UI Symbol',serif;font-weight:900">${glyph}</text>`;
  });

  return `
    <div class="chess-board-wrap">
      <svg viewBox="0 0 ${total} ${total}" width="${total}" height="${total}"
           xmlns="http://www.w3.org/2000/svg"
           style="border:2px solid #4a6741;border-radius:3px;display:block;box-shadow:0 3px 14px rgba(0,0,0,0.5)">
        ${squares}${pieceSVG}
      </svg>
      <p class="chess-board-label">♗xh7+!! · Greek Gift · White to move</p>
    </div>`;
}

function renderAwards() {
  const wrap = document.querySelector('.js-awards-grid');
  if (!wrap) return;

  wrap.innerHTML = CV.awards.map(group => {
    const cardClass = `award-card${group.span ? ' award-card--wide' : ''}${group.board ? ' award-card--chess' : ''}`;
    const listClass = `award-list${group.span ? ' award-list--cols' : ''}`;
    const inner = group.board
      ? `<div class="award-chess-inner">
           <ul class="${listClass}">${group.items.map(i => `<li>${i}</li>`).join('')}</ul>
           ${renderChessBoard()}
         </div>`
      : `<ul class="${listClass}">${group.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    return `
      <div class="${cardClass}" data-animate>
        <div class="award-org-badge" style="background:${group.color}">${group.org}</div>
        ${inner}
      </div>`;
  }).join('');

  if (window._portfolioObserver) {
    document.querySelectorAll('.award-card[data-animate]')
      .forEach(el => window._portfolioObserver.observe(el));
  }
}

function renderReferences() {
  const wrap = document.querySelector('.js-refs-grid');
  if (!wrap || !CV.references?.length) return;

  wrap.innerHTML = CV.references.map((b, i) => {
    const tagsHTML = b.tags?.length
      ? `<div class="book-tags">${b.tags.map(t => `<span>${t}</span>`).join('')}</div>` : '';
    return `
      <div class="book-card">
        <div class="book-header">
          <span class="book-icon">${b.icon}</span>
          <div class="book-meta">
            <div class="book-title">${b.title}</div>
            <div class="book-title-sa">${b.title_sa_script}</div>
            <div class="book-period">${b.period}</div>
          </div>
        </div>
        <div class="book-author js-ref-author-${i}">${b.author_en}</div>
        <p class="book-desc js-ref-desc-${i}">${b.desc_en}</p>
        ${tagsHTML}
      </div>`;
  }).join('');
}

function renderFooterYear() {
  const year = new Date().getFullYear();
  document.querySelectorAll('.js-footer-year').forEach(el => el.textContent = year);
}

function renderContact() {
  const p = CV.personal;

  const emailEl = document.querySelector('.js-email');
  if (emailEl) { emailEl.href = `mailto:${p.email}`; emailEl.querySelector('span:last-child').textContent = p.email; }

  const phoneEl = document.querySelector('.js-phone');
  if (phoneEl) { phoneEl.href = `tel:${p.phone.replace(/\s/g,'')}`;  phoneEl.querySelector('span:last-child').textContent = p.phone; }

  const liEl = document.querySelector('.js-linkedin');
  if (liEl) {
    liEl.href = p.linkedin;
    liEl.querySelector('span:last-child').textContent = p.linkedin.replace('https://www.','').replace(/\/$/,'').split('?')[0];
  }

  // GitHub link (footer + hero)
  document.querySelectorAll('.js-github-link, .js-hero-gh-link').forEach(a => {
    if (p.github) { a.href = p.github; a.style.display = ''; }
    else a.style.display = 'none';
  });

  // YouTube link (footer + hero)
  document.querySelectorAll('.js-hero-yt-link').forEach(a => {
    if (p.youtube) { a.href = p.youtube; a.style.display = ''; }
    else a.style.display = 'none';
  });
}

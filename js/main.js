// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Intersection observer for scroll animations ──
// Exposed on window so render.js can register dynamically-created elements
window._portfolioObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      window._portfolioObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe all animatable elements (render.js has already run by this point)
document.querySelectorAll('[data-animate]')
  .forEach(el => window._portfolioObserver.observe(el));

// ── Active nav link highlight on scroll ──
// Collect every element that a nav link points to (sections + #quotes div)
const navLinks = document.querySelectorAll('.nav-links a');
const navTargets = [...navLinks]
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

// rootMargin: only elements whose top edge enters the top 35% of viewport
// become active — prevents two sections firing at once
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.style.color = '');
      const active = [...navLinks].find(
        l => l.getAttribute('href') === '#' + entry.target.id
      );
      if (active) active.style.color = 'var(--accent)';
    }
  });
}, { rootMargin: '-10% 0px -60% 0px' });

navTargets.forEach(el => sectionObserver.observe(el));

// ── Tap-to-flip quote cards on touch devices ──
document.addEventListener('click', e => {
  const card = e.target.closest('.quote-card');
  if (card) card.classList.toggle('flipped');
});

// ── Glossary modal — close on Escape; search filter ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.getElementById('glossary-modal')?.classList.remove('open');
});

const refsSearch = document.getElementById('refs-search');
if (refsSearch) {
  refsSearch.addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    const grid = document.querySelector('.js-refs-grid');
    if (!grid) return;

    let visible = 0;
    grid.querySelectorAll('.book-card').forEach(card => {
      const match = !q || card.textContent.toLowerCase().includes(q);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    // Show/hide no-results message
    let noRes = grid.querySelector('.refs-no-results');
    if (visible === 0) {
      if (!noRes) {
        noRes = document.createElement('p');
        noRes.className = 'refs-no-results';
        noRes.textContent = 'No texts matched your search.';
        grid.appendChild(noRes);
      }
    } else if (noRes) {
      noRes.remove();
    }
  });

  // Clear search when modal closes
  document.querySelector('.gm-backdrop')?.addEventListener('click', () => refsSearch.value = '');
  document.querySelector('.gm-close')?.addEventListener('click', () => {
    refsSearch.value = '';
    refsSearch.dispatchEvent(new Event('input'));
  });
}

// ── Mobile menu ──
const hamburger = document.getElementById('hamburger');

const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = `
  <button class="mobile-menu-close" aria-label="Close">✕</button>
  <a href="#about"       data-i18n="nav_about">About</a>
  <a href="#experience"  data-i18n="nav_experience">Experience</a>
  <a href="#skills"      data-i18n="nav_skills">Skills</a>
  <a href="#awards"      data-i18n="nav_awards">Awards</a>
  <a href="#projects"    data-i18n="nav_projects">Projects</a>
  <a href="#gallery"     data-i18n="nav_gallery">Gallery</a>
  <a href="#sanskrit"    data-i18n="nav_sanskrit">Sanskrit</a>
  <a href="#quotes"      data-i18n="nav_quotes">Quotes</a>
  <a href="#contact"     data-i18n="nav_contact">Contact</a>
  <a href="#" class="js-cv-link" download style="color:#a5b4fc" data-i18n="nav_download">Download CV ↓</a>
  <div class="mobile-lang-switcher">
    <button class="lang-btn" data-lang="en" title="English">EN</button>
    <button class="lang-btn" data-lang="te" title="తెలుగు">తె</button>
    <button class="lang-btn" data-lang="sa" title="संस्कृतम्">सं</button>
  </div>
`;
document.body.appendChild(mobileMenu);

// Sync CV link in mobile menu
const mobileCvLink = mobileMenu.querySelector('.js-cv-link');
if (mobileCvLink && CV?.personal?.cvPdf) mobileCvLink.href = CV.personal.cvPdf;

// Language buttons in mobile menu — delegate to same applyLanguage used by desktop switcher
mobileMenu.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => {
    if (typeof applyLanguage === 'function') applyLanguage(btn.dataset.lang);
  })
);

// Toggle open/close on hamburger click (was add-only — couldn't close)
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelector('.mobile-menu-close').addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

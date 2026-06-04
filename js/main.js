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
  <a href="#about">About</a>
  <a href="#experience">Experience</a>
  <a href="#skills">Skills</a>
  <a href="#awards">Awards</a>
  <a href="#contact">Contact</a>
  <a href="#" class="js-cv-link" download style="color:#a5b4fc">Download CV ↓</a>
`;
document.body.appendChild(mobileMenu);

// Sync CV link in mobile menu
const mobileCvLink = mobileMenu.querySelector('.js-cv-link');
if (mobileCvLink && CV?.personal?.cvPdf) mobileCvLink.href = CV.personal.cvPdf;

hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileMenu.querySelector('.mobile-menu-close').addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

/**
 * Theme Customiser — colour presets, dark/light mode, font size.
 * Settings are saved to localStorage and applied on every page load.
 */

const THEMES = {
  indigo: {
    label: "Indigo",
    swatch: "#6366f1",
    vars: {
      "--accent":  "#6366f1",
      "--accent2": "#8b5cf6",
      "--accent3": "#06b6d4",
    },
  },
  violet: {
    label: "Violet",
    swatch: "#7c3aed",
    vars: {
      "--accent":  "#7c3aed",
      "--accent2": "#a855f7",
      "--accent3": "#ec4899",
    },
  },
  cyan: {
    label: "Cyan",
    swatch: "#0891b2",
    vars: {
      "--accent":  "#0891b2",
      "--accent2": "#06b6d4",
      "--accent3": "#6366f1",
    },
  },
  emerald: {
    label: "Emerald",
    swatch: "#059669",
    vars: {
      "--accent":  "#059669",
      "--accent2": "#10b981",
      "--accent3": "#06b6d4",
    },
  },
  amber: {
    label: "Amber",
    swatch: "#d97706",
    vars: {
      "--accent":  "#d97706",
      "--accent2": "#f59e0b",
      "--accent3": "#ef4444",
    },
  },
  rose: {
    label: "Rose",
    swatch: "#e11d48",
    vars: {
      "--accent":  "#e11d48",
      "--accent2": "#f43f5e",
      "--accent3": "#8b5cf6",
    },
  },
};

const MODES = {
  dark: {
    "--bg":       "#080810",
    "--bg2":      "#0e0e1a",
    "--surface":  "rgba(255,255,255,0.04)",
    "--surface2": "rgba(255,255,255,0.07)",
    "--border":   "rgba(255,255,255,0.08)",
    "--text":     "#e8e8f0",
    "--text-muted": "#b0b0cc",
  },
  light: {
    "--bg":       "#f8f8fc",
    "--bg2":      "#ededf5",
    "--surface":  "rgba(0,0,0,0.04)",
    "--surface2": "rgba(0,0,0,0.07)",
    "--border":   "rgba(0,0,0,0.10)",
    "--text":     "#18181f",
    "--text-muted": "#3a3a55",
  },
};

const FONT_SIZES = { small: "15px", medium: "17px", large: "19px" };

// ── Apply settings to :root ──────────────────────────────────────
function applySettings(settings) {
  const root = document.documentElement;
  const theme = THEMES[settings.theme] || THEMES.indigo;
  const mode  = MODES[settings.mode]  || MODES.dark;
  const fs    = FONT_SIZES[settings.fontSize] || "16px";

  Object.entries({ ...theme.vars, ...mode }).forEach(([k, v]) => root.style.setProperty(k, v));
  root.style.fontSize = fs;
  root.setAttribute('data-mode', settings.mode);

  // Gallery visibility
  const gallerySection = document.getElementById('gallery');
  const galleryNavItem = document.querySelector('a[href="#gallery"]');
  const show = settings.showGallery === true;
  if (gallerySection) gallerySection.style.display = show ? '' : 'none';
  if (galleryNavItem) galleryNavItem.parentElement.style.display = show ? '' : 'none';


  // Sync UI state
  document.querySelectorAll('.tc-swatch').forEach(el => {
    el.classList.toggle('active', el.dataset.theme === settings.theme);
  });
  document.querySelectorAll('.tc-mode-btn').forEach(el => {
    el.classList.toggle('active', el.dataset.mode === settings.mode);
  });
  document.querySelectorAll('.tc-size-btn').forEach(el => {
    el.classList.toggle('active', el.dataset.size === settings.fontSize);
  });
  const galleryChk = document.getElementById('tc-gallery-chk');
  if (galleryChk) galleryChk.checked = !!settings.showGallery;
}

// ── Load / save ──────────────────────────────────────────────────
function loadSettings() {
  try {
    return JSON.parse(localStorage.getItem('np-theme') || '{}');
  } catch { return {}; }
}

function saveSettings(patch) {
  const current = loadSettings();
  // showFooter is session-only — never written to localStorage
  const { showFooter, ...persistable } = patch;
  const next = { theme: "indigo", mode: "dark", fontSize: "medium", showGallery: false, ...current, ...persistable };
  localStorage.setItem('np-theme', JSON.stringify(next));
  applySettings(next);
}

// Footer toggle — session only, always resets to visible on page load
function toggleFooter(show) {
  const footerEl = document.querySelector('footer');
  const mbb      = document.querySelector('.mobile-bottom-bar');
  const footerChk = document.getElementById('tc-footer-chk');
  if (footerEl)  footerEl.style.display  = show ? '' : 'none';
  if (mbb)       mbb.style.display       = show ? '' : 'none';
  if (footerChk) footerChk.checked       = show;
}

// ── Build the customiser panel ───────────────────────────────────
function buildCustomiser() {
  const panel = document.createElement('div');
  panel.id = 'theme-panel';
  panel.innerHTML = `
    <button id="tc-toggle" aria-label="Customise theme" title="Customise theme">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2"/>
      </svg>
    </button>
    <div id="tc-drawer">
      <p class="tc-label">Colour</p>
      <div class="tc-swatches">
        ${Object.entries(THEMES).map(([key, t]) => `
          <button class="tc-swatch" data-theme="${key}" title="${t.label}"
            style="background:${t.swatch}"></button>`).join('')}
      </div>

      <p class="tc-label">Mode</p>
      <div class="tc-row">
        <button class="tc-mode-btn" data-mode="dark">🌙 Dark</button>
        <button class="tc-mode-btn" data-mode="light">☀️ Light</button>
      </div>

      <p class="tc-label">Font Size</p>
      <div class="tc-row">
        <button class="tc-size-btn" data-size="small">A−</button>
        <button class="tc-size-btn" data-size="medium">A</button>
        <button class="tc-size-btn" data-size="large">A+</button>
      </div>

      <p class="tc-label">Sections</p>
      <label class="tc-toggle-row">
        <input type="checkbox" id="tc-gallery-chk" />
        <span class="tc-toggle-track"><span class="tc-toggle-thumb"></span></span>
        <span>📷 Gallery</span>
      </label>
      <label class="tc-toggle-row">
        <input type="checkbox" id="tc-footer-chk" />
        <span class="tc-toggle-track"><span class="tc-toggle-thumb"></span></span>
        <span>🔻 Footer</span>
      </label>
    </div>`;
  document.body.appendChild(panel);

  const toggle = panel.querySelector('#tc-toggle');
  const drawer = panel.querySelector('#tc-drawer');

  toggle.addEventListener('click', () => drawer.classList.toggle('open'));

  panel.querySelectorAll('.tc-swatch').forEach(btn =>
    btn.addEventListener('click', () => saveSettings({ theme: btn.dataset.theme })));

  panel.querySelectorAll('.tc-mode-btn').forEach(btn =>
    btn.addEventListener('click', () => saveSettings({ mode: btn.dataset.mode })));

  panel.querySelectorAll('.tc-size-btn').forEach(btn =>
    btn.addEventListener('click', () => saveSettings({ fontSize: btn.dataset.size })));

  panel.querySelector('#tc-gallery-chk')?.addEventListener('change', e =>
    saveSettings({ showGallery: e.target.checked }));

  // Footer toggle is session-only — checked on load, never persisted
  const footerChk = panel.querySelector('#tc-footer-chk');
  if (footerChk) {
    footerChk.checked = true;
    footerChk.addEventListener('change', e => toggleFooter(e.target.checked));
  }

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!panel.contains(e.target)) drawer.classList.remove('open');
  });
}

// ── Boot ─────────────────────────────────────────────────────────
(function init() {
  const defaults = { theme: "indigo", mode: "dark", fontSize: "medium", showGallery: false };
  const saved = { ...defaults, ...loadSettings() };
  localStorage.setItem('np-theme', JSON.stringify(saved));

  // Apply immediately to avoid flash
  applySettings(saved);

  // Build panel + re-apply DOM-dependent settings once DOM is ready
  function onReady() {
    buildCustomiser();
    applySettings(saved); // re-run now that footer/gallery elements exist
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();

# nagendra.work

Personal portfolio website for **Nagendra Pidaparthy** — Senior DevOps & SRE Engineer · Sanskrit scholar · Chess player.

Live → **[nagendra.work](https://nagendra.work)**
Source → **[github.com/npidaparthy/nagendra.work](https://github.com/npidaparthy/nagendra.work)**

---

## Architecture

```
cv-data.js  ──►  render.js   ──►  DOM (all sections built dynamically)
                 i18n.js     ──►  language switching (EN / Telugu / Sanskrit)
                 theme.js    ──►  colour, dark/light mode, font size, section toggles
                 main.js     ──►  scroll animations, nav highlight, mobile menu
```

**One rule:** edit only `js/cv-data.js` for all content updates. Every section is built dynamically — no HTML editing needed for content changes.

---

## Sections & Tabs

| Nav | Section | What it shows | Data source |
|---|---|---|---|
| About | Bio + stats | Career summary, key numbers | `CV.about` |
| Experience | Timeline | Company cards with roles, tags, bullets | `CV.experience[]` |
| Skills | Tag grid | Tech categories with skill pills | `CV.skills[]` |
| Awards | Award cards | Grouped by org; chess board highlight | `CV.awards[]` |
| Projects | Project cards | Personal/community projects with impact | `CV.projects[]` |
| Gallery | Photo grid | Hidden by default; toggle in ⊙ panel | `CV.gallery[]` |
| Sanskrit | Scholarship | Certifications, texts studied, bio | `CV.sanskrit` |
| Quotes | Flip cards | Subhāṣitāni paginated 12/page, 3 scripts | `CV.quotes[]` |
| Contact | Contact info | Email, phone, CV download | `CV.personal` |

---

## Features

- **Bold dark/light theme** — animated gradient hero, grid overlay, 6 colour presets
- **Full multilingual** — English / తెలుగు / संस्कृतम् across all content, persisted in localStorage
- **Theme customiser** — ⊙ floating panel: colour, mode, font size, gallery/footer toggles
- **Experience timeline** — colour-coded logos, tech tags, client lines, bullet points
- **Awards section** — compact 3-column grid; full-width span for long lists; interactive chess board (Greek Gift puzzle ♗xh7+!!)
- **Personal Projects** — impact bullets, tech tags, optional links
- **Gallery** — hidden by default, toggled via ⊙ settings; photo grid with hover captions
- **Sanskrit expertise** — certifications grouped by institution (Saṃskṛta Bhāratī · IIT Roorkee · Śṛṅgerī)
- **Sanskrit Wisdom** — 25 flip-card Subhāṣitāni (paginated 12/page) in Devanagari + Telugu + IAST; pagination top and bottom
- **Source Texts modal** — searchable reference panel for all quoted classical works
- **Baseline Security Clearance** badge under hero photo
- **Mobile fixed bottom bar** — YouTube · LinkedIn · CV PDF icons (mobile only, ≤640px)
- **Downloadable CV** — PDF linked from nav, hero, and contact section
- **Fully responsive** — hamburger menu, tap-to-flip quotes, mobile-optimised experience cards

---

## Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Markup | HTML5 | Single `index.html` shell — no content in HTML |
| Styles | CSS3 | Custom properties for theming; no preprocessor |
| Logic | Vanilla JS (ES6+) | No frameworks, no npm, no build step |
| Fonts | Google Fonts | Inter · JetBrains Mono · Noto Sans Telugu · Noto Sans Devanagari |
| Icons | Inline SVG | GitHub · LinkedIn · YouTube · Gmail — no icon library needed |
| Chess | SVG (generated) | Chess board drawn programmatically in `render.js` |
| Deploy | GitHub Actions | Auto-deploy to GitHub Pages on every push to `main` |
| Mirror | Vercel (optional) | Instant preview URLs; custom domain support |

**Zero dependencies** — clone and open `index.html` in any browser.

---

## File Map

```
nagendra.work/
│
├── index.html                  ← Page shell (nav, section wrappers, footer, modals)
│                                 Contains no CV content — all driven by cv-data.js
│
├── js/
│   ├── cv-data.js              ← ✏️  THE ONLY FILE YOU EDIT FOR CONTENT
│   │                              Personal info · experience · skills · awards
│   │                              projects · gallery · Sanskrit · quotes · references
│   │
│   ├── render.js               ← Reads cv-data.js, builds all DOM sections
│   │                              renderPersonal · renderExperience · renderSkills
│   │                              renderAwards (incl. chess board SVG) · renderProjects
│   │                              renderGallery · renderSanskrit · renderQuotes
│   │                              renderReferences · renderContact · renderFooterYear
│   │
│   ├── i18n.js                 ← Language switcher (EN / Telugu / Sanskrit)
│   │                              Applies _te / _sa field variants across all content
│   │                              Static UI strings: nav labels, buttons, headings
│   │
│   ├── theme.js                ← ⊙ Theme customiser panel
│   │                              Colour presets · dark/light mode · font size
│   │                              Gallery toggle (persisted) · Footer toggle (session-only)
│   │
│   └── main.js                 ← IntersectionObserver scroll animations
│                                 Nav active-link highlight · mobile hamburger menu
│                                 Quote card tap-to-flip (mobile)
│
├── css/
│   ├── style.css               ← Layout, all components, CSS custom properties
│   │                              Awards grid · chess card layout · mobile bottom bar
│   ├── theme-panel.css         ← Floating ⊙ panel styles + toggle switch
│   ├── gallery.css             ← Photo gallery grid + hover overlay
│   ├── sanskrit.css            ← Sanskrit section + flip-card quotes + pagination
│   ├── lang.css                ← Language switcher pill
│   └── projects.css            ← Personal project cards
│
├── assets/
│   ├── images/
│   │   ├── nagendra.jpg        ← Profile photo (portrait, min 400×500px, face centred)
│   │   └── gallery/            ← Drop gallery photos here
│   └── NagendraPidaparthy.pdf  ← CV / Resume PDF
│
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions → GitHub Pages auto-deploy
│
├── HOWTO.md                    ← Step-by-step content update guide (start here)
└── README.md                   ← This file
```

---

## Quick Start (local preview)

```bash
git clone https://github.com/npidaparthy/nagendra.work.git
cd nagendra.work
python3 -m http.server 4321
# open http://localhost:4321
```

No install step. No build step. Works immediately in any browser.

---

## Deploy to GitHub Pages

**First time:**
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

In GitHub: **Settings → Pages → Source → GitHub Actions**

**Every update after that:**
```bash
git add js/cv-data.js
git commit -m "Update experience"
git push
```

Auto-deploys in ~60 seconds.

---

## Deploy to Vercel (optional mirror)

1. [vercel.com](https://vercel.com) → **Add New Project** → Import your GitHub repo
2. Framework: **Other** (leave all defaults)
3. Deploy
4. Add your custom domain in **Settings → Domains**

Both GitHub Pages and Vercel can run simultaneously.

---

## Using This as Your Own Portfolio

This project is designed to be forked and fully personalised. All content is in one file — no framework knowledge needed.

### Steps

1. **Fork** this repo on GitHub (click **Fork** top-right)
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git`
3. Open `js/cv-data.js` and replace every field with your own details
4. Replace `assets/images/nagendra.jpg` with your photo (keep filename, or update `CV.personal.photo`)
5. Replace `assets/NagendraPidaparthy.pdf` with your CV PDF (keep filename, or update `CV.personal.cvPdf`)
6. Update `index.html` — change the `<title>` tag and `<meta name="description">` to your name
7. Push to GitHub → Pages auto-deploys

See **[HOWTO.md](HOWTO.md)** for detailed step-by-step instructions for every section.

### Minimum changes required

| File | Change |
|---|---|
| `js/cv-data.js` | `CV.personal` — name, email, phone, LinkedIn, GitHub |
| `js/cv-data.js` | `CV.experience[]` — your work history |
| `js/cv-data.js` | `CV.skills[]` — your tech stack |
| `assets/images/nagendra.jpg` | Your profile photo |
| `assets/NagendraPidaparthy.pdf` | Your CV PDF |
| `index.html` | `<title>` and `<meta name="description">` |

### What NOT to change

You do not need to edit `render.js`, `theme.js`, `main.js`, or any CSS file for content updates. They are self-contained.

---

## License

**MIT License** — free to use, modify, and distribute for personal and commercial use.

If you fork this as your own portfolio, a credit in your README or site footer is appreciated (not required):

```
Portfolio built on: nagendra.work — github.com/npidaparthy/nagendra.work
```

---

## Credits

Designed and built by **Nagendra Pidaparthy**.

- Chess puzzle: *Greek Gift* sacrifice (♗xh7+!!) — a classic attacking pattern in chess
- Sanskrit quotes: Traditional Subhāṣitāni from Bhagavad Gītā, principal Upaniṣads, Hitopadeśa, Pañcatantra, and other classical sources
- Fonts: [Google Fonts](https://fonts.google.com) (Inter, JetBrains Mono, Noto Sans Telugu, Noto Sans Devanagari)

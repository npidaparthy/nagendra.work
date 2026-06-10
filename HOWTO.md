# nagendra.work — Content Update Guide

**One rule: edit only `js/cv-data.js` for all content changes.**
Everything else (HTML, CSS, JS, translations) runs automatically from that file.

---

## Quick Reference

| What to change | Where |
|---|---|
| Name, phone, email, LinkedIn, GitHub | `CV.personal` |
| Hero tagline | `CV.personal.tagline` (+ `tagline_te`, `tagline_sa`) |
| "Available for Senior Roles" badge | `CV.personal.available: true` to show, `false` to hide |
| Profile photo | Replace `assets/images/nagendra.jpg` (keep filename) |
| CV / resume PDF | Replace `assets/NagendraPidaparthy.pdf` (keep filename) |
| About bio paragraphs | `CV.about.paragraphs[]` |
| Stats (21+, 11+, …) | `CV.about.stats[]` |
| Certifications (hero pills) | `CV.certifications[]` |
| Add / edit a job | `CV.experience[]` |
| Add / edit a skill category | `CV.skills[]` |
| Add / edit an award | `CV.awards[]` |
| Add a gallery photo | `CV.gallery[]` + put file in `assets/images/gallery/` |
| Show/hide Gallery section | ⊙ settings panel → Sections → 📷 Gallery toggle |
| Add/edit a personal project | `CV.projects[]` |
| Edit Sanskrit bio | `CV.sanskrit.bio_en` (+ `bio_te`, `bio_sa`) |
| Add a Sanskrit cert | `CV.sanskrit.certifications[]` |
| Edit texts studied | `CV.sanskrit.texts[]` |
| Add a Sanskrit quote | `CV.quotes[]` |
| Add a source text (References modal) | `CV.references[]` |
| Change static UI text (nav, buttons) | `js/i18n.js` → `LANG.en / .te / .sa` |

---

## 1 · Personal Info

Open `js/cv-data.js` and find `CV.personal`:

```js
personal: {
  name:       "Your Full Name",
  title:      "Your Job Title",
  title_te:   "మీ జాబ్ టైటిల్",          // Telugu (optional)
  title_sa:   "आपकं पदम्",                 // Sanskrit (optional)
  tagline:    "Your one-line hero tagline",
  location:   "City, State, Country",
  available:  false,    // true = shows green "Available for Senior Roles" badge
  email:      "you@example.com",
  phone:      "+61 400 000 000",
  linkedin:   "https://www.linkedin.com/in/yourhandle/",
  github:     "https://github.com/yourusername/your-repo",
  photo:      "assets/images/nagendra.jpg",   // path to your photo
  cvPdf:      "assets/NagendraPidaparthy.pdf", // path to your CV PDF
},
```

**Tips:**
- Set `available: true` when actively job-seeking — shows a pulsing green badge in the hero
- `github` drives the GitHub logo in the footer; set `""` to hide it
- Photo must be a portrait orientation, minimum 400×500px, face centred

---

## 2 · About Section

Find `CV.about`:

```js
about: {
  paragraphs: [
    "First paragraph — HTML is allowed e.g. <strong>bold text</strong>",
    "Second paragraph",
  ],
  paragraphs_te: ["తెలుగు పేరా..."],   // optional
  paragraphs_sa: ["संस्कृतम्..."],      // optional

  stats: [
    { num: "21+", label: "Years Experience", label_te: "సంవత్సరాల అనుభవం", label_sa: "वर्षाणामनुभवः" },
    { num: "9",   label: "Companies",        label_te: "కంపెనీలు",           label_sa: "संस्थाः" },
    // add more stat cards here
  ],
},
```

Stat cards appear as large-number callouts. Add as many as you like — they wrap automatically.

---

## 3 · Experience Timeline

Find `CV.experience` — jobs are shown **most recent first**:

```js
{
  company:   "Company Name",
  role:      "Your Job Title",
  dates:     "Jan 2024 – Present",
  location:  "Sydney, NSW",          // or "" to hide
  current:   true,                   // true = green "Current" badge below logo
  logoText:  "CO",                   // 2–4 chars shown in the colour circle
  logoColor: "linear-gradient(135deg,#6366f1,#8b5cf6)",
  clients:   "Clients: NAB · Westpac",  // or "" to hide
  tags:      ["Terraform","Kubernetes","AWS"],
  bullets: [
    "What you achieved — use impact language",
    "Another bullet — HTML allowed e.g. &amp; for &",
  ],
},
```

**Logo colour presets:**
```
Purple → "linear-gradient(135deg,#6366f1,#8b5cf6)"
Blue   → "linear-gradient(135deg,#1C3F7F,#2E6DB4)"
Teal   → "linear-gradient(135deg,#00857E,#00AFAA)"
Red    → "linear-gradient(135deg,#E31837,#FF6B6B)"
Orange → "linear-gradient(135deg,#FF6B35,#F7C59F)"
Pink   → "linear-gradient(135deg,#FF4785,#FF8C42)"
Grey   → "linear-gradient(135deg,#374151,#6B7280)"
```

---

## 4 · Skills Grid

Find `CV.skills` — each object is one category card:

```js
{
  icon: "☁️",
  name: "Cloud Platforms",
  tags: ["AWS","Azure","GCP","EKS","S3","Lambda"],
},
```

Tags appear as pills inside the card. Add as many tags as needed — they wrap automatically.

---

## 5 · Awards Section

**Add to an existing organisation** — find it in `CV.awards[]` and add to `items`:
```js
{ org: "NAB / MLC / IOOF", items: ["🏆 Existing award", "🎖️ New Award Here"] }
```

**New organisation (short list — normal card):**
```js
{
  org:   "Organisation Name",
  color: "linear-gradient(135deg,#6366f1,#8b5cf6)",
  items: ["🏆 Award description"],
},
```

**New organisation (6+ items — full-width 3-column layout):**
```js
{
  org:   "Organisation Name",
  color: "linear-gradient(135deg,#007CC3,#00B5E2)",
  span:  true,    // stretches full width; items flow in 3 columns
  items: ["🏆 Award 1", "🏆 Award 2", "🏆 Award 3"],
},
```

**Special chess board card** — adds an SVG chess board alongside items:
```js
{
  org:   "♔ Chess",
  color: "linear-gradient(135deg,#4a5568,#718096)",
  span:  true,
  board: true,   // renders the Greek Gift puzzle chess board
  items: ["♛ 1st Place — ..."],
},
```

---

## 6 · Personal Projects

Find `CV.projects`:

```js
{
  icon:      "🛠️",
  title:     "Project Name",
  title_te:  "తెలుగు పేరు",     // optional
  title_sa:  "संस्कृतनाम",       // optional
  subtitle:  "One-line tagline",
  desc_en:   "2–3 sentence description. HTML allowed.",
  desc_te:   "తెలుగు వివరణ",    // optional
  impact: [
    "Key metric or outcome",
    "Another impact point",
  ],
  tags:      ["JavaScript","API","Serverless"],
  link:      "https://example.com",   // or "" to hide the button
  linkLabel: "View Project",
},
```

---

## 7 · Gallery

**Step 1** — copy your photo into `assets/images/gallery/` (e.g. `temple.jpg`)

**Step 2** — add an entry to `CV.gallery`:

```js
{
  image:      "assets/images/gallery/temple.jpg",
  caption:    "English caption",
  caption_te: "తెలుగు వివరణ",     // optional
  caption_sa: "संस्कृतवर्णनम्",   // optional
  category:   "personal",          // shown on hover: family / travel / professional / awards
},
```

**The Gallery section is hidden by default.** To show it:
- Click the ⊙ button (bottom-right) → toggle **📷 Gallery** on

This setting is saved across page loads.

---

## 8 · Sanskrit Expertise

### Bio

```js
sanskrit: {
  bio_en: "Your Sanskrit background in English...",
  bio_te: "తెలుగు వివరణ...",   // optional
  bio_sa: "संस्कृतम्...",        // optional
```

### Adding a Certification

Find `CV.sanskrit.certifications` and add:

```js
{
  name:        "Exam Name (संस्कृतम्)",
  institution: "Institution Name",
  level:       "Level description",
  desc_en:     "One line about what this exam covers",
  desc_te:     "తెలుగు వివరణ",
  desc_sa:     "संस्कृतवर्णनम्",
},
```

**Existing institution groups** (match the string exactly to add to the group):
- `"Saṃskṛta Bhāratī"`
- `"IIT Roorkee"`
- `"Śṛṅgerī Surasarasvatī Sabhā"`

A new `institution` string automatically creates a new group header.

### Texts Studied

Each text is a multilingual object:

```js
{
  en: "English name of the text",
  te: "తెలుగు పేరు",
  sa: "संस्कृतनाम",
},
```

---

## 9 · Sanskrit Quotes (Subhāṣitāni)

Find `CV.quotes` and add — quotes paginate automatically (12 per page):

```js
{
  devanagari: "Devanagari text here\n(use \\n for line break)",
  telugu:     "Telugu script here",
  iast:       "IAST romanisation",
  meaning_en: "English meaning",
  meaning_te: "తెలుగు అర్థం",     // optional
  source:     "Source — Chapter.Verse",
},
```

Visitors hover (desktop) or tap (mobile) to flip the card and see the meaning.
Pagination controls appear at both top and bottom of the section.

---

## 10 · Source Texts & References Modal

Find `CV.references` and add — these appear in the searchable "Source Texts & References" modal:

```js
{
  icon:            "📖",
  title:           "English title",
  title_sa_script: "देवनागरी नाम",
  period:          "~500 BCE",
  author_en:       "Author / Compiler",
  author_te:       "తెలుగు రచయిత",
  author_sa:       "संस्कृतकर्ता",
  desc_en:         "Brief description in English.",
  desc_te:         "తెలుగు వివరణ.",
  desc_sa:         "संस्कृतवर्णनम्।",
  tags:            ["Philosophy","Poetry"],
},
```

---

## 11 · Enabling the "Available" Badge

The green "Available for Senior Roles" badge in the hero is **hidden by default**. Enable it when actively job-seeking:

```js
// In CV.personal:
available: true,    // shows badge
available: false,   // hides badge (default)
```

---

## Multilingual Content

Every piece of content can have three versions:

| Field suffix | Language | Behaviour |
|---|---|---|
| *(none)* | English | Always required |
| `_te` | Telugu | Falls back to English if missing |
| `_sa` | Sanskrit | Falls back to English if missing |

**Example — about paragraphs:**
```js
paragraphs:    ["English paragraph..."],
paragraphs_te: ["తెలుగు పేరా..."],
paragraphs_sa: ["संस्कृतम्..."],
```

**Static UI strings** (nav labels, buttons, section headings) are in `js/i18n.js` → `LANG.te` and `LANG.sa`.

---

## Theme Customiser

Click the **⊙** button (bottom-right corner) to open the panel:

| Setting | Options |
|---|---|
| Colour | Indigo · Violet · Cyan · Emerald · Amber · Rose |
| Mode | 🌙 Dark · ☀️ Light |
| Font size | A− (small) · A (default) · A+ (large) |
| 📷 Gallery | Toggle gallery section on/off (persisted across reloads) |
| 🔻 Footer | Toggle footer on/off (session only — resets on page reload) |

All settings except the footer toggle are saved in the browser (localStorage).

---

## Replacing Your Photo

Save new photo as `assets/images/nagendra.jpg` (portrait, min 400×500px, face centred). Refresh — done.  
Or update `CV.personal.photo` to a different path.

---

## Replacing Your CV PDF

Export Word/Google Doc as PDF → save as `assets/NagendraPidaparthy.pdf`.  
Or update `CV.personal.cvPdf` to a different path.  
All "Download CV" buttons across the site point to this path automatically.

---

## Favicon — Rotating NP Logos

The browser tab shows a randomly picked favicon on every page load.
There are **24 designs** — one for each syllable of the Gāyatrī Mantra.

All SVG files live in `favicon/`. The picker is a tiny inline `<script>` in `<head>`:

```js
var favicons = ['np-serif', 'np-gradient', /* ... */ ];
var pick = favicons[Math.floor(Math.random() * favicons.length)];
link.href = '/favicon/' + pick + '.svg';
```

### Adding a new favicon design

1. Create `favicon/np-yourname.svg` — use a `64×64` viewBox; keep it legible at 16px
2. Add `'np-yourname'` to the `favicons` array in `index.html` (inside the `<script>` in `<head>`)
3. Document it in `favicon/favicon.md`

### Current designs (24 total)

| # | File | Style | Colour |
|---|------|-------|--------|
| 1 | `np-serif` | Solid square, serif font | Indigo |
| 2 | `np-gradient` | Rounded square gradient | Orange → Rose |
| 3 | `np-dark-border` | Dark + border outline | Teal |
| 4 | `np-circle` | Circle | Amber |
| 5 | `np-split-tone` | Split N·P letters | Emerald + Cyan |
| 6 | `np-devanagari` | Devanagari न + Latin P | Saffron |
| 7 | `np-hexagon` | Hexagon shape | Rose |
| 8 | `np-stacked` | N over P stacked | Gold |
| 9 | `np-interlocked` | RF-style overlapping letters | Navy + Indigo |
| 10 | `np-shield` | Heraldic shield | Royal Navy |
| 11 | `np-diagonal` | Diagonal colour split | Orange + Blue |
| 12 | `np-pill` | Pill / stadium badge | Forest Green |
| 13 | `np-diamond` | Rotated square | Crimson |
| 14 | `np-retro` | Dashed ring badge | Amber Vintage |
| 15 | `np-dev` | `<NP/>` code tag | Cyan on Black |
| 16 | `np-outlined` | Hollow stroke letters | White on Black |
| 17 | `np-coral` | Solid square | Coral |
| 18 | `np-pink-gradient` | Gradient | Pink → Violet |
| 19 | `np-navy-serif` | Solid square, serif | Deep Navy + Cream |
| 20 | `np-ocean` | Circle gradient | Teal → Blue |
| 21 | `np-hairline` | Ultra-thin letters | Near-white on Black |
| 22 | `np-sanskrit-border` | ॐ dashed border | Gold |
| 23 | `np-metallic` | Metallic text gradient | Brushed Gold |
| 24 | `np-slash` | Slash divider | White + Indigo |

Full design notes and inspiration in `favicon/favicon.md`.

---

## Local Preview

The site is plain HTML/CSS/JS — no build step, no npm. A simple Python HTTP server is all you need.

**Why can't you just open `index.html` directly?**  
Double-clicking the file opens it as `file://...` in the browser. Some browser security rules block local file loading (fonts, scripts), so the site can look broken. A local server serves it properly over `http://` just like a real web host.

**Start the server:**

```bash
cd /Users/Nagendra/Projects/claude/nagendra.work
python3 -m http.server 4321
# Visit http://localhost:4321
```

Port `4321` is arbitrary — you can use any free port (e.g. `8080`). The server runs until you press **Ctrl+C** in the terminal.

**Stop the server:**
```bash
Ctrl+C
```

---

## Previewing Mobile Layout

No extra tools needed — use Chrome or Edge DevTools:

1. Open `http://localhost:4321` in Chrome or Edge
2. Press **F12** to open DevTools (or right-click → Inspect)
3. Click the **📱 Toggle device toolbar** icon (top-left of the DevTools panel)
   — or press **Cmd+Shift+M** (Mac) / **Ctrl+Shift+M** (Windows)
4. Pick a device from the dropdown, or type a custom width

**Useful widths to test:**

| Width | Device |
|---|---|
| 375px | iPhone SE / small Android |
| 390px | iPhone 14 / 15 |
| 768px | iPad / tablet |
| 1280px | Desktop |

**Test light & dark mode without touching localStorage:**
In DevTools device toolbar → three-dot menu (⋮) → *Emulate CSS media feature* → `prefers-color-scheme: light` or `dark`.

---

## Deploying to GitHub Pages

**First time:**
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/nagendra.work.git
git push -u origin main
```

In GitHub: **Settings → Pages → Source → GitHub Actions**

**Every update after that:**
```bash
git add js/cv-data.js
git commit -m "Update Sanskrit certifications"
git push
```

GitHub Actions deploys automatically. Live in ~60 seconds.

---

## Deploying to Vercel (optional)

1. vercel.com → **Add New Project** → Import your GitHub repo
2. Framework: **Other** (leave all defaults)
3. Deploy
4. Add `nagendra.work` in **Settings → Domains**

---

## File Map

```
js/cv-data.js     ← ALL content (the only file you edit)
js/render.js      ← builds DOM from cv-data.js
js/i18n.js        ← EN/Telugu/Sanskrit translations + switcher
js/theme.js       ← colour/mode/font customiser + section toggles
js/main.js        ← scroll animations, mobile menu, quote flip
css/style.css     ← layout, components, CSS variables
css/theme-panel.css
css/gallery.css
css/sanskrit.css
css/lang.css
css/projects.css
assets/images/nagendra.jpg      ← your photo
assets/images/gallery/          ← gallery photos
assets/NagendraPidaparthy.pdf   ← your CV PDF
```

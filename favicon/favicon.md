# NP Favicon Collection

## Why 24?

The number **24** mirrors the **24 akṣaras (syllables) of the Gāyatrī Mantra**
(*tatsaviturvareṇyaṃ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt*) —
the most sacred Vedic mantra, a prayer for illuminated intellect.
Each page visit picks one at random, so no two visits are alike.

---

## How it works

A small inline script in `<head>` (before any render) picks one file at random
on every page load and injects it as `<link rel="icon" type="image/svg+xml">`.
All files are pure SVG — no PNG fallbacks needed for modern browsers.

```js
// index.html <head>
var pick = favicons[Math.floor(Math.random() * favicons.length)];
link.href = '/favicon/' + pick + '.svg';
```

---

## The 24 Designs

| # | File | Style | Colour | Personality | Inspiration |
|---|------|-------|--------|-------------|-------------|
| 1 | `np-serif.svg` | Solid rounded square | Indigo `#6366f1` | Classic, timeless | Foundational — the default feel |
| 2 | `np-gradient.svg` | Rounded square | Orange → Rose | Energetic, warm | App-icon gradient trend |
| 3 | `np-dark-border.svg` | Dark + border outline | Teal `#14b8a6` | Calm, minimal | Terminal / dark-mode aesthetic |
| 4 | `np-circle.svg` | Circle | Amber `#f59e0b` | Warm, approachable | Profile photo convention |
| 5 | `np-split-tone.svg` | Rounded square | Emerald N + Cyan P | Fresh, dual identity | Two-tone monogram logos |
| 6 | `np-devanagari.svg` | Rounded square | Saffron gradient | Sanskrit identity | Saffron = sacred / scholarly |
| 7 | `np-hexagon.svg` | Hexagon | Rose `#e11d48` | Bold, distinctive | Engineering / tech hexagons |
| 8 | `np-stacked.svg` | Dark, N over P | Gold `#fbbf24` | Premium, elegant | Luxury editorial stacked marks |
| 9 | `np-interlocked.svg` | Overlapping letters | Navy + Indigo | Sophisticated monogram | Roger Federer RF logo |
| 10 | `np-shield.svg` | Heraldic shield | Royal navy + blue | Heritage, authoritative | Family crests, sports clubs |
| 11 | `np-diagonal.svg` | Diagonal colour split | Orange + Blue | Dynamic, sporty | Nike, modern sports branding |
| 12 | `np-pill.svg` | Pill / stadium badge | Forest green `#16a34a` | Friendly, approachable | UI badge / tag components |
| 13 | `np-diamond.svg` | Rotated square | Crimson `#dc2626` | Unexpected, confident | Playing card suits, jewellery brands |
| 14 | `np-retro.svg` | Dashed ring badge | Amber / vintage cream | Nostalgic, crafted | Vintage stamps, wax seals |
| 15 | `np-dev.svg` | `<NP/>` code tag | Cyan `#06b6d4` on black | Technical, DevOps identity | XML/HTML code style |
| 16 | `np-outlined.svg` | Hollow stroke letters | White on black | Minimal, editorial | Fashion brands (CK, Balenciaga) |
| 17 | `np-coral.svg` | Solid rounded square | Coral `#f43f5e` | Vibrant, memorable | Bold consumer app icons |
| 18 | `np-pink-gradient.svg` | Rounded square | Pink → Violet | Modern, expressive | Instagram-style gradients |
| 19 | `np-navy-serif.svg` | Solid rounded square | Navy + cream serif | Prestigious, classic | New York Yankees cap logo |
| 20 | `np-ocean.svg` | Circle | Teal → Blue gradient | Calm confidence | Oceanic / Australian identity |
| 21 | `np-hairline.svg` | Solid dark square | Near-white hairline text | Ultra-minimal, architectural | Swiss design, luxury fashion |
| 22 | `np-sanskrit-border.svg` | Dashed Sanskrit border | Gold `#f59e0b` + ॐ text | Cultural, scholarly | Traditional manuscript borders |
| 23 | `np-metallic.svg` | Dark with metallic text | Brushed gold gradient | Prestigious, premium | Awards / trophies / editorial |
| 24 | `np-slash.svg` | Dark + slash divider | White + indigo slash | Technical, modern | Programming / command-line aesthetics |

---

## Colour palette at a glance

| Tone | Designs |
|------|---------|
| 🟣 Indigo / Purple | Serif, Interlocked, Slash |
| 🟠 Orange / Amber | Gradient, Circle, Retro, Sanskrit Border |
| 🔵 Blue / Navy | Shield, Diagonal, Ocean, Navy Serif |
| 🟢 Green / Teal | Dark Border, Split Tone, Pill |
| 🔴 Red / Rose / Coral | Hexagon, Diamond, Coral |
| 🩷 Pink | Pink Gradient |
| 🟡 Gold | Stacked, Metallic |
| ⚫ Minimal | Outlined, Hairline, Dev |
| 🟤 Saffron | Devanagari |

---

## Adding a new design

1. Create `favicon/np-yourname.svg` — 64×64 viewBox, keep it legible at 16×16
2. Add `'np-yourname'` to the array in `index.html`
3. Document it in this table

## Notes

- SVG favicons are supported in all modern browsers (Chrome, Firefox, Safari 12+, Edge)
- Devanagari designs rely on system Devanagari fonts — renders correctly in browsers, may look different in OS file previews
- The random pick happens before first paint (script is in `<head>`) so there is no flicker

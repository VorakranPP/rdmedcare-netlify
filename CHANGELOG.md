# RD Medcare – Changelog

All notable changes to this project are documented here.

---

## [3.0.0] — 2026-06-01 — Real Product Photography

**Deployed:** https://rdmedcare-new.netlify.app
**Git status:** Staged, not yet committed

### Added

- `assets/images/products/` directory with 5 real product images downloaded from rdmedcare.com:
  - `hfh-h80a-full.jpg` — H-80A High Flow Humidifier (BMC Medical)
  - `ecg-blt-e65-full.png` — ECG BLT E65 (BLT Medical)
  - `spo2-hs20a-full.png` — SpO₂ Accurate HS-20A
  - `tourniquet-tt20-wide.jpg` — VBM Tourniquet Touch TT20
  - `vitalsigns-blt-v6-full.png` — Vitalsigns BLT V6 (BLT Medical)
  - `hfnc-banner.jpg` — HFNC banner from rdmedcare.com homepage
- `PROJECT_CONTEXT.md` — full project context for future AI sessions / developers
- `TODO.md` — prioritised task list with completed/pending status
- `CHANGELOG.md` — this file

### Changed

**index.html:**
- Hero visual: replaced `🏥` emoji placeholder with real H-80A product photo (`hfh-h80a-full.jpg`)
- Hero stat card icons: replaced `✅ ⚡ 📊` emoji with stroke SVG icons
- Hero metrics: replaced fake stats (`500+ Hospitals`, `10K+ Devices`) with real certifications (`ISO 13485`, `CE & Thai FDA`, `15+ Years`)
- Ticker strip: replaced fake hospital names with brand/certification labels (`ISO 13485 Certified`, `BLT Medical Partner`, etc.)
- Medical Solutions section: replaced 6 emoji icons with stroke SVG medical icons
- Featured Products section: replaced `💨 🖥️ 💓` emoji with real product photos; updated names to real model numbers (`H-80A High Flow Humidifier`, `Vitalsigns BLT V6`, `ECG BLT E65`)
- Stats bar: replaced fake unverifiable numbers with certifications (`ISO 13485`, `CE Mark`, `Thai FDA`, `15+ Years`)
- Why Choose section: replaced `🩻` emoji visual with 2×2 product image grid (H-80A, V6, E65, TT20); replaced 5 why-item emoji icons with SVG icons
- Partners section: removed 8 fake hospital logo items; replaced with 3 real brand partner cards (BLT Medical, BMC Medical, VBM Medical)
- Service & Support section: replaced 5 emoji service icons with stroke SVG icons
- Contact section: replaced 4 emoji contact icons with stroke SVG icons; removed placeholder `REPLACE` comments
- Footer: replaced `📘 💬 ▶️ 💼` emoji social icons with proper SVG brand icons; added real social URLs (Facebook, YouTube, LinkedIn from rdmedcare.com); updated footer product list to real model names
- Form select options: updated to real product model names

**products.html:**
- Product 1 (High Flow Humidifier): added real `<img>` tag; updated name to `H-80A High Flow Humidifier`
- Product 2 (SpO₂ Monitor): added real `<img>` tag; updated name to `SpO₂ Accurate HS-20A`
- Product 3 (Patient Monitor): added real `<img>` tag; updated name to `Vitalsigns BLT V6`; updated category to `Patient Monitoring`
- Product 4 (ECG System): added real `<img>` tag; updated name to `ECG BLT E65`
- Product 5 (Tourniquet System): added real `<img>` tag; updated name to `VBM Tourniquet Touch TT20`; updated category to `Surgical`
- Product 6 (Infusion Pump): replaced `💉` emoji with clean SVG placeholder + "Product image coming soon" text

**assets/css/styles.css:**
- `.product-card-image`: changed background from gradient to white; added `border-bottom`; added `padding: 1.25rem`; removed `font-size: 5rem` (was for emoji)
- `.product-card-image img`: changed `object-fit` from `cover` to `contain`; added hover scale transition
- Added `.product-card-tag` style (category label above product name in products.html)
- `.hero-img-frame`: changed `aspect-ratio` from `1` to `4/5`; reduced max-width to 400px; changed to `padding: 1.5rem`; removed placeholder styles
- Added `.hero-img-frame img` with `object-fit: contain` and `drop-shadow` filter
- Removed `.hero-img-placeholder` styles
- `.why-visual`: removed `font-size: 9rem`; changed to white border + padding for image grid
- Added `.why-product-grid` and `.why-product-grid img` — 2×2 product image grid
- Added SVG icon sizing rules for `.sol-icon`, `.service-icon`, `.why-item-icon`, `.stat-card-icon`, `.contact-detail-icon`, `.social-link`
- `.partner-logo-item`: redesigned from hospital logo item to brand partner card
- Added `.partner-brand-name`, `.partner-brand-cat`, `.partner-brand-desc`, `.partner-brand-mark`

### Removed

- All emoji product placeholders (`💨`, `🖥️`, `💓`, `🩺`, `💉`, `📡`)
- Fake hospital partner section (8 hospital names with `🏥` icons)
- Fake unverifiable statistics (`500+ Partner Hospitals`, `10,000+ Devices in Service`, `98% Uptime`)
- `REPLACE` placeholder comments throughout HTML
- `.hero-img-placeholder` CSS styles

---

## [2.0.0] — 2026-05-31 — Medical Green Redesign

**Deployed:** https://rdmedcare-new.netlify.app

### Changed

- Complete visual overhaul from blue glassmorphism to medical green healthcare identity
- New color system: `--green-700: #006b3c` as primary throughout
- Rewrote `assets/css/styles.css` — new medical design system
- Rewrote `index.html` — 7 new homepage sections
- Updated all inner pages (`products.html`, `solutions.html`, `about.html`, `contact.html`) to match green design
- Replaced old glassmorphism card style with clean white border cards
- Medical cross grid SVG pattern in hero and page-hero backgrounds
- New logo: SVG medical cross (white `+` on green square)
- Updated `assets/js/lang.js` — new translation keys for redesigned sections

---

## [1.0.0] — 2026-05-30 — Initial Build & Deployment

**Deployed:** https://rdmedcare-new.netlify.app

### Added

- New website built from scratch (HTML5 / CSS3 / Vanilla JS)
- 5 pages: `index.html`, `products.html`, `solutions.html`, `about.html`, `contact.html`
- Bilingual TH/EN system with `data-i18n` attributes and `localStorage` persistence
- `netlify.toml` — static hosting config, security headers, clean URL redirects
- `assets/js/main.js` — navbar, mobile menu, IntersectionObserver, counter animation, contact form
- `assets/js/lang.js` — full TH/EN translation object
- `assets/css/styles.css` — initial design system (blue, later replaced in v2.0)
- Netlify deployment (site ID: `6104418e-ce4e-41a1-a2ef-5dd87209156e`)
- GitHub repository: https://github.com/VorakranPP/rdmedcare-netlify
- Netlify deploy hook: `https://api.netlify.com/build_hooks/6a1cf20fbc2ce46628cd95a8`

### Fixed

- TDZ (Temporal Dead Zone) `ReferenceError` in `main.js` — moved all DOM refs to top of `DOMContentLoaded`
- Invalid favicon data URI encoding — encoded `<` `>` across all 5 HTML files

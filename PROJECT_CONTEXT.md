# RD Medcare – New Website Project Context

> **Purpose of this file:** Allow any future AI session or developer to fully understand this project without re-reading the full conversation history.

---

## Project Goal

Build a completely **new** RD Medcare website for Netlify preview deployment. The existing production website at **rdmedcare.com must NEVER be modified**.

This new site is a redesign from scratch that reflects RD Medcare's real business as a medical equipment distributor in Thailand.

**Live URL:** https://rdmedcare-new.netlify.app
**GitHub:** https://github.com/VorakranPP/rdmedcare-netlify
**Original site (DO NOT TOUCH):** https://rdmedcare.com

---

## About RD Medcare

RD Medcare is a **Thai medical equipment distributor** that sells and supports certified medical devices for hospitals, clinics, and healthcare facilities across Thailand.

- Authorised distributor for BLT Medical, BMC Medical, and VBM Medical
- Registered with Thai FDA
- Products carry ISO 13485, CE Mark, and Thai FDA certifications
- Has been operating in Thailand for 15+ years
- Provides after-sales support including installation, PM, training, and 24/7 technical support
- Social media: https://www.facebook.com/RDMedcare, https://th.linkedin.com/in/rd-medcare-b5319b108

---

## Brand Identity

### Design Direction

- **Medical equipment supplier** — professional, trustworthy, clinical
- **Hospital catalogue style** — like a real medical equipment catalogue
- NOT a SaaS landing page
- NOT a corporate/generic website
- NOT a copy of any other Thai medical company (especially not JNN)

### Color Theme

```
Medical green primary:  #006b3c  (--green-700)
Dark green:             #005c2e  (--green-800)
Footer / hero bg:       #003d20  (--green-900)
Accent light:           #00954d  (--green-500)
White surface:          #ffffff
Gray backgrounds:       #f7faf8, #f0f4f1
```

### Typography

- Google Fonts: **Inter** (English) + **Noto Sans Thai** (Thai text)
- Headings: font-weight 800, tight letter-spacing
- Body: 1rem / 1.7 line-height

### Iconography

- All icons are **stroke-based SVG** (Feather/Lucide style)
- NO emoji icons as product images or section visuals
- Emoji allowed only in footer text-only contexts (☎ ✉ ⌂) if no SVG alternative
- Product images must be real product photography

---

## Real Products

| Model Name | Category | Brand | Image File |
|---|---|---|---|
| H-80A High Flow Humidifier | Respiratory Care | BMC Medical | `hfh-h80a-full.jpg` |
| SpO₂ Accurate HS-20A | Patient Monitoring | — | `spo2-hs20a-full.png` |
| Vitalsigns BLT V6 | Patient Monitoring | BLT Medical | `vitalsigns-blt-v6-full.png` |
| ECG BLT E65 | Cardiology | BLT Medical | `ecg-blt-e65-full.png` |
| VBM Tourniquet Touch TT20 | Surgical | VBM Medical | `tourniquet-tt20-wide.jpg` |
| Infusion Pump | Infusion | — | No photo yet |

Product images are in `assets/images/products/` and were downloaded from rdmedcare.com.

---

## Real Business Information (Known)

| Field | Value |
|---|---|
| Company name | RD Medcare |
| Country | Thailand |
| Email | info@rdmedcare.com |
| Facebook | https://www.facebook.com/RDMedcare |
| LinkedIn | https://th.linkedin.com/in/rd-medcare-b5319b108 |
| YouTube | https://www.youtube.com/channel/UCJwEmMHjLfQvIDCD9JPSnoQ |
| LINE Official | @rdmedcare |

**Placeholders still needed from client:**

| Field | Placeholder in code |
|---|---|
| Phone number | `+66 2-XXX-XXXX` |
| Mobile/LINE number | `+66 8X-XXX-XXXX` |
| Full office address | `XX/XX ถนน [...] กรุงเทพมหานคร 10XXX` |
| Google Maps embed | `<div class="map-placeholder">` |
| Copyright year | `© 2024` — confirm correct year |

---

## Design Requirements

### What to Build

- Product photography as the main visual focus throughout the site
- Product cards with: real photo, model name, category badge, specs, Learn More button
- Equal-height cards, consistent spacing, fully responsive
- Medical green theme, white card backgrounds, subtle borders
- Section eyebrows (small green uppercase label above each heading)
- Smooth fade-up scroll animations (IntersectionObserver)
- Counter animation for numeric stats
- Sticky navbar (transparent on hero, white when scrolled)
- Mobile hamburger menu (full-screen overlay)
- Language switcher TH/EN with localStorage persistence
- Scroll-to-top button

### What to Avoid

- Emoji icons as product images (strict prohibition)
- Fake unverifiable statistics (500+ hospitals, 10K devices, 98% uptime)
- Fake hospital partner logos
- Blue/glassmorphism/SaaS style
- JNN-style or corporate template look
- Random placeholder REPLACE comments left in production code
- Statistics or claims that cannot be verified

---

## Technical Requirements

### Stack

- Pure **HTML5 / CSS3 / Vanilla JS** — no framework, no build step
- No npm, no webpack, no React
- One CSS file (`styles.css`), two JS files (`main.js`, `lang.js`)
- Static files served directly by Netlify

### Bilingual System

- Language key: `localStorage.getItem('rdm_lang')` → `'th'` or `'en'`
- All translatable text: `data-i18n="key"` attribute
- Translations defined in `assets/js/lang.js` → `window.translations`
- `applyTranslations()` runs on page load and on language switch
- Default language: Thai (`th`)

### CSS Architecture

- All design tokens in `:root {}` CSS custom properties
- Component classes follow BEM-lite naming (`.product-card`, `.product-card-image`, `.product-card-body`)
- Responsive via CSS Grid `repeat(auto-fit, minmax(...))` + media queries at 768px, 480px

### Critical JS Bug Pattern to Avoid

```js
// WRONG — causes TDZ ReferenceError:
const onScroll = () => { scrollTopBtn.classList.toggle(...) }; // used here
window.addEventListener('scroll', onScroll);
const scrollTopBtn = document.getElementById('scrollTop'); // declared after use

// CORRECT — declare all DOM refs FIRST:
const scrollTopBtn = document.getElementById('scrollTop');
const onScroll = () => { scrollTopBtn && scrollTopBtn.classList.toggle(...) };
```

---

## File Structure

```
rdmedcare-netlify/
├── index.html              ← Homepage (Hero, Solutions, Products, Why, Partners, Services, Contact, CTA)
├── products.html           ← Full product catalogue with category filter
├── solutions.html          ← 4 solution types (ICU, Cardiology, OR, General Ward)
├── about.html              ← Company profile, team, timeline
├── contact.html            ← Contact form + business hours + map placeholder
├── netlify.toml            ← publish = ".", security headers, clean URL redirects
├── PROJECT_CONTEXT.md      ← This file
├── TODO.md                 ← Remaining tasks
├── assets/
│   ├── css/styles.css      ← Complete design system
│   ├── js/main.js          ← Navbar, mobile menu, scroll, filter, animations
│   ├── js/lang.js          ← TH/EN translation object + applyTranslations()
│   └── images/products/    ← Real product photos (downloaded from rdmedcare.com)
└── .github/workflows/
    └── deploy.yml          ← GitHub Action: push to main → curl Netlify deploy hook
```

---

## Deployment

### Netlify

| Item | Value |
|---|---|
| Site name | `rdmedcare-new` |
| Site ID | `6104418e-ce4e-41a1-a2ef-5dd87209156e` |
| Production URL | https://rdmedcare-new.netlify.app |
| Deploy hook | `https://api.netlify.com/build_hooks/6a1cf20fbc2ce46628cd95a8` |

**Manual deploy command:**
```bash
NETLIFY_AUTH_TOKEN=<token> netlify deploy --prod --dir . --site 6104418e-ce4e-41a1-a2ef-5dd87209156e
```

### GitHub Auto-Deploy

- Push to `main` → GitHub Action → curl Netlify deploy hook
- Requires secret `NETLIFY_DEPLOY_HOOK` in GitHub repository settings
- GitHub token used during development lacked `workflow` scope → `.github/workflows/deploy.yml` must be created manually via GitHub UI

---

## Current Project Status (as of 2026-06-01)

| Area | Status |
|---|---|
| All 5 HTML pages | Complete |
| CSS design system (medical green) | Complete |
| Bilingual TH/EN | Complete |
| Real product images (5 of 6) | Complete — downloaded from rdmedcare.com |
| Infusion Pump image | Missing — SVG placeholder used |
| Netlify deployment | Live at rdmedcare-new.netlify.app (v3.0 deployed 2026-06-01) |
| GitHub repository | Staged but NOT yet committed (commit was deferred) |
| GitHub → Netlify auto-deploy | Deploy hook created; user must add GitHub secret + workflow file manually |
| Contact details | Placeholders only — need real data from client |
| Google Maps | Placeholder — need embed from client |
| PROJECT_CONTEXT.md | Created 2026-06-01 |
| TODO.md | Created 2026-06-01 |
| CHANGELOG.md | Created 2026-06-01 |

---

## Key CSS Classes Reference

| Class | Description |
|---|---|
| `.hero-img-frame` | Hero product photo frame (4:5 ratio, white bg, contain) |
| `.why-product-grid` | 2×2 grid of 4 product images in Why section |
| `.product-card-image` | Product photo container (white bg, padding, object-fit:contain) |
| `.product-cat-badge` | Pill badge in top-left of product image |
| `.product-card-tag` | Category label above product name (text only) |
| `.solution-card` | Medical solutions grid card with top border reveal |
| `.partner-logo-item` | Brand partner card (BLT/BMC/VBM) |
| `.service-card` | After-sales service card |
| `.section-eyebrow` | Green uppercase section label with left line |
| `.fade-up` | Scroll-reveal animation (IntersectionObserver) |
| `.ticker-wrap / .ticker-track` | Infinite horizontal scroll strip |
| `.why-item` | Trust indicator row (icon + title + desc) |
| `.contact-form-card` | Enquiry form white card |
| `.contact-info-head` | Green gradient contact info panel |
| `.hours-card` | Business hours table card |
| `.stats-section` | Green background certifications bar |
| `.cta-banner` | Full-width dark green CTA section |

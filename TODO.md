# RD Medcare – TODO & Pending Tasks

> Last updated: 2026-06-01 (v3.0 — real product images deployed)

---

## CRITICAL — Needs real data from client

- [x] **Phone number** — 02-136-3479 / 02-397-0287 (updated all pages)
- [x] **Mobile / LINE number** — 090-971-6299 / LINE ID: RDmedcare (updated all pages)
- [x] **Full office address** — 497 Udomsuk Road, Bangna, Bangkok 10260 (updated all pages)
- [x] **Copyright year** — updated to © 2026
- [ ] **Google Maps embed** — add real `<iframe>` in contact.html map placeholder (LINE ID confirmed: RDmedcare)

---

## HIGH PRIORITY — Content & Images

- [ ] **Infusion Pump product image** — no photo available yet; currently shows SVG placeholder. Obtain real product photo and add to `assets/images/products/infusion-pump.jpg`
- [ ] **Hero image** — currently shows H-80A product photo. Consider replacing with a professional clinical/hospital photo that shows equipment in use (rdmedcare.com has a banner image `hfnc-banner.jpg` that may work if cropped)
- [ ] **About page — team photos** — `about.html` team cards still use emoji placeholder (no photos). Replace `.team-photo` emoji with real staff photos
- [ ] **About page — company description** — verify the company history and founding year in the timeline are accurate
- [ ] **Solutions page images** — `solutions.html` solution items use emoji placeholders (`🏥`, `💓`, `🔬`, `🛏️`). Replace with real clinical photos for ICU, Cardiology, OR, General Ward sections

---

## HIGH PRIORITY — GitHub Auto-Deploy

- [ ] **Add GitHub secret** — go to https://github.com/VorakranPP/rdmedcare-netlify/settings/secrets/actions and add:
  - Name: `NETLIFY_DEPLOY_HOOK`
  - Value: `https://api.netlify.com/build_hooks/6a1cf20fbc2ce46628cd95a8`
- [ ] **Create workflow file** — create `.github/workflows/deploy.yml` via GitHub UI (the file exists locally but cannot be pushed due to token scope restrictions). Content:
  ```yaml
  name: Deploy to Netlify
  on:
    push:
      branches: [main]
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - name: Trigger Netlify build hook
          run: curl -s -X POST "${{ secrets.NETLIFY_DEPLOY_HOOK }}"
  ```

---

## MEDIUM PRIORITY — Content Improvements

- [ ] **Thai translations** — `lang.js` has some keys with placeholder or English-only translations. Review all Thai translations for accuracy and natural language
- [ ] **Product detail pages** — currently all "Learn More" buttons link to `contact.html`. Consider adding individual product detail pages or modals with full specs (especially for H-80A which has detailed specs from rdmedcare.com)
- [ ] **H-80A High Flow Humidifier specs** — from rdmedcare.com product page, full specs available. Consider adding a dedicated page or expandable spec table:
  - Flow: 2–80 L/min
  - O₂ concentration: 21–100%
  - Temp: 29–37°C (9 adjustable levels)
  - Display: 3.5-inch screen
  - Humidity compensation: -3 to +3
- [ ] **ECG BLT E65 specs** — 8-inch colour LCD, 12-channel simultaneous, 24-bit data acquisition, built-in lithium battery (500 ECG prints), USB/SD card storage, PDF/DICOM output
- [ ] **VBM Tourniquet TT20 specs** — electrically operated, Fast Choice Buttons, dual-limb capable, self-test/calibration/leak detection
- [ ] **News/Blog section** — rdmedcare.com has a news section. Consider adding a news page in the future
- [ ] **Testimonials** — rdmedcare.com has a testimonials page. Consider adding customer quotes if available

---

## MEDIUM PRIORITY — SEO & Meta

- [ ] **OG image** — `og:image` in index.html points to `assets/images/products/hfh-h80a-full.jpg`. Create a proper 1200×630px social share image
- [ ] **Thai page titles** — review `<title>` tags on all pages for Thai SEO keywords
- [ ] **Sitemap** — add `sitemap.xml` for SEO
- [ ] **robots.txt** — add `robots.txt` with sitemap reference

---

## LOW PRIORITY — Polish & UX

- [ ] **Product card hover image zoom** — CSS already has `transform: scale(1.05)` on hover. Test that it looks good on all products
- [ ] **Footer social icons** — Facebook, YouTube, LinkedIn links are real (from rdmedcare.com). LINE and Twitter links still use `#` placeholder — update with real URLs
- [ ] **Form backend integration** — contact form currently simulates submission with `setTimeout`. Consider integrating with Netlify Forms (`netlify` attribute on `<form>`), Formspree, or EmailJS for real form submission
- [ ] **Cookie/Privacy notice** — if deploying publicly, may need a PDPA (Thai data protection) cookie notice
- [ ] **404 page** — netlify.toml redirects 404s to index.html. Consider creating a proper `404.html`
- [ ] **Loading performance** — product images are PNG (up to 278KB). Consider converting to WebP format for faster loading
- [ ] **Lazy loading** — add `loading="lazy"` to all product `<img>` tags below the fold

---

## LOW PRIORITY — Design Refinements

- [ ] **Solutions page** — `solutions.html` solution images are emoji. Replace with real clinical photography
- [ ] **About page CSS vars** — some inline styles may reference old var names (e.g., `var(--radius-lg)` should be `var(--r-lg)`). Run audit
- [ ] **Mobile product card images** — test on real mobile device that product photos (aspect-ratio 4:3, contain) look good on small screens
- [ ] **Why section visual** — currently shows 4-product 2×2 grid. This works well but could be enhanced with a real "team in action" or "engineer servicing equipment" photo if available
- [ ] **Partners section** — only 3 brand partners shown (BLT, BMC, VBM). If RD Medcare distributes other brands, add them

---

## COMPLETED IN v4.0 (2026-06-01)

- [x] Fix canonical URLs on all 4 secondary pages (products, solutions, about, contact)
- [x] Fix sitemap.xml and robots.txt URLs
- [x] Replace footer emoji social icons with SVG + real links on all secondary pages
- [x] Remove fake statistics from about.html (500+ hospitals, 98% uptime)
- [x] Replace about.html certifications (removed incorrect US FDA claim)
- [x] Replace solutions.html emoji placeholders with SVG medical illustrations
- [x] Replace emoji icons in why/certifications sections with stroke SVG
- [x] Add missing CSS classes (solution-item, why-card, cta-section, contact-form-wrap, etc.)
- [x] Real contact info — phones, address, LINE ID
- [x] Business hours corrected: Mon–Fri 09:00–17:00
- [x] Copyright updated to © 2026
- [x] Netlify Forms attribute added to contact forms
- [x] Lazy loading added to product images in products.html
- [x] Created proper 404.html
- [x] netlify.toml updated to serve 404.html on 404

---

## COMPLETED ✓

- [x] Build all 5 HTML pages from scratch
- [x] Medical green design system (CSS custom properties)
- [x] Bilingual TH/EN system with localStorage persistence
- [x] Fix TDZ bug in main.js (DOM refs declared before closures)
- [x] Fix favicon data URI encoding (all 5 HTML files)
- [x] Deploy to Netlify production
- [x] Push to GitHub (main branch)
- [x] Set up Netlify deploy hook (user completes GitHub side)
- [x] Complete visual redesign (blue glassmorphism → medical green)
- [x] Download 5 real product images from rdmedcare.com
- [x] Replace all emoji product placeholders with real `<img>` tags
- [x] Update product names to real model numbers (H-80A, BLT E65, HS-20A, TT20, V6)
- [x] Replace fake hospital partner section with real brand partners (BLT, BMC, VBM)
- [x] Replace fake unverifiable statistics with real certifications (ISO 13485, CE, Thai FDA)
- [x] Replace all emoji section icons with stroke SVG icons throughout index.html
- [x] Add real social media links from rdmedcare.com
- [x] CSS: product card images use white background + object-fit:contain
- [x] CSS: hero frame uses portrait ratio (4:5) for product shots
- [x] CSS: why-section shows 4-product image grid
- [x] CSS: partner-logo-item redesigned as brand partner cards
- [x] Create PROJECT_CONTEXT.md — full project context file
- [x] Create TODO.md — prioritised task list
- [x] Create CHANGELOG.md — version history
- [x] Deploy v3.0 to Netlify production (2026-06-01)

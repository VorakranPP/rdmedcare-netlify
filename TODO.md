# RD Medcare – TODO & Pending Tasks

> Last updated: 2026-06-01 (v4.1 — translation fix, Google Maps added)

---

## CRITICAL — Needs real data from client

- [x] **Phone number** — 02-136-3479 / 02-397-0287 (updated all pages)
- [x] **Mobile / LINE number** — 090-971-6299 / LINE ID: RDmedcare (updated all pages)
- [x] **Full office address** — 497 Udomsuk Road, Bangna, Bangkok 10260 (updated all pages)
- [x] **Copyright year** — updated to © 2026
- [x] **Google Maps embed** — added real iframe in contact.html (497 Udomsuk Rd, Bangna)

---

## HIGH PRIORITY — Content & Images

- [ ] **Infusion Pump product image** — no photo yet; shows SVG placeholder. Add real photo to `assets/images/products/infusion-pump.jpg`
- [ ] **Hero image** — currently H-80A product photo. Consider a professional clinical photo showing equipment in use
- [ ] **About page — team photos** — team cards use `👤` emoji. Replace with real staff photos when available
- [ ] **About page — company timeline** — verify founding year and milestones are accurate
- [ ] **Solutions page — real clinical photos** — SVG illustrations currently in place. Replace with real ICU / Cardiology / OR / General Ward photos when available

---

## HIGH PRIORITY — GitHub Auto-Deploy

- [x] **GitHub secret added** — `NETLIFY_DEPLOY_HOOK` confirmed set in repository settings
- [x] **Workflow file created** — `.github/workflows/deploy.yml` active; push to `main` → Netlify deploy confirmed working

---

## MEDIUM PRIORITY — Content Improvements

- [ ] **Thai translations audit** — review all TH keys in `lang.js` for natural language and accuracy
- [ ] **Product detail pages** — "Learn More" buttons all link to `contact.html`. Consider per-product pages or expandable spec modals
- [ ] **H-80A specs** — Flow 2–80 L/min, FiO₂ 21–100%, Temp 29–37°C, 3.5" screen, humidity compensation ±3
- [ ] **ECG BLT E65 specs** — 8" colour LCD, 12-channel, 24-bit, 500-print battery, USB/SD, PDF/DICOM
- [ ] **VBM TT20 specs** — electric, Fast Choice Buttons, dual-limb, self-test/calibration/leak detection
- [ ] **News / Blog** — rdmedcare.com has a news section; consider future news page
- [ ] **Testimonials** — consider adding customer quotes if available

---

## MEDIUM PRIORITY — SEO & Meta

- [x] **Sitemap** — `sitemap.xml` present and URLs updated to `rdmedcare-new.netlify.app`
- [x] **robots.txt** — present with correct sitemap reference
- [ ] **OG image** — `og:image` points to product photo. Create a proper 1200×630px social share image
- [ ] **Thai page titles** — review `<title>` tags on all pages for Thai SEO keywords

---

## LOW PRIORITY — Polish & UX

- [x] **Form backend** — Netlify Forms attribute (`netlify`) added to both contact forms
- [x] **404 page** — `404.html` created; `netlify.toml` updated to serve it on 404 errors
- [x] **Lazy loading** — `loading="lazy"` added to all product images in `products.html`
- [ ] **Product card hover zoom** — CSS has `scale(1.05)` on hover; test visually on all products
- [ ] **LINE social link** — footer LINE icon still links to `#`; update when official LINE URL is available
- [ ] **Cookie / PDPA notice** — may need Thai data protection cookie notice before public launch
- [ ] **Image optimisation** — product PNGs up to 278 KB; consider converting to WebP

---

## LOW PRIORITY — Design Refinements

- [ ] **Color theme** — consider earth tone / brown-grey luxury palette (pending approval)
- [ ] **About page CSS vars audit** — check for any inline `var(--radius-lg)` that should be `var(--r-lg)`
- [ ] **Mobile product images** — test product photos (4:3, object-fit:contain) on real mobile device
- [ ] **Partners section** — only BLT, BMC, VBM shown; add other brands if applicable

---

## COMPLETED IN v4.1 (2026-06-01)

- [x] Fix missing `contact_hero_title` and `contact_hero_desc` translation keys in `lang.js` (both EN and TH)
- [x] Google Maps embed added to `contact.html` (user commit)
- [x] Contact information updated directly by client (phone, address, hours)

## COMPLETED IN v4.0 (2026-06-01)

- [x] Fix canonical URLs on all 4 secondary pages (`rdmedcare.netlify.app` → `rdmedcare-new.netlify.app`)
- [x] Fix `sitemap.xml` and `robots.txt` URLs
- [x] Replace footer emoji social icons with SVG + real links on all secondary pages
- [x] Remove fake statistics from `about.html` (500+ hospitals, 98% uptime)
- [x] Remove incorrect US FDA claim from `about.html` certifications
- [x] Replace `solutions.html` emoji images with SVG medical illustrations (ICU, Cardiology, OR, General Ward)
- [x] Replace emoji icons in why / certifications sections with stroke SVG icons
- [x] Add missing CSS classes (`solution-item`, `why-card`, `cta-section`, `contact-form-wrap`, `section-dark`, `map-placeholder`, etc.)
- [x] Real contact info — 02-136-3479 / 02-397-0287 / 090-971-6299 / LINE RDmedcare / 497 Udomsuk Rd Bangna
- [x] Business hours corrected to Mon–Fri 09:00–17:00
- [x] Copyright updated to © 2026
- [x] Netlify Forms attribute added to contact forms (`index.html` + `contact.html`)
- [x] `loading="lazy"` added to product images in `products.html`
- [x] Created proper `404.html` with navigation
- [x] `netlify.toml` updated to serve `404.html` on 404 errors

## COMPLETED IN v3.0 and earlier ✓

- [x] Build all 5 HTML pages from scratch
- [x] Medical green design system (CSS custom properties)
- [x] Bilingual TH/EN system with `localStorage` persistence
- [x] Fix TDZ bug in `main.js`
- [x] Fix favicon data URI encoding (all 5 pages)
- [x] Deploy to Netlify; push to GitHub
- [x] GitHub → Netlify auto-deploy workflow
- [x] Complete visual redesign (blue glassmorphism → medical green)
- [x] 5 real product images downloaded from rdmedcare.com
- [x] All emoji product placeholders replaced with real `<img>` tags
- [x] Real product model numbers throughout (H-80A, BLT E65, HS-20A, TT20, V6)
- [x] Fake hospital partner section replaced with real brand partners (BLT, BMC, VBM)
- [x] Fake statistics replaced with real certifications (ISO 13485, CE, Thai FDA)
- [x] Real social media links (Facebook, YouTube, LinkedIn)
- [x] Create `PROJECT_CONTEXT.md`, `TODO.md`, `CHANGELOG.md`

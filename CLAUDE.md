# CLAUDE.md — RD Medcare Netlify Project

Claude Code reads this file at the start of every session. Keep it updated whenever a feature is added or changed.

---

## Project Identity

- **Site:** RD Medcare — Thai medical equipment distributor
- **Live URL:** https://rdmedcare-new.netlify.app
- **GitHub:** https://github.com/VorakranPP/rdmedcare-netlify
- **DO NOT TOUCH:** rdmedcare.com (production site — separate repo)

---

## Rules (Always Follow)

- No redesign from scratch — continue from current state only
- No fake/unverifiable statistics (no "500+ hospitals", "98% uptime")
- No emoji as product images or section visuals
- No blue / glassmorphism / SaaS styles
- No US FDA claims — products carry Thai FDA (อย.) + CE Mark + ISO 13485
- Stroke SVG icons only (Feather/Lucide style)
- Keep all 5 pages consistent in structure and footer

---

## Stack

- Pure HTML5 / CSS3 / Vanilla JS — no framework, no build step
- Files: `index.html`, `products.html`, `solutions.html`, `about.html`, `contact.html`, `404.html`
- CSS: `assets/css/styles.css` (single file, all design tokens in `:root`)
- JS: `assets/js/main.js` (navbar, scroll, filter, animations), `assets/js/lang.js` (TH/EN i18n)
- Static hosted on Netlify — push to `main` → auto-deploy via GitHub Actions

---

## Color Theme (Current: Earth Tone Luxury)

```
--green-900: #2a1e14   deep walnut        (footer, hero bg, CTA bg)
--green-800: #3e2d20   dark chestnut      (hover darken)
--green-700: #6b4c38   warm brown         ← PRIMARY (buttons, links, accents)
--green-600: #8b6550   soft cinnamon
--green-500: #a88068   warm taupe         (primary-light)
--green-400: #c4a08a   light caramel      (accent)
--green-300: #d9bfad   blush sand         (accent-light)
--green-200: #ecdfd5   pale blush
--green-100: #f5ede8   cream
--green-50:  #faf6f3   warm ivory         (surface-tint)

--gray-50:   #f5f2ef   warm white         (surface-alt / page bg)
--gray-200:  #e0d8d2   warm sand          (borders)
--gray-600:  #6e5a4e   medium warm grey   (text-secondary)
--gray-900:  #261c14   near-black warm    (text-primary)
```

If the user asks to adjust colors: edit only `:root {}` in `styles.css` (lines 7–69).

---

## Bilingual System (TH/EN)

- Default language: Thai (`th`)
- Storage key: `localStorage.getItem('rdm_lang')` → `'th'` or `'en'`
- All translatable text: `data-i18n="key"` attribute on the element
- Translations: `assets/js/lang.js` → `window.translations` object
- `applyTranslations()` runs on `DOMContentLoaded`
- **Always add new keys to BOTH `en` and `th` sections in lang.js**
- HTML fallback text inside `data-i18n` elements should be Thai (default lang)

---

## Real Business Information

| Field | Value |
|---|---|
| Company | RD Medcare Co., Ltd. |
| Phone | 02-136-3479 / 02-397-0287 |
| Mobile / LINE | 090-971-6299 / LINE ID: RDmedcare |
| Address | 497 Udomsuk Road, Bangna Sub District, Bangna District, Bangkok 10260 |
| Email | info@rdmedcare.com |
| Business hours | Mon–Fri 09:00–17:00 |
| Facebook | https://www.facebook.com/RDMedcare |
| YouTube | https://www.youtube.com/channel/UCJwEmMHjLfQvIDCD9JPSnoQ |
| LinkedIn | https://th.linkedin.com/in/rd-medcare-b5319b108 |

---

## Real Products

| Model | Category | Brand | Image |
|---|---|---|---|
| H-80A High Flow Humidifier | Respiratory Care | BMC Medical | `hfh-h80a-full.jpg` |
| SpO₂ Accurate HS-20A | Patient Monitoring | — | `spo2-hs20a-full.png` |
| Vitalsigns BLT V6 | Patient Monitoring | BLT Medical | `vitalsigns-blt-v6-full.png` |
| ECG BLT E65 | Cardiology | BLT Medical | `ecg-blt-e65-full.png` |
| VBM Tourniquet Touch TT20 | Surgical | VBM Medical | `tourniquet-tt20-wide.jpg` |
| Infusion Pump | Infusion | — | SVG placeholder (no photo yet) |

All images in `assets/images/products/`.

---

## CSS Architecture

- All design tokens in `:root {}` — edit here to theme the whole site
- Component classes follow BEM-lite: `.product-card`, `.product-card-image`, `.product-card-body`
- Responsive via `repeat(auto-fit, minmax(...))` + media queries at 768px, 480px
- Key classes: `.solution-item`, `.why-card`, `.section-dark`, `.cta-section`, `.contact-form-wrap`, `.contact-info-card`, `.map-placeholder`, `.fade-up`, `.ticker-wrap`
- **Do not use** `.why-section` on dark-background sections — use `.section-dark` instead

---

## Caching (netlify.toml)

- HTML: `max-age=0, must-revalidate` (always fresh)
- JS (`/assets/js/*`): `max-age=0, must-revalidate` (always fresh — important for i18n updates)
- CSS (`/assets/css/*`): `max-age=0, must-revalidate` (always fresh — important for theme updates)
- Images (`/assets/images/*`): `max-age=31536000, immutable` (safe to cache long-term)

---

## Deployment

- Push to `main` → GitHub Action → Netlify deploy hook → live in ~30s
- Deploy hook: `https://api.netlify.com/build_hooks/6a1cf20fbc2ce46628cd95a8`
- Netlify site ID: `6104418e-ce4e-41a1-a2ef-5dd87209156e`
- After pushing CSS/JS changes, tell user to do **Cmd+Shift+R** (hard refresh)

---

## Common Tasks

### Add a translation key
1. Add to `translations.en` in `lang.js`
2. Add to `translations.th` in `lang.js`
3. Add `data-i18n="key"` to HTML element
4. Set fallback text inside the element to Thai

### Change color theme
Edit only `:root {}` in `assets/css/styles.css` — the `--green-*` and `--gray-*` scale values.

### Add a new page
Copy navbar + footer from an existing page. Add clean URL redirect to `netlify.toml`.

### Fix "raw key name showing" bug
Cause: key missing from `lang.js`, or browser serving cached old JS.
Fix: add key to both EN and TH in `lang.js`. Fallback HTML text should be Thai.

---

## Pending (needs client input)

- Google Maps embed company name mismatch — currently shows "J&N Enterprise" pin
- Team photos for about.html (3 team cards use `👤` emoji)
- Office/clinic photo for about.html mission section
- Real clinical photos for solutions.html (currently SVG illustrations)
- Infusion Pump product photo

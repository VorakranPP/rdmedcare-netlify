# RD Medcare — New Website

**Live:** https://rdmedcare-new.netlify.app  
**Stack:** HTML5 / CSS3 / Vanilla JS — no framework, no build step  
**Deploy:** Push to `main` → GitHub Actions → Netlify (auto, ~30s)

---

## Pages

| File | URL | Status |
|---|---|---|
| `index.html` | `/` | ✅ Complete |
| `products.html` | `/products` | ✅ Complete |
| `solutions.html` | `/solutions` | ✅ Complete |
| `about.html` | `/about` | ✅ Complete |
| `contact.html` | `/contact` | ✅ Complete |
| `404.html` | *(fallback)* | ✅ Complete |

---

## File Structure

```
rdmedcare-netlify/
├── index.html
├── products.html
├── solutions.html
├── about.html
├── contact.html
├── 404.html
├── netlify.toml          ← headers, cache rules, redirects
├── robots.txt
├── sitemap.xml
├── CLAUDE.md             ← AI session context (read first)
├── PROJECT_CONTEXT.md    ← full project background
├── TODO.md               ← pending tasks
├── CHANGELOG.md          ← version history
└── assets/
    ├── css/styles.css    ← design system (all tokens in :root)
    ├── js/lang.js        ← TH/EN translation engine
    ├── js/main.js        ← navbar, scroll, animations, form
    └── images/products/  ← real product photos
```

---

## Color Theme — Earth Tone Luxury

| Token | Value | Usage |
|---|---|---|
| `--green-700` | `#6b4c38` | Primary — buttons, links |
| `--green-900` | `#2a1e14` | Footer, hero, CTA backgrounds |
| `--green-400` | `#c4a08a` | Accent, badges |
| `--gray-50` | `#f5f2ef` | Page background |
| `--gray-900` | `#261c14` | Body text |

To change the palette: edit only `:root {}` in `assets/css/styles.css`.

---

## Bilingual (TH / EN)

- Default language: **Thai**
- Switching: `localStorage` key `rdm_lang` → `'th'` or `'en'`
- Markup: `<tag data-i18n="key">ค่า fallback ภาษาไทย</tag>`
- Translations: `assets/js/lang.js` — add new keys to **both** `en` and `th`

---

## Real Business Info (already in code)

| | |
|---|---|
| Phone | 02-136-3479 / 02-397-0287 |
| Mobile / LINE | 090-971-6299 / LINE ID: RDmedcare |
| Address | 497 Udomsuk Road, Bangna, Bangkok 10260 |
| Email | info@rdmedcare.com |
| Hours | Mon–Fri 09:00–17:00 |

---

## Still Pending (needs client)

- [ ] Team photos — `about.html` shows `👤` placeholder
- [ ] Real clinical photos — `solutions.html` uses SVG illustrations
- [ ] Infusion Pump product photo
- [ ] Google Maps pin — currently shows nearby business name

---

## Local Preview

```bash
npx serve .
# then open http://localhost:3000
```

---

## Deployment

Push to `main` triggers auto-deploy via `.github/workflows/deploy.yml`.  
After pushing JS/CSS changes, users need **Cmd+Shift+R** to clear browser cache.

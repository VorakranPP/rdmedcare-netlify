# RD Medcare – New Website

Premium healthcare website built with HTML/CSS/JavaScript, designed for Netlify deployment.

## Tech Stack
- Pure HTML5 / CSS3 / Vanilla JS (no framework, no build step)
- Google Fonts: Inter + Noto Sans Thai
- Bilingual: Thai (default) / English
- Responsive: mobile-first, tested 320px → 1440px

## Pages
| File | Route |
|------|-------|
| `index.html` | Home |
| `products.html` | Products |
| `solutions.html` | Solutions |
| `about.html` | About |
| `contact.html` | Contact |

## Assets
```
assets/
  css/styles.css   – full design system
  js/lang.js       – bilingual translation engine
  js/main.js       – interactions, scroll, filter, form
  images/          – place all images here (see REPLACE comments)
```

## Before Going Live – Replace Placeholders

Search the HTML files for `REPLACE` comments to find every placeholder:

- **Product images** – `assets/images/products/*.jpg`
- **Solution images** – `assets/images/solutions/*.jpg`
- **Team photos** – `assets/images/team/*.jpg`
- **Partner logos** – add real `<img>` tags in `.partner-logo` divs
- **Hero image** – `assets/images/hero-product.png`
- **OG image** – `assets/images/og-image.jpg` (1200×630px)
- **Logo** – update `.nav-logo-icon` emoji with real SVG/PNG
- **Favicon** – replace data-URI with real `/favicon.ico` or `/favicon.svg`
- **Phone / Email / Address** – search for `XXX` in all HTML files
- **Google Map** – replace `.map-placeholder` div in `contact.html` with `<iframe>` embed
- **Social links** – update `href="#"` in footer

## Deployment
See `DEPLOY.md` for full step-by-step instructions.

## Local Preview
```bash
# Any static server works, e.g.:
npx serve .
# or open index.html directly in browser
```

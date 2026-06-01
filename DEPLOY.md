# RD Medcare – Netlify Deployment Guide

> **Goal:** Deploy a preview site on Netlify so the team can review the new website safely, without touching the existing rdmedcare.com domain.

---

## Step 1 – Create a GitHub Repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it: `rdmedcare-netlify` (or any name)
3. Set to **Private** (recommended while reviewing)
4. Click **Create repository**

Push the project:

```bash
cd /path/to/rdmedcare-netlify
git init
git add .
git commit -m "Initial RD Medcare website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rdmedcare-netlify.git
git push -u origin main
```

---

## Step 2 – Connect GitHub to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site**
2. Choose **Import an existing project**
3. Select **GitHub** → Authorize Netlify
4. Choose your `rdmedcare-netlify` repository

**Build settings:**
| Setting | Value |
|---------|-------|
| Base directory | *(leave empty)* |
| Build command | *(leave empty)* |
| Publish directory | `.` |

5. Click **Deploy site**

Netlify will assign a URL like: `https://magical-name-123456.netlify.app`

---

## Step 3 – Auto Deploy (every git push)

After connecting GitHub, Netlify **automatically redeploys** on every `git push` to `main`.

Workflow:
```
Edit files → git add . → git commit -m "..." → git push → Netlify redeploys (< 1 min)
```

To preview a branch before merging:
```bash
git checkout -b feature/update-hero
# ... make changes ...
git push origin feature/update-hero
```
Netlify creates a **Deploy Preview URL** for each branch/PR automatically.

---

## Step 4 – Set a Custom Netlify Subdomain (optional)

1. In Netlify dashboard → **Site settings** → **Domain management**
2. Click **Options** next to the auto-generated name
3. Choose **Edit site name** → enter `rdmedcare-preview` (or similar)
4. Your site becomes: `https://rdmedcare-preview.netlify.app`

This is your **safe preview URL** to share with stakeholders before touching rdmedcare.com.

---

## Step 5 – Connect rdmedcare.com (when ready to go live)

> ⚠️ **Only do this when the new site is fully approved.** This will replace the existing website.

### Option A – Point DNS to Netlify (recommended)

1. Netlify dashboard → **Domain management** → **Add custom domain**
2. Enter: `rdmedcare.com` → click **Verify**
3. Netlify shows the required DNS records (typically a CNAME or A record)
4. Log in to your domain registrar (GoDaddy / Namecheap / etc.)
5. Update DNS records as instructed by Netlify
6. DNS propagation: **10 min – 48 hours**

### Option B – Keep DNS elsewhere, use Netlify as CDN

Add these records at your registrar:
```
Type  Name    Value
A     @       75.2.60.5
CNAME www     <your-site>.netlify.app
```

---

## Step 6 – SSL / HTTPS (Free via Let's Encrypt)

Netlify handles SSL automatically once your domain is connected.

1. After adding the custom domain, go to **Domain management** → **HTTPS**
2. Click **Verify DNS configuration**
3. Click **Provision certificate**
4. Certificate is issued in ~1 minute
5. Enable **Force HTTPS** to redirect all HTTP traffic to HTTPS

---

## Step 7 – Redirect Old Domain (if migrating from another host)

If rdmedcare.com was previously hosted elsewhere and you want to ensure old URLs still work, add redirect rules to `netlify.toml`:

```toml
# Redirect old URL patterns to new ones (example)
[[redirects]]
  from   = "/old-page"
  to     = "/products.html"
  status = 301

# Redirect www to apex (or vice versa)
[[redirects]]
  from   = "https://www.rdmedcare.com/*"
  to     = "https://rdmedcare.com/:splat"
  status = 301
  force  = true
```

For a complete domain migration, also add the old domain as a **domain alias** in Netlify so it responds to both.

---

## Rollback

If anything goes wrong after switching, Netlify keeps every previous deploy:

1. **Deploys** tab in Netlify dashboard
2. Find a previous deploy → click **Publish deploy**
3. The site reverts instantly — no downtime

---

## Environment Variables (if needed later)

For form handling or API keys, store secrets in Netlify:
1. **Site settings** → **Environment variables** → **Add variable**
2. Never commit `.env` files to GitHub

---

## Checklist Before Going Live

- [ ] All `REPLACE` placeholder comments resolved (see README.md)
- [ ] Real phone / email / address updated in all pages
- [ ] Google Map embed added to contact.html
- [ ] OG image uploaded (assets/images/og-image.jpg, 1200×630px)
- [ ] Favicon set (replace data-URI in `<head>`)
- [ ] Contact form connected to backend (Netlify Forms or external service)
- [ ] Analytics added (Google Analytics / Plausible)
- [ ] sitemap.xml URLs updated to final domain
- [ ] robots.txt Sitemap URL updated to final domain
- [ ] SSL certificate provisioned ✓
- [ ] Force HTTPS enabled ✓
- [ ] Test on mobile devices (iOS Safari + Android Chrome)
- [ ] Performance audit: Lighthouse score > 90 on mobile

---

*Document version 1.0 – RD Medcare 2024*

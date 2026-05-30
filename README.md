# InterestDecor — Astro Website

## 🚀 Setup

```bash
npm install
npm run dev
```

Open http://localhost:4321/

## 📁 Structure

```
src/
├── content/blog/     ← Your blog posts (markdown files)
├── pages/            ← Site pages (index, categories, about, contact)
├── layouts/          ← BaseLayout + BlogLayout
├── components/       ← PostCard component
└── styles/           ← global.css (all your styling)

public/
├── images/           ← All site images
└── admin/            ← Decap CMS (access at /admin/)
```

## ✍️ Writing a New Blog Post

### Option A — CMS (Recommended)
1. Go to https://interestdecor.com/admin/
2. Login with GitHub
3. Click "New Blog Post"
4. Fill in all fields and write content
5. Click Publish → auto-deploys in ~30 seconds

### Option B — Directly in VS Code
Create a file in `src/content/blog/your-slug.md`:

```md
---
title: "Your Blog Title"
description: "SEO description"
excerpt: "Card summary shown on homepage"
category: "Home Decor"
categorySlug: "home-decor"
date: 2026-06-15
displayDate: "Jun 15, 2026"
readTime: "8 min read"
heroImage: "/images/your-image.jpg"
heroAlt: "Image description"
author: "Mashood Elahi"
keywords: "keyword1, keyword2"
toc:
  - { label: "Section One", href: "#section-one" }
  - { label: "Section Two", href: "#section-two" }
---

Your blog content here in markdown...

## Section One

Content...
```

Push to GitHub → Vercel auto-deploys.

## 🎨 Categories

- `home-decor` → Home Decor
- `kitchen-gardening` → Kitchen Gardening
- `floral-arrangements` → Floral Arrangements
- `diy-crafts` → DIY & Crafts

## 🛠️ Build

```bash
npm run build    # production build
npm run preview  # preview production build locally
```

## 🌐 Deployment

Push to GitHub → Vercel auto-deploys (connected via GitHub integration).

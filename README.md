# Sai Ruthvik Munugoti — Portfolio

Personal portfolio site for **Sai Ruthvik Munugoti**, AI/ML Engineer
(M.S. Computer Science, Texas Tech University).

**Live:** https://sairuthvik.vercel.app

## Overview

A lightweight, static multi-page site — no framework and no build step. Every
page shares a single stylesheet and the [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans)
typeface, on a warm off-white theme with a muted green accent.

## Structure

| File | Page |
| --- | --- |
| `index.html` | Home — hero and a numbered index of the site |
| `experience.html` | Research and internship timeline |
| `projects.html` | Shipped systems and research (incl. an inline SVG architecture diagram) |
| `skills.html` | Skills groups and education |
| `contact.html` | Get in touch — Email / LinkedIn / GitHub |
| `style.css` | Shared stylesheet (design tokens as CSS variables) |

## Local preview

No dependencies. Serve the folder with any static server, e.g.:

```bash
python -m http.server 4321
```

Then open http://localhost:4321.

## Deployment

Hosted on [Vercel](https://vercel.com) as static files (no build command).
The commit history walks through how the site came together, step by step.

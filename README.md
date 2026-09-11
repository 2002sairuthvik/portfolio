# Sai Ruthvik Munugoti — Portfolio

Personal portfolio for **Sai Ruthvik Munugoti**, AI/ML Engineer
(M.S. Computer Science, Texas Tech University).

**Live:** https://sairuthvik.vercel.app

## Stack

A single-page app built with **React + TypeScript + Vite**, styled with
**Tailwind CSS**, routed with **React Router**. It began as a static multi-page
HTML site and was rebuilt component-by-component (the git history walks through
each step). Deployed on **Vercel** as a static build.

## Structure

```
index.html            Vite entry (mounts React into #root)
vite.config.ts        Vite + React + Tailwind plugins
vercel.json           SPA rewrite so client-side routes deep-link correctly
src/
  main.tsx            BrowserRouter + renders <App/>
  App.tsx             the route table (path -> page)
  index.css           Tailwind import + design tokens (@theme) + base styles
  components/         Header, Footer, Layout, Entry, ProjectCard, Tag, ...
  pages/              Home, Experience, Projects, Skills, Contact
  data/               typed data arrays the pages map over
```

## Develop

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
```

## Build

```bash
npm run build    # type-check + bundle to dist/ (the static site Vercel serves)
npm run preview  # preview the production build locally
```

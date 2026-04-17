# Tayyab Iqbal — Portfolio

**Software engineer** shipping product UI in **React & TypeScript**, with full-stack ownership when the problem needs it. This repo is the **source for my personal site**—built as a real front-end exercise, not a theme dump.

---

### Live site

| | |
|--|--|
| **Custom domain** | [tayyab.ai](https://tayyab.ai) |
| **GitHub Pages** | [tayyab12308.github.io](https://tayyab12308.github.io) |

**Resume:** [PDF in `public/`](./public/Tayyab_Iqbal_Resume.pdf) (also linked from the site).

---

### Why this exists (for hiring managers)

The site is intentionally **opinionated**: editorial layout, motion with purpose, mobile-first navigation, and case-style work—not a generic “hero + three cards” template. If you’re evaluating **product sense + UI execution + attention to detail**, you’re in the right place.

**What the implementation shows**

- **React 18** SPA with a deliberate information architecture (rail nav, sections, story-driven work blocks).
- **Motion** (Framer Motion) for hero and in-view transitions, with reduced-motion awareness where it matters.
- **Smooth scrolling** (Lenis) tuned for feel without fighting the platform on small screens.
- **Static hosting done right**: Vite build → `dist/` → GitHub Actions → GitHub Pages (see [Deploy](#deploy) so production never serves raw `.jsx`).

---

### Stack

| Layer | Choice |
|-------|--------|
| UI | React 18 |
| Tooling | Vite 5, ESLint 9 |
| Styling | CSS (design tokens + layout system in `src/App.css`) |
| Motion | Framer Motion |
| Scroll | Lenis |

---

### Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build   # production bundle → dist/
npm run preview # serve dist locally
npm run lint
```

---

### Deploy

Publishing is automated via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml): **build with Node 20 → upload `dist/` → GitHub Pages**.

**Repo settings:** *Settings → Pages → Build and deployment → Source* must be **GitHub Actions**. If Pages is set to “Deploy from a branch” on the repo root, the live site will try to load `/src/main.jsx` as a static file and break (wrong MIME type). After any settings change, wait for the workflow to finish, then hard-refresh.

Custom domain records live in [`CNAME`](./CNAME).

---

### Contact

| | |
|--|--|
| **Email** | [tayyab12308@gmail.com](mailto:tayyab12308@gmail.com) |
| **LinkedIn** | [linkedin.com/in/tayyab-iqbal](https://www.linkedin.com/in/tayyab-iqbal/) |
| **GitHub** | [@Tayyab12308](https://github.com/Tayyab12308) |

*Open to full-time software engineering roles where I can own features end-to-end and raise the bar on frontend craft.*

---

### License

Site content and design © Tayyab Iqbal. Code in this repo is provided for **portfolio / evaluation** purposes unless otherwise noted.

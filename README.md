# Tayyab Iqbal — Portfolio (React + Vite)

## GitHub Pages (important)

This site is deployed with **GitHub Actions** using the workflow in `.github/workflows/deploy.yml`, which publishes the Vite **`dist/`** output.

In your GitHub repo: **Settings → Pages → Build and deployment → Source** must be **GitHub Actions**.

If Pages is set to **Deploy from a branch** using the repository root, browsers will load `/src/main.jsx` as a static file and you will see errors like **MIME type `text/jsx`** and the app will not run.

After changing the Pages source, wait for the “Deploy to GitHub Pages” workflow to finish, then hard-refresh the site.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

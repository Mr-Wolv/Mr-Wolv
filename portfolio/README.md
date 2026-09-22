# Muhammad Hedia Abd-Elhamed — Portfolio

A dark, engineering-focused personal portfolio built with React + Vite and deployed as a static site through GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

The portfolio is designed for the GitHub Pages project site:

`https://mr-wolv.github.io/Mr-Wolv/`

The Vite base path is configured for `/Mr-Wolv/` and the repository deployment workflow publishes the built `dist/` directory to the `gh-pages` branch.

## GitHub Pages activation

The repository workflow builds the site and publishes `portfolio/dist` to the `gh-pages` branch.
After the first successful workflow run, enable GitHub Pages for this repository from **Settings → Pages** and select **Deploy from a branch → `gh-pages` / `/ (root)`**.

The CV is published with the site at `Muhammad_Hedia_Abd-Elhamed_CV.pdf` and is linked from the portfolio navigation and hero.

## V1 goals

- Backend/software-engineering positioning
- Strong project evidence rather than a résumé dump
- MerHouse as the flagship project
- Concrete secondary projects instead of generic project categories
- Academic achievement visible without dominating the site
- Mobile responsive
- Static deployment with no backend dependency

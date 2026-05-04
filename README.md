# NSW Mesh Wiki

This repository contains the NSW Mesh documentation wiki. It is built with Docusaurus and deployed to GitHub Pages by GitHub Actions.

## Local Development

```bash
npm install
npm run start
```

The local site runs at `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run serve
```

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds the site on pushes to `main` and publishes the generated `build/` directory with GitHub Pages.

In GitHub, set **Settings > Pages > Build and deployment > Source** to **GitHub Actions**.

If the repository name or Pages URL differs from the defaults, set these repository variables:

- `DOCUSAURUS_URL`, for example `https://nswmesh.github.io`
- `DOCUSAURUS_BASE_URL`, for example `/NSWMesh/`

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

### Repository setup

1. Create a new repository under `https://github.com/mukw-labs/`.
2. Add the remote locally:

```bash
git remote add origin https://github.com/mukw-labs/<REPO>.git
```

3. Push the repository:

```bash
git push -u origin main
```

### Pages URL configuration

If the GitHub Pages URL differs from the defaults, set these repository variables in GitHub:

- `DOCUSAURUS_URL`, for example `https://mukw-labs.github.io`
- `DOCUSAURUS_BASE_URL`, for example `/your-repo-name/`

### Local development configuration

For local builds, optionally set the repository override:

```bash
export DOCUSAURUS_REPOSITORY=mukw-labs/<REPO>
export DOCUSAURUS_URL=https://mukw-labs.github.io
export DOCUSAURUS_BASE_URL=/<REPO>/
```

This ensures Docusaurus uses the correct repo path when building documentation links and page URLs.

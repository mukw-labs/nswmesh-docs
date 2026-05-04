---
title: Brand Guidelines
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Brand Guidelines

Use `waranode.svg` as the source mark. Use the derived logo files in `static/img/` for site and documentation surfaces.

## Logo

The text beneath the node mark is:

- `NSW`
- `Mesh`

On dark backgrounds, `NSW` should be white or cream. On light backgrounds, `NSW` should use navy. `Mesh` should be wide-spaced text with a left-to-right gradient from orange to red/pink.

Logo typography:

- `NSW`: Stack Sans Notch, Bold.
- `MESH`: IBM Plex Sans, SemiBold or Bold, with wide letter spacing.

## Logo Files

<div className="nswmesh-asset-grid">
  <a className="nswmesh-asset" href={useBaseUrl('/img/waranode.svg')}>
    <span className="nswmesh-asset__preview nswmesh-asset__preview--light"><img src={useBaseUrl('/img/waranode.svg')} alt="" /></span>
    <strong>waranode.svg</strong>
    <span>Source node mark and mark-only logo.</span>
  </a>
  <a className="nswmesh-asset" href={useBaseUrl('/img/logo-primary.svg')}>
    <span className="nswmesh-asset__preview nswmesh-asset__preview--light"><img src={useBaseUrl('/img/logo-primary.svg')} alt="" /></span>
    <strong>logo-primary.svg</strong>
    <span>Stacked logo for light backgrounds.</span>
  </a>
  <a className="nswmesh-asset" href={useBaseUrl('/img/logo-primary-dark.svg')}>
    <span className="nswmesh-asset__preview nswmesh-asset__preview--dark"><img src={useBaseUrl('/img/logo-primary-dark.svg')} alt="" /></span>
    <strong>logo-primary-dark.svg</strong>
    <span>Stacked logo for dark backgrounds.</span>
  </a>
  <a className="nswmesh-asset" href={useBaseUrl('/img/logo-horizontal.svg')}>
    <span className="nswmesh-asset__preview nswmesh-asset__preview--light"><img src={useBaseUrl('/img/logo-horizontal.svg')} alt="" /></span>
    <strong>logo-horizontal.svg</strong>
    <span>Horizontal logo for light backgrounds.</span>
  </a>
  <a className="nswmesh-asset" href={useBaseUrl('/img/logo-horizontal-dark.svg')}>
    <span className="nswmesh-asset__preview nswmesh-asset__preview--dark"><img src={useBaseUrl('/img/logo-horizontal-dark.svg')} alt="" /></span>
    <strong>logo-horizontal-dark.svg</strong>
    <span>Horizontal logo for dark backgrounds.</span>
  </a>
  <a className="nswmesh-asset" href={useBaseUrl('/img/favicon.svg')}>
    <span className="nswmesh-asset__preview nswmesh-asset__preview--dark nswmesh-asset__preview--favicon"><img src={useBaseUrl('/img/favicon.svg')} alt="" /></span>
    <strong>favicon.svg</strong>
    <span>Simplified square browser icon.</span>
  </a>
</div>

## Colour Palette

<div className="nswmesh-swatch-grid">
  <div className="nswmesh-swatch">
    <div className="nswmesh-swatch__colour" style={{background: '#FF6A00'}} />
    <div className="nswmesh-swatch__meta"><strong>Primary Gradient Start</strong><code>#FF6A00</code></div>
  </div>
  <div className="nswmesh-swatch">
    <div className="nswmesh-swatch__colour" style={{background: '#E11D48'}} />
    <div className="nswmesh-swatch__meta"><strong>Primary Gradient End</strong><code>#E11D48</code></div>
  </div>
  <div className="nswmesh-swatch">
    <div className="nswmesh-swatch__colour" style={{background: '#F43F5E'}} />
    <div className="nswmesh-swatch__meta"><strong>Accent</strong><code>#F43F5E</code></div>
  </div>
  <div className="nswmesh-swatch">
    <div className="nswmesh-swatch__colour" style={{background: '#0F172A'}} />
    <div className="nswmesh-swatch__meta"><strong>Dark Background</strong><code>#0F172A</code></div>
  </div>
  <div className="nswmesh-swatch">
    <div className="nswmesh-swatch__colour" style={{background: '#6B7280'}} />
    <div className="nswmesh-swatch__meta"><strong>Neutral</strong><code>#6B7280</code></div>
  </div>
  <div className="nswmesh-swatch">
    <div className="nswmesh-swatch__colour" style={{background: '#F8FAFC'}} />
    <div className="nswmesh-swatch__meta"><strong>Light Background</strong><code>#F8FAFC</code></div>
  </div>
</div>

## Usage

- Nodes and connecting lines use the orange-to-red/pink gradient only.
- Text uses navy or white/cream.

## Typography

- Logo `NSW`: Stack Sans Notch Bold.
- Logo `MESH`: IBM Plex Sans SemiBold or Bold with wide letter spacing.
- Documentation headings and UI highlights: Sora.
- Body text, dashboards, and documentation: Inter.
- Fallbacks: `system-ui, sans-serif`.

## Spacing And Sizing

- Minimum icon size: 24px.
- Preferred UI icon size: 32-48px.
- Maintain clear space around the logo equal to the height of the centre node.

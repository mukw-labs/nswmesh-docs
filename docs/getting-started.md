---
id: getting-started
title: Getting Started
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import {DISCORD_INVITE_URL} from '@site/src/constants/links';

# Getting Started

NSW Mesh uses LoRa-based mesh networking for low-power, long-range text communication without relying on mobile coverage or normal internet access.

The first decision is which firmware and network style you want to use: MeshCore or Meshtastic.

<div className="nswmesh-choice-grid">
  <a className="nswmesh-choice-card nswmesh-choice-card--recommended" href={useBaseUrl('/meshcore/overview')}>
    <img src={useBaseUrl('/img/meshcore.svg')} alt="" aria-hidden="true" />
    <span>
      <strong>MeshCore</strong>
      <em>Recommended for most NSW Mesh participants</em>
    </span>
  </a>
  <a className="nswmesh-choice-card" href={useBaseUrl('/meshtastic/overview')}>
    <img src={useBaseUrl('/img/meshtastic.svg')} alt="" aria-hidden="true" />
    <span>
      <strong>Meshtastic</strong>
      <em>Good for small groups, portable use, and experimentation</em>
    </span>
  </a>
</div>

If you are not sure which path to choose, join the <a href={DISCORD_INVITE_URL}>NSW Mesh Discord</a> and ask the community what is currently recommended.

## MeshCore Or Meshtastic

NSW Mesh started around Meshtastic. Over the last 12 months, most local activity has shifted toward MeshCore, with roughly 90% of the active NSW Mesh network now using MeshCore.

Meshtastic is still useful and well supported, especially for small groups, portable use, and people who want a mature phone-app experience. MeshCore is now the preferred path for most NSW Mesh participants because it better suits planned community infrastructure.

## Why MeshCore Is Usually Recommended

- More efficient use of airtime in denser networks.
- Repeater-focused design that suits fixed nodes on hills, rooftops, and other good sites.
- Less unnecessary rebroadcast traffic from normal user devices.
- Better scalability for larger regional networks.
- Higher hop-count headroom than Meshtastic.
- Message delivery feedback and more deliberate routing behaviour.

Start here: [MeshCore overview](/meshcore/overview)

## When Meshtastic Still Makes Sense

- You want the easiest phone-app onboarding.
- You are using a small group of moving users, such as a hike, ride, event, or temporary activity.
- You already have Meshtastic hardware and want to experiment before changing firmware.
- You want to learn the platform that NSW Mesh originally started with.

Start here: [Meshtastic overview](/meshtastic/overview)

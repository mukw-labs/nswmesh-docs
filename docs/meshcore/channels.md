---
title: Channels
---

# Channels

MeshCore channels are used to separate different kinds of conversations on the mesh. Keep public traffic simple and predictable so new users can find help, test their node, and understand which channel is appropriate for their message.

## Channel Types

| Type | How it works | Typical use |
| --- | --- | --- |
| Public | The default shared channel available to MeshCore users. | General chat, first contact, and simple coordination. |
| Hashtag | A named channel with a key generated from the channel name. | Regional chat, topic channels, testing, and repeatable community channels. |
| Private | A channel using a private key shared only with trusted participants. | Small teams, event operations, or conversations that should not be readable by the broader mesh. |

Public and hashtag channels should be treated as public. They may be heard by repeaters, observers, and other users, and they may appear in internet-connected tools if observers are present.

Private channels are only private if the key stays private. Do not reuse a private channel name or key for unrelated groups.

## Current Channels

| Channel | Key | Suggested region scope | Purpose |
| --- | --- | --- | --- |
| Public | Public Channel | None | General chat for all mesh users. |
| Test | `#test` | All users | Connection testing. Bots may auto-reply to `test`, `ping`, or `path` where available. |
| Emergency | `#emergency` | All users | Emergency communications only. |
| Sydney | `#sydney` | `au-nsw-syd` | Sydney metro conversation and coordination. |
| NSW Wide | `#nsw` | `au-nsw` | State-wide coordination. |
| Macarthur | `#macarthur` | `au-nsw-syd` | Macarthur conversation and coordination. |
| Nepean | `#nepean` | `au-nsw-syd` | Nepean conversation and coordination. |
| Central Coast | `#centralcoast` | `au-nsw-cc` | Central Coast conversation and coordination. |
| Illawarra | `#illawarra` | `au-nsw-wol` | Illawarra conversation and coordination. |
| Newcastle | `#newcastle` | `au-nsw-ntl` | Newcastle and Hunter conversation and coordination. |

Check with the NSW Mesh community before creating a new long-lived regional or operational channel.

## Region Scopes

Region scopes help restrict propagation of scoped channels across the wider MeshCore mesh. Use the smallest scope that makes sense so local traffic stays local where supported.

Public cannot be scoped.

Use lower-case components separated by hyphens.

Format:

```text
<country>-<state>-<iata>
```

Example:

```text
au-nsw-syd
```

In this format:

| Part | Example | Meaning |
| --- | --- | --- |
| Country | `au` | Australia. |
| State | `nsw` | New South Wales. |
| IATA | `syd` | The nearest practical airport or regional IATA-style code. |

Examples:

| Scope | Suggested use |
| --- | --- |
| `au` | Australia-wide scoped traffic. |
| `au-nsw` | NSW-wide scoped traffic. |
| `au-nsw-syd` | Sydney metro scoped traffic. |
| `au-nsw-cc` | Central Coast scoped traffic. |
| `au-nsw-ntl` | Newcastle and Hunter scoped traffic. |
| `au-nsw-wol` | Illawarra scoped traffic. |

A Sydney-specific message belongs in a Sydney channel scoped to `au-nsw-syd`; a state-wide message belongs in an NSW channel scoped to `au-nsw`; general first contact can stay in Public.

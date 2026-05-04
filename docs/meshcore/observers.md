---
title: Observers
---

# MeshCore Observers

Observers are software services that listen to MeshCore traffic and forward messages or raw packets to other resources over the internet. They are commonly used to feed maps, dashboards, analyzers, and other visibility tools through MQTT.

An observer should be a listen-only service. It should not inject messages into the mesh, bridge internet chat into LoRa, or automate replies back onto the radio network.

## MQTT Destinations

The following MQTT services can receive MeshCore observer data. Confirm the current settings with each service before deploying a permanent observer.

| Service | Server | Port | Protocol | Auth | Format | Config | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [EastMesh](https://map.eastmesh.au) | `mqtt2.eastmesh.au` | `443` | WebSockets + TLS | auth token | meshcore/\{IATA\}/\{PUBLIC_KEY\}/packets | <a href="https://eastmesh.au/" aria-label="EastMesh observer configuration" title="Config document">↗</a> | <a href="https://core.eastmesh.au/#/observers" aria-label="EastMesh observer status" title="Observer status">↗</a> |
| [WMCD](https://map.meshcore.dev/) | `mqtt.wmcd.net.au` | `1883` | MQTT | User/pass: `nswmesh`/`nswmesh` | meshcore/\{IATA\}/\{PUBLIC_KEY\}/packets |TBC | <a href="https://corescope.wmcd.net.au:8443/#/observers" aria-label="WMCD observer status" title="Observer status">↗</a> |
| [LetsMesh](https://analyzer.letsmesh.net/map) | `mqtt-us-v1.letsmesh.net` or `mqtt-eu-v1.letsmesh.net` | `443` | WebSockets + TLS | auth token | meshcore/\{IATA\}/\{PUBLIC_KEY\}/packets | <a href="https://analyzer.letsmesh.net/observer/onboard" aria-label="LetsMesh observer configuration" title="Config document">↗</a> | <a href="https://analyzer.letsmesh.net/status/observers?region=SYD" aria-label="LetsMesh observer status" title="Observer status">↗</a> |

## Notes

Use observers to improve visibility of the mesh, not to create another active node. A good observer placement is somewhere that can hear useful mesh traffic and has stable internet access.

If you are unsure which destination to use, ask in the NSW Mesh Discord before setting up a public observer.

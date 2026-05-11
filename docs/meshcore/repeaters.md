---
title: Repeaters
---

# MeshCore Repeaters

Repeaters are the backbone of a MeshCore mesh. A good repeater location can extend coverage across suburbs, valleys, ridgelines, and walking tracks.

## Repeater List

This list is for public MeshCore repeaters that NSW Mesh users can recognise in the app. Match the repeater band with the local frequency profile before deploying or changing a fixed node. See the [MeshCore frequency profiles](./frequency) section for the current NSW Mesh band guidance.

<div className="nswmesh-repeater-table-scroll">
  <table className="nswmesh-repeater-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Public Key</th>
        <th>Band</th>
        <th>Co-owner</th>
        <th>Path Mode</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>🐄 Hawkesbury Hts B</td>
        <td title="64BEEFB0250AE525979E02F1EBDBCE266A1ACCCFF2CBFFB24EC9D99236E09D59">64BEEFB0250AE525979E02F1EBDBCE266A1ACCCFF2CBFFB24EC9D99236E09D59</td>
        <td>Aus (Mid)</td>
        <td>Yes</td>
        <td>2-byte</td>
      </tr>
    </tbody>
  </table>
</div>

## Naming

Use a clear name that helps other users understand where the repeater is.

Recommended format:

`<Emoji> <Location>`

Examples:

- `☢️ Bradbury`
- `🦘 Horsley Park`
- `🏍️ Ashfield Nth`
- `🐄 Hawkesbury Hts A`

Use a suburb, town, landmark, hill, or other recognisable location. If there are multiple repeaters in the same area, add a suffix such as `A`, `B`, `C`, `North`, or `East`.

You may need to shorten words to fit the character limit, such as `Nth` for `North` or `Hts` for `Heights`. Emojis can use more characters than they appear to, so keep names short.

The emoji can reference the owner if preferred, but it is not enforced.

## Location

Configure a GPS location if possible.

The location of your repeater does not have to be exactly precise, but other mesh users will appreciate it if it is as close as practical to the real location. This makes the MeshCore app antenna signal and line-of-sight tools more useful.

## Clock Sync

Do not forget to sync the clock after a reboot.

## Recommended Settings

These NSW Mesh defaults vary from the MeshCore defaults.

| Setting | Recommended Value |
| --- | --- |
| Flood Advert | 24 hours |
| Zero Hop Advert | 0 minutes (disabled) |
| Double Ack | Enabled |
| Path Hash Size | 2 Bytes |

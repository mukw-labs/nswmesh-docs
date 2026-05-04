// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'MeshCore',
      collapsed: false,
      items: [
        'meshcore/overview',
        'meshcore/frequency',
        'meshcore/channels',
        'meshcore/repeaters',
        'meshcore/observers',
        'meshcore/maps'
      ]
    },
    {
      type: 'category',
      label: 'Meshtastic',
      collapsed: false,
      items: [
        'meshtastic/overview'
      ]
    },
    {
      type: 'doc',
      id: 'partners/overview',
      label: 'Partners'
    },
    'other-mesh-communities',
    'brand-guidelines',
    'contributing'
  ]
};

module.exports = sidebars;

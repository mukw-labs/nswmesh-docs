// @ts-check

const repo = process.env.DOCUSAURUS_REPOSITORY || process.env.GITHUB_REPOSITORY || 'mukw-labs/NSWMesh';
const [organizationName, projectName] = repo.split('/');
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NSW Mesh Wiki',
  tagline: 'Community documentation for NSW Mesh operators, builders, and contributors.',
  favicon: 'img/favicon.svg',

  url: process.env.DOCUSAURUS_URL || `https://${organizationName}.github.io`,
  baseUrl: process.env.DOCUSAURUS_BASE_URL || `/${projectName}/`,

  organizationName,
  projectName,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({docPath}) => `https://github.com/${repo}/edit/main/docs/${docPath}`,
          showLastUpdateAuthor: isGitHubActions,
          showLastUpdateTime: isGitHubActions
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'NSW Mesh',
          src: 'img/logo-horizontal.svg',
          srcDark: 'img/logo-horizontal-dark.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki'
          },
          {
            href: `https://github.com/${repo}`,
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {label: 'Getting Started', to: '/getting-started'}
            ]
          },
          {
            title: 'Project',
            items: [
              {label: 'GitHub', href: `https://github.com/${repo}`}
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NSW Mesh. Some of this website and its content may have used AI-assisted generation.`
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula
      },
      colorMode: {
        respectPrefersColorScheme: true
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3
      }
    })
};

module.exports = config;

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const path = require("path");

const config: Config = {
  title: 'FTC Everybot Docs',
  tagline: 'FTC Everybot Docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/FTC-Everybot-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Robonauts-Everybot', // Usually your GitHub org/user name.
  projectName: 'Everybot-Docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    //locales: ['en', 'fr', 'fa'],
    //localeConfigs: {
    //  en: {
    //   htmlLang: 'en-GB',
    // },
    // You can omit a locale (e.g. fr) if you don't need to override the defaults
    //  fa: {
    //    direction: 'rtl',
    //},
    //},
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()
              } THE ROBONAUTS`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 4),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }) satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      path.join(__dirname, '/importer'),
      { // this is the options object passed to the plugin
        routes: [
          { // using Route schema from react-router
            path: '/FTC-Everybot-Docs/importer',
            exact: false, // this is needed for sub-routes to match!
            component: '/importer/Importerv3.js',
          }
        ]
      },
    ],
    [
      require.resolve('@yapplejack/docusaurus-plugin-ideal-image'),
      {
        quality: 100,
        max: 1800, // max resized image's size.
        min: 600, // min resized image's size. if original is lower, use that size.
        steps: 3, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: './static/img/everybot-logo.svg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'FTC Everybot Documentation',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/Everybot E No BG on White.svg',
          srcDark: 'img/Everybot E No BG.svg',
          height: 100,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '2025 Everybot Documentation',
          },
          {
            type: 'docSidebar', sidebarId: 'everybotResources', label: 'FTC Everybot Resources', position: 'left'
          },
          { to: '/blog', label: 'Updates', position: 'left' },
          //{
          //  type: 'localeDropdown',
          //  position: 'left',
          //},
          {
            href: 'https://www.118everybot.org/',
            label: 'Everybot Hub Website',
            position: 'right',
          },
          {
            href: 'https://robonauts-everybot.github.io/Everybot-Docs/',
            label: 'FRC Everybot Docs',
            position: 'right',
          },
          //{to: '/resources', label: 'Team Resources', position: 'left'}, 
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'The Robonauts',
                href: 'https://www.118robonauts.org/',
              },
              {
                label: 'Chief Delphi',
                href: 'https://www.chiefdelphi.com/t/the-2023-robonauts-everybot-low-resource-build/421783',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/n6CUjpmDV6',
              },

            ],
          },
          {
            title: 'Media',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/Everybot118',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/watch?v=def5QH7UUIU',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/robonauts118/?ref=search&__tn__=%2Cd%2CP-R&eid=ARBZvFP989_-pZR1dH-xcUnEV8X-p8AfJM1VI-32lJC85VAWmPu1eDtH486B-EeNrA9dTS32brY6mCg1',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/robonauts118/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} THE ROBONAUTS`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['java'],
      },
    }),
};

export default config;

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SemEval 2025 - Task 2: EA-MT',
  tagline: 'Entity-Aware Machine Translation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sapienzanlp.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ea-mt/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SapienzaNLP', // Usually your GitHub org/user name.
  projectName: 'ea-mt', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          path: 'news',
          routeBasePath: 'news',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'SemEval 2025 - Task 2: EA-MT',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'taskSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/news', label: 'News', position: 'left'},
          {
            href: 'https://github.com/sapienzanlp/ea-mt',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Task Description',
                to: '/docs/task/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Google Group',
                href: 'https://groups.google.com/a/uniroma1.it/g/semeval-2025-task-2-ea-mt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/news',
              },
              {
                label: 'Sapienza NLP',
                href: 'https://nlp.uniroma1.it',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Simone Conia. <a href="https://www.flaticon.com/free-icons/" title="icons">Icons created by Freepik - Flaticon</a>. Website built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

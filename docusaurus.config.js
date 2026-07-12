// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stream Toolkit',
  tagline: '直播工具箱',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'penguinhuhu',
  projectName: 'streamingTool-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'zh-CN', 'en', 'es', 'pt', 'ja', 'ru', 'de', 'fr', 'ko'],
    localeConfigs: {
      'zh-TW': { label: '繁體中文', direction: 'ltr', htmlLang: 'zh-TW' },
      'zh-CN': { label: '简体中文', direction: 'ltr', htmlLang: 'zh-CN' },
      'en':    { label: 'English',  direction: 'ltr', htmlLang: 'en' },
      'es':    { label: 'Español',  direction: 'ltr', htmlLang: 'es' },
      'pt':    { label: 'Português',direction: 'ltr', htmlLang: 'pt' },
      'ja':    { label: '日本語',    direction: 'ltr', htmlLang: 'ja' },
      'ru':    { label: 'Русский',  direction: 'ltr', htmlLang: 'ru' },
      'de':    { label: 'Deutsch',  direction: 'ltr', htmlLang: 'de' },
      'fr':    { label: 'Français', direction: 'ltr', htmlLang: 'fr' },
      'ko':    { label: '한국어',    direction: 'ltr', htmlLang: 'ko' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Stream Toolkit',
        logo: {
          alt: 'Stream Toolkit Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Stream Toolkit. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

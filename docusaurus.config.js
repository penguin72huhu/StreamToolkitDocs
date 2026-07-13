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

  url: 'https://penguin72huhu.github.io',
  baseUrl: '/StreamToolkitDocs/',

  organizationName: 'penguin72huhu',
  projectName: 'StreamToolkitDocs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-TW',
    locales: [
      'zh-TW', 'zh-CN', 'en', 'es', 'es-ES', 'pt-BR', 'pt-PT', 'ja', 'ru', 'de',
      'fr', 'ko', 'pl', 'it', 'nl', 'tr', 'th', 'id', 'vi', 'sv', 'cs',
    ],
    localeConfigs: {
      'zh-TW': { label: '繁體中文', direction: 'ltr', htmlLang: 'zh-TW' },
      'zh-CN': { label: '简体中文', direction: 'ltr', htmlLang: 'zh-CN' },
      'en':    { label: 'English',  direction: 'ltr', htmlLang: 'en' },
      'es':    { label: 'Español (Latinoamérica)', direction: 'ltr', htmlLang: 'es' },
      'es-ES': { label: 'Español (España)', direction: 'ltr', htmlLang: 'es-ES' },
      'pt-BR': { label: 'Português (Brasil)', direction: 'ltr', htmlLang: 'pt-BR' },
      'pt-PT': { label: 'Português (Portugal)', direction: 'ltr', htmlLang: 'pt-PT' },
      'ja':    { label: '日本語',    direction: 'ltr', htmlLang: 'ja' },
      'ru':    { label: 'Русский',  direction: 'ltr', htmlLang: 'ru' },
      'de':    { label: 'Deutsch',  direction: 'ltr', htmlLang: 'de' },
      'fr':    { label: 'Français', direction: 'ltr', htmlLang: 'fr' },
      'ko':    { label: '한국어',    direction: 'ltr', htmlLang: 'ko' },
      'pl':    { label: 'Polski',   direction: 'ltr', htmlLang: 'pl' },
      'it':    { label: 'Italiano', direction: 'ltr', htmlLang: 'it' },
      'nl':    { label: 'Nederlands', direction: 'ltr', htmlLang: 'nl' },
      'tr':    { label: 'Türkçe',   direction: 'ltr', htmlLang: 'tr' },
      'th':    { label: 'ไทย',      direction: 'ltr', htmlLang: 'th' },
      'id':    { label: 'Bahasa Indonesia', direction: 'ltr', htmlLang: 'id' },
      'vi':    { label: 'Tiếng Việt', direction: 'ltr', htmlLang: 'vi' },
      'sv':    { label: 'Svenska',  direction: 'ltr', htmlLang: 'sv' },
      'cs':    { label: 'Čeština',  direction: 'ltr', htmlLang: 'cs' },
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

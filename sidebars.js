// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '快速開始',
      items: ['getting-started/installation', 'getting-started/obs-source', 'getting-started/trial-comparison'],
    },
    {
      type: 'category',
      label: '平台設定',
      items: [
        'platforms/youtube',
        'platforms/youtube-settings',
        'platforms/twitch',
      ],
    },
    {
      type: 'category',
      label: '金流設定',
      items: [
        'payments/paypal',
        'payments/stripe',
        'payments/opay',
        'payments/ecpay',
      ],
    },
    {
      type: 'category',
      label: '第三方服務',
      items: ['services/deepl'],
    },
    {
      type: 'category',
      label: '功能教學',
      items: [
        'features/quick-tools',
        'features/obs-scene',
        'features/chat',
        'features/voice-translate',
        'features/multimedia',
        'features/highlight',
        'features/donate',
        'features/donate-alert',
        'features/sponsors',
        'features/chat-bot',
        'features/fan-alert',
        'features/birthday-alert',
        'features/goal',
        'features/timer',
        'features/clock',
        'features/emote-wall',
        'features/turntable',
        'features/vote',
        'features/lottery',
        'features/song-request',
        'features/settings',
        'features/themes',
        'features/hotkeys',
      ],
    },
  ],
};

export default sidebars;

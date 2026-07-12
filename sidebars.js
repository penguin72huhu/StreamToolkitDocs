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
  ],
};

export default sidebars;

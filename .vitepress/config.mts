import { transformerTwoslash } from '@shikijs/vitepress-twoslash';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';
import { getSidebar } from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'iExec documentation',
  description:
    'Build decentralized applications that combine ownership, privacy, and monetization.',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  vite: {
    plugins: [tailwindcss()],
  },
  srcDir: './src',
  markdown: {
    codeTransformers: [transformerTwoslash()],
  },

  head: [
    ['link', { rel: 'icon', href: '/Logo-RLC-Yellow.png' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      },
    ],
    [
      'script',
      {},
      `
      window.axeptioSettings = {
        clientId: "6413111857e4d2a6342cd5c6",
        cookiesVersion: "iexec-en",
      };

      (function(d, s) {
        var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
        e.async = true; e.src = "//static.axept.io/sdk.js";
        t.parentNode.insertBefore(e, t);
      })(document, "script");
      `,
    ],
    // Mava widget
    [
      'script',
      {
        defer: '',
        src: 'https://widget.mava.app',
        'widget-version': 'v2',
        id: 'MavaWebChat',
        'enable-sdk': 'false',
        'data-token':
          '8e4e10aad5750451e8726768e8c639dae54f461beeb176f5ebd687371c9390f2',
      },
    ],
    // Hotjar Tracking Script
    [
      'script',
      {},
      `
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:5303222,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview/what-we-do' },
      { text: 'Protect Data', link: '/manage_data/guides' },
      { text: 'Build iApp', link: '/build_iapp/iapp-generator/what-is-iapp' },
      { text: 'Use iApp', link: '/use_iapp/introduction' },
      { text: 'Deep Dive', link: '/deep_dive/sdk' },
    ],
    outline: {
      level: [2, 3],
    },

    sidebar: getSidebar(),

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iExecBlockchainComputing' },
      { icon: 'x', link: 'https://twitter.com/iEx_ec' },
      { icon: 'discord', link: 'https://discord.com/invite/pbt9m98wnU' },
    ],

    editLink: {
      pattern:
        'https://github.com/iExecBlockchainComputing/documentation/blob/main/:path',
      text: 'Suggest changes to this page',
    },

    logo: {
      light: '/Logo-RLC-Yellow.png',
      dark: '/Logo-RLC-Yellow.png',
      alt: 'iExec logo',
    },
  },
});

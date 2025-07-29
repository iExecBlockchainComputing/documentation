// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import Layout from './Layout.vue';
import type { EnhanceAppContext } from 'vitepress';
import googleAnalytics from 'vitepress-plugin-google-analytics';
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue as any);

    googleAnalytics({
      id: 'GTM-P7KSD4T',
    });
  },
} satisfies Theme;

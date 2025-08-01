// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import Layout from './Layout.vue';
import type { EnhanceAppContext } from 'vitepress';
import googleAnalytics from 'vitepress-plugin-google-analytics';
import 'virtual:group-icons.css';
import '@shikijs/vitepress-twoslash/style.css';
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import { WagmiPlugin } from '@wagmi/vue';
import { wagmiAdapter } from '../../src/utils/wagmiConfig';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue as any);

    const queryClient = new QueryClient();

    app.use(VueQueryPlugin, { queryClient });

    app.use(WagmiPlugin, { config: wagmiAdapter.wagmiConfig });

    googleAnalytics({
      id: 'GTM-P7KSD4T',
    });
  },
} satisfies Theme;

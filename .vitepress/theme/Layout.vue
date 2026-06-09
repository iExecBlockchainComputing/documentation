<script setup>
import DefaultTheme from 'vitepress/theme';
import { useRoute } from 'vitepress';
import { computed } from 'vue';
import AskIaButton from '@/components/AskIaButton.vue';

const { Layout } = DefaultTheme;
const route = useRoute();

const isHome = computed(() => route.path === '/');

const siteTitle = computed(() =>
  isHome.value ? 'iExec Documentation' : 'PoCo Documentation'
);
</script>

<template>
  <!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe
      src="https://metrics.iex.ec/ns.html?id=GTM-P7KSD4T"
      height="0"
      width="0"
      style="display: none; visibility: hidden"
    ></iframe>
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
  <div :class="{ 'is-home-page': isHome }">
    <Layout>
      <template #nav-bar-title-after>
        <span class="custom-site-title">{{ siteTitle }}</span>
      </template>
      <template #aside-outline-before>
        <AskIaButton />
      </template>
    </Layout>
  </div>
</template>

<style scoped>
.custom-site-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}
</style>

<style>
/* On the landing page, keep the navbar neutral: hide the PoCo-specific menu
   items (Get Started / Guides / References / Protocol) and the ChainSelector,
   while keeping the HomeNavLinks component (Nox Protocol / iExec PoCo) visible
   in the exact same menu slot. */
.is-home-page .VPNavBarMenu > *:not(.home-nav-links):not(.visually-hidden) {
  display: none;
}

/* Same neutralization for the mobile screen menu. */
.is-home-page .VPNavScreenMenu > *:not(.home-nav-links) {
  display: none;
}

/* Hide the search box on the landing page. */
.is-home-page .VPNavBarSearch {
  display: none;
}
</style>

<script setup>
import DefaultTheme from 'vitepress/theme';
import AskIaButton from '@/components/AskIaButton.vue';

const { Layout } = DefaultTheme;
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
  <Layout>
    <template #nav-bar-title-after>
      <span class="custom-site-title">PoCo Documentation</span>
    </template>
    <template #aside-outline-before>
      <AskIaButton />
    </template>
  </Layout>
</template>

<style scoped>
.custom-site-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}
</style>

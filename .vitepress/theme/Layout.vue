<script setup>
import DefaultTheme from 'vitepress/theme';
import { useRoute } from 'vitepress';
import { computed } from 'vue';
import AskIaButton from '@/components/AskIaButton.vue';

const { Layout } = DefaultTheme;
const route = useRoute();

const siteTitle = computed(() =>
  route.path === '/' ? 'iExec Documentation' : 'PoCo Documentation'
);
</script>

<template>
  <Layout>
    <template #nav-bar-title-after>
      <span class="custom-site-title">{{ siteTitle }}</span>
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

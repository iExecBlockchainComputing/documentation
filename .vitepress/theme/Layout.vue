<script setup>
import DefaultTheme from 'vitepress/theme';
import AskIaButton from './AskIaButton.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <AskIaButton />
    </template>
  </Layout>
</template>

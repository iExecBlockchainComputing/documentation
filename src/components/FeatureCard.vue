<template>
  <a
    :href="linkUrl"
    class="block h-full text-inherit no-underline! visited:no-underline! hover:no-underline! active:no-underline!"
  >
    <div
      class="bg-soft-bg border-border flex h-full cursor-pointer flex-col rounded-lg border p-6 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
    >
      <div class="mb-4 text-3xl">{{ icon }}</div>
      <h3 class="text-text1 m-0 mb-2">{{ title }}</h3>
      <p class="text-text2 m-0 flex-grow leading-relaxed">{{ description }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  title: string;
  description: string;
  linkUrl: string;
}

defineProps<Props>();
</script>

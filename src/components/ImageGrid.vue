<template>
  <div class="my-12 grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-12">
    <div v-for="(image, index) in images" :key="index" class="text-center">
      <a :href="image.linkUrl" target="_blank" rel="noreferrer">
        <img
          :src="image.imageUrl"
          :alt="image.imageAlt"
          class="border-border w-full max-w-[700px] rounded-lg border shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.02]"
        />
      </a>
      <p class="text-text2 mt-2 font-medium">{{ image.title }}</p>
      <p v-if="image.caption" class="mt-2">
        <a
          :href="image.linkUrl"
          target="_blank"
          rel="noreferrer"
          class="text-primary hover:text-primary2 inline-flex items-center gap-2 text-sm no-underline transition-colors duration-200"
        >
          <Icon :icon="image.linkIcon || 'mdi:external-link'" height="16" />
          {{ image.caption }}
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface ImageGridItem {
  imageUrl: string;
  imageAlt: string;
  linkUrl: string;
  title: string;
  caption?: string;
  linkIcon?: string;
}

interface Props {
  images: ImageGridItem[];
}

defineProps<Props>();
</script>

<template>
  <div :class="['my-8', { 'text-center': centered }]">
    <a :href="linkUrl" target="_blank" rel="noreferrer">
      <img
        :src="imageUrl"
        :alt="imageAlt"
        :style="{
          width: '100%',
          maxWidth: maxWidth,
          borderRadius: borderRadius,
          border: '1px solid var(--vp-c-border)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }"
        class="transition-transform duration-200 ease-in-out hover:scale-[1.02]"
      />
    </a>
    <p v-if="caption" class="mt-4 font-medium">
      <a
        :href="linkUrl"
        target="_blank"
        rel="noreferrer"
        class="text-primary hover:text-primary2 inline-flex items-center gap-2 no-underline transition-colors duration-200"
      >
        <Icon :icon="linkIcon" height="16" />
        {{ caption }}
      </a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface Props {
  imageUrl: string;
  imageAlt: string;
  linkUrl: string;
  caption?: string;
  linkIcon?: string;
  centered?: boolean;
  maxWidth?: string;
  borderRadius?: string;
}

withDefaults(defineProps<Props>(), {
  linkIcon: 'mdi:external-link',
  centered: true,
  maxWidth: '800px',
  borderRadius: '8px',
});
</script>

<template>
  <div class="my-8">
    <a :href="linkUrl" target="_blank" rel="noreferrer">
      <!-- Light theme image -->
      <img
        v-if="imageUrlLight"
        :src="imageUrlLight"
        :alt="imageAlt"
        class="light-only border-border w-full rounded-lg border shadow-lg transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl"
      />
      <!-- Dark theme image (also used as default) -->
      <img
        v-if="imageUrlDark"
        :src="imageUrlDark"
        :alt="imageAlt"
        :class="imageUrlLight ? 'dark-only' : ''"
        class="border-border w-full rounded-lg border shadow-lg transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl"
      />
    </a>
    <p v-if="caption" class="mt-4 font-medium">
      <Button
        as="a"
        variant="secondary"
        :href="linkUrl"
        target="_blank"
        rel="noreferrer"
      >
        {{ caption }}
        <Icon icon="lucide:arrow-up-right" :height="20" />
      </Button>
    </p>
  </div>
</template>

<script setup lang="ts">
import Button from './ui/Button.vue';
import { Icon } from '@iconify/vue';

interface Props {
  imageUrlLight?: string;
  imageUrlDark: string;
  imageAlt: string;
  linkUrl: string;
  caption?: string;
}

defineProps<Props>();
</script>

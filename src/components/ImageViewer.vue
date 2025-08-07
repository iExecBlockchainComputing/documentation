<template>
  <div class="my-8">
    <a :href="linkUrl" target="_blank" rel="noreferrer">
      <img
        :src="imageUrl"
        :alt="imageAlt"
        class="border-border w-full rounded-lg border shadow-lg transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl"
      />
    </a>
    <p v-if="caption" class="mt-4 font-medium">
      <Button
        :href="linkUrl"
        target="_blank"
        rel="noreferrer"
        class="text-primary hover:text-primary2 inline-flex items-center gap-2 rounded-lg no-underline transition-colors duration-200"
      >
        {{ caption }}
      </Button>
    </p>
  </div>
</template>

<script setup lang="ts">
import Button from './ui/Button.vue';

interface Props {
  imageUrl: string;
  imageAlt: string;
  linkUrl: string;
  caption?: string;
}

defineProps<Props>();
</script>

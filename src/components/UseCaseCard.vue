<template>
  <div
    class="bg-soft-bg group border-border hover:border-primary overflow-hidden rounded-xl border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <!-- Image -->
    <a :href="demoUrl" target="_blank" rel="noreferrer" class="group relative overflow-hidden">
      <img
        :src="imageUrl"
        :alt="imageAlt"
        class="max-h-48 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
      />
    </a>

    <!-- Content -->
    <div class="p-6">
      <h3 class="mt-0! mb-4">{{ title }}</h3>
      <p class="text-text2 mb-6">{{ description }}</p>

      <!-- Feature Tags -->
      <div class="mb-4 flex flex-wrap gap-2">
        <Badge
          v-for="feature in features"
          :key="feature"
          :label="feature"
          variant="primary"
        />
      </div>

      <!-- Actions -->
      <div v-if="githubUrl || demoUrl" class="flex flex-wrap gap-4">
        <Button
          v-if="demoUrl"
          as="a"
          :href="demoUrl"
          target="_blank"
          rel="noreferrer"
        >
          {{ demoLabel }}
        </Button>
        <Button
          v-if="githubUrl"
          as="a"
          :href="githubUrl"
          target="_blank"
          rel="noreferrer"
          variant="secondary"
        >
          <Icon icon="mdi:github" height="18" />
          {{ githubLabel }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Badge from './Badge.vue';
import Button from './ui/Button.vue';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  demoLabel?: string;
  githubLabel?: string;
}

withDefaults(defineProps<Props>(), {
  demoLabel: 'Try Live Demo',
  githubLabel: 'View Code',
});
</script>

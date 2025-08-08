<template>
  <div
    class="border-border bg-soft-bg flex h-full flex-col rounded-lg border p-6 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
  >
    <div class="mb-4 flex items-center gap-2">
      <Icon :icon="icon" class="text-xl" :class="iconColor" />
      <h3 class="text-text1 !mt-0 !mb-0 text-base font-semibold">
        {{ title }}
      </h3>
    </div>

    <!-- Description mode -->
    <p
      v-if="description && !features"
      class="text-text2 !mt-2 flex-grow text-sm leading-relaxed"
    >
      {{ description }}
    </p>

    <!-- Features mode -->
    <ul
      v-if="features"
      class="flex-grow space-y-2 text-sm text-gray-700 dark:text-gray-300"
    >
      <li
        v-for="feature in processedFeatures"
        :key="feature.key"
        class="flex items-start gap-2"
      >
        <span class="text-gray-600">•</span>
        <span v-if="feature.link">
          <a
            :href="feature.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 underline transition-colors hover:text-blue-800 hover:no-underline dark:text-blue-400 dark:hover:text-blue-300"
          >
            {{ feature.text }}
          </a>
        </span>
        <span v-else>{{ feature.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

interface FeatureItem {
  text: string;
  link?: string;
}

interface Props {
  icon: string;
  title: string;
  description?: string;
  features?: (string | FeatureItem)[];
  linkUrl?: string;
  iconColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  iconColor: 'text-blue-500',
  linkUrl: '',
});

const processedFeatures = computed(() => {
  if (!props.features) return [];
  return props.features.map((feature, index) => {
    if (typeof feature === 'string') {
      return { key: index, text: feature };
    } else {
      return { key: index, text: feature.text, link: feature.link };
    }
  });
});
</script>

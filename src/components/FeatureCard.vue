<template>
  <component
    :is="linkUrl ? 'a' : 'div'"
    :href="linkUrl || undefined"
    class="flex h-full flex-col rounded-2xl border border-[var(--vp-c-default-3)] bg-[var(--vp-c-bg-soft)] p-8 text-[var(--color-text2)]! transition-all! duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
    :class="{ 'cursor-pointer no-underline!': linkUrl }"
  >
    <h3 class="text-text1 !mt-0 !mb-0 text-base font-semibold">
      {{ title }}
    </h3>

    <!-- Description mode -->
    <p v-if="description && !features">
      {{ description }}
    </p>

    <!-- Features mode -->
    <ul v-if="features">
      <li v-for="feature in processedFeatures" :key="feature.key">
        <a
          v-if="feature.link"
          :href="feature.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ feature.text }}
        </a>
        <span v-else>{{ feature.text }}</span>
      </li>
    </ul>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface FeatureItem {
  text: string;
  link?: string;
}

interface Props {
  title: string;
  description?: string;
  features?: (string | FeatureItem)[];
  linkUrl?: string;
}

const props = withDefaults(defineProps<Props>(), {
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

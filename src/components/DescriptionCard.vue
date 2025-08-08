<template>
  <div :class="cardClasses">
    <div class="mb-4 flex items-center gap-3">
      <span class="text-2xl">{{ icon }}</span>
      <h3 :class="titleClasses">{{ title }}</h3>
    </div>
    <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
      <li
        v-for="feature in processedFeatures"
        :key="feature.key"
        class="flex items-start gap-2"
      >
        <span :class="bulletClasses">•</span>
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

interface FeatureItem {
  text: string;
  link?: string;
}

interface Props {
  title: string;
  icon: string;
  features: (string | FeatureItem)[];
  color?:
    | 'blue'
    | 'purple'
    | 'green'
    | 'orange'
    | 'gray'
    | 'yellow'
    | 'indigo'
    | 'teal'
    | 'pink';
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  color: 'blue',
  size: 'md',
});

const processedFeatures = computed(() => {
  return props.features.map((feature, index) => {
    if (typeof feature === 'string') {
      return { key: index, text: feature };
    } else {
      return { key: index, text: feature.text, link: feature.link };
    }
  });
});

const colorClasses = {
  blue: {
    card: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700',
    title: 'text-blue-800 dark:text-blue-200',
    bullet: 'text-blue-600',
  },
  purple: {
    card: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700',
    title: 'text-purple-800 dark:text-purple-200',
    bullet: 'text-purple-600',
  },
  green: {
    card: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700',
    title: 'text-green-800 dark:text-green-200',
    bullet: 'text-green-600',
  },
  orange: {
    card: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700',
    title: 'text-orange-800 dark:text-orange-200',
    bullet: 'text-orange-600',
  },
  gray: {
    card: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 border-gray-200 dark:border-gray-700',
    title: 'text-gray-800 dark:text-gray-200',
    bullet: 'text-gray-600',
  },
  yellow: {
    card: 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-700',
    title: 'text-yellow-800 dark:text-yellow-200',
    bullet: 'text-yellow-600',
  },
  indigo: {
    card: 'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 border-indigo-200 dark:border-indigo-700',
    title: 'text-indigo-800 dark:text-indigo-200',
    bullet: 'text-indigo-600',
  },
  teal: {
    card: 'bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-teal-200 dark:border-teal-700',
    title: 'text-teal-800 dark:text-teal-200',
    bullet: 'text-teal-600',
  },
  pink: {
    card: 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border-pink-200 dark:border-pink-700',
    title: 'text-pink-800 dark:text-pink-200',
    bullet: 'text-pink-600',
  },
};

const sizeClasses = {
  sm: {
    card: 'p-4',
    title: 'text-base font-semibold m-0',
  },
  md: {
    card: 'p-6',
    title: 'text-lg font-semibold m-0',
  },
  lg: {
    card: 'p-6',
    title: 'text-xl font-semibold m-0',
  },
};

const cardClasses = computed(() => [
  'rounded-lg border',
  colorClasses[props.color].card,
  sizeClasses[props.size].card,
]);

const titleClasses = computed(() => [
  colorClasses[props.color].title,
  sizeClasses[props.size].title,
]);

const bulletClasses = computed(() => [colorClasses[props.color].bullet]);
</script>

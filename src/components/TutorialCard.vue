<template>
  <a
    :href="href"
    :class="[
      'before:bg-primary relative rounded-xl bg-[var(--vp-c-bg-soft)] p-6 text-[var(--vp-c-text-1)]! no-underline! before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:rounded-xl before:duration-300 hover:before:-translate-y-0.5',
      variant === 'bonus' ? 'border-primary border-2' : '',
    ]"
  >
    <h3 class="mt-0! mb-3!">{{ title }}</h3>
    <Badge
      v-if="variant !== 'bonus'"
      :label="readTime"
      :variant="badgeVariant"
    />
    <p class="my-4 text-[var(--vp-c-text-2)]">
      {{ description }}
    </p>
    <div
      v-if="variant === 'bonus'"
      class="bg-primary hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium text-white transition-colors"
    >
      {{ actionText }}
      <Icon icon="lucide:arrow-right" :height="20" />
    </div>
    <div v-else class="inline-flex items-center gap-2">
      {{ actionText }}
      <Icon icon="lucide:arrow-right" :height="20" />
    </div>
  </a>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Badge from './Badge.vue';

interface Props {
  href: string;
  title: string;
  readTime: string;
  description: string;
  actionText?: string;
  badgeVariant?:
    | 'primary'
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'important';
  variant?: 'default' | 'bonus';
}

withDefaults(defineProps<Props>(), {
  actionText: 'Read',
  badgeVariant: 'primary',
  variant: 'default',
});
</script>

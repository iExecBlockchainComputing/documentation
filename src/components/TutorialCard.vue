<template>
  <a 
    :href="href" 
    :class="[
      'rounded-xl bg-[var(--vp-c-bg-soft)] p-6 no-underline! text-[var(--vp-c-text-1)]! relative before:duration-300 before:absolute before:inset-x-0 before:top-0 before:h-10 hover:before:-translate-y-0.5 before:bg-primary before:-z-10 before:rounded-xl',
      variant === 'bonus' ? 'border-2 border-primary' : ''
    ]"
  >
    <h3 class="mt-0! mb-3!">{{ title }}</h3>
    <Badge
      v-if="variant !== 'bonus'"
      :label="readTime"
      :variant="badgeVariant"
    />
    <p class="text-[var(--vp-c-text-2)] my-4">
      {{ description }}
    </p>
    <div 
      v-if="variant === 'bonus'"
      class="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors"
    >
      {{ actionText }}
      <Icon icon="lucide:arrow-right" :height="20" />
    </div>
    <div 
      v-else
      class="inline-flex gap-2 items-center"
    >
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
  badgeVariant?: 'primary' | 'default' | 'success' | 'warning' | 'danger' | 'important';
  variant?: 'default' | 'bonus';
}

withDefaults(defineProps<Props>(), {
  actionText: 'Read',
  badgeVariant: 'primary',
  variant: 'default',
});
</script>

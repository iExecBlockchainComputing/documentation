<template>
  <div :class="containerClasses">
    <p v-if="title" class="mt-0! font-semibold text-current">
      {{ title }}
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'success' | 'info' | 'danger';
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
});

const containerClasses = computed(() => {
  const baseClasses = 'rounded-[6px] p-6 border-l-4';

  const variantClasses = {
    success:
      'bg-[var(--vp-c-success-soft)] border-[var(--vp-c-success-1)] [&_strong]:text-[var(--vp-c-success-1)]',
    info: 'bg-[var(--vp-c-info-soft)] border-[var(--vp-c-info-1)] [&_strong]:text-[var(--vp-c-info-1)]',
    tips: 'bg-[var(--vp-c-brand-soft)] border-[var(--vp-c-brand-1)] [&_strong]:text-[var(--vp-c-brand-1)]',
    danger:
      'bg-gradient-to-r from-[var(--vp-c-danger-1)] to-[var(--vp-c-danger-1)] border-[var(--vp-c-danger-1)]',
  };

  return `${baseClasses} ${variantClasses[props.variant]}`;
});
</script>

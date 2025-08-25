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
  spacing?: 'default' | 'top' | 'bottom' | 'none';
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
  spacing: 'default',
});

const containerClasses = computed(() => {
  const baseClasses = 'rounded-[6px] p-6 border-l-4';

  const variantClasses = {
    success:
      'bg-gradient-to-r from-green-400/10 to-green-400/5 border-green-600',
    info: 'bg-[var(--vp-c-brand-soft)] border-[var(--vp-c-brand-1)] [&_strong]:text-[var(--vp-c-brand-1)]',
    danger: 'bg-gradient-to-r from-red-400/10 to-red-400/5 border-red-600',
  };

  const spacingClasses = {
    default: 'mb-6',
    top: 'mt-6',
    bottom: 'mb-6',
    none: '',
  };

  return `${baseClasses} ${variantClasses[props.variant]} ${spacingClasses[props.spacing]}`;
});
</script>

<template>
  <span :class="badgeClasses">
    <Icon v-if="icon" :icon="icon" :height="iconSize" />
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

interface Props {
  label: string;
  variant?:
    | 'success'
    | 'warning'
    | 'danger'
    | 'important'
    | 'primary'
    | 'default';
  icon?: string;
  iconSize?: number;
  size?: 'sm' | 'md';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  iconSize: 14,
  size: 'sm',
});

const badgeClasses = computed(() => {
  const baseClasses = 'inline-flex items-center rounded-2xl font-medium border';

  // Size classes
  const sizeClasses =
    props.size === 'md'
      ? 'gap-2 px-4 py-1.5 text-sm'
      : 'gap-1.5 px-3 py-1 text-xs';

  // Variant classes
  let variantClasses = '';
  switch (props.variant) {
    case 'success':
      variantClasses = 'text-success-1 border-success-1';
      break;
    case 'warning':
      variantClasses = 'text-warning-1 border-warning-1';
      break;
    case 'danger':
      variantClasses = 'text-danger-1 border-danger-1';
      break;
    case 'important':
      variantClasses = 'text-important-1 border-important-1';
      break;
    case 'primary':
      variantClasses = 'text-primary border-primary';
      break;
    default:
      variantClasses = 'text-text border-border';
  }

  return `${baseClasses} ${sizeClasses} ${variantClasses}`;
});
</script>

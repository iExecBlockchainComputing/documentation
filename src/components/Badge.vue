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
      variantClasses = 'bg-success-soft text-success-3 border-success-3';
      break;
    case 'warning':
      variantClasses = 'bg-warning-soft text-warning-3 border-warning-3';
      break;
    case 'danger':
      variantClasses = 'bg-danger-soft text-danger-3 border-danger-3';
      break;
    case 'important':
      variantClasses = 'bg-important-soft text-important-3 border-important-3';
      break;
    case 'primary':
      variantClasses = 'bg-primary2/10 text-primary2 border-primary2/30';
      break;
    default:
      variantClasses = 'bg-soft-bg text-text2 border-border';
  }

  return `${baseClasses} ${sizeClasses} ${variantClasses}`;
});
</script>

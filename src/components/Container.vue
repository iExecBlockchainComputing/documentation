<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'purple' | 'green' | 'amber' | 'blue' | 'red';
  spacing?: 'default' | 'top' | 'bottom' | 'none';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'purple',
  spacing: 'default',
});

const containerClasses = computed(() => {
  const baseClasses = 'rounded-[6px] p-6 border-l-4';

  const variantClasses = {
    purple:
      'bg-gradient-to-r from-purple-400/10 to-purple-400/5 border-fuchsia-700',
    green: 'bg-gradient-to-r from-green-400/10 to-green-400/5 border-green-600',
    amber: 'bg-gradient-to-r from-amber-400/10 to-amber-400/5 border-amber-600',
    blue: 'bg-gradient-to-r from-blue-400/10 to-blue-400/5 border-blue-600',
    red: 'bg-gradient-to-r from-red-400/10 to-red-400/5 border-red-600',
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

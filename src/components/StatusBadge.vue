<template>
  <div :class="badgeClasses">
    <Icon :icon="iconName" />
    {{ label }}
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

interface Props {
  status: 'available' | 'coming-soon' | 'interactive';
  label: string;
}

const props = withDefaults(defineProps<Props>(), {});

const iconName = computed(() => {
  return props.status === 'available'
    ? 'mdi:check-circle-outline'
    : props.status === 'interactive'
    ? 'mdi:play-circle-outline'
    : 'mdi:clock-outline';
});

const badgeClasses = computed(() => {
  const baseClasses =
    'inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl text-xs font-medium border';

  switch (props.status) {
    case 'available':
      return `${baseClasses} bg-success-soft text-success-3 border-success-3`;
    case 'coming-soon':
      return `${baseClasses} bg-warning-soft text-warning-3 border-warning-3`;
    default:
      return `${baseClasses} bg-important-soft text-important-3 border-important-3`;
  }
});
</script>

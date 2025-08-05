<template>
  <component
    :is="component"
    :href="href"
    :target="target"
    :rel="rel"
    :disabled="disabled"
    :class="buttonClasses"
  >
    <Icon :icon="icon" :height="16" />
    {{ label }}
  </component>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

interface Props {
  variant: 'primary' | 'disabled';
  label: string;
  icon: string;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const props = defineProps<Props>();

const component = computed(() => {
  return props.href ? 'a' : 'button';
});

const buttonClasses = computed(() => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium w-full transition-all duration-200';

  if (props.variant === 'primary') {
    return `${baseClasses} bg-blue-600 hover:bg-blue-700 text-white hover:-translate-y-0.5`;
  } else {
    return `${baseClasses} bg-gray-50 text-gray-400 border border-gray-200 cursor-not-allowed`;
  }
});
</script>

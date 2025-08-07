<template>
  <component
    :is="as"
    :type="as === 'button' ? 'button' : undefined"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  as: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value),
  },
});

const buttonClasses = computed(() => {
  const baseClasses =
    'inline-flex h-11 cursor-pointer gap-1.5 items-center justify-center rounded-lg px-5! py-2 text-base font-medium no-underline! transition-all! duration-200 not-disabled:hover:-translate-y-0.5 not-disabled:hover:transform not-disabled:hover:shadow-md focus:outline-none disabled:cursor-not-allowed disabled:opacity-60';

  if (props.variant === 'secondary') {
    return `${baseClasses} bg-soft-bg! text-text1! border border-primary! hover:!bg-primary/10 focus:shadow-[0_0_0_2px_rgba(252,209,90,0.3)]`;
  }

  // Primary variant (default)
  return `${baseClasses} border-none bg-[#fcd15a]! text-[#1e1e1e]! focus:shadow-[0_0_0_2px_rgba(252,209,90,0.3)]`;
});
</script>

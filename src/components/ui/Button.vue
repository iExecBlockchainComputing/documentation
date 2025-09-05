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
    'inline-flex h-11 cursor-pointer gap-1.5 items-center justify-center rounded-full px-5! py-2 text-base font-medium no-underline! transition-all! duration-200 not-disabled:hover:transform focus:outline-none disabled:cursor-not-allowed disabled:opacity-60';

  if (props.variant === 'secondary') {
    return `${baseClasses} text-[var(--vp-button-alt-text)]! border border-[var(--vp-button-alt-border)]! not-disabled:hover:bg-[var(--vp-button-alt-hover-bg)]!`;
  }

  // Primary variant (default)
  return `${baseClasses} border-none bg-[var(--vp-button-brand-bg)]! text-[var(--vp-button-brand-text)]! hover:bg-[var(--vp-button-brand-hover-bg)]! disabled:opacity-60`;
});
</script>

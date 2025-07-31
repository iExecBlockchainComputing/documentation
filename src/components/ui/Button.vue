<template>
  <component
    :is="as || 'button'"
    :type="as === 'button' || !as ? 'button' : undefined"
    class="inline-flex h-11 cursor-pointer items-center justify-center rounded-lg border-none bg-[#fcd15a]! px-5 py-2 text-base font-medium text-[#1e1e1e]! no-underline! transition-all! duration-200 hover:-translate-y-0.5 hover:transform hover:bg-[#ffb74d]! hover:shadow-md focus:shadow-[0_0_0_2px_rgba(252,209,90,0.3)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  as: {
    type: String,
    default: 'button',
  },
});
</script>

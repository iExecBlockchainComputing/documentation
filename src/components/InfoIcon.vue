<template>
  <div class="group relative inline-flex cursor-help items-center">
    <Icon
      icon="heroicons:information-circle"
      class="h-3.5 w-3.5 text-gray-600 opacity-60 transition-opacity duration-200 hover:text-gray-800 hover:opacity-100 dark:text-gray-400 dark:hover:text-gray-200"
    />
    <span
      class="invisible absolute bottom-full left-1/2 z-50 w-max max-w-xs -translate-x-1/2 transform rounded bg-gray-800 p-2 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:transform before:border-4 before:border-solid before:border-gray-800 before:border-r-transparent before:border-b-transparent before:border-l-transparent before:content-['']"
    >
      {{ tooltip }}
    </span>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

defineProps({
  tooltip: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="inline-flex items-center relative cursor-help group">
    <Icon 
      icon="heroicons:information-circle" 
      class="w-3.5 h-3.5 opacity-60 transition-opacity duration-200 text-gray-600 hover:opacity-100 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
    />
    <span class="invisible absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-2 rounded w-max max-w-xs shadow-lg z-50 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 before:content-[''] before:absolute before:top-full before:left-1/2 before:transform before:-translate-x-1/2 before:border-4 before:border-solid before:border-gray-800 before:border-b-transparent before:border-l-transparent before:border-r-transparent">
      {{ tooltip }}
    </span>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  tooltip: {
    type: String,
    required: true
  }
})
</script>

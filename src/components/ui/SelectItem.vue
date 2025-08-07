<template>
  <option :value="value" :class="className">
    <slot />
  </option>
</template>

<script setup lang="ts">
interface Props {
  value: string | number
  className?: string
}

defineProps<Props>()
</script>

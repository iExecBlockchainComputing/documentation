<template>
  <div class="relative">
    <select
      :value="modelValue"
      @change="handleChange"
      :class="
        cn(
          'border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-sm focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )
      "
    >
      <option value="" disabled>{{ placeholder }}</option>
      <slot />
    </select>
    <svg
      class="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 opacity-50"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';

interface Props {
  modelValue?: string | number;
  placeholder?: string;
  className?: string;
}

interface Emits {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Select an option...',
});

const emit = defineEmits<Emits>();

function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
}
</script>

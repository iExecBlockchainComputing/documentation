<template>
  <a
    :href="linkUrl"
    class="block h-full min-h-40 text-inherit no-underline! visited:no-underline! hover:no-underline! active:no-underline!"
  >
    <div
      class="bg-soft-bg border-border flex h-full cursor-pointer flex-col rounded-lg border p-3 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
    >
      <div class="flex items-center gap-2">
        <Icon :icon="icon" class="text-xl" :class="iconColor" />
        <h3 class="text-text1 !mt-0 !mb-0 text-base font-semibold">
          {{ title }}
        </h3>
      </div>
      <p class="text-text2 !mt-2 flex-grow text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface Props {
  icon: string;
  title: string;
  description: string;
  linkUrl: string;
  iconColor?: string;
}

withDefaults(defineProps<Props>(), {
  iconColor: 'text-blue-500',
  linkUrl: '',
});
</script>

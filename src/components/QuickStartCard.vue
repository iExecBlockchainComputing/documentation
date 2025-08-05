<template>
  <div
    class="relative flex h-full min-h-[220px] bg-soft-bg flex-col rounded-lg border border-border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg"
  >
    <!-- Icon -->
     <div class="flex gap-2 items-start">
       <div
       class="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-bg"
       >
       <Icon :icon="icon" height="24" />
      </div>
      <div>
        <h3 class="mt-0! mb-1! text-lg font-semibold">{{ title }}</h3>
        <StatusBadge :status="status" :label="statusLabel" />
      </div>
     </div>

    <!-- Content -->
    <div class="flex-1">
      <p
        class="mb-3 h-14 overflow-hidden text-sm leading-relaxed text-text2"
      >
        {{ description }}
      </p>

      <!-- Status Badge -->
    </div>
    <!-- Actions -->
    <div class="mt-auto">
      <Button
        :disabled="buttonDisabled"
        class="w-full"
        buttonTarget="_blank"
        buttonRel="noreferrer"
      >
        <Icon :icon="buttonIcon" :height="16" />
        {{ buttonLabel }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import StatusBadge from './StatusBadge.vue';
import Button from './ui/Button.vue';

interface Props {
  title: string;
  description: string;
  icon: string;
  status: 'available' | 'coming-soon' | 'interactive';
  statusLabel: string;
  buttonVariant: 'primary' | 'disabled';
  buttonLabel: string;
  buttonIcon: string;
  buttonHref?: string;
  buttonTarget?: string;
  buttonRel?: string;
  buttonDisabled?: boolean;
}

withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div
    class="bg-soft-bg border-border hover:border-primary relative flex h-full min-h-[220px] flex-col rounded-lg border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
  >
    <!-- Icon -->
    <div class="flex items-start gap-2">
      <div
        class="border-border bg-bg flex size-10 flex-none items-center justify-center overflow-hidden rounded-xl border p-2"
      >
        <img
          v-if="iconImage"
          :src="iconImage"
          :alt="title"
          class="size-8 object-contain"
        />
        <Icon v-else :icon="icon" height="24" />
      </div>
      <div>
        <h3 class="mt-0! mb-1! text-lg font-semibold">{{ title }}</h3>
        <Badge
          :label="statusLabel"
          :variant="badgeVariant"
          :icon="statusIcon"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="flex-1">
      <p class="text-text2 mb-3 h-14 overflow-hidden text-sm leading-relaxed">
        {{ description }}
      </p>

      <!-- Status Badge -->
    </div>
    <!-- Actions -->
    <div class="mt-auto">
      <div v-if="githubUrl" class="grid gap-3">
        <Button
          as="a"
          :href="buttonHref"
          :disabled="buttonDisabled"
          :target="buttonTarget"
          :rel="buttonRel"
          class="flex-1"
        >
          <Icon :icon="buttonIcon" :height="16" />
          {{ buttonLabel }}
        </Button>
        <Button
          as="a"
          :href="githubUrl"
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          class="flex-1"
        >
          <Icon icon="mdi:github" :height="16" />
          {{ githubLabel || 'View Code' }}
        </Button>
      </div>
      <Button
        v-else
        :as="buttonHref ? 'a' : 'button'"
        :href="buttonHref"
        :disabled="buttonDisabled"
        :target="buttonTarget"
        :rel="buttonRel"
        class="w-full"
      >
        <Icon :icon="buttonIcon" :height="16" />
        {{ buttonLabel }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import Badge from './Badge.vue';
import Button from './ui/Button.vue';

interface Props {
  title: string;
  description: string;
  icon?: string;
  iconImage?: string;
  status: 'available' | 'coming-soon' | 'interactive';
  statusLabel: string;
  buttonLabel: string;
  buttonIcon: string;
  buttonHref?: string;
  buttonTarget?: string;
  buttonRel?: string;
  buttonDisabled?: boolean;
  githubUrl?: string;
  githubLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  iconImage: '',
});

const statusIcon = computed(() => {
  switch (props.status) {
    case 'available':
      return 'mdi:check-circle-outline';
    case 'interactive':
      return 'mdi:play-circle-outline';
    case 'coming-soon':
      return 'mdi:clock-outline';
    default:
      return 'mdi:check-circle-outline';
  }
});

const badgeVariant = computed(() => {
  switch (props.status) {
    case 'available':
      return 'success';
    case 'coming-soon':
      return 'warning';
    case 'interactive':
      return 'primary';
    default:
      return 'success';
  }
});
</script>

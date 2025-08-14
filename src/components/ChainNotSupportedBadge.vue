<script setup>
import { computed } from 'vue';
import { VPBadge } from 'vitepress/theme';
import useUserStore from '@/stores/useUser.store';

const userStore = useUserStore();

// Check if Arbitrum is selected (Arbitrum chain ID is 42161)
const isArbitrumSelected = computed(() => {
  return userStore.chainId === 42161;
});

// Only show the badge when Arbitrum is selected
const shouldShow = computed(() => isArbitrumSelected.value);
</script>

<template>
  <VPBadge
    v-if="shouldShow"
    type="warning"
    text="Not Supported for this Chain"
    style="
      color: var(--vp-c-orange-1);
      background-color: hsla(0, 100%, 50%, 8%);
      margin-top: 1px;
      margin-right: 4px;
    "
  />
</template>

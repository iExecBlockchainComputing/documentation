<script setup>
import { computed } from 'vue';
import { VPBadge } from 'vitepress/theme';
import useUserStore from '@/stores/useUser.store';

const userStore = useUserStore();

// Check if Arbitrum or Arbitrum Sepolia is selected (chain IDs are 42161 and 421614)
const isArbitrumSelected = computed(() => {
  return userStore.chainId === 42161 || userStore.chainId === 421614;
});

// Only show the badge when Arbitrum is selected
const shouldShow = computed(() => isArbitrumSelected.value);
</script>

<template>
  <VPBadge
    v-if="shouldShow"
    type="tip"
    text="Chain Not Supported"
    style="
      color: var(--vp-c-red-1);
      background-color: hsla(350, 89%, 60%, 8%);
      margin-top: 1px;
      margin-right: 4px;
    "
  />
</template>

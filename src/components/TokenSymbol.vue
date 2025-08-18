<template>
  <span class="font-semibold text-inherit">{{ tokenSymbol }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useUserStore from '@/stores/useUser.store';

const userStore = useUserStore();

// Computed property to get the correct token symbol based on selected chain
const tokenSymbol = computed(() => {
  const currentChainId = userStore.getCurrentChainId();

  // Bellecour (0x86) uses xRLC, Arbitrum (42161) uses RLC
  if (currentChainId === 0x86) {
    return 'xRLC';
  } else if (currentChainId === 42161) {
    return 'RLC';
  }

  // Default fallback
  return 'RLC';
});
</script>

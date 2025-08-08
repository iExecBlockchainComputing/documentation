import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Chain } from '@/utils/chain.utils';

export const useUserStore = defineStore('user', () => {
  // State
  const chainId = ref<number | undefined>(undefined);
  const selectedChain = ref<Chain | undefined>(undefined);

  // Actions
  function setChainId(newChainId: number) {
    chainId.value = newChainId;
  }

  function setSelectedChain(chain: Chain) {
    selectedChain.value = chain;
    chainId.value = chain.id;
  }

  function clearChain() {
    chainId.value = undefined;
    selectedChain.value = undefined;
  }

  // Getters
  const getCurrentChainId = () => chainId.value;
  const getCurrentChain = () => selectedChain.value;

  return {
    // State
    chainId,
    selectedChain,
    // Actions
    setChainId,
    setSelectedChain,
    clearChain,
    // Getters
    getCurrentChainId,
    getCurrentChain,
  };
});

export default useUserStore;

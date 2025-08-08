<template>
  <div class="flex items-center">
    <Select v-model="selectedChainId" :class="className">
      <SelectTrigger>
        <SelectValue :placeholder="selectedChain?.name || 'Select chain'">
          <div v-if="selectedChain" class="flex items-center gap-2">
            <img
              v-if="selectedChain.icon"
              :src="selectedChain.icon"
              :alt="selectedChain.name"
              class="h-4 w-4 rounded-full"
            />
            <span>{{ selectedChain.name }}</span>
          </div>
          <span v-else>Select Chain</span>
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        <SelectItem
          v-for="chain in filteredChains"
          :key="chain.id"
          :value="chain.id.toString()"
        >
          <SelectItemText>
            <div class="flex items-center gap-2">
              <img
                v-if="chain.icon"
                :src="chain.icon"
                :alt="chain.name"
                class="h-4 w-4 rounded-full"
              />
              <span>{{ chain.name }}</span>
            </div>
          </SelectItemText>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useAccount } from '@wagmi/vue';
import { useChainSwitch } from '@/hooks/useChainSwitch';
import { getSupportedChains, getChainById } from '@/utils/chain.utils';
import useUserStore from '@/stores/useUser.store';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Props {
  className?: string;
}

defineProps<Props>();

// Composables
const { chainId } = useAccount();
const { requestChainChange } = useChainSwitch();
const userStore = useUserStore();

// Data
const filteredChains = getSupportedChains();

// Computed
const selectedChain = computed(() => {
  const currentChainId = chainId.value || userStore.chainId;
  return currentChainId ? getChainById(currentChainId) : undefined;
});

const selectedChainId = computed({
  get: () => {
    const currentChainId = chainId.value || userStore.chainId;
    return currentChainId ? currentChainId.toString() : '';
  },
  set: async (value: string) => {
    const numericValue = Number(value);
    if (numericValue && numericValue !== -1) {
      const chain = getChainById(numericValue);
      if (chain) {
        userStore.setSelectedChain(chain);
        await requestChainChange(numericValue);
      }
    }
  },
});

watch(chainId, (newChainId) => {
  if (newChainId) {
    const chain = getChainById(newChainId);
    if (chain) {
      userStore.setSelectedChain(chain);
    }
  }
});
</script>

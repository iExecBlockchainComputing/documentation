<template>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select Chain" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup
        v-for="chain in filteredChains"
        :key="chain.id"
        :value="chain.id.toString()"
        :class="className"
      >
        <SelectItem :value="chain.id.toString()">
          <img :src="chain.icon" class="size-4" :alt="chain.name" />
          {{ chain.name }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAccount } from '@wagmi/vue';
import { useChainSwitch } from '@/hooks/useChainSwitch';
import { getSupportedChains, getChainById } from '@/utils/chain.utils';
import useUserStore from '@/stores/useUser.store';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
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
const selectedChainId = computed({
  get: () => {
    return (chainId.value || userStore.chainId || -1).toString();
  },
  set: (value: string) => {
    const numericValue = Number(value);
    if (numericValue !== -1) {
      const chain = getChainById(numericValue);
      if (chain) {
        userStore.setSelectedChain(chain);
      }
    }
  },
});

// Methods
async function handleChainChange(value: string) {
  const numericValue = Number(value);

  if (numericValue === -1) return;

  const chain = getChainById(numericValue);
  if (chain) {
    userStore.setSelectedChain(chain);

    await requestChainChange(numericValue);
  }
}
</script>

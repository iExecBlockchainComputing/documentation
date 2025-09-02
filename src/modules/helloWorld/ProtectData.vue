<template>
  <div class="my-8 w-full md:my-4">
    <div
      class="mb-6 flex items-center gap-2 font-medium text-[var(--vp-c-text-1)]"
    >
      Connect Your Wallet
      <a
        :href="`https://chainlist.org/chain/${userStore.getCurrentChainId() || 134}`"
        target="_blank"
      >
        ({{ networkName }})
      </a>
      :
      <ReownButton />
    </div>

    <div>
      <p>You will sign three things:</p>
      <ol class="ml-4 list-inside list-decimal">
        <li>A transaction to create the protected data</li>
        <li>A message signature to prove your identity to the SMS</li>
      </ol>
    </div>

    <div class="my-6 flex w-full flex-col gap-4">
      <input
        name="protected-data"
        v-model="contentToProtect"
        placeholder="Enter a secret data to protect (e.g. 'My private data / mail / phone / ...')"
        :disabled="!isWalletConnected || isLoadingProtect"
      />
      <Button
        :disabled="!isWalletConnected || isLoadingProtect"
        @click="protectData"
        data-track="protectData"
      >
        {{ isLoadingProtect ? 'Processing...' : 'Protect Data' }}
      </Button>
      <div
        v-if="protectError"
        class="rounded-md bg-red-50 px-4 py-3 text-sm text-red-500"
      >
        {{ protectError }}
      </div>
    </div>

    <div
      v-if="protectedDataAddress"
      class="mt-8 w-full rounded-md bg-gradient-to-r from-green-400/10 to-green-400/5 p-6 text-center"
    >
      <div
        class="mb-2 flex items-center justify-center gap-3 text-xl font-medium text-green-500"
      >
        <div
          class="flex items-center justify-center rounded-full bg-green-500 p-1 text-white"
        >
          <Icon icon="mdi:check" height="24" />
        </div>
        Your data has been protected!
      </div>
      <p class="mt-4 mb-2 font-medium text-[var(--vp-c-text-1)]">
        Your protected data address:
      </p>
      <div
        class="rounded-md bg-[var(--vp-c-bg-soft)] px-4 py-3 font-mono text-sm break-all text-[var(--vp-c-text-2)]"
      >
        {{ protectedDataAddress }}
      </div>
      <p class="mt-4">
        You can check it on
        <a
          :href="explorerUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-green-600 underline hover:text-green-800"
        >
          {{
            userStore.getCurrentChainId() === 42161
              ? 'the Arbitrum explorer'
              : 'the iExec explorer'
          }}
        </a>
      </p>
      <p class="mt-2">
        Or view your encrypted data on
        <a
          :href="'https://ipfs.io/ipfs/' + protectedDataIpfsAddress"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-green-600 underline hover:text-green-800"
        >
          IPFS
        </a>
        <br />
        <span class="mt-2 block text-[0.9rem] text-[var(--vp-c-text-2)] italic">
          😊 Ohh damn: you can download the data on IPFS but you can't see the
          content 🔒
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { Icon } from '@iconify/vue';
import { IExecDataProtectorCore } from '@iexec/dataprotector';
import Button from '@/components/ui/Button.vue';
import ReownButton from './ReownButton.vue';
import { useAccount } from '@wagmi/vue';
import { useWalletConnection } from '@/hooks/useWalletConnection.vue';
import useUserStore from '@/stores/useUser.store';

const { connector } = useAccount();
const {
  web3Provider,
  isWalletConnected,
  protectedDataAddress,
  protectedDataIpfsAddress,
} = useWalletConnection();
const userStore = useUserStore();

const contentToProtect = ref('');
const isLoadingProtect = ref(false);
const protectError = ref(null);

// Computed property for explorer URL based on selected chain
const explorerUrl = computed(() => {
  const currentChainId = userStore.getCurrentChainId();
  const networkPath =
    currentChainId === 42161 ? 'arbitrum-mainnet' : 'bellecour';
  return `https://explorer.iex.ec/${networkPath}/dataset/${protectedDataAddress.value}`;
});

// Computed property for network name
const networkName = computed(() => {
  const currentChain = userStore.getCurrentChain();
  return currentChain?.name || 'Unknown network';
});

// Watch to clear protected data when chain changes
watch(
  () => userStore.getCurrentChainId(),
  (newChainId, oldChainId) => {
    if (oldChainId && newChainId && oldChainId !== newChainId) {
      console.log(
        'Chain changed, clearing protected data:',
        oldChainId,
        '->',
        newChainId
      );
      // Clear protected data
      protectedDataAddress.value = '';
      protectedDataIpfsAddress.value = '';
      // Clear localStorage
      localStorage.removeItem('protectedDataAddress');
      localStorage.removeItem('protectedDataIpfsAddress');
      // Reset form
      contentToProtect.value = '';
      protectError.value = null;
    }
  }
);

async function protectData() {
  try {
    if (!web3Provider.value) {
      const provider = await connector.value.getProvider();
      if (!provider) {
        throw new Error('Wallet not connected');
      }
      web3Provider.value = provider;
    }
    if (!contentToProtect.value) {
      throw new Error('Content is empty');
    }
    isLoadingProtect.value = true;
    protectError.value = null;
    const dataProtectorCore = new IExecDataProtectorCore(web3Provider.value);
    const createdProtectedData = await dataProtectorCore.protectData({
      data: {
        secretText: contentToProtect.value,
      },
      name: 'helloWorld',
    });
    console.log('createdProtectedData', createdProtectedData);

    const ipfsCid = createdProtectedData.multiaddr.split('/').pop();

    protectedDataAddress.value = createdProtectedData.address;
    contentToProtect.value = '';
    protectedDataIpfsAddress.value = ipfsCid;
    localStorage.setItem('protectedDataAddress', createdProtectedData.address);
    localStorage.setItem('protectedDataIpfsAddress', ipfsCid);
  } catch (error) {
    protectError.value = error.message;
    console.error('Error protecting data:', error);
  } finally {
    isLoadingProtect.value = false;
  }
}
</script>

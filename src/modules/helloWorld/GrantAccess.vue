<template>
  <div class="my-8 w-full md:my-4">
    <div
      class="mb-6 flex items-center gap-2 font-medium text-[var(--vp-c-text-1)]"
    >
      Connect Your Wallet:
      <ReownButton @connected="onWalletConnected" />
    </div>
    <div>
      <p>You will sign two messages:</p>
      <ol class="ml-4 list-inside list-decimal">
        <li>A message granting access to the iApp</li>
        <li>
          An authentication message to post your granted access on a
          broadcasting service (iExec marketplace)
        </li>
      </ol>
    </div>

    <div class="my-6 flex w-full flex-col gap-4">
      <input
        v-model="authorizedApp"
        placeholder="Enter authorized app address"
        :disabled="!isWalletConnected"
        class="w-full rounded-md border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg-soft)] px-4 py-3 text-base text-[var(--vp-c-text-1)] transition focus:border-[var(--vp-c-brand-2)] focus:shadow-[0_0_0_2px_rgba(252,209,90,0.1)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
      />
      <Button
        :disabled="!isWalletConnected || isLoadingGrant"
        @click="grantAccess"
        data-track="grantAccess"
      >
        {{ isLoadingGrant ? 'Processing...' : 'Grant Access' }}
      </Button>
      <div
        v-if="grantError"
        class="rounded-md bg-red-50 px-4 py-3 text-sm text-red-500"
      >
        {{ grantError }}
      </div>
    </div>

    <div
      v-if="grantedAccess"
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
        Access has been granted to Bob and the iApp
      </div>

      <p class="mt-4 mb-2 font-medium text-[var(--vp-c-text-1)]">
        Protected data:
      </p>
      <div
        class="rounded-md bg-[var(--vp-c-bg-soft)] px-4 py-3 font-mono text-sm break-all text-[var(--vp-c-text-2)]"
      >
        {{ protectedDataAddress }}
      </div>

      <p class="mt-4 mb-2 font-medium text-[var(--vp-c-text-1)]">
        Authorized iExec App:
      </p>
      <div
        class="rounded-md bg-[var(--vp-c-bg-soft)] px-4 py-3 font-mono text-sm break-all text-[var(--vp-c-text-2)]"
      >
        {{ authorizedApp }}
      </div>

      <p class="mt-4 mb-2 font-medium text-[var(--vp-c-text-1)]">
        Authorized user
        <span class="text-sm font-normal text-[var(--vp-c-text-2)]">
          (As we don't have Bob wallet we use the Zero address to grant access
          to all users for the demo)
        </span>
        :
      </p>
      <div
        class="rounded-md bg-[var(--vp-c-bg-soft)] px-4 py-3 font-mono text-sm break-all text-[var(--vp-c-text-2)]"
      >
        {{ '0x0000000000000000000000000000000000000000' }}
      </div>

      <p class="mt-4 mb-2 font-medium text-[var(--vp-c-text-1)]">
        Dataset Price
        <span class="text-sm font-normal text-[var(--vp-c-text-2)]">
          (oohh interesting it means that we could set a price to the protected
          data)
        </span>
        :
      </p>
      <div
        class="rounded-md bg-[var(--vp-c-bg-soft)] px-4 py-3 font-mono text-sm break-all text-[var(--vp-c-text-2)]"
      >
        {{ grantedAccess.datasetprice }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { IExecDataProtectorCore } from '@iexec/dataprotector';
import Button from '../../components/ui/Button.vue';
import ReownButton from './ReownButton.vue';
import { useAccount } from '@wagmi/vue';
import { useWalletConnection } from '../../hooks/useWalletConnection.vue';

const { connector } = useAccount();
const {
  web3Provider,
  isWalletConnected,
  protectedDataAddress,
  onWalletConnected,
} = useWalletConnection();

const authorizedApp = ref('');
const isLoadingGrant = ref(false);
const grantError = ref(null);
const grantedAccess = ref(null);

const grantAccess = async () => {
  try {
    if (!web3Provider.value) {
      const provider = await connector.value.getProvider();
      if (!provider) {
        throw new Error('Wallet not connected');
      }
      web3Provider.value = provider;
    }
    if (!protectedDataAddress?.value) {
      throw new Error(
        'Missing protected data address. Go back to the previous page and protect something.'
      );
    }
    isLoadingGrant.value = true;
    grantError.value = null;
    const dataProtectorCore = new IExecDataProtectorCore(web3Provider.value, {
      iexecOptions: {
        smsURL: 'https://sms.scone-debug.v8-bellecour.iex.ec',
      },
    });

    const grantedAccessResult = await dataProtectorCore.grantAccess({
      protectedData: protectedDataAddress?.value,
      authorizedApp: authorizedApp.value,
      authorizedUser: '0x0000000000000000000000000000000000000000',
    });
    console.log('Access granted:', grantedAccessResult);
    grantedAccess.value = grantedAccessResult; // Store the result in the reactive variable
  } catch (error) {
    grantError.value = error.message;
    console.error('Error granting access. Did you enter a correct app address?', error);
  } finally {
    isLoadingGrant.value = false;
  }
};
</script>

---
title: removeProtectedDataFromSubscription
description:
  Remove a protected data from your subscription in iExec. Stop providing the
  data to current and future subscribers, removing it from subscription access.
---

# removeProtectedDataFromSubscription <ChainNotSupportedBadge />

Method to remove a protected data from your subscription.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } =
  await dataProtectorSharing.removeProtectedDataFromSubscription({
    protectedData: '0x123abc...',
  });
```

## Pre-conditions

- You must be the owner of the collection of which the protected data is
  currently part of.
- There should be no active subscriptions to this collection.
- The protected data should be part of your subscription.

## Parameters

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
import { type RemoveProtectedDataFromSubscriptionParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address of the protected data you'd like to remove from subscription.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } =
  await dataProtectorSharing.removeProtectedDataFromSubscription({
    protectedData: '0x123abc...', // [!code focus]
  });
```

## Return Value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See [`SuccessWithTransactionHash`](../../types.md#successwithtransactionhash)

<script setup>
import RequiredBadge from '@/components/RequiredBadge.vue'
import ChainNotSupportedBadge from '@/components/ChainNotSupportedBadge.vue'
</script>

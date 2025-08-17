---
title: removeProtectedDataForSale
description:
  Method to remove a protected data from sale listing, preventing further
  purchase transactions.
---

# removeProtectedDataForSale <ChainNotSupportedBadge />

Method to remove a protected data for sale.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const notForSaleAnymoreResult =
  await dataProtectorSharing.removeProtectedDataForSale({
    protectedData: '0x123abc...',
  });
```

## Parameters

```ts twoslash
import { type RemoveProtectedDataForSaleParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

Address of the protected data that you'd like to remove for sale.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const notForSaleAnymoreResult =
  await dataProtectorSharing.removeProtectedDataForSale({
    protectedData: '0x123abc...', // [!code focus]
  });
```

## Return Value

```ts twoslash
import { type SuccessWithTransactionHash } from '@iexec/dataprotector';
```

See
[`SuccessWithTransactionHash`](/references/dataProtector/types#successwithtransactionhash)

<script setup>
import RequiredBadge from '@/components/RequiredBadge.vue'
import ChainNotSupportedBadge from '@/components/ChainNotSupportedBadge.vue'
</script>

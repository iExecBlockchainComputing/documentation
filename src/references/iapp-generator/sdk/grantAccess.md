---
title: grantAccess
description:
  Grant secure access to an iApp with iExec's grantAccess method.
  Authorize specific protected data or users to use the iApp, with
  customizable access limits and pricing.
---

# grantAccess

iApps require explicit authorization for runtime access. A newly created `iApp` has no inherent
authorizations. This method grants permission to securely access the specified
`iApp` for processing. Authorization to use the `iApp` is given to a user in the context of
protected data (or a designated list of protected data).

## Usage

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const grantedAccess = await iapp.grantAccess({
  iapp: '0x123abc...',
  authorizedProtectedData: '0x456def...',
  authorizedUser: '0x789cba...',
  pricePerAccess: 3,
  numberOfAccess: 10,
  onStatusUpdate: ({ title, isDone }) => {
    console.log(title, isDone);
  },
});
```

## Parameters

```ts twoslash
import { type GrantAccessParams } from '@mage-sombre/iapp';
```

### iapp <RequiredBadge />

**Type:** `AddressOrENS`

The ethereum address of the iApp you wish to grant access to. **You must own this iApp** to grant access.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const grantedAccess = await iapp.grantAccess({
  iapp: '0x123abc...', // [!code focus]
  authorizedProtectedData: '0x456def...',
  authorizedUser: '0x789cba...',
});
```

### authorizedProtectedData <OptionalBadge />

**Type:** `AddressOrENS`

The address of the protected data you wish to authorize to use the
`iApp` within a secure execution environment. You may specify either a
single protected data or a protected data whitelist. To specify a whitelist, you
provide the ETH address of an
[iExec Whitelist Smart Contract](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/tree/main).
This smart contract should aggregates multiple application versions. This allows
you to introduce new versions of your application without needing to grant
access for the `protectedData` each time you do so.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const grantedAccess = await iapp.grantAccess({
  iapp: '0x123abc...',
  authorizedProtectedData: '0x456def...', // [!code focus]
  authorizedUser: '0x789cba...',
});
```

::: tip

You may authorize a specific protected data or a whitelist of protected data to use the iApp.

The latest version of the iExec Web3Mail decentralized application is
`{{web3MailAddress}}`.

iExec also maintains a whitelist for current and past versions of Web3Mail iApp.
Granting access to this whitelist allows use of an email `protectedData` with
all versions of the Web3Mail application, ensuring you only have to grant this
access once. The ETH address for this whitelist is **{{web3MailAppWhitelist}}**.

:::

### authorizedUser <OptionalBadge />

**Type:** `AddressOrENS`

The address of the user you wish to authorize to use the `iApp`. Note
that these users may not view or manipulate the data. This only grants
permission for the user to submit the protected data to the iApp.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const grantedAccess = await iapp.grantAccess({
  iapp: '0x123abc...',
  authorizedProtectedData: '0x456def...',
  authorizedUser: '0x789cba...', // [!code focus]
});
```

::: tip

You may authorize all users to use the iApp by setting this to
**0x0000000000000000000000000000000000000000**.

:::

### pricePerAccess <OptionalBadge />

**Type:** `number`  
**Default:** `0`

Specifies the usage fee in nano RLC (nRLC) associated with each access of the
iApp. It represents the cost incurred for each individual interaction with
the iApp.

By invoking the grantAccess method with a specific `pricePerAccess` you define
the fee that the specified user (`authorizedUser` parameter) must pay for each
access to the iApp when used with the specified protected data (`authorizedProtectedData`
parameter).

The fee is paid to the owner of the iApp.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const grantedAccess = await iapp.grantAccess({
  iapp: '0x123abc...',
  authorizedProtectedData: '0x456def...',
  authorizedUser: '0x789cba...',
  pricePerAccess: 3, // [!code focus]
  numberOfAccess: 10,
});
```

::: tip

`pricePerAccess` is expressed in nano RLC (nRLC). nRLC is the smallest
subdivision of the RLC token, 1 RLC equals to 10^9 nRLC.

When provided, `pricePerAccess` must be a non-negative integer value.

:::

### numberOfAccess <OptionalBadge />

**Type:** `number`  
**Default:** `1`

Allows restricting the number of times the iApp may be accessed and
used.

It is not technically possible to set an unlimited number of accesses, but you
can set `numberOfAccess` to `10000` for example.

::: info

If you attempt to access the iApp more times than specified in
`numberOfAccess`, you will encounter a **"no dataset orders"** error.

To prevent this error, ensure the `numberOfAccess` is properly set when calling
the `grantAccess` method.

:::

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const grantedAccess = await iapp.grantAccess({
  iapp: '0x123abc...',
  authorizedProtectedData: '0x456def...',
  authorizedUser: '0x789cba...',
  pricePerAccess: 3,
  numberOfAccess: 10, // [!code focus]
});
```

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<GrantAccessStatuses>`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const grantedAccess = await iapp.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

You can expect this callback function to be called with the following titles:

```ts
'CREATE_DATASET_ORDER';
'PUBLISH_DATASET_ORDER';
```

Once with `isDone: false`, and then with `isDone: true`

## Return Value

```ts twoslash
import { type GrantedAccess } from '@mage-sombre/iapp';
```

The result of this method confirms the new access grant. It consists of a JSON
`grantedAccess` object.

[`GrantedAccess`](/references/iapp-generator/sdk/types#grantedaccess)

<script setup>
import { computed } from 'vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';
import RequiredBadge from '@/components/RequiredBadge.vue'
import OptionalBadge from '@/components/OptionalBadge.vue'

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const web3MailAddress = computed(() => chainData.value.web3MailAddress);
const web3MailAppWhitelist = computed(() => chainData.value.web3MailAppWhitelist);
</script>

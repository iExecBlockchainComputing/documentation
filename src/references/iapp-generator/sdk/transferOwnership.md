---
title: transferOwnership
description:
  Transfer ownership of an iApp to a new owner with iExec's
  transferOwnership method. Securely update iApp ownership and automatically
  revoke previous access permissions.
---

# transferOwnership

Allows transferring ownership of an `iApp` entity to a new owner,
identified by their ETH address. The return value provides a transaction hash
and confirmation of the new owner of the `iApp`. Only the current owner
of the `iApp` may invoke this method.

When transferring the `iApp`, the grantedAccess created by the previous
owner are revoked automatically.

Ownership of the `iApp` can be renounced by transferring it to the burn
address `0x000000000000000000000000000000000000dEaD`.

## Usage

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const transferResponse = await iapp.transferOwnership({
  iapp: '0x123abc...',
  newOwner: '0xc5e9f4...',
});
```

## Parameters

```ts twoslash
import { type TransferParams } from '@mage-sombre/iapp';
```

### iapp <RequiredBadge />

**Type:** `AddressOrENS`

ETH address of the `iApp` owned by you which is to be transferred to a
new owner.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const transferResponse = await iapp.transferOwnership({
  iapp: '0x123abc...', // [!code focus]
  newOwner: '0xc5e9f4...',
});
```

### newOwner <RequiredBadge />

**Type:** `AddressOrENS`

ETH address for the new owner for the `iApp`.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const transferResponse = await iapp.transferOwnership({
  iapp: '0x123abc...',
  newOwner: '0xc5e9f4...', // [!code focus]
});
```

## Return Value

```ts twoslash
import { type TransferResponse } from '@mage-sombre/iapp';
```

The result of this method is an array of objects identifying the new owner. The
objects contain the three fields:

### address

`Address`

The ETH address of the `iApp` you transferred.

### to

`AddressOrENS`

The ETH address of the new owner of the `iApp`.

### txHash

`string`

The ID of the transaction that happened on iExec's side chain. You may view
details on the transaction using the [iExec explorer](https://explorer.iex.ec).

<script setup>
import RequiredBadge from '@/components/RequiredBadge.vue'
</script>

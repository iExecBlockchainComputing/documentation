---
title: revokeOneAccess
description:
  Revoke specific access permissions to an iApp with iExec's revokeOneAccess
  method. Manage and remove access granted to users or protected data through
  blockchain transactions.
---

# revokeOneAccess

This method allows revoking a specific access authorization from an `iApp`
entity. The input parameter for this method is sourced from the
[getGrantedAccess](/references/iapp-generator/sdk/getGrantedAccess) method,
which provides a list of all authorizations on single `iApp` entity.

As this will generate a blockchain transaction, expect it to take a least 5sec
(a block time).

## Usage

The `revokeOneAccess` method requires a `grantedAccess` object as an input
parameter. This object is retrieved from the
[`getGrantedAccess`](/references/iapp-generator/sdk/getGrantedAccess) method.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const revokeAccess = await iapp.revokeOneAccess({
  app: '0xea...',
  appprice: '0',
  volume: '1',
  tag: '0x0000000000000000000000000000000000000000000000000000000000000003',
  datasetrestrict: '0xA0C...',
  workerpoolrestrict: '0x000...',
  requesterrestrict: '0xecb..',
  salt: '0x0147...',
  sign: '0xc22c1...',
  remainingAccess: 1,
});
```

## Parameters

```ts twoslash
import { type GrantedAccess } from '@mage-sombre/iapp';
```

### grantedAccess <RequiredBadge />

**Type:** `GrantedAccess`

This is the complete `granted access` object retrieved from an invocation of
`getGrantedAccess` for an iApp.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const revokeAccess = await iapp.revokeOneAccess({
  app: '0xea...', // [!code focus]
  appprice: '0', // [!code focus]
  volume: '1', // [!code focus]
  tag: '0x0000000000000000000000000000000000000000000000000000000000000003', // [!code focus]
  datasetrestrict: '0xA0C...', // [!code focus]
  workerpoolrestrict: '0x000...', // [!code focus]
  requesterrestrict: '0xecb..', // [!code focus]
  salt: '0x0147...', // [!code focus]
  sign: '0xc22c1...', // [!code focus]
  remainingAccess: 1, // [!code focus]
});
```

::: warning

The tag must always be set to
`0x0000000000000000000000000000000000000000000000000000000000000003`. This
specific value indicates that the order is for a confidential asset (an iApp).

:::

## Result Value

```ts twoslash
import { type RevokedAccess } from '@mage-sombre/iapp';
```

[`RevokedAccess`](/references/iapp-generator/sdk/types#revokedaccess)

<script setup>
import RequiredBadge from '@/components/RequiredBadge.vue'
</script>

---
title: revokeAllAccess
description:
  Revoke all or specific access permissions to an iApp with iExec's
  revokeAllAccess method. Efficiently manage iApp security by removing access
  from users or protected data.
---

# revokeAllAccess

This method allows revoking authorizations granted to an `iApp` entity. You may
optionally specify protected data or user addresses for revocation. If you do
not specify either of these optional values, this method will revoke all access
for all users and protected data.

You must be the owner of the iApp.

Under the hood, all granted access will be retrieved and be revoked one by one.
If by any chance there were **more than 20 granted access** to be revoked, you
would need to call this `revokeAllAccess()` method more than once for all
granted access to be actually revoked. Use `getGrantedAccess()` to ensure it is
all done.

## Usage

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const revokeAllAccessResult = await iapp.revokeAllAccess({
  iapp: '0x456def....',
  authorizedProtectedData: '0x123abc...',
  authorizedUser: '0x789cba...',
});
```

## Parameters

```ts twoslash
import { type RevokeAllAccessParams } from '@mage-sombre/iapp';
```

### iapp <RequiredBadge />

**Type:** `AddressOrENS`

The address of the `iApp` subject to access revocation.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const revokeAllAccessResult = await iapp.revokeAllAccess({
  iapp: '0x456def....', // [!code focus]
});
```

### authorizedProtectedData <OptionalBadge />

**Type:** `AddressOrENS`

The protected data address to be removed from the authorization list for the
specified `iApp`. If no address is specified, it will revoke all access from the
iApp, regardless of the protected data.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const revokeAllAccessResult = await iapp.revokeAllAccess({
  iapp: '0x456def....',
  authorizedProtectedData: '0x123abc...', // [!code focus]
  authorizedUser: '0x789cba...',
});
```

### authorizedUser <OptionalBadge />

**Type:** `AddressOrENS`

The user address to be removed from the authorization list for the specified
`iApp`. If no address is specified, it will revoke all access from the iApp,
regardless of the authorized user.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const revokeAllAccessResult = await iapp.revokeAllAccess({
  iapp: '0x456def....',
  authorizedProtectedData: '0x123abc...',
  authorizedUser: '0x789cba...', // [!code focus]
});
```

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<RevokeAllAccessStatuses>`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const revokeAllAccessResult = await iapp.revokeAllAccess({
  iapp: '0x456def....',
  authorizedProtectedData: '0x123abc...',
  authorizedUser: '0x789cba...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

You can expect this callback function to be called with the following titles:

```ts
'RETRIEVE_ALL_GRANTED_ACCESS';
'REVOKE_ONE_ACCESS';
```

Once with `isDone: false`, and then with `isDone: true`

## Return Value

```ts twoslash
import { type RevokedAccess } from '@mage-sombre/iapp';
```

[`RevokedAccess[]`](/references/iapp-generator/sdk/types#revokedaccess)

<script setup>
import RequiredBadge from '@/components/RequiredBadge.vue'
import OptionalBadge from '@/components/OptionalBadge.vue'
</script>

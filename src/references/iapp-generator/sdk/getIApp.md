---
title: getIApp
description:
  Retrieve all protected data for a specific owner or schema with the getIApp
  method in iExec DataProtector. Easily access encrypted data and metadata,
  sorted by creation date.
---

# getIApp

This method allows the user to retrieve all protected data for a given owner,
data schema, or both.

Results are ordered by `creationTimestamp` desc.

::: tip

A data schema is the metadata describing the contents of the protected data
object. The schema is returned as part of the [protectData](protectData.md)
method invocation.

:::

## Usage

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getIApp({
  owner: '0xa0c15e...',
  requiredSchema: {
    email: 'string',
  },
});
```

## Parameters

```ts twoslash
import { type GetProtectedDataParams } from '@mage-sombre/iapp';
```

### protectedDataAddress <OptionalBadge />

**Type:** `AddressOrENS`

Returns the protected data associated with this address.  
Returns an empty array if the protected data is not found.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const oneProtectedData = await dataProtectorCore.getIApp({
  protectedDataAddress: '0x123abc...', // [!code focus]
});
```

### requiredSchema <OptionalBadge />

**Type:** `SearchableDataSchema`

Provides a list of protected data objects matching this schema.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getIApp({
  requiredSchema: { // [!code focus]
    email: 'string', // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

It's also possible to provide a list of accepted types for one schema field:

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getIApp({
  requiredSchema: { // [!code focus]
    picture: ['image/png', 'image/jpeg'], // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

Available types are listed
[here](/references/dataProtector/dataProtectorCore/protectData#schema).

### owner <OptionalBadge />

**Type:** `AddressOrENS`

Provides a list of protected data objects owned by the user with this ETH
address.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getIApp({
  owner: '0xa0c15e...', // [!code focus]
});
```

### createdAfterTimestamp <OptionalBadge />

**Type:** `number`

Provides a list of protected data objects created after this timestamp value.
The provided value should be in seconds.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getIApp({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1710257612, // March 12, 2024 15:33:32 GMT // [!code focus]
});
```

### page <OptionalBadge />

**Type:** `number`  
**Default:** `0`

Specifies the results page to return. Pages are indexed starting at page 0. If
using this field you may also specify a `pageSize` to control the size of the
results.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getIApp({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1710257612, // March 12, 2024 15:33:32 GMT
  page: 1, // [!code focus]
});
```

### pageSize <OptionalBadge />

**Type:** `number`  
**Default:** `1000`  
**Range:** `[10...1000]`

Specifies the number of records in each page of the result set. This is used in
conjunction with the optional `page` parameter to constrain the size of the
result.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getIApp({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1710257612, // March 12, 2024 15:33:32 GMT
  page: 1,
  pageSize: 100, // [!code focus]
});
```

## Return Value

```ts twoslash
import { type ProtectedData } from '@mage-sombre/iapp';
```

See [`ProtectedData`](/references/iapp-generator/sdk/types#protecteddata)

<script setup>
import OptionalBadge from '@/components/OptionalBadge.vue'
</script>

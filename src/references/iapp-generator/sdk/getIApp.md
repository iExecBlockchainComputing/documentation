---
title: getIApp
description:
  Retrieve all iApps for a specific owner or filter by creation date with the getIApp
  method in iExec iApp Generator SDK. Easily access iApp metadata and information,
  sorted by creation date.
---

# getIApp

This method allows the user to retrieve all iApps for a given owner or filter by creation timestamp.

Results are ordered by `creationTimestamp` desc.

::: tip

An iApp is a confidential computing application that runs in secure TEE environments.
The method returns iApp metadata including name, address, owner, and creation timestamp.

:::

## Usage

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const listIApps = await dataProtectorCore.getIApp({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1640995200,
  page: 1,
  pageSize: 20,
});
```

## Parameters

```ts twoslash
import { type GetIAppParams } from '@mage-sombre/iapp';
```

### iapp <OptionalBadge />

**Type:** `AddressOrENS`

Returns the iApp associated with this address.  
Returns an empty array if the iApp is not found.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const oneIApp = await dataProtectorCore.getIApp({
  iapp: '0x123abc...', // [!code focus]
});
```

### owner <OptionalBadge />

**Type:** `AddressOrENS`

Returns all iApps owned by this address.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const iAppsByOwner = await dataProtectorCore.getIApp({
  owner: '0xa0c15e...', // [!code focus]
});
### createdAfterTimestamp <OptionalBadge />

**Type:** `number`

Returns all iApps created after this timestamp (Unix timestamp in seconds).

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const recentIApps = await dataProtectorCore.getIApp({
  createdAfterTimestamp: 1640995200, // [!code focus]
});
```

### page <OptionalBadge />

**Type:** `number`  
**Default:** `0`

Specifies the page number of the result set to return. Pages are zero-based indexed.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const iAppsPage = await dataProtectorCore.getIApp({
  page: 1, // [!code focus]
  pageSize: 20,
});
```

### pageSize <OptionalBadge />

**Type:** `number`  
**Default:** `20`

Specifies the number of records to include in each page of the result set.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecIApp(web3Provider);
// ---cut---
const iAppsPage = await dataProtectorCore.getIApp({
  page: 1,
  pageSize: 50, // [!code focus]
});
```

## Return Value

```ts twoslash
import { type IApp } from '@mage-sombre/iapp';
```

The method returns an array of `IApp` objects containing the following fields:

### name

`string`

The name of the iApp.

### address

`Address`

The Ethereum address of the iApp.

### owner

`Address`

The Ethereum address of the iApp owner.

### creationTimestamp

`number`

The Unix timestamp (in seconds) when the iApp was created.

### multiaddr

`string` (optional)

The multiaddress for P2P communication with the iApp.

<script setup>
import OptionalBadge from '@/components/OptionalBadge.vue'
</script>

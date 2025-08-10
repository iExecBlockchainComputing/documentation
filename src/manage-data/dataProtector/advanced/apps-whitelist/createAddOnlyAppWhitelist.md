---
title: createAddOnlyAppWhitelist
description: Method to create an AddOnlyAppWhitelist for controlling app access. The caller becomes the owner by default, with transferable ownership as an ERC721.
---

# createAddOnlyAppWhitelist

Method to create an `AddOnlyAppWhitelist`. By default, the owner will be the
caller of the `createAddOnlyAppWhitelist` method, but as the
`AddOnlyAppWhitelist` is an ERC721, you can transfer ownership to someone else.

## Usage

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const isAddedToAddAppToAddOnlyAppWhitelist =
  await dataProtectorSharing.createAddOnlyAppWhitelist();
```

## Return Value

```ts twoslash
import { type CreateAppWhitelistResponse } from '@iexec/dataprotector';
```

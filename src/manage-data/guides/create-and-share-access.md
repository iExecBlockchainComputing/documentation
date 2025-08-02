---
title: Create and Share Access to Protected Data
description:
  Learn how to protect data and grant secure access for specific apps and users
---

# 🛡️ Create and Share Access to Protected Data

**Want to keep your data private while still using it in confidential
applications?**

Here's how DataProtector works: first you encrypt your data, then manage your
orders to control exactly who can access it, how many times, and at what price.

Once data is protected, it's only accessible inside secure enclaves (TEEs) by
the specific people and iApps you authorize through the orders you create. No
exceptions.

## Installation

First, install DataProtector in your project:

::: code-group

```bash [npm]
npm install @iexec/dataprotector
```

```bash [yarn]
yarn add @iexec/dataprotector
```

```bash [pnpm]
pnpm add @iexec/dataprotector
```

```bash [bun]
bun add @iexec/dataprotector
```

:::

## Protect Your Data

**Here's what happens:** Your data gets encrypted client-side and stored as an
NFT. Only you control who can decrypt and use it.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'My Email Contact',
  data: {
    email: 'alice@example.com',
    firstName: 'Alice',
    lastName: 'Smith',
  },
});

console.log('Protected data address:', protectedData.address);
```

### What You Can Protect

**Data**: Any JSON object with custom keys. Think user profiles, API
credentials, datasets, model parameters - anything you want to keep private but
still use in computations.

**Supported types**: Strings, numbers, booleans, nested objects, files (convert
to ArrayBuffer first), and arrays (convert to Record format).

**Limits**: File size depends on your storage choice (IPFS or Arweave). For
large datasets, consider using another IPFS node.

::: tip

Need Help ? Check our
[Schema and Dataset Types guide](/manage-data/guides/handle-schemas-dataset-types)
for detailed formatting instructions.

:::

### Debug Mode Option

Debug mode lets you test with debug iApps during development. As "debug" iApps
don't have the same security standards, we recommend using this mode only during
iApp development.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const protectedData = await dataProtectorCore.protectData({
  data: {
    email: 'test@example.com',
  },
  allowDebug: true, // [!code focus]
});
```

## Grant Access

**Here's the key:** The protocol blocks all access to your protected data by
default. You must explicitly grant permission for each app and user combination.
By doing this, you publish signed orders that ensure your protected data stays
private while controlling access to it.

Once you own protected data, here's how to share access:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...', // Your protected data address
  authorizedApp: '0x456def...', // iApp that can process the data
  authorizedUser: '0x789cba...', // User who can trigger the processing
  pricePerAccess: 0, // Cost per use (in nRLC)
  numberOfAccess: 10, // Maximum number of uses
});
```

### Parameters

```ts twoslash
import { type GrantAccessParams } from '@iexec/dataprotector';
```

#### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

The ethereum address of the protected data supplied by the user (returned when
you created it). **You must own this data** to grant access.

#### authorizedApp <RequiredBadge />

**Type:** `AddressOrENS`

**What it is**: The iApp address that's allowed to process your data inside the
secure enclave.

**Why needed**: This ensures only specific, audited applications can access your
data. No random code can touch it.

**Pro tip**: Use app whitelists for production. Instead of a single app address,
you can specify a whitelist contract that contains multiple app versions. Very
useful for when you need to upgrade your iApps, without losing all the granted
access.

```ts
// Single app
authorizedApp: 'web3mail.apps.iexec.eth';

// Or use a whitelist (recommended for production)
authorizedApp: '0x781482C39CcE25546583EaC4957Fb7Bf04C277D2'; // Web3Mail whitelist
```

#### authorizedUser <RequiredBadge />

**Type:** `AddressOrENS`

**What it is**: The wallet address of the user that is allowed to process this
data.

**Why needed**: Even with an authorized app, only specific users can trigger the
computation. This gives you granular control over who uses your data.

**Don't forget**: Even if you are the owner of the data, you need to authorize
yourself!

**Special case**: Set to `0x0000000000000000000000000000000000000000` to allow
**any user** to trigger processing (useful for public datasets).

#### pricePerAccess <OptionalBadge />

**Type:** `number`  
**Default:** `0`

**Quick explanation**: How much you charge per data usage (in nano RLC - nRLC).

Set to `0` for free access, or specify a price to monetize your data
automatically.

**Example**: `pricePerAccess: 1_000_000_000` = 1 RLC per access

→ **Want to learn more monetization capabilities?** See our detailed
[Manage Data Monetization guide](/manage-data/guides/manage-data-monetization)

#### numberOfAccess <OptionalBadge />

**Quick explanation**: Maximum number of times this authorization can be used.

::: warning

Important If someone tries to process your data more times than allowed, they'll
get a "no dataset orders" error. Set this high enough for your use case.

:::

**Example values**:

- `1` - Single use (great for one-time data analysis)
- `100` - Limited campaign (email marketing with usage cap)
- `10000` - Effectively unlimited for most use cases

## What's Next?

**You now have protected data with controlled access.** Here are your next
steps:

- **Process the data**: Use
  [processProtectedData](/manage-data/dataProtector/dataProtectorCore/processProtectedData)
  to run computations
- **Manage access**:
  [Revoke](/manage-data/dataProtector/dataProtectorCore/revokeOneAccess) or
  [modify permissions](/manage-data/dataProtector/dataProtectorCore/grantAccess)
  anytime
- **Learn data types**: Deep dive into
  [schemas and dataset types](/manage-data/guides/handle-schemas-dataset-types)
- **Monetize data**: Explore
  [data monetization strategies](/manage-data/guides/manage-data-monetization)

---

**TL;DR**: Protect data → Grant access to specific app + user → Data stays
encrypted except inside authorized secure enclaves. You keep full control. 🔒

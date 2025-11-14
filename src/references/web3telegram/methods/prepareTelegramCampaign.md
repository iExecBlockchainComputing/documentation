---
title: prepareTelegramCampaign
description:
  Use the prepareTelegramCampaign method from Web3Telegram to prepare a bulk
  Telegram campaign request. This method creates a bulk request that can be
  processed using sendTelegramCampaign.
---

# prepareTelegramCampaign

This method prepares a bulk Telegram campaign by creating a bulk request that
groups multiple protected data items. The prepared campaign request can then be
sent using the
[`sendTelegramCampaign`](/references/web3telegram/methods/sendTelegramCampaign)
method.

::: info

This method is part of a two-step bulk campaign process:

1. **Prepare the campaign** using `prepareTelegramCampaign` to create a bulk
   request
2. **Send the campaign** using `sendTelegramCampaign` to process the bulk
   request

:::

## Usage

::: code-group

```ts twoslash [Browser]
import { IExecWeb3telegram } from '@iexec/web3telegram';

const web3Provider = window.ethereum;
const web3telegram = new IExecWeb3telegram(web3Provider);

// Fetch contacts with bulk access
const contacts = await web3telegram.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Prepare the campaign
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
});
```

```ts twoslash [NodeJS]
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);

// Fetch contacts with bulk access
const contacts = await web3telegram.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Prepare the campaign
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
});
```

:::

## Parameters

```ts twoslash
import { type PrepareTelegramCampaignParams } from '@iexec/web3telegram';
```

### grantedAccesses <RequiredBadge />

**Type:** `GrantedAccess[]`

An array of `GrantedAccess` objects representing contacts who have granted you
access to their protected data with bulk processing capability.

```ts twoslash
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray, // [!code focus]
  telegramContent: 'My message',
  senderName: 'My App',
});
```

### telegramContent <RequiredBadge />

**Type:** `string`

**Maximum size:** `512 kb`

The telegram message content that will be sent to all recipients. The content is
encrypted and stored in IPFS.

```ts twoslash
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent: 'My telegram message content', // [!code focus]
  senderName: 'Awesome project team',
});
```

### senderName <OptionalBadge />

**Type:** `string | undefined`

The name of the telegram message sender that will be displayed to recipients.

```ts twoslash
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team', // [!code focus]
});
```

### maxProtectedDataPerTask <OptionalBadge />

**Type:** `number | undefined`

**Default:** `100`

Limits the number of protected data items processed per task.

```ts twoslash
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
  maxProtectedDataPerTask: 10, // [!code focus]
});
```

### workerpoolAddressOrEns <OptionalBadge />

**Type:** `AddressOrENS | undefined`

**Default:** Default workerpool from chain configuration

The workerpool address or ENS name that will execute the bulk campaign tasks.
You can specify this during preparation or when sending the campaign.

```ts twoslash
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
  workerpoolAddressOrEns: '0xa5de76...', // [!code focus]
});
```

### workerpoolMaxPrice <OptionalBadge />

**Type:** `number | undefined`

**Default:** `0`

The maximum amount (in nRLC) you are willing to pay the workerpool provider for
using their infrastructure to run the Web3Telegram app. You can specify this
during preparation or when sending the campaign.

```ts twoslash
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
  workerpoolMaxPrice: 0.1 * 1e9, // [!code focus]
});
```

### label <OptionalBadge />

**Type:** `string | undefined`

An optional label to identify or categorize the campaign.

```ts twoslash
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
  label: 'Newsletter Campaign', // [!code focus]
});
```

### dataMaxPrice <OptionalBadge />

**Type:** `number | undefined`

**Default:** `0`

The maximum amount (in nRLC) you are willing to pay for accessing the protected
data.

```ts twoslash
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
  dataMaxPrice: 0.1 * 1e9, // [!code focus]
});
```

### appMaxPrice <OptionalBadge />

**Type:** `number | undefined`

**Default:** `0`

The maximum amount (in nRLC) you are willing to pay the Web3Telegram app
provider for using the Web3Telegram application.

```ts twoslash
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
  appMaxPrice: 0.1 * 1e9, // [!code focus]
});
```

## Return Value

```ts twoslash
import { type PrepareTelegramCampaignResponse } from '@iexec/web3telegram';
```

### campaignRequest

**Type:** `BulkRequest`

The prepared bulk request object that contains all the necessary information to
process the bulk campaign. This object should be passed to
`sendTelegramCampaign` to execute the campaign.

```ts
// Use the campaignRequest to send the campaign
const result = await web3telegram.sendTelegramCampaign({
  campaignRequest: telegramCampaign.campaignRequest, // [!code focus]
});
```

## Complete Example

Here's a complete example showing the two-step campaign process:

::: code-group

```ts twoslash [Browser]
import { IExecWeb3telegram } from '@iexec/web3telegram';

const web3Provider = window.ethereum;
const web3telegram = new IExecWeb3telegram(web3Provider);

// Step 1: Fetch contacts with bulk access
const contacts = await web3telegram.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Step 2: Prepare the campaign
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent:
    'Hello! This is a bulk message sent to all recipients. Thank you for subscribing!',
  senderName: 'My Awesome App',
  maxProtectedDataPerTask: 10,
});

// Step 3: Send the campaign
const result = await web3telegram.sendTelegramCampaign({
  campaignRequest: telegramCampaign.campaignRequest,
  appMaxPrice: 0.1 * 1e9,
  workerpoolMaxPrice: 0.1 * 1e9,
});

console.log(`Campaign sent! Created ${result.tasks.length} tasks`);
```

```ts twoslash [NodeJS]
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);

// Step 1: Fetch contacts with bulk access
const contacts = await web3telegram.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Step 2: Prepare the campaign
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent:
    'Hello! This is a bulk message sent to all recipients. Thank you for subscribing!',
  senderName: 'My Awesome App',
  maxProtectedDataPerTask: 10,
});

// Step 3: Send the campaign
const result = await web3telegram.sendTelegramCampaign({
  campaignRequest: telegramCampaign.campaignRequest,
  appMaxPrice: 0.1 * 1e9,
  workerpoolMaxPrice: 0.1 * 1e9,
});

console.log(`Campaign sent! Created ${result.tasks.length} tasks`);
```

:::

## Related Documentation

- [sendTelegramCampaign Method](/references/web3telegram/methods/sendTelegramCampaign) -
  Send a prepared bulk campaign

<script setup>
import RequiredBadge from '@/components/RequiredBadge.vue';
import OptionalBadge from '@/components/OptionalBadge.vue';
</script>

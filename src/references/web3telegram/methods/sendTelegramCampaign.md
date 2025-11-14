---
title: sendTelegramCampaign
description:
  Use the sendTelegramCampaign method from Web3Telegram to send bulk Telegram
  campaigns using a prepared campaign request. This method processes a bulk
  request that has been prepared using prepareTelegramCampaign.
---

# sendTelegramCampaign

This method sends a bulk Telegram campaign using a prepared campaign request. It
processes a bulk request that has been created using the
[`prepareTelegramCampaign`](/references/web3telegram/methods/prepareTelegramCampaign)
method.

::: warning Prerequisites

Before using this method, make sure you have:

1. **Recipients granted access with bulk processing**: When calling
   [`grantAccess`](/references/dataProtector/methods/grantAccess) on the Data
   Protector SDK, recipients must set `allowBulk: true`

2. **Prepared the campaign**: Use
   [`prepareTelegramCampaign`](/references/web3telegram/methods/prepareTelegramCampaign)
   to create the bulk request that will be passed to this method

:::

## Usage

::: code-group

```ts twoslash [Browser]
import { IExecWeb3telegram } from '@iexec/web3telegram';

const web3Provider = window.ethereum;
const web3telegram = new IExecWeb3telegram(web3Provider);

// Step 1: Prepare the campaign
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccess: grantedAccessArray,
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
});

// Step 2: Send the campaign
const result = await web3telegram.sendTelegramCampaign({
  campaignRequest: telegramCampaign.campaignRequest,
  workerpoolAddressOrEns: '0xa5de76...',
});
```

```ts twoslash [NodeJS]
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);

// Step 1: Prepare the campaign
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccess: grantedAccessArray,
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
});

// Step 2: Send the campaign
const result = await web3telegram.sendTelegramCampaign({
  campaignRequest: telegramCampaign.campaignRequest,
  workerpoolAddressOrEns: '0xa5de76...',
});
```

:::

## Parameters

```ts twoslash
import { type SendTelegramCampaignParams } from '@iexec/web3telegram';
```

### campaignRequest <RequiredBadge />

**Type:** `BulkRequest`

The bulk request object returned from `prepareTelegramCampaign`. This contains
all the necessary information to process the bulk campaign, including the
grouped protected data and campaign metadata.

```ts twoslash
const result = await web3telegram.sendTelegramCampaign({
  campaignRequest: telegramCampaign.campaignRequest, // [!code focus]
});
```

### workerpoolAddressOrEns <OptionalBadge />

**Type:** `string | undefined`

**Default:** Default workerpool from chain configuration

The workerpool address or ENS name that will execute the bulk campaign tasks.

```ts twoslash
const result = await web3telegram.sendTelegramCampaign({
  campaignRequest: telegramCampaign.campaignRequest,
  workerpoolAddressOrEns: '0xa5de76...', // [!code focus]
});
```

## Return Value

```ts twoslash
import { type SendTelegramCampaignResponse } from '@iexec/web3telegram';
```

### tasks

**Type:** `Array<{ bulkIndex: number; taskId: string; dealId: string }>`

An array of task objects created for the bulk processing campaign. Each task
object contains:

- `bulkIndex`: The index of the bulk request within the campaign
- `taskId`: The task ID created on the iExec network
- `dealId`: The deal ID associated with the task

Each task may process multiple protected data items depending on the bulk
request configuration.

```ts twoslash
const result = await web3telegram.sendTelegramCampaign({
  campaignRequest: telegramCampaign.campaignRequest,
});

console.log(`Created ${result.tasks.length} tasks`);
result.tasks.forEach((task, index) => {
  console.log(
    `Task ${index + 1}: ${task.taskId} (Deal: ${task.dealId}, Bulk Index: ${task.bulkIndex})`
  );
});
```

## Complete Example

Here's a complete example showing the full workflow from fetching contacts to
sending the campaign:

::: code-group

```ts twoslash [Browser]
// ---cut---
import { IExecWeb3telegram } from '@iexec/web3telegram';

const web3Provider = window.ethereum;
const web3telegram = new IExecWeb3telegram(web3Provider);

// Step 1: Fetch contacts with bulk access capability
// See: fetchMyContacts method with bulkOnly: true
const contacts = await web3telegram.fetchMyContacts({ bulkOnly: true });

// Step 2: Extract grantedAccess from contacts
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Step 3: Prepare the campaign
// See: prepareTelegramCampaign method
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccess: grantedAccessArray,
  telegramContent: 'Hello! This is a bulk message to all recipients.',
  senderName: 'My Awesome App',
});

// Step 4: Send the campaign
const result = await web3telegram.sendTelegramCampaign({
  campaignRequest: telegramCampaign.campaignRequest,
});

console.log(`Campaign sent! Created ${result.tasks.length} tasks`);
result.tasks.forEach((task, index) => {
  console.log(`Task ${index + 1}: ${task.taskId}`);
});
```

```ts twoslash [NodeJS]
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);

// Step 1: Fetch contacts with bulk access capability
// See: fetchMyContacts method with bulkOnly: true
const contacts = await web3telegram.fetchMyContacts({ bulkOnly: true });

if (contacts.length === 0) {
  console.log('No contacts with bulk access found.');
  // Recipients need to grant access with bulk processing enabled
  // See: grantAccess method in Data Protector SDK
  return;
}

// Step 2: Extract grantedAccess from contacts
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Step 3: Prepare the campaign
// See: prepareTelegramCampaign method
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccess: grantedAccessArray,
  telegramContent: 'Hello! This is a bulk message to all recipients.',
  senderName: 'My Awesome App',
});

// Step 4: Send the campaign
const result = await web3telegram.sendTelegramCampaign({
  campaignRequest: telegramCampaign.campaignRequest,
});

console.log(`Campaign sent! Created ${result.tasks.length} tasks`);
result.tasks.forEach((task, index) => {
  console.log(`Task ${index + 1}: ${task.taskId}`);
});
```

:::

## Related Documentation

- [grantAccess Method](/references/dataProtector/methods/grantAccess) - Grant
  access to protected data (recipients must set `allowBulk: true` to enable bulk
  processing)
- [fetchMyContacts Method](/references/web3telegram/methods/fetchMyContacts) -
  Fetch your contacts (use `bulkOnly: true` for bulk campaigns)
- [fetchUserContacts Method](/references/web3telegram/methods/fetchUserContacts) -
  Fetch contacts for a user (use `bulkOnly: true` for bulk campaigns)

<script setup>
import RequiredBadge from '@/components/RequiredBadge.vue';
import OptionalBadge from '@/components/OptionalBadge.vue';
</script>

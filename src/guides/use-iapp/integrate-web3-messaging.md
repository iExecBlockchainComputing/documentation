---
title: Integrate Web3 Messaging (Web3Mail & Web3Telegram)
description:
  End-to-end guide to send messages with Web3Mail (email) and Web3Telegram
  (Telegram) using iExec — protect identifiers, grant access, and send securely
---

# Integrate Web3 Messaging

This guide covers both Web3Mail (email) and Web3Telegram (Telegram) toolkit. The
flow is the same, except that:

- For Web3Mail, you only need the user's email address.
- For Web3Telegram, you only need the user's Telegram Chat ID.

## Overview

1. (Telegram only) Get a Chat ID from the iExec bot
2. Create the Protected Data using DataProtector Toolkit
3. Grant access of your Protected Data
4. Send the message using the relevant SDK (Web3Mail / Web3Telegram)

You can send messages in two modes: single messages (one recipient at a time) or
bulk campaigns (same message to multiple recipients efficiently). See step 4
below for details.

## 1. Retrieve the Telegram Chat ID (Telegram only)

Ask the recipient to open Telegram and start a conversation with
[@IExecWeb3TelegramBot](https://t.me/IExecWeb3TelegramBot). The bot replies with
a unique Chat ID.

::: tip

- Once the Chat ID is protected, all messages will arrive within this bot
  conversation.
- The recipient can leave the conversation at any time to stop receiving
  messages.

:::

## 2. Create the Protected Data

Protect the email address or Chat ID using DataProtector Core.

::: code-group

```ts twoslash [Web3Mail]
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const protectedData = await dataProtectorCore.protectData({
  data: {
    email: 'user@example.com',
  },
});
```

```ts twoslash [Web3Telegram]
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const protectedData = await dataProtectorCore.protectData({
  data: {
    telegram_chatId: '12345678',
  },
});
```

:::

## 3. Grant Access

Grant permission for a sender and/or an app to contact the user. Choose the mode
based on your use case: use **Single Message** mode for individual messages, or
**Bulk Campaigns** mode for sending the same message to multiple recipients.

::: code-group

```ts twoslash [Single Message]
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  pricePerAccess: 3,
  numberOfAccess: 10,
});
```

```ts twoslash [Bulk Campaigns]
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// allowBulk: true automatically sets pricePerAccess to 0 and numberOfAccess to unlimited
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  allowBulk: true, // [!code focus]
});
```

:::

## 4. Send the Message

### Single Messages

Send a message to a single recipient:

::: code-group

```ts twoslash [Web3Mail - Single]
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);

const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
});
```

```ts twoslash [Web3Telegram - Single]
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  senderName: 'Arthur',
  telegramContent: 'My telegram message content',
});
```

:::

### Bulk Campaigns

Send the same message to multiple recipients efficiently. Bulk processing groups
multiple protected data items (emails for Web3Mail or chat IDs for Web3Telegram)
together, reducing gas fees and processing recipients in parallel across one or
more transactions.

**To send a bulk campaign, follow these steps in order:**

1. **Fetch contacts** with bulk access capability using `fetchMyContacts` or
   `fetchUserContacts` with `bulkOnly: true`
2. **Prepare the campaign** by calling `prepareEmailCampaign` (for Web3Mail) or
   `prepareTelegramCampaign` (for Web3Telegram). This creates a bulk request
   object that groups all recipients together
3. **Send the campaign** by calling `sendEmailCampaign` (for Web3Mail) or
   `sendTelegramCampaign` (for Web3Telegram) with the prepared bulk request

::: warning Prerequisites

Before using bulk processing, ensure that recipients have granted access with
`allowBulk: true` when calling `grantAccess` (see step 3 above).

:::

::: code-group

```ts twoslash [Web3Mail - Bulk]
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const web3mail = new IExecWeb3mail(web3Provider);

// Steps 1-2: Executed by the recipient (protected data provider)
// Step 1: Create Protected Data (see section 2)
const protectedData = await dataProtectorCore.protectData({
  data: {
    email: 'user@example.com',
  },
});

// Step 2: Grant access with bulk processing enabled (see section 3)
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: protectedData.address,
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  allowBulk: true,
});

// Steps 3-5: Executed by the sender (who wants to contact recipients)
// Step 3: Fetch contacts with bulk access
const contacts = await web3mail.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Step 4: Prepare the campaign
const emailCampaign = await web3mail.prepareEmailCampaign({
  grantedAccesses: grantedAccessArray,
  emailSubject: 'Hello from My Awesome App!',
  emailContent: 'Hello! This is a bulk email sent to all recipients.',
  contentType: 'text/html',
});

// Step 5: Send the bulk campaign
const { tasks } = await web3mail.sendEmailCampaign({
  campaignRequest: emailCampaign.campaignRequest,
});
```

```ts twoslash [Web3Telegram - Bulk]
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
import { IExecWeb3telegram } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const web3telegram = new IExecWeb3telegram(web3Provider);

// Steps 1-2: Executed by the recipient (protected data provider)
// Step 1: Create Protected Data (see section 2)
const protectedData = await dataProtectorCore.protectData({
  data: {
    telegram_chatId: '12345678',
  },
});

// Step 2: Grant access with bulk processing enabled (see section 3)
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: protectedData.address,
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  allowBulk: true,
});

// Steps 3-5: Executed by the sender (who wants to contact recipients)
// Step 3: Fetch contacts with bulk access
const contacts = await web3telegram.fetchMyContacts({ bulkOnly: true });
const grantedAccessArray = contacts.map((contact) => contact.grantedAccess);

// Step 4: Prepare the campaign
const telegramCampaign = await web3telegram.prepareTelegramCampaign({
  grantedAccesses: grantedAccessArray,
  telegramContent: 'Hello! This is a bulk message sent to all recipients.',
  senderName: 'My Awesome App',
});

// Step 5: Send the bulk campaign
const { tasks } = await web3telegram.sendTelegramCampaign({
  campaignRequest: telegramCampaign.campaignRequest,
});
```

:::

## Payment

Each message sent through Web3Mail or Web3Telegram requires payment in RLC
tokens.

For detailed information about payment methods and pricing, see the
comprehensive guide:
[How to pay for executions](/guides/use-iapp/how-to-pay-executions)

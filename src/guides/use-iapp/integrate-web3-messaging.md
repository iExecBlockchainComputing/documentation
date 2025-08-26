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
4. Send the message using the relevant SDK ( Web3Mail / Web3Telegram )

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

Grant permission for a sender and/or an app to contact the user.

```ts twoslash
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

## 4. Send the Message

::: code-group

```ts twoslash [Web3Mail]
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);

const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  // useVoucher: true,
});
```

```ts twoslash [Web3Telegram]
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

## Payment

Each message sent through Web3Mail or Web3Telegram requires payment in RLC
tokens.

For detailed information about payment methods, pricing, and voucher usage, see
our comprehensive guide:
[How to pay for executions](/guides/use-iapp/how-to-pay-executions)

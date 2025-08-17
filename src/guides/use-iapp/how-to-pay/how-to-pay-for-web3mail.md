---
title: How to Pay for Web3Mail
description:
  Learn how to pay for Web3Mail's confidential computing power using vouchers
  and RLC for secure, blockchain-based email communication.
---

# How to Pay for Web3Mail

[Web3Mail](/references/web3mail) dev tool offers secure, blockchain-based
communication by encrypting emails and protecting user privacy.

The `sendEmail` function uses confidential computing power to encrypt and send
messages, ensuring secure and decentralized email exchanges.

This guide explains how to pay for Web3Mail's computing power using **vouchers**
and **<TokenSymbol />**, detailing the steps for each method.

## Using Vouchers for Web3Mail <ChainNotSupportedBadge />

### Step 1: Obtain a Voucher

- **Acquire Vouchers**: Obtain vouchers through the
  [iExec Builder Dashboard](https://builder.iex.ec/). Note that the number of
  Web3Mail executions and the expiration time of each voucher is restricted
  based on its validity period. Refer to
  [pricing documentation](https://www.iex.ec/voucher) for more information.
- **Support**: For specific limitations related to your voucher, please contact
  iExec Support.

### Step 2: Use the Builder Dashboard

<a href="https://builder.iex.ec/" target="_blank" rel="noreferrer" style="display: inline-block; margin-top: 20px">
  <img :src="builderDashboardImage" alt="Builder dashboard screenshot">
</a>

The iExec Builder Dashboard is a comprehensive tool for managing vouchers and
resources, providing an intuitive interface for:

- **Claiming Vouchers**: Builders can claim vouchers during the BUILD and EARN
  stages.
- **Top-Up Vouchers**: Future updates will allow direct top-ups via the
  dashboard. Currently, builders are redirected to Discord.
- **Checking Voucher Balance**: Track your voucher balance and usage history.

🧙🏼 [Go here](https://builder.iex.ec/)

### Step 3: Grant Allowance (If Necessary)

Use `iexec.account.approve(voucherAddress)` to authorize the voucher smart
contract to debit your account if the voucher balance is insufficient. This
ensures that if the voucher alone doesn't cover the execution cost, the
remaining balance is automatically deducted from your account.

For additional information on using <TokenSymbol /> for fallback payment in Web3Mail, refer
to the **Using <TokenSymbol /> with Web3Mail** section.

### Step 4: Execute Web3Mail's SendEmail Function

When using a voucher for payment, set the `useVoucher` parameter to `true`:

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  useVoucher: true, // [!code focus]
});
```

## Using <TokenSymbol /> for Web3Mail

If you choose to use <TokenSymbol /> to cover the computational cost of Web3Mail (or if you
need to cover data access costs such as retrieving the recipient's email
address), follow these steps:

### Install the iExec SDK

To manage RLC tokens, developers must use the iExec SDK, which offers all the
necessary tools for interacting with the iExec platform. This includes
depositing, withdrawing, and checking balances of RLC and <TokenSymbol />

- In your JS/TS project npm install iexec
- Instantiate the iExec SDK (see the
  [doc](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/README.md#quick-start))

```javascript
import { IExec } from 'iexec';
// connect injected provider
const iexec = new IExec({ ethProvider: window.ethereum });
```

### Purchase RLC

Obtain RLC tokens from a supported cryptocurrency exchange. For detailed information on how to buy RLC tokens, see our [RLC Token guide](/get-started/rlc) which covers all available DEX and CEX supported.

For detailed instructions on how to bridge RLC tokens between networks, see our [Bridge guide](/get-started/tooling-and-explorers/bridge) which covers all supported networks and bridging methods.

### Deposit <TokenSymbol />

Deposit the <TokenSymbol /> into your iExec account using the command:

```javascript
iexec.account.deposit(RLC_amount);
```

This converts <TokenSymbol /> into sRLC, used as proof of funds for task execution.

### Check sRLC Balance

Use the command below to check your balance:

```javascript
iexec.account.show();
```

### Execute sendEmail

Set the `useVoucher` parameter to `false` when using Web3Mail's sendEmail
function to pay with <TokenSymbol />:

```ts twoslash
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  useVoucher: false, // [!code focus]
});
```

### Withdraw sRLC (If Desired)

Convert sRLC back to <TokenSymbol /> and withdraw to your wallet using:

```javascript
iexec.account.withdraw(RLC_amount);
```

<script setup>
// Assets
import builderDashboardImage from '@/assets/tooling-&-explorers/builder-dashboard/builder-dashboard.png';
import ChainNotSupportedBadge from '@/components/ChainNotSupportedBadge.vue'
import TokenSymbol from '@/components/TokenSymbol.vue'
</script>

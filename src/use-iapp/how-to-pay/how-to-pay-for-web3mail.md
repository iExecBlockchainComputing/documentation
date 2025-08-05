# How to pay for Web3mail

[Web3Mail](../tools/web3mail) dev tool offers secure, blockchain-based
communication by encrypting emails and protecting user privacy.

The `sendEmail` function uses confidential computing power to encrypt and send
messages, ensuring secure and decentralized email exchanges.

This guide explains how to pay for Web3Mail's computing power using **vouchers**
and **xRLC**, detailing the steps for each method.

## Using Vouchers for Web3Mail

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
  <img src="/assets/builder-dashboard.png" alt="Builder dashboard screenshot">
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

For additional information on using xRLC for fallback payment in Web3Mail, refer
to the **Using xRLC with Web3Mail** section.

### Step 4: Execute Web3Mail's sendEmail Function

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

## Using xRlC for Web3Mail

If you choose to use xRLC to cover the computational cost of Web3Mail (or if you
need to cover data access costs such as retrieving the recipient's email
address), follow these steps:

### Install the iExec SDK

To manage RLC tokens, developers must use the iExec SDK, which offers all the
necessary tools for interacting with the iExec platform. This includes
depositing, withdrawing, and checking balances of RLC and xRLC

- In your JS/TS project npm install iexec
- Instantiate the iExec SDK (see the
  [doc](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/README.md#quick-start))

```javascript
import { IExec } from 'iexec';
// connect injected provider
const iexec = new IExec({ ethProvider: window.ethereum });
```

### Purchase RLC

Obtain RLC tokens from a supported cryptocurrency exchange.

### Convert to xRLC

Use the iExec Bridge to convert your RLC into xRLC for use on iExec's sidechain.
The bridging operation follows the lock & mint / burn & unlock principle. When
sending tokens from Mainnet to Bellecour, the bridge locks the initial amount on
the source chain and mints the equivalent on the destination chain. When going
in the other direction, it burns tokens on the Sidechain and unlocks the same
amount on Mainnet. The bridged asset is called xRLC on Bellecour.

Users can send tokens from the Ethereum Mainnet to the iExec Sidechain or
vice-versa using the Account Manager
([iExec Explorer](https://explorer.iex.ec/bellecour) or
[POA Bridge UI](https://bridge-bellecour.iex.ec/)) available across all iExec
products.

### Deposit xRLC

Deposit the xRLC into your iExec account using the command:

```javascript
iexec.account.deposit(xRLC_amount);
```

This converts xRLC into sRLC, used as proof of funds for task execution.

### Check sRLC Balance

Use the command below to check your balance:

```javascript
iexec.account.show();
```

### Execute sendEmail

Set the `useVoucher` parameter to `false` when using Web3Mail's sendEmail
function to pay with xRLC:

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

Convert sRLC back to xRLC and withdraw to your wallet using:

```javascript
iexec.account.withdraw(RLC_amount);
```

---
title: How to Pay for iApp Executions
description:
  Learn how to use RLC tokens, manage pricing, and control costs for iApp executions
---

# How to Pay for iApp Executions

iExec uses RLC tokens as the native currency for executing iApps. This guide
covers how to acquire RLC, stake it on the protocol, and manage execution costs.

## Getting RLC Tokens

To execute iApps, you need RLC tokens in your wallet. For detailed information
on how to obtain RLC tokens, see our [RLC guide](/get-started/overview/rlc.md).

## Staking RLC

RLC tokens need to be staked on the iExec protocol to allow task payment. Use
the [iExec SDK](/references/sdk.md) to deposit and manage your RLC:

```ts twoslash
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  'chain', // blockchain node URL
  'PRIVATE_KEY'
);
const iexec = new IExec({
  ethProvider,
});
// ---cut---
// Check your balance
const balance = await iexec.account.checkBalance('0xa0c15e...');
console.log('Nano RLC staked:', balance.stake.toString());
console.log('Nano RLC locked:', balance.locked.toString());

// Lock RLC in your account in the iExec protocol
await iexec.account.deposit(1_000_000_000); // Deposit 1 RLC
```

Now you are ready to run a task on the iExec Protocol and pay for it. See our
guide on
[running iApp with ProtectedData](/guides/use-iapp/run-iapp-with-ProtectedData.md)
for detailed execution steps.

## Understanding Pricing

### Cost components

iApp execution costs consist of several components:

1. **Application Fee**: Paid to the app developer
2. **Data Fee**: Paid to the data owner (if using protected data)
3. **Workerpool Fee**: Paid to the computation provider
4. **Gas Fees**: Blockchain transaction costs

### Setting maximum prices

You can control costs by setting maximum prices for each component:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  dataMaxPrice: 5, // Maximum amount (in nRLC) to pay the protected data owner
  appMaxPrice: 3, // Maximum amount (in nRLC) to pay the iApp provider
  workerpoolMaxPrice: 2, // Maximum amount (in nRLC) to pay the workerpool provider
});
```

::: info

All price parameters are in nRLC (nano RLC). The default value for all price
parameters is 0, which means only free resources are accepted.

:::

## Next Steps

Now that you know how to pay for iApp executions:

- [Run iApp with ProtectedData](/guides/use-iapp/run-iapp-with-ProtectedData)
- [Run iApp without ProtectedData](/guides/use-iapp/run-iapp-without-ProtectedData)

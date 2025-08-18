---
title: How to Pay for iApp Executions
description:
  Learn about payment methods, pricing, and cost management for iApp executions
---

# 💰 How to Pay for iApp Executions

Understanding how to pay for iApp executions is crucial for using the iExec
network effectively. This guide covers all payment methods, pricing structures,
and cost management strategies.

## Payment Methods Overview

iExec supports multiple payment methods for executing iApp:

1. **RLC Tokens**: Direct payment using <TokenSymbol /> tokens
2. **Vouchers**: Pre-funded vouchers for simplified payment
3. **Mixed Payment**: Combination of RLC and vouchers

## Method 1: Paying with RLC Tokens

RLC tokens are the native currency of the iExec network. You need to have RLC in
your wallet to pay for executions.

### Setting Up RLC Payment

#### Step 1: Get RLC Tokens

You can obtain RLC tokens from various exchanges:

- **Centralized Exchanges**: Binance, Coinbase, Kraken
- **Decentralized Exchanges**: Uniswap, SushiSwap
- **Direct Purchase**: Through iExec's official channels

#### Step 2: Transfer to iExec Sidechain

RLC tokens need to be on the iExec sidechain (Bellecour) for payments:

```ts twoslash
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  'bellecour', // blockchain node URL
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

// Deposit RLC to the sidechain
await iexec.account.deposit(1_000_000_000); // Deposit 1 RLC
```

#### Step 3: Execute with RLC Payment

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Execute with RLC payment (default)
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  useVoucher: false, // Explicitly use RLC payment
});
```

### Using CLI with RLC

```bash
# Execute with RLC payment
iexec app run 0x456def... --protectedData 0xa0c15e...

# Check your balance
iexec account show

# Deposit RLC
iexec account deposit 100
```

## Method 2: Paying with Vouchers <ChainNotSupportedBadge />

Vouchers are pre-funded payment instruments that simplify the payment process
and can be shared with others.

### Understanding Vouchers

Vouchers are ERC-20 tokens that represent pre-funded computation credits on the
iExec network. They offer several advantages:

- **Simplified Payment**: No need to manage RLC transfers
- **Sharing**: Can be shared with team members or users
- **Budget Control**: Set spending limits
- **Automated Top-up**: Can be configured to automatically refill

### Using Vouchers for Payment

#### Basic Voucher Usage

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  useVoucher: true, // Use voucher for payment
});
```

::: tip

If your voucher doesn't have enough <TokenSymbol /> to cover the deal, the SDK
will automatically get the required amount to your iExec account. Ensure that
your voucher is authorized to access your iExec account and that your account
has sufficient funds for this transfer to proceed.

:::

#### Using Someone Else Voucher

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  useVoucher: true,
  voucherOwner: '0x5714eB...', // Voucher owner's address
});
```

::: warning

Make sure the voucher's owner has authorized you to use it. This parameter must
be used in combination with `useVoucher: true`.

:::

#### CLI with Vouchers

```bash
# Use your own voucher
iexec app run 0x456def... --protectedData 0xa0c15e... --useVoucher

# Use someone else's voucher
iexec app run 0x456def... --protectedData 0xa0c15e... --useVoucher --voucherOwner 0x5714eB...
```

## Understanding Pricing

### Cost Components

iApp execution costs consist of several components:

1. **Application Fee**: Paid to the app developer
2. **Data Fee**: Paid to the data owner (if using protected data)
3. **Workerpool Fee**: Paid to the computation provider
4. **Gas Fees**: Blockchain transaction costs

### Setting Maximum Prices

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

All price parameters are in **nRLC** (nano RLC). The default value for all price
parameters is `0`, which means no maximum price limit is set.

:::

## Cost Management Strategies

### 1. Monitor Your Balance

Regularly check your RLC balance and voucher status:

```ts twoslash
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  'bellecour', // blockchain node URL
  'PRIVATE_KEY'
);
const iexec = new IExec({
  ethProvider,
});
const protectedDataAddress = '0x123abc...';
// ---cut---
// Check your balance
const balance = await iexec.account.checkBalance('0xa0c15e...');
console.log('Nano RLC staked:', balance.stake.toString());
console.log('Nano RLC locked:', balance.locked.toString());

// Check voucher balance (if applicable)
const myVoucher = await iexec.voucher.showUserVoucher('0xa0c15e...');
console.log('Voucher info:', myVoucher);
```

### 2. Set Reasonable Price Limits

Always set maximum prices to avoid unexpected costs:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Good practice: Set explicit price limits
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  dataMaxPrice: 5, // Maximum for data access
  appMaxPrice: 3, // Maximum for app usage
  workerpoolMaxPrice: 2, // Maximum for computation
});
```

### 3. Use Vouchers for Regular Usage

For frequent executions, consider using vouchers:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Use vouchers for regular operations
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  useVoucher: true, // Simplify payment process
});
```

### 4. Batch Operations

Group multiple executions to optimize costs:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Execute multiple tasks efficiently
const tasks = [
  { protectedData: '0x123abc...', app: '0x456def...' },
  { protectedData: '0x124abc...', app: '0x456def...' },
];

const results = await Promise.all(
  tasks.map((task) =>
    dataProtectorCore.processProtectedData({
      ...task,
      dataMaxPrice: 5,
      appMaxPrice: 3,
      workerpoolMaxPrice: 2,
      useVoucher: true,
    })
  )
);
```

## Payment Troubleshooting

### Insufficient Balance

If you encounter insufficient balance errors:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
import { IExec, utils } from 'iexec';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const ethProvider = utils.getSignerFromPrivateKey(
  'bellecour', // blockchain node URL
  'PRIVATE_KEY'
);
const iexec = new IExec({
  ethProvider,
});
// ---cut---
try {
  const result = await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
  });
} catch (error) {
  if (
    error instanceof Error &&
    error.message.includes('insufficient balance')
  ) {
    console.log('Please add more RLC to your account');
    // Check balance and deposit more if needed
    const balance = await iexec.account.checkBalance('0xa0c15e...');
    console.log('Nano RLC staked:', balance.stake.toString());
    console.log('Nano RLC locked:', balance.locked.toString());
  }
}
```

### Voucher Authorization Issues

If voucher payment fails:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
try {
  const result = await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    useVoucher: true,
    voucherOwner: '0x5714eB...',
  });
} catch (error) {
  if (error instanceof Error && error.message.includes('voucher')) {
    console.log('Voucher authorization failed. Check voucher permissions.');
  }
}
```

### Price Too High Errors

If execution fails due to price constraints:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
try {
  const result = await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    dataMaxPrice: 2, // Low price limit
    appMaxPrice: 1,
    workerpoolMaxPrice: 1,
  });
} catch (error) {
  if (error instanceof Error && error.message.includes('price')) {
    console.log('Increase price limits or wait for lower prices');
    // Retry with higher prices
    const retryResult = await dataProtectorCore.processProtectedData({
      protectedData: '0x123abc...',
      app: '0x456def...',
      dataMaxPrice: 8, // Higher price limit
      appMaxPrice: 5,
      workerpoolMaxPrice: 3,
    });
  }
}
```

## Best Practices

### 1. Always Set Price Limits

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Never execute without price limits
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  dataMaxPrice: 5, // Always set price limits
  appMaxPrice: 3,
  workerpoolMaxPrice: 2,
});
```

### 2. Use Vouchers for Production

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Use vouchers for production applications
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  useVoucher: true, // More reliable for production
});
```

### 3. Monitor Costs Regularly

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
import { IExec, utils } from 'iexec';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const ethProvider = utils.getSignerFromPrivateKey(
  'bellecour', // blockchain node URL
  'PRIVATE_KEY'
);
const iexec = new IExec({
  ethProvider,
});
// ---cut---
// Check costs before and after execution
const balanceBefore = await iexec.account.checkBalance('0xa0c15e...');
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  dataMaxPrice: 5,
  appMaxPrice: 3,
  workerpoolMaxPrice: 2,
});
const balanceAfter = await iexec.account.checkBalance('0xa0c15e...');
console.log(
  'Cost:',
  balanceBefore.stake.toString(),
  '->',
  balanceAfter.stake.toString()
);
```

### 4. Handle Payment Errors Gracefully

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const executeWithPaymentRetry = async (params: any, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await dataProtectorCore.processProtectedData(params);
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes('insufficient balance')
      ) {
        console.log('Insufficient balance, please add more RLC');
        break;
      }
      if (i === maxRetries - 1) throw error;
      console.log(`Payment retry ${i + 1}/${maxRetries}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
};
```

## Next Steps

Now that you understand payment methods:

- Learn about
  [Adding Inputs to Execution](/guides/use-iapp/add-inputs-to-execution)
- Explore
  [Using iApp with Protected Data](/guides/use-iapp/use-iapp-with-protected-data)
- Review the pricing information above for detailed cost analysis

<script setup>
import ChainNotSupportedBadge from '@/components/ChainNotSupportedBadge.vue'
import TokenSymbol from '@/components/TokenSymbol.vue'
</script>

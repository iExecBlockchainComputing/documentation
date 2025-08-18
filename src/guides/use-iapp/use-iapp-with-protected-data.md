---
title: Use iApp with Protected Data
description:
  Learn how to securely process protected data using iApp on the iExec network
---

# 🔒 Use iApp with Protected Data

Protected data is the cornerstone of privacy-preserving computation on iExec.
This guide shows you how to use iApp with protected data, from granting access
to processing and retrieving results.

## Understanding Protected Data and iApp

Protected data is encrypted information that can only be processed by authorized
iApp within Trusted Execution Environments (TEEs). The data remains confidential
throughout the entire computation process.

### The Workflow

1. **Protect Your Data**: Encrypt sensitive information using the Data Protector
2. **Grant Access**: Authorize specific iApp to process your data
3. **Execute iApp**: Run the iApp with your protected data
4. **Retrieve Results**: Get the computation results while data remains private

## Step 1: Protect Your Data

Before using an iApp, you need to protect your sensitive data.

### Basic Data Protection

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Protect your data
const { address: protectedDataAddress } = await dataProtectorCore.protectData({
  name: 'My Sensitive Data',
  data: {
    email: 'user@example.com',
    apiKey: 'secret-api-key-12345',
    preferences: {
      theme: 'dark',
      notifications: true,
    },
  },
});
```

## Step 2: Grant Access to iApp

iApp need explicit authorization to access your protected data.

### Grant Access to a Specific iApp

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Grant access to an iApp
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...', // The iApp address
  authorizedUser: '0x789abc...', // Your wallet address
  pricePerAccess: 5, // Price per access in nRLC
  numberOfAccess: 10, // Number of allowed accesses
});
```

### Check Granted Access

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Check what access you've granted
const grantedAccessList = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789abc...',
});
```

## Step 3: Execute iApp with Protected Data

Once access is granted, you can execute the iApp with your protected data.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Execute iApp with protected data
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...', // The iApp address
});
```

## Step 4: Retrieve Results

This step is optional. Indeed, `processProtectedData` will automatically
download and decrypt the results for you. Nevertheless, if you want to retrieve
results from a completed task, you can do so as follows:

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const taskId = '0x7ac398...';

// ---cut---
// Retrieve the result
const taskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: taskId,
});
```

## Next Steps

Now that you understand how to use iApp with protected data:

- Learn about
  [Different Ways to Execute](/guides/use-iapp/different-ways-to-execute) iApp
- Explore [How to Pay for Executions](/guides/use-iapp/how-to-pay-executions)
- Check out our
  [Add Inputs to Execution](/guides/use-iapp/add-inputs-to-execution) guide

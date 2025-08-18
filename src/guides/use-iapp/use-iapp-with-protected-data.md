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

### Protecting Different Data Types

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Protect contact list for email applications
const { address: contactListAddress } = await dataProtectorCore.protectData({
  name: 'Email Contact List',
  data: {
    contacts: {
      '0x123abc...': 'john@example.com',
      '0x456def...': 'jane@example.com',
      '0x789ghi...': 'bob@example.com',
    },
  },
});

// Protect trading data for oracle applications
const { address: tradingDataAddress } = await dataProtectorCore.protectData({
  name: 'Trading History',
  data: {
    trades: {
      '2024-01-01': { price: 50000, volume: 100 },
      '2024-01-02': { price: 51000, volume: 150 },
      '2024-01-03': { price: 49000, volume: 200 },
    },
  },
});

// Protect financial data for payment applications
const { address: paymentDataAddress } = await dataProtectorCore.protectData({
  name: 'Payment Information',
  data: {
    bankAccount: '1234567890',
    routingNumber: '987654321',
    accountHolder: 'John Doe',
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

### Using DataProtector

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

### Using SDK Library

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
// Create & Sign a request order with protected data
const requestorderToSign = await iexec.order.createRequestorder({
  app: '0x456def...', // The iApp address
  category: 0,
  appmaxprice: 10, // Maximum price in nRLC
  dataset: protectedDataAddress, // Protected data address
  datasetmaxprice: 5, // Maximum price for dataset access
  workerpool: '0xa5de76...', // ENS address for iExec's debug workerpool
});
const requestOrder = await iexec.order.signRequestorder(requestorderToSign);

// Fetch app orders
const appOrders = await iexec.orderbook.fetchAppOrderbook(
  '0x456def...' // Filter by specific app
);
if (appOrders.orders.length === 0) {
  throw new Error('No app orders found for the specified app');
}

// Fetch protected data orders
const datasetOrders = await iexec.orderbook.fetchDatasetOrderbook(
  protectedDataAddress // Filter by specific dataset
);
if (datasetOrders.orders.length === 0) {
  throw new Error(
    'No protectedData orders found for the specified protectedData'
  );
}

// Fetch workerpool orders
const workerpoolOrders = await iexec.orderbook.fetchWorkerpoolOrderbook({
  workerpool: '0xa5de76...', // Filter by specific workerpool
});
if (workerpoolOrders.orders.length === 0) {
  throw new Error('No workerpool orders found for the specified workerpool');
}

// Execute the task
const taskId = await iexec.order.matchOrders({
  requestorder: requestOrder,
  apporder: appOrders.orders[0].order,
  datasetorder: datasetOrders.orders[0].order,
  workerpoolorder: workerpoolOrders.orders[0].order,
});
```

### Using iExec CLI with Protected Data

```bash
# Execute with protected data
iexec app run 0x456def... --dataset 0x123abc...
```

## Step 4: Retrieve Results

After execution completes, retrieve the results from the task.

### Using DataProtector

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

### Using iExec CLI

```bash
# Get the task ID from the execution result
TASK_ID="0x7ac398..."

# Retrieve the result
iexec task show $TASK_ID

# Retrieve a specific file from the result
iexec task show $TASK_ID --path "computed.json"
```

## Real-World Examples

### Example 1: Data Analysis System

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// 1. Protect sensitive dataset
const { address: datasetAddress } = await dataProtectorCore.protectData({
  name: 'Customer Analytics Data',
  data: {
    customers: {
      '0': { id: 1, purchases: 1500, category: 'premium' },
      '1': { id: 2, purchases: 800, category: 'standard' },
      '2': { id: 3, purchases: 2200, category: 'premium' },
    },
  },
});

// 2. Grant access to analytics iApp
await dataProtectorCore.grantAccess({
  protectedData: datasetAddress,
  authorizedApp: '0xanalytics...', // Analytics iApp address
  authorizedUser: '0x789abc...',
  pricePerAccess: 3,
  numberOfAccess: 50,
});

// 3. Execute data analysis
const analysisResult = await dataProtectorCore.processProtectedData({
  protectedData: datasetAddress,
  app: '0xanalytics...',
  args: '--analyze-customer-segments --output-format json',
  appMaxPrice: 10,
});
```

### Example 2: Oracle Price Update

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// 1. Protect trading data
const { address: tradingDataAddress } = await dataProtectorCore.protectData({
  name: 'Trading Data',
  data: {
    trades: {
      '2024-01-01': { price: 50000, volume: 100 },
      '2024-01-02': { price: 51000, volume: 150 },
    },
  },
});

// 2. Grant access to oracle iApp
await dataProtectorCore.grantAccess({
  protectedData: tradingDataAddress,
  authorizedApp: '0xoracle...', // Oracle iApp address
  authorizedUser: '0x789abc...',
  pricePerAccess: 5,
  numberOfAccess: 100,
});

// 3. Execute oracle update
const oracleResult = await dataProtectorCore.processProtectedData({
  protectedData: tradingDataAddress,
  app: '0xoracle...',
  args: '--update-price-feed --asset ETH',
  appMaxPrice: 10,
});
```

### Example 3: Automated Payment Processing

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// 1. Protect payment data
const { address: paymentDataAddress } = await dataProtectorCore.protectData({
  name: 'Payment Data',
  data: {
    bankAccount: '1234567890',
    routingNumber: '987654321',
    accountHolder: 'John Doe',
    monthlyAmount: 1000,
  },
});

// 2. Grant access to payment iApp
await dataProtectorCore.grantAccess({
  protectedData: paymentDataAddress,
  authorizedApp: '0xpayment...', // Payment iApp address
  authorizedUser: '0x789abc...',
  pricePerAccess: 2,
  numberOfAccess: 12, // Monthly payments
});

// 3. Execute payment processing
const paymentResult = await dataProtectorCore.processProtectedData({
  protectedData: paymentDataAddress,
  app: '0xpayment...',
  args: '--process-monthly-payment',
  secrets: {
    1: 'bank-api-key',
  },
  appMaxPrice: 8,
});
```

## Best Practices

### 1. Always Grant Access Before Execution

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const protectedDataAddress = '0x123abc...';
// ---cut---
// Grant access first
await dataProtectorCore.grantAccess({
  protectedData: protectedDataAddress,
  authorizedApp: '0x456def...',
  authorizedUser: '0x789abc...',
  pricePerAccess: 5,
  numberOfAccess: 10,
});

const result = await dataProtectorCore.processProtectedData({
  protectedData: protectedDataAddress,
  app: '0x456def...',
  appMaxPrice: 10,
});
```

### 2. Monitor Access Usage

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Check access usage regularly
const grantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789abc...',
});

console.log('Remaining access:', grantedAccess.count);
```

### 3. Use Appropriate Price Limits

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Set reasonable price limits
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  appMaxPrice: 10, // Set appropriate limit
});
```

### 4. Handle Results Properly

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Store task ID and retrieve results later
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  appMaxPrice: 10,
});

// Store task ID for later retrieval
const taskId = result.taskId;

// Later, retrieve the result
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

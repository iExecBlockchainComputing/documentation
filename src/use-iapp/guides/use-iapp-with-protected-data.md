---
title: Use iApps with Protected Data
description: Learn how to securely process protected data using iApps on the iExec network
---

# 🔒 Use iApps with Protected Data

Protected data is the cornerstone of privacy-preserving computation on iExec. This guide shows you how to use iApps with protected data, from granting access to processing and retrieving results.

## Understanding Protected Data and iApps

Protected data is encrypted information that can only be processed by authorized iApps within Trusted Execution Environments (TEEs). The data remains confidential throughout the entire computation process.

### The Workflow

1. **Protect Your Data**: Encrypt sensitive information using the Data Protector
2. **Grant Access**: Authorize specific iApps to process your data
3. **Execute iApp**: Run the iApp with your protected data
4. **Retrieve Results**: Get the computation results while data remains private

## Step 1: Protect Your Data

Before using an iApp, you need to protect your sensitive data.

### Basic Data Protection

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider(window.ethereum);
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

// Protect your data
const { address: protectedDataAddress } = await dataProtectorCore.protectData({
  name: 'My Sensitive Data',
  data: {
    email: 'user@example.com',
    apiKey: 'secret-api-key-12345',
    preferences: {
      theme: 'dark',
      notifications: true
    }
  },
});
```

### Protecting Different Data Types

```typescript
// Protect contact list for email applications
const { address: contactListAddress } = await dataProtectorCore.protectData({
  name: 'Email Contact List',
  data: {
    contacts: {
      '0x123abc...': 'john@example.com',
      '0x456def...': 'jane@example.com',
      '0x789ghi...': 'bob@example.com'
    }
  },
});

// Protect trading data for oracle applications
const { address: tradingDataAddress } = await dataProtectorCore.protectData({
  name: 'Trading History',
  data: {
    trades: {
      '2024-01-01': { price: 50000, volume: 100 },
      '2024-01-02': { price: 51000, volume: 150 },
      '2024-01-03': { price: 49000, volume: 200 }
    }
  },
});

// Protect financial data for payment applications
const { address: paymentDataAddress } = await dataProtectorCore.protectData({
  name: 'Payment Information',
  data: {
    bankAccount: '1234567890',
    routingNumber: '987654321',
    accountHolder: 'John Doe'
  },
});
```

## Step 2: Grant Access to iApps

iApps need explicit authorization to access your protected data.

### Grant Access to a Specific iApp

```typescript
// Grant access to an iApp
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: protectedDataAddress,
  authorizedApp: '0x456def...', // The iApp address
  authorizedUser: '0x789abc...', // Your wallet address
  pricePerAccess: 5, // Price per access in nRLC
  numberOfAccess: 10, // Number of allowed accesses
});
```

### Check Granted Access

```typescript
// Check what access you've granted
const grantedAccessList = await dataProtectorCore.getGrantedAccess({
  protectedData: protectedDataAddress,
  authorizedApp: '0x456def...',
  authorizedUser: '0x789abc...',
});

console.log('Granted access:', grantedAccessList);
```

## Step 3: Execute iApp with Protected Data

Once access is granted, you can execute the iApp with your protected data.


### Using DataProtector

```typescript
// Execute iApp with protected data
const result = await dataProtectorCore.processProtectedData({
  protectedData: protectedDataAddress,
  app: '0x456def...', // The iApp address
  maxPrice: 10, // Maximum price in nRLC
});
```

### Using SDK Library

```typescript
import { IExecConfig, IExecOrderModule, IExecOrderbookModule } from '@iexec/sdk';

// create the configuration
const config = new IExecConfig({ ethProvider: window.ethereum });

// instantiate modules sharing the same configuration
const orderModule = IExecOrderModule.fromConfig(config);
const orderbookModule = IExecOrderbookModule.fromConfig(config);

// Create a request order with protected data
const requestOrder = await orderModule.createRequestOrder({
  app: '0x456def...', // The iApp address
  appmaxprice: 10, // Maximum price in nRLC
  dataset: protectedDataAddress, // Protected data address
  datasetmaxprice: 5, // Maximum price for dataset access
  workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
  // Other parameters have default values
});

// Fetch matching orders from orderbook with filters
const appOrders = await orderbookModule.fetchAppOrderbook({
  app: '0x456def...', // Filter by specific app
});
const datasetOrders = await orderbookModule.fetchDatasetOrderbook({
  dataset: protectedDataAddress, // Filter by specific dataset
});
const workerpoolOrders = await orderbookModule.fetchWorkerpoolOrderbook({
  workerpool: 'debug-v8-learn.main.pools.iexec.eth', // Filter by specific workerpool ENS
});

// Execute the task
const taskId = await orderModule.matchOrders({
  requestorder: requestOrder,
  apporder: appOrders[0],
  datasetorder: datasetOrders[0],
  workerpoolorder: workerpoolOrders[0],
});
```

### Using CLI with Protected Data

```bash
# Execute with protected data
iexec app run 0x456def... --dataset 0x123abc... --maxPrice 10
```

## Step 4: Retrieve Results

After execution completes, retrieve the results from the task.


### Using DataProtector

```typescript
// Get the task ID from the execution result
const taskId = result.taskId;

// Retrieve the result
const taskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: taskId,
});

// Retrieve a specific file from the result
const taskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: taskId,
  path: 'computed.json', // Extract specific file
});
```

### Using SDK Library

```typescript
import { IExecConfig, IExecResultModule } from '@iexec/sdk';

// create the configuration
const config = new IExecConfig({ ethProvider: window.ethereum });

// instantiate result module
const resultModule = IExecResultModule.fromConfig(config);

// Get the task ID from the execution result
const taskId = result.taskId; // or taskId from SDK library execution

// Retrieve the result
const taskResult = await resultModule.getTaskResult({
  taskId: taskId,
});

// Retrieve a specific file from the result
const specificFile = await resultModule.getTaskResult({
  taskId: taskId,
  path: 'computed.json', // Extract specific file
});
```

### Using CLI

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

```typescript
// 1. Protect sensitive dataset
const { address: datasetAddress } = await dataProtectorCore.protectData({
  name: 'Customer Analytics Data',
  data: {
    customers: [
      { id: 1, purchases: 1500, category: 'premium' },
      { id: 2, purchases: 800, category: 'standard' },
      { id: 3, purchases: 2200, category: 'premium' },
    ]
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
  maxPrice: 10,
});
```

### Example 2: Oracle Price Update

```typescript
// 1. Protect trading data
const { address: tradingDataAddress } = await dataProtectorCore.protectData({
  name: 'Trading Data',
  data: {
    trades: {
      '2024-01-01': { price: 50000, volume: 100 },
      '2024-01-02': { price: 51000, volume: 150 },
    }
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
  maxPrice: 10,
});
```

### Example 3: Automated Payment Processing

```typescript
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
  maxPrice: 8,
});
```

## Advanced Patterns

### Pattern 1: Batch Processing

```typescript
// Process multiple protected datasets
const datasets = [
  { address: '0x123abc...', name: 'Dataset 1' },
  { address: '0x456def...', name: 'Dataset 2' },
  { address: '0x789ghi...', name: 'Dataset 3' },
];

const batchResults = await Promise.all(
  datasets.map(dataset => 
    dataProtectorCore.processProtectedData({
      protectedData: dataset.address,
      app: '0x456def...',
      args: `--dataset-name ${dataset.name}`,
      maxPrice: 10,
    })
  )
);
```

### Pattern 2: Result Processing Pipeline

```typescript
// Process results and use them for further computation
const initialResult = await dataProtectorCore.processProtectedData({
  protectedData: protectedDataAddress,
  app: '0x456def...',
  maxPrice: 10,
});

// Get the result
const taskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: initialResult.taskId,
});

// Use the result for further processing
const processedData = await processResult(taskResult);

// Protect the processed data
const { address: newProtectedDataAddress } = await dataProtectorCore.protectData({
  name: 'Processed Data',
  data: processedData,
});
```

## Best Practices

### 1. Always Grant Access Before Execution

```typescript
// ✅ Good: Grant access first
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
  maxPrice: 10,
});
```

### 2. Monitor Access Usage

```typescript
// Check access usage regularly
const grantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: protectedDataAddress,
  authorizedApp: '0x456def...',
  authorizedUser: '0x789abc...',
});

console.log('Remaining access:', grantedAccess.remainingAccess);
console.log('Used access:', grantedAccess.usedAccess);
```

### 3. Use Appropriate Price Limits

```typescript
// Set reasonable price limits
const result = await dataProtectorCore.processProtectedData({
  protectedData: protectedDataAddress,
  app: '0x456def...',
  maxPrice: 10, // Set appropriate limit
});
```

### 4. Handle Results Properly

```typescript
// Store task ID and retrieve results later
const result = await dataProtectorCore.processProtectedData({
  protectedData: protectedDataAddress,
  app: '0x456def...',
  maxPrice: 10,
});

// Store task ID for later retrieval
const taskId = result.taskId;
localStorage.setItem('lastTaskId', taskId);

// Later, retrieve the result
const taskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: taskId,
});
```

## Next Steps

Now that you understand how to use iApps with protected data:

- Learn about [Different Ways to Execute](./different-ways-to-execute.md) iApps
- Explore [How to Pay for Executions](./how-to-pay-executions.md)
- Check out our [Add Inputs to Execution](./add-inputs-to-execution.md) guide

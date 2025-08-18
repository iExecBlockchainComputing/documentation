---
title: Add Inputs to iApp Execution
description:
  Learn how to provide arguments, files, secrets, and other inputs to iApp
  executions
---

# 📥 Add Inputs to iApp Execution

iApps can accept various types of inputs to customize their behavior and provide
necessary data for processing. This guide covers all the different ways to add
inputs to your iApp executions using various iExec tools and SDKs.

## Types of Inputs

iExec supports several types of inputs for iApp executions:

1. **Arguments**: Command-line arguments passed to the application
2. **Input Files**: URLs to public files that the app can download
3. **Secrets**: Sensitive data like API keys stored securely
4. **Protected Data**: Encrypted data processed within the TEE

## Method 1: Adding Command-Line Arguments

Command-line arguments are passed as a string to the iApp and are visible on the
blockchain.

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
// ---cut---
// Basic arguments
const requestorderToSign = await iexec.order.createRequestorder({
  app: '0x456def...',
  category: 0,
  appmaxprice: 10,
  workerpool: '0xa5de76...', // ENS address for iExec's debug workerpool
  params: 'arg1 arg2 arg3', // Command-line arguments
  // Other parameters have default values
});
const requestOrder = await iexec.order.signRequestorder(requestorderToSign);

// Fetch app orders
const appOrders = await iexec.orderbook.fetchAppOrderbook(
  '0x456def...' // Filter by specific app
);
if (appOrders.orders.length === 0) {
  throw new Error('No app orders found for the specified app');
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
  workerpoolorder: workerpoolOrders.orders[0].order,
});
```

### Using SDK CLI

```bash
# Basic arguments
iexec app run 0x456def... --protectedData 0x123abc... --args "arg1 arg2"

# Complex arguments with spaces
iexec app run 0x456def... --protectedData 0x123abc... --args "--input-file data.csv --output-format json"

# Arguments with quotes (escape properly)
iexec app run 0x456def... --protectedData 0x123abc... --args "--message \"Hello World\" --config '{\"key\": \"value\"}'"
```

### Using DataProtector

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with arguments
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  args: '--input-path data/input.csv --output-format json --verbose',
});
```

## Method 2: Adding Input Files

Input files are URLs to public files that the iApp can download during
execution.

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
// ---cut---
// Single input file
const requestorderToSign = await iexec.order.createRequestorder({
  app: '0x456def...',
  category: 0, // Required: category for the request
  appmaxprice: 10,
  workerpool: '0xa5de76...', // ENS address for iExec's debug workerpool
  params: {
    iexec_input_files: [
      'https://example.com/config.json',
      'https://example.com/template.html',
      'https://example.com/data.csv',
    ],
  },
});
const requestOrder = await iexec.order.signRequestorder(requestorderToSign);

// Fetch app orders
const appOrders = await iexec.orderbook.fetchAppOrderbook(
  '0x456def...' // Filter by specific app
);
if (appOrders.orders.length === 0) {
  throw new Error('No app orders found for the specified app');
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
  workerpoolorder: workerpoolOrders.orders[0].order,
});
```

### Using SDK CLI

```bash
# Single input file
iexec app run 0x456def... --protectedData 0x123abc... --inputFiles "https://example.com/config.json"

# Multiple input files (comma-separated)
iexec app run 0x456def... --protectedData 0x123abc... --inputFiles "https://example.com/config.json,https://example.com/template.html"

# Multiple input files (space-separated)
iexec app run 0x456def... --protectedData 0x123abc... --inputFiles "https://example.com/config.json" --inputFiles "https://example.com/template.html"
```

### Using DataProtector

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with input files
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  inputFiles: [
    'https://raw.githubusercontent.com/user/repo/main/config.json',
    'https://example.com/public-data.csv',
  ],
});
```

## Method 3: Adding Secrets

Secrets are sensitive data like API keys, passwords, or tokens that are stored
securely and made available to the iApp as environment variables.

### Using SDK Library

```ts twoslash [Browser]
// @errors: 2345 2739 7053 2339
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  'bellecour', // blockchain node URL
  'PRIVATE_KEY'
);
const iexec = new IExec({
  ethProvider,
});
// ---cut---
// Basic secrets
const requestorderToSign = await iexec.order.createRequestorder({
  app: '0x456def...',
  category: 0, // Required: category for the request
  appmaxprice: 10,
  workerpool: '0xa5de76...', // ENS address for iExec's debug workerpool
  params: {
    iexec_secrets: {
      1: 'api-key-12345',
      2: 'database-password',
    },
  },
});
const requestOrder = await iexec.order.signRequestorder(requestorderToSign);

// Fetch app orders
const appOrders = await iexec.orderbook.fetchAppOrderbook(
  '0x456def...' // Filter by specific app
);
if (appOrders.orders.length === 0) {
  throw new Error('No app orders found for the specified app');
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
  workerpoolorder: workerpoolOrders.orders[0].order,
});
```

### Using SDK CLI

```bash
# Note: CLI doesn't support secrets directly for security reasons
# Use the SDK for secret management

# Alternative: Use environment variables (less secure)
export IEXEC_SECRET_1="api-key-12345"
export IEXEC_SECRET_2="database-password"
iexec app run 0x456def... --protectedData 0x123abc...
```

### Using DataProtector

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with secrets
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  secrets: {
    1: 'openai-api-key',
    2: 'database-password',
  },
});
```

## Method 4: Specifying File Paths in Protected Data

When working with protected data that contains multiple files, you can specify
which file to process.

### Using DataProtector

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with specific path
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  path: 'data/input.csv',
});

// Get result with specific path
const taskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: '0x7ac398...',
  path: 'output/analysis.json',
});
```

You can combine different types of inputs for complex executions.

## How Secrets Work in iApps

Inside the iApp, secrets are available as environment variables:

```python
# Python iApp example
import os

api_key = os.environ.get('IEXEC_SECRET_1')  # 'api-key-12345'
db_password = os.environ.get('IEXEC_SECRET_2')  # 'database-password'
```

```javascript
// JavaScript iApp example
const apiKey = process.env.IEXEC_SECRET_1; // 'api-key-12345'
const dbPassword = process.env.IEXEC_SECRET_2; // 'database-password'
```

## Next Steps

Now that you understand how to add inputs to iApp executions:

- Learn about
  [Using iApps with Protected Data](/guides/use-iapp/use-iapp-with-protected-data)
- Explore
  [Different Ways to Execute](/guides/use-iapp/different-ways-to-execute) iApps
- Check out our
  [How to Pay for Executions](/guides/use-iapp/how-to-pay-executions) guide

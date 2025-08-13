<!-- ---
title: Add Inputs to iApp Execution
description:
  Learn how to provide arguments, files, secrets, and other inputs to iApp
  executions
---

# 📥 Add Inputs to iApp Execution

iApps can accept various types of inputs to customize their behavior and provide
necessary data for processing. This guide covers all the different ways to add
inputs to your iApp executions using various iExec tools and SDKs.

::: tip ENS Addresses

**ENS (Ethereum Name Service)** is a naming system for
Ethereum addresses that allows you to use human-readable names instead of long
hexadecimal addresses. For example, instead of using `0x1234567890abcdef...`,
you can use `debug-v8-learn.main.pools.iexec.eth`.

In the examples below, we use `debug-v8-learn.main.pools.iexec.eth` which is
iExec's official debug workerpool ENS address. This workerpool is specifically
designed for testing and development purposes on the Bellecour testnet.

:::

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
  "bellecour", // blockchain node URL
  "PRIVATE_KEY",
);
const iexec = new IExec({
  ethProvider,
});
// ---cut---
// Basic arguments
const requestOrder = await iexec.orderModule.createRequestorder({
  app: '0x456def...',
  category: 0,
  appmaxprice: 10,
  workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
  params: 'arg1 arg2 arg3', // Command-line arguments
  // Other parameters have default values
});

// // Fetch matching orders from orderbook with filters
// const appOrders = await orderbookModule.fetchAppOrderbook('0x456def...'); // Filter by specific app
// const workerpoolOrders = await orderbookModule.fetchWorkerpoolOrderbook('debug-v8-learn.main.pools.iexec.eth'); // Filter by specific workerpool ENS

// const taskId = await orderModule.matchOrders({
//   requestorder: requestOrder,
//   apporder: appOrders.orders[0], // Select appropriate app order
//   workerpoolorder: workerpoolOrders.orders[0], // Select appropriate workerpool order
// });

// // Complex arguments with spaces and quotes
// const requestOrder2 = await orderModule.createRequestorder({
//   app: '0x456def...',
//   category: 0,
//   appmaxprice: 10,
//   workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
//   params: '--input-file data.csv --output-format json --message "Hello World"',
//   // Other parameters have default values
// });

// const taskId2 = await orderModule.matchOrders({
//   requestorder: requestOrder2,
//   apporder: appOrders.orders[0],
//   workerpoolorder: workerpoolOrders.orders[0],
// });

// // With protected data
// const requestOrder3 = await orderModule.createRequestorder({
//   app: '0x456def...',
//   category: 0, // Required: category for the request
//   appmaxprice: 10,
//   dataset: '0x123abc...', // Protected data address
//   datasetmaxprice: 5,
//   workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
//   params: '--input-path data/input.csv --output-format json --verbose',
//   // Other parameters have default values
// });

// // Fetch matching orders from orderbook with filters
// const appOrders2 = await orderbookModule.fetchAppOrderbook('0x456def...'); // Filter by specific app
// const datasetOrders = await orderbookModule.fetchDatasetOrderbook('0x123abc...'); // Filter by specific dataset
// const workerpoolOrders2 = await orderbookModule.fetchWorkerpoolOrderbook('debug-v8-learn.main.pools.iexec.eth'); // Filter by specific workerpool ENS

// const taskId3 = await orderModule.matchOrders({
//   requestorder: requestOrder3,
//   apporder: appOrders2.orders[0],
//   datasetorder: datasetOrders.orders[0], // Select appropriate dataset order
//   workerpoolorder: workerpoolOrders2.orders[0],
// });
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
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const dataProtector = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with arguments
const result = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  args: '--input-path data/input.csv --output-format json --verbose',
  maxPrice: 10,
});
```

## Method 2: Adding Input Files

Input files are URLs to public files that the iApp can download during
execution.

### Using SDK Library

```ts twoslash
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  "bellecour", // blockchain node URL
  "PRIVATE_KEY",
);
const iexec = new IExec({
  ethProvider,
});
// ---cut---
// Single input file
const requestOrder = await iexec.orderModule.createRequestorder({
  app: '0x456def...',
  category: 0, // Required: category for the request
  appmaxprice: 10,
  workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
  // Other parameters have default values
});

// // Fetch matching orders from orderbook with filters
// const appOrders = await orderbookModule.fetchAppOrderbook('0x456def...'); // Filter by specific app
// const workerpoolOrders = await orderbookModule.fetchWorkerpoolOrderbook('debug-v8-learn.main.pools.iexec.eth'); // Filter by specific workerpool ENS

// const taskId = await orderModule.matchOrders({
//   requestorder: requestOrder,
//   apporder: appOrders.orders[0],
//   workerpoolorder: workerpoolOrders.orders[0],
//   inputFiles: ['https://example.com/config.json'],
// });

// // Multiple input files
// const requestOrder2 = await orderModule.createRequestorder({
//   app: '0x456def...',
//   category: 0, // Required: category for the request
//   appmaxprice: 10,
//   workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
//   // Other parameters have default values
// });

// const taskId2 = await orderModule.matchOrders({
//   requestorder: requestOrder2,
//   apporder: appOrders.orders[0],
//   workerpoolorder: workerpoolOrders.orders[0],
//   inputFiles: [
//     'https://example.com/config.json',
//     'https://example.com/template.html',
//     'https://example.com/data.csv',
//   ],
// });

// // With protected data and input files
// const requestOrder3 = await orderModule.createRequestorder({
//   app: '0x456def...',
//   category: 0, // Required: category for the request
//   appmaxprice: 10,
//   dataset: '0x123abc...', // Protected data address
//   datasetmaxprice: 5,
//   workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
//   // Other parameters have default values
// });

// // Fetch matching orders from orderbook with filters
// const appOrders2 = await orderbookModule.fetchAppOrderbook({
//   app: '0x456def...', // Filter by specific app
// });
// const datasetOrders = await orderbookModule.fetchDatasetOrderbook('0x123abc...'); // Filter by specific dataset

// const workerpoolOrders2 = await orderbookModule.fetchWorkerpoolOrderbook('debug-v8-learn.main.pools.iexec.eth'); // Filter by specific workerpool ENS

// const taskId3 = await orderModule.matchOrders({
//   requestorder: requestOrder3,
//   apporder: appOrders2.orders[0],
//   datasetorder: datasetOrders.orders[0],
//   workerpoolorder: workerpoolOrders2.orders[0],
//   inputFiles: [
//     'https://raw.githubusercontent.com/user/repo/main/config.json',
//     'https://example.com/public-data.csv',
//   ],
// });
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
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const dataProtector = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with input files
const result = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  inputFiles: [
    'https://raw.githubusercontent.com/user/repo/main/config.json',
    'https://example.com/public-data.csv',
  ],
  maxPrice: 10,
});
```

## Method 3: Adding Secrets

Secrets are sensitive data like API keys, passwords, or tokens that are stored
securely and made available to the iApp as environment variables.

### Using SDK Library

```ts twoslash [Browser]
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  "bellecour", // blockchain node URL
  "PRIVATE_KEY",
);
const iexec = new IExec({
  ethProvider,
});
// ---cut---
// Basic secrets
const requestOrder = await orderModule.createRequestorder({
  app: '0x456def...',
  category: 0, // Required: category for the request
  appmaxprice: 10,
  workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
  // Other parameters have default values
});

// // Fetch matching orders from orderbook with filters
// const appOrders = await orderbookModule.fetchAppOrderbook('0x456def...'); // Filter by specific app
// const workerpoolOrders = await orderbookModule.fetchWorkerpoolOrderbook('debug-v8-learn.main.pools.iexec.eth'); // Filter by specific workerpool ENS

// const taskId = await orderModule.matchOrders({
//   requestorder: requestOrder,
//   apporder: appOrders.orders[0],
//   workerpoolorder: workerpoolOrders.orders[0],
//   secrets: {
//     1: 'api-key-12345',
//     2: 'database-password',
//   },
// });

// // Multiple secrets
// const requestOrder2 = await orderModule.createRequestorder({
//   app: '0x456def...',
//   category: 0, // Required: category for the request
//   appmaxprice: 10,
//   workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
//   // Other parameters have default values
// });

// const taskId2 = await orderModule.matchOrders({
//   requestorder: requestOrder2,
//   apporder: appOrders.orders[0],
//   workerpoolorder: workerpoolOrders.orders[0],
//   secrets: {
//     1: 'openai-api-key',
//     2: 'database-connection-string',
//     3: 'jwt-secret',
//     4: 'encryption-key',
//   },
// });

// // With protected data and secrets
// const requestOrder3 = await orderModule.createRequestorder({
//   app: '0x456def...',
//   category: 0, // Required: category for the request
//   appmaxprice: 10,
//   dataset: '0x123abc...', // Protected data address
//   datasetmaxprice: 5,
//   workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
//   // Other parameters have default values
// });

// // Fetch matching orders from orderbook with filters
// const appOrders2 = await orderbookModule.fetchAppOrderbook('0x456def...'); // Filter by specific app
// const datasetOrders = await orderbookModule.fetchDatasetOrderbook('0x123abc...'); // Filter by specific dataset
// const workerpoolOrders = await orderbookModule.fetchWorkerpoolOrderbook('debug-v8-learn.main.pools.iexec.eth'); // Filter by specific workerpool ENS

// const taskId3 = await orderModule.matchOrders({
//   requestorder: requestOrder3,
//   apporder: appOrders2.orders[0],
//   datasetorder: datasetOrders.orders[0],
//   workerpoolorder: workerpoolOrders.orders[0],
//   secrets: {
//     1: 'openai-api-key',
//     2: 'database-password',
//   },
// });
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
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const dataProtector = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with secrets
const result = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  secrets: {
    1: 'openai-api-key',
    2: 'database-password',
  },
  maxPrice: 10,
});
```

## Method 4: Specifying File Paths in Protected Data

When working with protected data that contains multiple files, you can specify
which file to process.

### Using SDK Library

```ts twoslash [Browser]
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  "bellecour", // blockchain node URL
  "PRIVATE_KEY",
);
const iexec = new IExec({
  ethProvider,
});
// ---cut---
// Basic path specification (with protected data)
const requestOrder = await iexec.orderModule.createRequestorder({
  app: '0x456def...',
  category: 0, // Required: category for the request
  appmaxprice: 10,
  dataset: '0x123abc...', // Protected data address
  datasetmaxprice: 5,
  workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
  // Other parameters have default values
});

// Fetch matching orders from orderbook with filters
const appOrders = await orderbookModule.fetchAppOrderbook({
  app: '0x456def...', // Filter by specific app
});
const datasetOrders = await orderbookModule.fetchDatasetOrderbook({
  dataset: '0x123abc...', // Filter by specific dataset
});
const workerpoolOrders = await orderbookModule.fetchWorkerpoolOrderbook({
  workerpool: 'debug-v8-learn.main.pools.iexec.eth', // Filter by specific workerpool ENS
});

const taskId = await orderModule.matchOrders({
  requestorder: requestOrder,
  apporder: appOrders[0],
  datasetorder: datasetOrders[0],
  workerpoolorder: workerpoolOrders[0],
  path: 'my-content', // Extract specific file from protected data
});

// Complex path examples (with protected data)
const requestOrder2 = await orderModule.createRequestorder({
  app: '0x456def...',
  category: 0, // Required: category for the request
  appmaxprice: 10,
  dataset: '0x123abc...', // Protected data address
  datasetmaxprice: 5,
  workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
  // Other parameters have default values
});

const taskId2 = await orderModule.matchOrders({
  requestorder: requestOrder2,
  apporder: appOrders[0],
  datasetorder: datasetOrders[0],
  workerpoolorder: workerpoolOrders[0],
  path: 'data/processed/results.json',
});

// Retrieve specific file from task result
const taskResult = await resultModule.getTaskResult({
  taskId: '0x7ac398...',
  path: 'computed.json', // Extract specific file from result
});
```

### Using SDK CLI

```bash
# Basic path specification
iexec app run 0x456def... --protectedData 0x123abc... --path "my-content"

# Complex path
iexec app run 0x456def... --protectedData 0x123abc... --path "data/processed/results.json"

# Retrieve result with specific path
iexec task show 0x7ac398... --path "computed.json"
```

### Using DataProtector

```ts twoslash
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const dataProtector = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with specific path
const result = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  path: 'data/input.csv',
  maxPrice: 10,
});

// Get result with specific path
const taskResult = await dataProtector.getResultFromCompletedTask({
  taskId: '0x7ac398...',
  path: 'output/analysis.json',
});
```

## Method 5: Combining Multiple Input Types

You can combine different types of inputs for complex executions.

### Using SDK Library

```ts twoslash [Browser]
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  "bellecour", // blockchain node URL
  "PRIVATE_KEY",
);
const iexec = new IExec({
  ethProvider,
});
// ---cut---
// Complete example with all input types
const requestOrder = await iexec.orderModule.createRequestorder({
  app: '0x456def...',
  category: 0, // Required: category for the request
  appmaxprice: 10,
  dataset: '0x123abc...', // Protected data address
  datasetmaxprice: 5,
  workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
  params: '--mode production --output-format json',
  // Other parameters have default values
});

// // Fetch matching orders from orderbook with filters
// const appOrders = await orderbookModule.fetchAppOrderbook({
//   app: '0x456def...', // Filter by specific app
// });
// const datasetOrders = await orderbookModule.fetchDatasetOrderbook({
//   dataset: '0x123abc...', // Filter by specific dataset
// });
// const workerpoolOrders = await orderbookModule.fetchWorkerpoolOrderbook({
//   workerpool: 'debug-v8-learn.main.pools.iexec.eth', // Filter by specific workerpool ENS
// });

// const taskId = await orderModule.matchOrders({
//   requestorder: requestOrder,
//   apporder: appOrders[0],
//   datasetorder: datasetOrders[0],
//   workerpoolorder: workerpoolOrders[0],
//   inputFiles: [
//     'https://example.com/config.json',
//     'https://example.com/template.html',
//   ],
//   secrets: {
//     1: 'api-key-12345',
//     2: 'database-password',
//   },
//   path: 'data/input.csv',
// });
```

### Using SDK CLI

```bash
# Combine multiple input types
iexec app run 0x456def... \
  --protectedData 0x123abc... \
  --args "--mode production --output-format json" \
  --inputFiles "https://example.com/config.json,https://example.com/template.html" \
  --path "data/input.csv"

# Note: Secrets must be handled via SDK due to CLI limitations
```

### Using DataProtector

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with multiple input types
const result = await dataProtector.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  args: '--mode production --output-format json',
  inputFiles: [
    'https://example.com/config.json',
    'https://example.com/template.html',
  ],
  secrets: {
    1: 'api-key-12345',
    2: 'database-password',
  },
  path: 'data/input.csv',
  maxPrice: 10,
});
```

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

## Input Validation and Error Handling

### Validate Inputs Before Execution

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const validateInputs = (params) => {
  const errors = [];

  // Validate arguments
  if (params.args && params.args.length > 1000) {
    errors.push('Arguments too long (max 1000 characters)');
  }

  // Validate input files
  if (params.inputFiles) {
    params.inputFiles.forEach((url, index) => {
      if (!url.startsWith('https://')) {
        errors.push(`Input file ${index + 1} must use HTTPS`);
      }
    });
  }

  // Validate secrets
  if (params.secrets) {
    Object.keys(params.secrets).forEach((key) => {
      if (!/^\d+$/.test(key)) {
        errors.push('Secret keys must be numeric');
      }
    });
  }

  return errors;
};

// Use validation
const params = {
  protectedData: '0x123abc...',
  app: '0x456def...',
  args: '--test',
  inputFiles: ['https://example.com/file.json'],
  secrets: { 1: 'secret' },
  maxPrice: 10,
};

const errors = validateInputs(params);
if (errors.length > 0) {
  console.error('Validation errors:', errors);
  return;
}

const result = await dataProtectorCore.processProtectedData(params);
```

### Handle Input-Related Errors

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
try {
  const result = await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    args: '--invalid-option',
    maxPrice: 10,
  });
} catch (error) {
  if (error.message.includes('argument')) {
    console.log('Invalid arguments provided');
  } else if (error.message.includes('file')) {
    console.log('Input file not accessible');
  } else if (error.message.includes('secret')) {
    console.log('Secret configuration error');
  } else {
    console.log('Execution failed:', error.message);
  }
}
```

## Best Practices

### 1. Use Appropriate Input Types

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// ✅ Use secrets for sensitive data
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  secrets: { 1: 'api-key' }, // Sensitive data
  args: '--mode production', // Non-sensitive configuration
  maxPrice: 10,
});
```

### 2. Validate URLs and Files

```ts twoslash
// ✅ Ensure input files are accessible
const inputFiles = [
  'https://raw.githubusercontent.com/user/repo/main/config.json',
  'https://example.com/public-data.csv',
];

// Test file accessibility before execution
const testFileAccess = async (url) => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

const accessibleFiles = await Promise.all(
  inputFiles.map(async (url) => ({
    url,
    accessible: await testFileAccess(url),
  }))
);

const validFiles = accessibleFiles
  .filter((file) => file.accessible)
  .map((file) => file.url);
```

### 3. Use Descriptive Arguments

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// ✅ Clear, descriptive arguments
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  args: '--input-format csv --output-format json --verbose --log-level info',
  maxPrice: 10,
});
```

### 4. Organize Secrets Logically

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// ✅ Logical secret numbering
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  secrets: {
    1: 'primary-api-key', // Main API key
    2: 'backup-api-key', // Backup API key
    3: 'database-password', // Database credentials
    4: 'encryption-key', // Encryption key
  },
  maxPrice: 10,
});
```

## Next Steps

Now that you understand how to add inputs to iApp executions:

- Learn about
  [Using iApps with Protected Data](./use-iapp-with-protected-data.md)
- Explore [Different Ways to Execute](./different-ways-to-execute.md) iApps
- Check out our [How to Pay for Executions](./how-to-pay-executions.md) guide -->

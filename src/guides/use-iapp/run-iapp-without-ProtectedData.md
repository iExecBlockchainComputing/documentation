---
title: Run iApp without ProtectedData
description:
  Learn how to run iApp with basic inputs like command-line arguments, public
  files, and secrets using the iexec SDK
---

# 📥 Run iApp without a ProtectedData

When running an iApp, you can use multiple types of inputs even without
ProtectedData. Non-persistent inputs come directly from you (the requester) and
can change between each execution, making them perfect for customizing the
iApp's behavior for each specific run. These inputs include Arguments, Input
Files, and Secrets, which allow you to provide additional data, parameters, and
configuration to enable processing and customize functionality.

## Prerequisites

First, install iExec SDK in your project (for more details see
[iExec SDK documentation](/references/sdk)):

::: code-group

```sh [npm]
npm install iexec
```

```sh [yarn]
yarn add iexec
```

```sh [pnpm]
pnpm add iexec
```

```sh [bun]
bun add iexec
```

:::

## Adding Command-Line Arguments

Command-line arguments are passed as a string to the iApp and are visible on the
blockchain.

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
// Basic arguments
const requestorderToSign = await iexec.order.createRequestorder({
  app: '0x456def...',
  category: 0,
  appmaxprice: 10,
  workerpool: '0xa5de76...',
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

## Adding Input Files

Input files are URLs to public files that the iApp can download during
execution.

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
// Single input file
const requestorderToSign = await iexec.order.createRequestorder({
  app: '0x456def...',
  category: 0, // Required: category for the request
  appmaxprice: 10,
  workerpool: '0xa5de76...',
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

## Adding Secrets

Secrets are sensitive data like API keys, passwords, or tokens that are stored
securely and made available to the iApp as environment variables.

```ts twoslash [Browser]
// @errors: 2345 2739 7053 2339
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  'chain', // blockchain node URL
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
  workerpool: '0xa5de76...',
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

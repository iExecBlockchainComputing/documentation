---
title: Different Ways to Execute iApps
description:
  Learn about various methods for executing iApps on the iExec network
---

# ⚡ Different Ways to Execute iApps

There are multiple ways to execute iApps on the iExec network. This guide covers
the basic execution methods. For advanced features like protected data,
arguments, and input files, see the dedicated guides.

::: tip ENS Addresses 
**ENS (Ethereum Name Service)** is a naming system for
Ethereum addresses that allows you to use human-readable names instead of long
hexadecimal addresses. For example, instead of using `0x1234567890abcdef...`,
you can use `debug-v8-learn.main.pools.iexec.eth`.

In the examples below, we use `debug-v8-learn.main.pools.iexec.eth` which is
iExec's official debug workerpool ENS address. This workerpool is specifically
designed for testing and development purposes on the Bellecour testnet. 
:::

## Method 1: Using the iExec SDK Library

The iExec SDK provides a modular JavaScript interface for executing iApps.

```ts twoslash
import {
  IExecConfig,
  IExecOrderModule,
  IExecOrderbookModule,
} from '@iexec/sdk';

// create the configuration
const config = new IExecConfig({ ethProvider: window.ethereum });

// instantiate modules sharing the same configuration
const orderModule = IExecOrderModule.fromConfig(config);
const orderbookModule = IExecOrderbookModule.fromConfig(config);
// ---cut---
// Create a request order
const requestOrder = await orderModule.createRequestOrder({
  app: '0x456def...', // The iApp address
  appmaxprice: 10, // Maximum price in nRLC
  workerpool: 'debug-v8-learn.main.pools.iexec.eth', // ENS address for iExec's debug workerpool
  // Other parameters have default values
});

// Fetch matching orders from orderbook with filters
const appOrders = await orderbookModule.fetchAppOrderbook({
  app: '0x456def...', // Filter by specific app
});
const workerpoolOrders = await orderbookModule.fetchWorkerpoolOrderbook({
  workerpool: 'debug-v8-learn.main.pools.iexec.eth', // Filter by specific workerpool ENS
});

// Execute the task
const taskId = await orderModule.matchOrders({
  requestorder: requestOrder,
  apporder: appOrders[0],
  workerpoolorder: workerpoolOrders[0],
});
```

## Method 2: Using the iExec CLI

The iExec CLI is perfect for quick executions and automation scripts.

```bash
# Execute an iApp
iexec app run 0x456def...
```

## Method 3: Using the iApp Generator CLI

The iApp Generator CLI provides a streamlined way to execute iApps, especially
for developers who have built their own iApps.

> **Note**: For installation instructions, see the [iApp Generator Getting Started guide](/build-iapp/iapp-generator/getting-started).

### Basic Execution

```bash
# Execute a deployed iApp
iapp run 0x456def...
```

### Testing Before Execution

```bash
# Test the iApp locally first
iapp test
```

## When to Use Each Method

- **iExec Library**: For JavaScript applications and web3 integration
- **iExec CLI**: For quick testing and automation scripts
- **iApp Generator CLI**: For developers who have built their own iApps

## Next Steps

- Learn how to
  [use iApps with protected data](./use-iapp-with-protected-data.md)
- Discover how to [add inputs to execution](./add-inputs-to-execution.md)
- Understand [how to pay for executions](./how-to-pay-executions.md)

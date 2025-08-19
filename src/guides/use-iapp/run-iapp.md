---
title: Run an iApp
description:
  Learn about various methods for executing iApp on the iExec network, including
  CLI and SDK approaches
---

# ⚡ Run an iApp

There are multiple ways to execute an iApp on the iExec network. An iApp can be:

- **Self-sufficient** - Basic execution without additional inputs
- **Data-dependent** - Requires protected data, secrets, input files, or
  command-line arguments

This guide covers the basic execution methods. For advanced features like
protected data, arguments, and input files, see the dedicated guides.

## When to Use Each Method

- **iApp Generator CLI**: For developers who have built their own iApp
- **iExec Library**: For JavaScript applications and web3 integration
- **iExec CLI**: For quick testing and automation scripts

## Method 1: Using the iApp Generator CLI

The iApp Generator CLI provides a streamlined way to execute iApp, especially
for developers who have built their own iApp.

> **Note**: For installation instructions, see the
> [iApp Generator Getting Started guide](/references/iapp-generator/getting-started).

<template v-if="selectedChain === 42161">
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 --chain arbitrum-mainnet"
    asciiText="Execute"
    :steps="arbitrumSteps"
    :completionStep="16"
    :completionMessage="'Deployment of your iApp completed successfully:'"
    :completionItems="arbitrumCompletionItems"
    :successMessage="'Run iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 to execute your iApp on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

<template v-else>
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923"
    asciiText="Execute"
    :steps="bellecourSteps"
    :completionStep="14"
    :completionMessage="'iApp execution completed successfully:'"
    :completionItems="bellecourCompletionItems"
    :successMessage="'Your iApp has been executed successfully on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

## Method 2: Using the iExec SDK Library

The iExec SDK provides a modular JavaScript interface for executing iApp.

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
// Create & Sign a request order
const requestorderToSign = await iexec.order.createRequestorder({
  app: '0x456def...', // The iApp address
  category: 0,
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

## Method 3: Using the iExec CLI

The iExec CLI is perfect for quick executions and automation scripts.

```bash
# Execute an iApp
iexec app run 0x456def...
```

## Next Steps

- Discover how to
  [run an iApp with inputs](/guides/use-iapp/run-iapp-with-inputs)
- Understand [how to pay for executions](/guides/use-iapp/how-to-pay-executions)

<script setup>
import CLIDemo from '@/components/CLIDemo.vue';
import { computed } from 'vue';
import useUserStore from '@/stores/useUser.store';

const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const arbitrumSteps = [
  {
    showAt: 2,
    question: 'Using chain arbitrum-mainnet',
    answer: '',
    showTyping: false,
    isComplete: true
  },
    {
    showAt: 3,
    completeAt: 5,
    question: 'This method requires sending blockchain transactions, transaction fees will be applied. Would you like to continue?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    isComplete: false
  },
  {
    showAt: 5,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 6,
    question: 'Workerpool order fetched',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 7,
    question: 'AppOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 8,
    question: 'RequestOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 9,
    question: 'Deal created successfully',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 10,
    question: 'Task finalized',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 11,
    completeAt: 13,
    question:'Would you like to download the result ?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    isComplete: false
  },
  {
    showAt: 13,
    question: 'Result downloaded to output',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 14,
    completeAt: 16,
    question:'Would you like to see the result ?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    isComplete: false
  }
];

const bellecourSteps = [
  {
    showAt: 2,
    question: 'Using chain bellecour',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 3,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 4,
    question: 'Workerpool order fetched',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 5,
    question: 'AppOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 6,
    question: 'RequestOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 7,
    question: 'Deal created successfully',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 8,
    question: 'Task finalized',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 9,
    completeAt: 11,
    question:'Would you like to download the result ?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    isComplete: false
  },
  {
    showAt: 11,
    question: 'Result downloaded to output',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 12,
    completeAt: 14,
    question:'Would you like to see the result ?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    isComplete: false
  }
];

const arbitrumCompletionItems = [
  '└ Deal: 0x26d758de1be51697c33fa606cd0c5243082a6e675a4463b106d71fde2893280f',
  '└ Task: 0x1a58dd6018b30b022eb35be53ad9374eb630925458d14643a1dfd9c686b964d8',
  '└ Result: Downloaded to output directory'
];

const bellecourCompletionItems = [
  '└ Deal: 0x26d758de1be51697c33fa606cd0c5243082a6e675a4463b106d71fde2893280f',
  '└ Task: 0x1a58dd6018b30b022eb35be53ad9374eb630925458d14643a1dfd9c686b964d8',
  '└ Result: Downloaded to output directory'
];
</script>

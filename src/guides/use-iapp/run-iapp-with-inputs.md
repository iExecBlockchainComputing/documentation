---
title: Add Inputs to iApp Execution
description:
  Learn how to provide arguments, files, secrets, and other inputs to iApp
  executions
---

# 📥 Run iApp with inputs

When an iApp requires additional data or parameters to function, you can provide
various types of inputs to customize its behavior and enable processing. This
guide covers all the different ways to run an iApp with inputs using the
DataProtector turnkey toolkit.

## Choosing Between Toolkit

**DataProtector SDK Toolkit**: Always requires protected data. Best for Node.js/frontend projects and production environments. Offers programmatic control, integration, error handling, and batch operations.

**iApp Generator CLI Toolkit**: No protected data required to run an iApp. Perfect for testing, development, and quick prototyping. Provides immediate execution without coding.

## Possible of Inputs

iExec supports several types of inputs for iApp executions:

1. **Protected Data**: Encrypted data processed within the TEE
2. **Arguments**: Command-line arguments passed to the application
3. **Input Files**: URLs to public files that the app can download
4. **Secrets**: Sensitive data like API keys stored securely

## Adding Protected Data

### With DataProtector Toolkit

When working with protected data that contains multiple files, you can specify
which file to process.

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
```

The `processProtectedData` function will automatically download and decrypt the
results for you. Nevertheless, if you want to retrieve results from a completed
task, you can do so as follows:

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

### With iApp Generator Toolkit

<template v-if="selectedChain === 42161">
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 --chain arbitrum-mainnet --protectedData 0x123abc..."
    asciiText="Execute"
    :steps="arbitrumStepsProtectedData"
    :completionStep="15"
    :completionMessage="'iApp execution with protected data completed successfully:'"
    :completionItems="arbitrumCompletionItems"
    :successMessage="'Your iApp has been executed with protected data on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

<template v-else>
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 --protectedData 0x123abc..."
    asciiText="Execute"
    :steps="bellecourStepsProtectedData"
    :completionStep="15"
    :completionMessage="'iApp execution with protected data completed successfully:'"
    :completionItems="bellecourCompletionItems"
    :successMessage="'Your iApp has been executed with protected data on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

## Adding Command-Line Arguments

### With DataProtector Toolkit

Command-line arguments are passed as a string to the iApp and are visible on the
blockchain.

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

### With iApp Generator Toolkit

<template v-if="selectedChain === 42161">
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 --chain arbitrum-mainnet --args '--input-path data/input.csv --output-format json'"
    asciiText="Execute"
    :steps="arbitrumStepsOther"
    :completionStep="14"
    :completionMessage="'iApp execution with arguments completed successfully:'"
    :completionItems="arbitrumCompletionItems"
    :successMessage="'Your iApp has been executed with arguments on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

<template v-else>
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 --args '--input-path data/input.csv --output-format json'"
    asciiText="Execute"
    :steps="bellecourStepsOther"
    :completionStep="14"
    :completionMessage="'iApp execution with arguments completed successfully:'"
    :completionItems="arbitrumCompletionItems"
    :successMessage="'Your iApp has been executed with arguments on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

## Adding Input Files

### With DataProtector Toolkit

Input files are URLs to public files that the iApp can download during
execution.

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

### With iApp Generator Toolkit

<template v-if="selectedChain === 42161">
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 --chain arbitrum-mainnet --inputFile https://raw.githubusercontent.com/user/repo/main/config.json https://example.com/public-data.csv"
    asciiText="Execute"
    :steps="arbitrumStepsOther"
    :completionStep="14"
    :completionMessage="'iApp execution with input files completed successfully:'"
    :completionItems="arbitrumCompletionItems"
    :successMessage="'Your iApp has been executed with input files on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

<template v-else>
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 --inputFile https://raw.githubusercontent.com/user/repo/main/config.json https://example.com/public-data.csv"
    asciiText="Execute"
    :steps="bellecourStepsOther"
    :completionStep="14"
    :completionMessage="'iApp execution with input files completed successfully:'"
    :completionItems="bellecourCompletionItems"
    :successMessage="'Your iApp has been executed with input files on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

## Adding Secrets

### With DataProtector Toolkit

Secrets are sensitive data like API keys, passwords, or tokens that are stored
securely and made available to the iApp as environment variables.

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

### With iApp Generator Toolkit

<template v-if="selectedChain === 42161">
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 --chain arbitrum-mainnet --requesterSecret 1=openai-api-key 2=database-password"
    asciiText="Execute"
    :steps="arbitrumStepsOther"
    :completionStep="14"
    :completionMessage="'iApp execution with secrets completed successfully:'"
    :completionItems="arbitrumCompletionItems"
    :successMessage="'Your iApp has been executed with secrets on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

<template v-else>
  <CLIDemo
    initialCommand="iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 --requesterSecret 1=openai-api-key 2=database-password"
    asciiText="Execute"
    :steps="bellecourStepsOther"
    :completionStep="14"
    :completionMessage="'iApp execution with secrets completed successfully:'"
    :completionItems="bellecourCompletionItems"
    :successMessage="'Your iApp has been executed with secrets on an iExec TEE worker'"
    :autoRestart="true"
  />
</template>

## Next Steps

Now that you understand how to add inputs to iApp executions:

- Check out our
  [How to Pay for Executions](/guides/use-iapp/how-to-pay-executions) guide

<script setup>
import CLIDemo from '@/components/CLIDemo.vue';
import { computed } from 'vue';
import useUserStore from '@/stores/useUser.store';

const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

// Steps for Protected Data (includes ProtectedData access found)
const arbitrumStepsProtectedData = [
  {
    showAt: 2,
    question: 'Using chain arbitrum-mainnet',
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
    question: 'ProtectedData access found',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 7,
    question: 'RequestOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 8,
    question: 'Deal created successfully',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 9,
    question: 'Task finalized',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 10,
    completeAt: 12,
    question: 'Would you like to download the result?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    isComplete: false
  },
  {
    showAt: 12,
    question: 'Result downloaded to output',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 13,
    completeAt: 15,
    question: 'Would you like to see the result?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    isComplete: false
  }
];

// Steps for other input types (without ProtectedData access found)
const arbitrumStepsOther = [
  {
    showAt: 2,
    question: 'Using chain arbitrum-mainnet',
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
    question: 'Would you like to download the result?',
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
    question: 'Would you like to see the result?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    isComplete: false
  }
];

// Steps for Protected Data (includes ProtectedData access found)
const bellecourStepsProtectedData = [
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
    question: 'ProtectedData access found',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 7,
    question: 'RequestOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 8,
    question: 'Deal created successfully',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 9,
    question: 'Task finalized',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 10,
    completeAt: 12,
    question: 'Would you like to download the result?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    isComplete: false
  },
  {
    showAt: 12,
    question: 'Result downloaded to output',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 13,
    completeAt: 15,
    question: 'Would you like to see the result?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    isComplete: false
  }
];

// Steps for other input types (without ProtectedData access found)
const bellecourStepsOther = [
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
    question: 'Would you like to download the result?',
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
    question: 'Would you like to see the result?',
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

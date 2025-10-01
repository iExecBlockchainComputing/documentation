---
title: Run iApp
description:
  Learn how to run iApp with encrypted protected data, arguments, and input
  files using the iApp Generator toolkit
---

# 📥 Run iApp

When running an iApp, you can use multiple types of inputs. While ProtectedData
is not mandatory to run an iApp, it's a powerful input type that allows you to
process encrypted data from another provider. You can also use non-persistent
inputs that come directly from you (the requester) and can change between each
execution: Arguments, Input Files, and Secrets. These non-persistent inputs are
perfect for customizing the iApp's behavior for each specific run.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iappGenerator = new IExecIApp(web3Provider);
// ---cut---
// Process protected data with specific path
const result = await iappGenerator.runIApp({
  iapp: '0x456def...',
});
```

## Adding Protected Data

When working with protected data that contains multiple files, you can specify
which file to process.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iappGenerator = new IExecIApp(web3Provider);
// ---cut---
// Process protected data with specific path
const result = await iappGenerator.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  path: 'data/input.csv',
});
```

The `runIApp` function will automatically download and decrypt the
results for you. Nevertheless, if you want to retrieve results from a completed
task, you can do so as follows:

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iappGenerator = new IExecIApp(web3Provider);
const taskId = '0x7ac398...';

// ---cut---
// Retrieve the result
const taskResult = await iappGenerator.getResultFromCompletedTask({
  taskId: taskId,
});
```

## Adding Command-Line Arguments

Command-line arguments are passed as a string to the iApp and are visible on the
blockchain.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iappGenerator = new IExecIApp(web3Provider);
// ---cut---
// Process protected data with arguments
const result = await iappGenerator.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  args: '--input-path data/input.csv --output-format json --verbose',
});
```

## Adding Input Files

Input files are URLs to public files that the iApp can download during
execution.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iappGenerator = new IExecIApp(web3Provider);
// ---cut---
// Process protected data with input files
const result = await iappGenerator.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  inputFiles: [
    'https://raw.githubusercontent.com/user/repo/main/config.json',
    'https://example.com/public-data.csv',
  ],
});
```

## Adding Secrets

Secrets are sensitive data like API keys, passwords, or tokens that are stored
securely and made available to the iApp as environment variables.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iappGenerator = new IExecIApp(web3Provider);
// ---cut---
// Process protected data with secrets
const result = await iappGenerator.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  secrets: {
    1: 'openai-api-key',
    2: 'database-password',
  },
});
```

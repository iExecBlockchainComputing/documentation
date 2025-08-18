---
title: Add Inputs to iApp Execution
description:
  Learn how to provide arguments, files, secrets, and other inputs to iApp
  executions
---

# 📥 Add Inputs to iApp Execution

iApp can accept various types of inputs to customize their behavior and provide
necessary data for processing. This guide covers all the different ways to add
inputs to your iApp executions using various iExec tools and SDK.

## Types of Inputs

iExec supports several types of inputs for iApp executions:

1. **Arguments**: Command-line arguments passed to the application
2. **Input Files**: URLs to public files that the app can download
3. **Secrets**: Sensitive data like API keys stored securely
4. **Protected Data**: Encrypted data processed within the TEE

## Adding Command-Line Arguments

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

## Adding Input Files

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

## Adding Secrets

Secrets are sensitive data like API keys, passwords, or tokens that are stored
securely and made available to the iApp as environment variables.

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

## Specifying File Paths in Protected Data

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

## Next Steps

Now that you understand how to add inputs to iApp executions:

- Learn about
  [Using iApp with Protected Data](/guides/use-iapp/use-iapp-with-protected-data)
- Explore
  [Different Ways to Execute](/guides/use-iapp/different-ways-to-execute) iApp
- Check out our
  [How to Pay for Executions](/guides/use-iapp/how-to-pay-executions) guide

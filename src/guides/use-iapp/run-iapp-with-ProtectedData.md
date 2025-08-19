---
title: Run iApp with ProtectedData
description:
  Learn how to run iApp with encrypted protected data, arguments, and input files using the DataProtector toolkit for secure data processing
---

# 📥 Run iApp with a ProtectedData

When an iApp requires additional data or parameters to function, you can provide
various types of inputs to customize its behavior and enable processing. This
guide covers all the different ways to run an iApp with inputs using the
DataProtector turnkey toolkit.

## Possible Inputs

iExec supports several types of inputs for iApp executions:

1. **Protected Data**: Encrypted data processed within the TEE
2. **Arguments**: Command-line arguments passed to the application
3. **Input Files**: URLs to public files that the app can download
4. **Secrets**: Sensitive data like API keys stored securely

## Adding Protected Data

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

## Next Steps

Now that you understand how to add inputs to iApp executions:

- Check out our
  [How to Pay for Executions](/guides/use-iapp/how-to-pay-executions) guide

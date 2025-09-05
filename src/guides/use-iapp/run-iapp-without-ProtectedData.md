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

Before you begin, make sure you have the iExec SDK installed.

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

## 🔐 Encrypt Results (Advanced)

::: info DataProtector handles encryption automatically If you're using
DataProtector, result encryption is handled automatically. This section is only
needed for manual encryption when not using DataProtector. :::

Secure your outputs with end‑to‑end encryption so only you (the beneficiary) can
read them. Results leave the enclave and may traverse untrusted storage and
networks; encryption ensures nobody else (operators, storage providers,
intermediaries) can access the content.

### 1) Generate your encryption key pair

The beneficiary key pair is the root of trust for result confidentiality. The
public key will be used inside the TEE to encrypt results for the beneficiary;
the private key stays with the beneficiary to decrypt them locally.

Run from your iExec project directory:

```bash
iexec result generate-encryption-keypair
```

This creates two files in `.secrets/beneficiary/`:

```
.secrets/
└─ beneficiary/
   ├─ <0x-your-wallet-address>_key       # PRIVATE KEY (keep safe)
   └─ <0x-your-wallet-address>_key.pub   # PUBLIC KEY
```

Back up the private key securely. You will only need it locally to decrypt
results.

### 2) Push your public key to the SMS

The Secret Management Service securely delivers your public key, at runtime, to
the enclave running your iApp. Without this, the iApp cannot encrypt outputs for
you.

Make the public key available to TEEs at runtime:

```bash
iexec result push-encryption-key --tee-framework scone
```

Verify it:

```bash
iexec result check-encryption-key --tee-framework scone
```

### 3) Run the iApp with encrypted results

The --encrypt-result flag instructs the platform to perform envelope encryption
inside the enclave using your public key, so the archive that leaves the TEE is
unreadable to others.

Trigger a task and request encrypted outputs:

```bash
iexec app run <0x-app-address> \
  --workerpool <0x-workerpool-address> \
  --tag tee,scone \
  --encrypt-result \
  --watch
```

When completed, download the results archive:

```bash
iexec task show <0x-task-id> --download
```

Inside the archive, `iexec_out/result.zip.aes` is encrypted.

Note: Results are encrypted for the task beneficiary. Ensure the beneficiary
address is yours to be able to decrypt the archive.

If you extract the archive and try to read the encrypted file, you'll see
unreadable content:

```bash
mkdir /tmp/trash && \
    unzip <0x-your-task-id>.zip -d /tmp/trash && \
    cat /tmp/trash/iexec_out/result.zip.aes
```

The output will look like:

```bash
)3XqYvzEfRu<\ݵmm疞rc(a{{'ܼ͛q/[{hgD$g\.kj"s?"hJ_Q41_[{XԚa蘟vEr肽
Յ]9WTL*tdzO`!e&snoL3K6L9%
```

This confirms the results are properly encrypted and unreadable without the
private key.

### 4) Decrypt results locally

Results are encrypted end‑to‑end; only your private key can decrypt them. This
step restores the plaintext so you can use the output files.

Use your private key generated in step 1:

```bash
iexec result decrypt iexec_out/result.zip.aes
```

This produces `results.zip`. Extract it to view plaintext outputs:

```bash
unzip results.zip -d my-decrypted-result
```

And you can see the content of your result file:

```bash
$ cat my-decrypted-result/result.txt
Hello, world!
```

Your results are now decrypted and ready to use.

### Notes and tips

- Keep the private key offline and backed up.
- You can rotate keys by re-running generation and push steps; old tasks remain
  decryptable with the old private key.
- iApp code does not need changes to enable result encryption; it is enforced by
  the TEE using the public key from SMS.

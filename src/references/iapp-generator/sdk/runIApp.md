---
title: runIApp
description:
  Execute iApps securely with iExec's runIApp method. Run confidential computing
  applications with optional protected data while maintaining privacy and security.
---

# runIApp

Allows executing an iApp with optional protected data processing.

> [!IMPORTANT]
>
> You must ensure the iApp has authorization to use the `protectedData` if provided.
> You may grant this permission using the
> [`grantAccess`](/references/iapp-generator/sdk/grantAccess)
> method.

## Usage

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  args: 'arg1 arg2',
  inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
  secrets: {
    1: 'secret1',
    2: 'secret2',
  },
  dataMaxPrice: 10,
  appMaxPrice: 5,
  workerpoolMaxPrice: 2,
});
```

## Parameters

```ts twoslash
import { type RunIAppParams } from '@mage-sombre/iapp';
```

### iapp <RequiredBadge />

**Type:** `AddressOrENS`

The address or ENS of the iApp to execute.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...', // [!code focus]
  protectedData: '0x123abc...',
});
```

### protectedData <OptionalBadge />

**Type:** `AddressOrENS`

The address or ENS of the authorized protected data that the iApp will process.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...', // [!code focus]
});
```

### dataMaxPrice <OptionalBadge />

**Type:** `number`  
**Default:** `0`

The maximum price of dataset per task for processing the protected data.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  dataMaxPrice: 10, // [!code focus]
});
```

### appMaxPrice <OptionalBadge />

**Type:** `number`  
**Default:** `0`

The maximum price of application per task for processing the protected data.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  appMaxPrice: 5, // [!code focus]
});
```

### workerpoolMaxPrice <OptionalBadge />

**Type:** `number`  
**Default:** `0`

The maximum price of workerpool per task for processing the protected data.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  workerpoolMaxPrice: 2, // [!code focus]
});
```

### path <OptionalBadge />

**Type:** `string`

The file name of the desired file in the returned ZIP file.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  path: 'my-content', // [!code focus]
});
```

### args <OptionalBadge />

**Type:** `string`

Arguments to pass to the application during execution.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  args: 'arg1 arg2', // [!code focus]
});
```

### inputFiles <OptionalBadge />

**Type:** `string[]`

The input file required for the application's execution (direct download URL).

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  inputFiles: ['https://example.com/file1', 'https://example.com/file2'], // [!code focus]
});
```

### secrets <OptionalBadge />

**Type:** `Record<number, string>`

Requester secrets necessary for the application's execution.
It is represented as a mapping of numerical identifiers to corresponding secrets.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  secrets: { // [!code focus]
    1: 'secret1', // [!code focus]
    2: 'secret2', // [!code focus]
  }, // [!code focus]
});
```

### callbackContract <OptionalBadge />

**Type:** `AddressOrENS`

Address or ENS of the smart contract to be called back once the task is completed.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  callbackContract: '0x789ghi...', // [!code focus]
});
```

### workerpool <OptionalBadge />

**Type:** `AddressOrENS`

The workerpool to use for the application's execution. (default iExec production workerpool)

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  workerpool: '0xabc123...', // [!code focus]
});
```

### useVoucher <OptionalBadge />

**Type:** `boolean`

A boolean that indicates whether to use a voucher or no.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  useVoucher: true, // [!code focus]
});
```

### voucherOwner <OptionalBadge />

**Type:** `AddressOrENS`

Override the voucher contract to use, must be combined with useVoucher: true the user must be authorized by the voucher's owner to use it.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  useVoucher: true,
  voucherOwner: '0xdef456...', // [!code focus]
});
```

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<RunIAppStatuses>`

Callback function to be notified at intermediate steps.

```ts twoslash
import { IExecIApp, getWeb3Provider } from '@mage-sombre/iapp';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const iapp = new IExecIApp(web3Provider);
// ---cut---
const runIAppResponse = await iapp.runIApp({
  iapp: '0x456def...',
  protectedData: '0x123abc...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```

You can expect this callback function to be called with the following titles:

```ts
'FETCH_ORDERS';
'FETCH_PROTECTED_DATA_ORDERBOOK';
'FETCH_APP_ORDERBOOK';
'FETCH_WORKERPOOL_ORDERBOOK';
'PUSH_REQUESTER_SECRET';
'REQUEST_TO_RUN_IAPP';
'CONSUME_TASK';
'CONSUME_RESULT_DOWNLOAD';
'CONSUME_RESULT_DECRYPT';
```

Once with `isDone: false`, and then with `isDone: true`

## Return Value

```ts twoslash
import { type RunIAppResponse } from '@mage-sombre/iapp';
```

The method returns a `RunIAppResponse` object containing the following fields:

### txHash

`string`

The transaction hash of the task creation transaction.

### dealId

`string`

The deal ID associated with the task execution.

### taskId

`string`

The task ID for tracking the execution.

### result

`ArrayBuffer` (optional)

The result of the iApp execution, if available.

<script setup>
import OptionalBadge from '@/components/OptionalBadge.vue'
</script>

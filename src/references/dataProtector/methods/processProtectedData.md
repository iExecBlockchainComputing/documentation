---
title: processProtectedData
description:
  Process encrypted data securely with iExec's processProtectedData method. Use
  authorized applications to process protected datasets while maintaining data
  privacy and security.
---

# processProtectedData

Allows processing a protected dataset through use of a specified iExec
application.

> [!IMPORTANT]
>
> You must ensure this application has authorization to use the `protectedData`.
> You may grant this permission using the
> [`grantAccess`](/references/dataProtector/methods/grantAccess) method.

## Usage

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    args: 'arg1 arg2',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
    secrets: {
      1: 'secret1',
      2: 'secret2',
    },
  });
```

## Parameters

```ts twoslash
import { type ProcessProtectedDataParams } from '@iexec/dataprotector';
```

### protectedData <RequiredBadge />

**Type:** `AddressOrENS`

The ETH address or Ethereum Name Service (ENS) reference for the protected data
you wish the `app` to process.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...', // [!code focus]
    app: '0x456def...',
  });
```

### app <RequiredBadge />

**Type:** `AddressOrENS`

The ETH address or Ethereum Name Service (ENS) address for the iExec application
to process the protected data.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...', // [!code focus]
  });
```

### path <OptionalBadge />

**Type:** `string`

Under the hood, a protected data is a zip file. With this `path` parameter, you
can specify the file you're interested in. The zip file will be uncompressed for
you, and only the desired file will be given as the `result`.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    path: 'my-content', // [!code focus]
  });
```

### userWhitelist <OptionalBadge />

**Type:** `Address`

If access to the protected data is granted to a group of users via a whitelist
contract, you must use this `userWhitelist` parameter. The value should be the
whitelist contract address that has access to the protected data.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    userWhitelist: '0x656def...', // [!code focus]
  });
```

### encryptResult <OptionalBadge />

**Type:** `boolean`  
**Default:** `false`

When set to `true`, the computation result will be encrypted using RSA
encryption. This ensures that only you can decrypt and access the result,
providing an additional layer of privacy and security for sensitive computation
outputs.

If `encryptResult` is `true` and no `pemPrivateKey` is provided, a new RSA key
pair will be automatically generated. The generated private key will be returned
in the response as `pemPrivateKey`, which you must securely store to decrypt the
result later.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    encryptResult: true, // [!code focus]
  });
```

::: tip

When `encryptResult` is enabled, the `onStatusUpdate` callback will be notified
with the following additional status titles:

- `'GENERATE_ENCRYPTION_KEY'` - When a new key pair is being generated
- `'PUSH_ENCRYPTION_KEY'` - When the public key is being pushed to the secrets
  manager

:::

### pemPrivateKey <OptionalBadge />

**Type:** `string`

A PEM-formatted RSA private key used to decrypt the encrypted computation
result. This parameter can only be used when `encryptResult` is set to `true`.

If you provide a `pemPrivateKey`, it will be used to decrypt the result. If you
don't provide one but have `encryptResult: true`, a new key pair will be
generated automatically, and the private key will be returned in the response
for you to store securely.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    encryptResult: true, // [!code focus]
    pemPrivateKey:
      '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----', // [!code focus]
  });
```

::: danger

If you provide a `pemPrivateKey`, you must also set `encryptResult: true`. The
method will throw a validation error if `pemPrivateKey` is provided without
`encryptResult` being enabled.

:::

::: tip

The `pemPrivateKey` (whether provided or auto-generated) will be included in the
response object when `encryptResult` is `true`. Make sure to securely store this
key if you need to decrypt the result later using the
[getResultFromCompletedTask()](/references/dataProtector/methods/getResultFromCompletedTask)
method.

:::

### args <OptionalBadge />

**Type:** `string`

Set of execution arguments for the application.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    args: 'arg1 arg2', // [!code focus]
  });
```

::: danger

Do not use this to provide any sensitive information to the application. All
arguments passed this way are visible in plain text using the
<a :href="explorerUrl" target="_blank" rel="noopener">iExec explorer</a> .

:::

### inputFiles <OptionalBadge />

**Type:** `string[]`

A set of URLs representing the input files required for application execution.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'], // [!code focus]
  });
```

### secrets <OptionalBadge />

**Type:** `Record<number, string>`

A set of requester secrets necessary for the application's execution. This is
represented as a mapping of numerical identifiers to corresponding secrets
stored in the secrets manager needed for the application's execution.

Secrets are accessible during the application's execution as environment
variables. For more details, see
[Access requester secrets](/guides/build-iapp/advanced/access-confidential-assets).

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  secrets: { // [!code focus]
    1: 'secret1', // [!code focus]
    2: 'secret2', // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

### workerpool <OptionalBadge />

**Type:** `AddressOrENS | 'any'`  
**Default:** `{{ workerpoolAddress }}`

It's the confidential computer on which the iExec application will run.

::: tip

iExec currently offers a workerpool located at the address
`{{ workerpoolAddress }}`. This is the default workerpool for running
confidential computations on the iExec platform.

:::

::: info TDX <ChainNotSupportedBadge/>

🧪 While protected data are processed in **TEE** by **intel SGX** technology by
default, `@iexec/dataprotector` can be configured to create and process
protected data in the experimental **intel TDX** environment.

TDX mode is enabled by setting connecting the **TDX SMS** and using the **TDX
workerpool**.

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate dataProtector connected to the TDX SMS
const dataProtectorCore = new IExecDataProtectorCore(web3Provider, {
  iexecOptions: {
    smsURL: 'https://sms.labs.iex.ec', // [!code focus]
  },
});

const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    workerpool: 'tdx-labs.pools.iexec.eth', // [!code focus]
  });
```

⚠️ Keep in mind: TDX mode is experimental and can be subject to instabilities or
discontinuity.

:::

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    workerpool: '0xa5de76...', // [!code focus]
  });
```

### dataMaxPrice <OptionalBadge />

**Type:** `number`  
**Default:** `0`

Allows specifying the maximum amount (in nRLC) you are willing to pay the
protected data owner for using their data. The owner of the protected data
receives this as a payment for sharing their data.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    dataMaxPrice: 42, // [!code focus]
  });
```

### appMaxPrice <OptionalBadge />

**Type:** `number`  
**Default:** `0`

Allows specifying the maximum amount (in nRLC) you are willing to pay the iApp
provider for using the deployed application.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    appMaxPrice: 42, // [!code focus]
  });
```

### workerpoolMaxPrice <OptionalBadge />

**Type:** `number`  
**Default:** `0`

Allows specifying the maximum amount you want to pay the workerpool provider for
using their infrastructure to run the iApp in nRLC.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    workerpoolMaxPrice: 42, // [!code focus]
  });
```

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<ProcessProtectedDataStatuses>`

Callback function to be notified at intermediate steps.

<!-- prettier-ignore-start -->
```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```
<!-- prettier-ignore-end -->

You can expect this callback function to be called with the following titles:

```ts
'FETCH_ORDERS';
'PUSH_REQUESTER_SECRET';
'GENERATE_ENCRYPTION_KEY';
'PUSH_ENCRYPTION_KEY';
'REQUEST_TO_PROCESS_PROTECTED_DATA';
'TASK_EXECUTION';
'CONSUME_TASK';
'CONSUME_RESULT_DOWNLOAD';
'CONSUME_RESULT_DECRYPT';
```

Once with `isDone: false`, and then with `isDone: true`

::: info

The `'GENERATE_ENCRYPTION_KEY'` and `'PUSH_ENCRYPTION_KEY'` status titles are
only triggered when `encryptResult` is set to `true`.

:::

## Return Value

```ts twoslash
import { type ProcessProtectedDataResponse } from '@iexec/dataprotector';
```

### txHash

`string`

The ID of the transaction that happened on iExec's side chain. You may view
details on the transaction using the
<a :href="explorerUrl" target="_blank" rel="noopener">iExec explorer</a> .

### dealId

`string`

Identifies the specific deal associated with this transaction.

### taskId

`string`

A unique identifier associated with a task currently running on the iExec
protocol. You can monitor task execution using the
<a :href="explorerUrl" target="_blank" rel="noopener">iExec explorer</a> .

::: tip

The
[getResultFromCompletedTask()](/references/dataProtector/methods/getResultFromCompletedTask)
function allows you to retrieve the result of a completed task using its
`taskId`.

Additionally, you can specify a **file path** within the ZIP archive to extract
a specific file when required.

:::

### result

`ArrayBuffer`

The result is a ZIP file containing at least one mandatory file:

- **computed.json**: This file contains metadata about the computation performed
  by the application.
- additional files may be included depending on the dapp used.

::: info

In the case of the **Content Creator Delivery DApp**, the ZIP file will also
include a file named **content**, which corresponds to the protected data
processed during the task.

:::

### pemPrivateKey

`string`

The PEM-formatted RSA private key used to decrypt the encrypted computation
result. This property is only present in the response when `encryptResult` is
set to `true`.

If you provided a `pemPrivateKey` in the parameters, the same key will be
returned. If you didn't provide one but enabled `encryptResult`, a newly
generated private key will be returned, which you must securely store to decrypt
the result.

::: tip

You can use this `pemPrivateKey` with the
[getResultFromCompletedTask()](/references/dataProtector/methods/getResultFromCompletedTask)
method to decrypt and retrieve the result of a completed task.

:::

<script setup>
import { computed } from 'vue';
import RequiredBadge from '@/components/RequiredBadge.vue'
import OptionalBadge from '@/components/OptionalBadge.vue'
import ChainNotSupportedBadge from '@/components/ChainNotSupportedBadge.vue'
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const explorerUrl = computed(() => chainData.value.iexecExplorerUrl);
const workerpoolAddress = computed(() => chainData.value.workerpoolAddress);
</script>

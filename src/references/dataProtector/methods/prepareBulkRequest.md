---
title: prepareBulkRequest
description:
  Use the prepareBulkRequest method from DataProtector Core to prepare a bulk
  request for processing multiple protected data items efficiently. This method
  creates a bulk request that can be processed using processBulkRequest.
---

# prepareBulkRequest

This method prepares a bulk request by grouping multiple protected data items
that can be processed together in a single task. The prepared bulk request can
then be processed using the
[`processBulkRequest`](/references/dataProtector/methods/processBulkRequest)
method.

::: info

This method is part of a two-step bulk processing process:

1. **Prepare the bulk request** using `prepareBulkRequest` to create a bulk
   request
2. **Process the bulk request** using `processBulkRequest` to execute the bulk
   processing

:::

## Usage

::: code-group

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

// Get granted accesses with bulk capability
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

// Prepare the bulk request
const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...',
  maxProtectedDataPerTask: 100,
});
```

```ts twoslash [NodeJS]
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

// Get granted accesses with bulk capability
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

// Prepare the bulk request
const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...',
  maxProtectedDataPerTask: 100,
});
```

:::

## Parameters

```ts twoslash
import { type PrepareBulkRequestParams } from '@iexec/dataprotector';
```

### bulkAccesses <RequiredBadge />

**Type:** `GrantedAccess[]`

An array of `GrantedAccess` objects representing protected data items that have
been granted access with bulk processing capability. Use `bulkOnly: true` option
in [`getGrantedAccess`](/references/dataProtector/methods/getGrantedAccess) to
obtain bulk accesses. Each `GrantedAccess` must have been created with
`allowBulk: true` when calling
[`grantAccess`](/references/dataProtector/methods/grantAccess).

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// First, get granted accesses with bulk capability
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

// Then prepare the bulk request
const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess, // [!code focus]
  app: '0x456def...',
});
```

### app <RequiredBadge />

**Type:** `AddressOrENS`

The ETH address or Ethereum Name Service (ENS) address for the iExec application
that will process the protected data items in the bulk request.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...', // [!code focus]
});
```

### maxProtectedDataPerTask <OptionalBadge />

**Type:** `number | undefined`

**Default:** `100`

Limits the number of protected data items processed per task. If you have more
protected data items than this limit, multiple tasks will be created.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...',
  maxProtectedDataPerTask: 50, // [!code focus]
});
```

### workerpool <OptionalBadge />

**Type:** `AddressOrENS | 'any'`  
**Default:** `{{ workerpoolAddress }}`

It's the confidential computer on which the iExec application will run.

::: tip

iExec currently offers a workerpool located at the address
`{{ workerpoolAddress }}`. This is the default workerpool for running
confidential computations on the iExec platform.

:::

You can specify this during preparation or when processing the bulk request.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...',
  workerpool: '0xa5de76...', // [!code focus]
});
```

### workerpoolMaxPrice <OptionalBadge />

**Type:** `number | undefined`

**Default:** `0`

The maximum amount (in nRLC) you are willing to pay the workerpool provider for
using their infrastructure to run the application. You can specify this during
preparation or when processing the bulk request.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...',
  workerpoolMaxPrice: 0.1 * 1e9, // [!code focus]
});
```

### appMaxPrice <OptionalBadge />

**Type:** `number | undefined`

**Default:** `0`

The maximum amount (in nRLC) you are willing to pay the application provider for
using the application.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...',
  appMaxPrice: 0.1 * 1e9, // [!code focus]
});
```

### args <OptionalBadge />

**Type:** `string | undefined`

Set of execution arguments for the application that will be used for all tasks
in the bulk request.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
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

**Type:** `string[] | undefined`

A set of URLs representing the input files required for application execution.
These files will be used for all tasks in the bulk request.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...',
  inputFiles: ['https://example.com/file1', 'https://example.com/file2'], // [!code focus]
});
```

### secrets <OptionalBadge />

**Type:** `Record<number, string> | undefined`

A set of requester secrets necessary for the application's execution. This is
represented as a mapping of numerical identifiers to corresponding secrets
stored in the secrets manager needed for the application's execution.

Secrets are accessible during the application's execution as environment
variables. For more details, see
[Access requester secrets](/guides/build-iapp/advanced/access-confidential-assets).

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...',
  secrets: {
    // [!code focus]
    1: 'secret1', // [!code focus]
    2: 'secret2', // [!code focus]
  }, // [!code focus]
});
```

### encryptResult <OptionalBadge />

**Type:** `boolean | undefined`

**Default:** `false`

Enable result encryption for the processed data. If enabled, you'll need to
provide the `pemPrivateKey` when processing the bulk request to decrypt the
results.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

const { bulkRequest, pemPrivateKey } =
  await dataProtectorCore.prepareBulkRequest({
    bulkAccesses: grantedAccess,
    app: '0x456def...',
    encryptResult: true, // [!code focus]
  });
```

### pemPrivateKey <OptionalBadge />

**Type:** `string | undefined`

Private key in PEM format for result encryption/decryption. If not provided and
`encryptResult` is `true`, a new key pair will be generated and returned in the
response.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

const { bulkRequest, pemPrivateKey } =
  await dataProtectorCore.prepareBulkRequest({
    bulkAccesses: grantedAccess,
    app: '0x456def...',
    encryptResult: true,
    pemPrivateKey:
      '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----', // [!code focus]
  });
```

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<ProcessBulkRequestStatuses>` Callback function to be
notified at intermediate steps during bulk request preparation. You can expect
this callback function to be called with the following titles:

- `'PUSH_REQUESTER_SECRET'` - Pushing requester secrets to the SMS
- `'GENERATE_ENCRYPTION_KEY'` - Generating encryption key pair (if
  `encryptResult: true`)
- `'PUSH_ENCRYPTION_KEY'` - Pushing encryption public key to the SMS (if
  `encryptResult: true`)
- `'PREPARE_PROTECTED_DATA_BULK'` - Preparing the protected data bulk
- `'CREATE_BULK_REQUEST'` - Creating the bulk request order

Each status is called once with `isDone: false`, and then with `isDone: true`.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...',
  onStatusUpdate: ({ title, isDone }) => {
    // [!code focus]
    // Handle status updates
    // [!code focus]
  }, // [!code focus]
});
```

## Return Value

```ts twoslash
import { type PrepareBulkRequestResponse } from '@iexec/dataprotector';
```

### bulkRequest

**Type:** `BulkRequest`

The prepared bulk request object that contains all the necessary information to
process multiple protected data items together. This object should be passed to
`processBulkRequest` to execute the bulk processing.

### pemPrivateKey

**Type:** `string | undefined`

The private key in PEM format for result decryption. This is only returned if
`encryptResult` was set to `true` when preparing the bulk request. You'll need
to provide this key when processing the bulk request if you want to decrypt the
results.

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Get granted accesses with bulk capability
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

// Prepare the bulk request with encryption
const { bulkRequest, pemPrivateKey } =
  await dataProtectorCore.prepareBulkRequest({
    bulkAccesses: grantedAccess,
    app: '0x456def...',
    encryptResult: true,
  });

// Use the bulkRequest and pemPrivateKey to process the bulk request
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest, // [!code focus]
  pemPrivateKey: pemPrivateKey, // [!code focus]
  waitForResult: true,
});
```

## Complete Example

Here's a complete example showing the two-step bulk processing process:

::: code-group

```ts twoslash [NodeJS]
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

// Step 1: Get granted accesses with bulk capability
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

// Step 2: Prepare the bulk request
const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...',
  args: 'arg1 arg2',
  maxProtectedDataPerTask: 50,
});

// Step 3: Process the bulk request
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest,
});
```

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

// Step 1: Get granted accesses with bulk capability
const { grantedAccess } = await dataProtectorCore.getGrantedAccess({
  bulkOnly: true,
});

// Step 2: Prepare the bulk request
const { bulkRequest } = await dataProtectorCore.prepareBulkRequest({
  bulkAccesses: grantedAccess,
  app: '0x456def...',
  args: 'arg1 arg2',
  maxProtectedDataPerTask: 50,
});

// Step 3: Process the bulk request
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest,
});
```

:::

## Related Documentation

- [processBulkRequest Method](/references/dataProtector/methods/processBulkRequest) -
  Process a prepared bulk request
- [grantAccess Method](/references/dataProtector/methods/grantAccess) - Grant
  access with bulk processing capability
- [processProtectedData Method](/references/dataProtector/methods/processProtectedData) -
  Process a single protected data item

<script setup>
import RequiredBadge from '@/components/RequiredBadge.vue';
import OptionalBadge from '@/components/OptionalBadge.vue';
import { computed } from 'vue';
import useUserStore from '@/stores/useUser.store';
import { getChainById } from '@/utils/chain.utils';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const explorerUrl = computed(() => chainData.value.iexecExplorerUrl);
const workerpoolAddress = computed(() => chainData.value.workerpoolAddress);
</script>

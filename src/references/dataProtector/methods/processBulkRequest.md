---
title: processBulkRequest
description:
  Use the processBulkRequest method from DataProtector Core to process a
  prepared bulk request. This method executes bulk processing of multiple
  protected data items efficiently, creating one or more tasks/deals depending
  on the number of protected data items and the `maxProtectedDataPerTask` limit.
---

# processBulkRequest

This method processes a bulk request that has been created using the
[`prepareBulkRequest`](/references/dataProtector/methods/prepareBulkRequest)
method. It executes the bulk processing of multiple protected data items
efficiently, creating one or more tasks depending on the number of protected
data items and the `maxProtectedDataPerTask` limit.

::: warning Prerequisites

Before using this method, make sure you have:

1. **Recipients granted access with bulk processing**: When calling
   [`grantAccess`](/references/dataProtector/methods/grantAccess) on the Data
   Protector SDK, recipients must set `allowBulk: true`

2. **Prepared the bulk request**: Use
   [`prepareBulkRequest`](/references/dataProtector/methods/prepareBulkRequest)
   to create the bulk request that will be passed to this method

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
});

// Process the bulk request
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest,
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
});

// Process the bulk request
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest,
});
```

:::

## Parameters

```ts twoslash
import { type ProcessBulkRequestParams } from '@iexec/dataprotector';
```

### bulkRequest <RequiredBadge />

**Type:** `BulkRequest`

The prepared bulk request object that was created using
[`prepareBulkRequest`](/references/dataProtector/methods/prepareBulkRequest).
This object contains all the necessary information to process multiple protected
data items together.

```ts twoslash
import {
  IExecDataProtectorCore,
  getWeb3Provider,
  type BulkRequest,
} from '@iexec/dataprotector';
const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const bulkRequest = {} as BulkRequest;
// ---cut---
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest, // [!code focus]
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

```ts twoslash
import { IExecDataProtectorCore, type BulkRequest } from '@iexec/dataprotector';
const dataProtectorCore = {} as IExecDataProtectorCore;
const bulkRequest = {} as BulkRequest;
// ---cut---
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest,
  workerpool: '0xa5de76...', // [!code focus]
});
```

### path <OptionalBadge />

**Type:** `string | undefined`

Under the hood, a protected data is a zip file. With this `path` parameter, you
can specify the file you're interested in. The zip file will be uncompressed for
you, and only the desired file will be given as the `result`. This applies to
all protected data items in the bulk request.

```ts twoslash
import { IExecDataProtectorCore, type BulkRequest } from '@iexec/dataprotector';
const dataProtectorCore = {} as IExecDataProtectorCore;
const bulkRequest = {} as BulkRequest;
// ---cut---
// @errors: 2304 7034 7005
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest,
  path: 'my-content', // [!code focus]
});
```

### pemPrivateKey <OptionalBadge />

**Type:** `string | undefined`

Private key in PEM format for result decryption. Required if `bulkRequest` uses
result encryption (when `encryptResult` was set to `true` in
`prepareBulkRequest`) and `waitForResult` is `true`.

```ts twoslash
import { IExecDataProtectorCore, type BulkRequest } from '@iexec/dataprotector';
const dataProtectorCore = {} as IExecDataProtectorCore;
const bulkRequest = {} as BulkRequest;
const pemPrivateKey =
  '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----';
// ---cut---
// @errors: 2304 7034 7005
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest,
  pemPrivateKey: pemPrivateKey, // [!code focus]
  waitForResult: true,
});
```

### waitForResult <OptionalBadge />

**Type:** `boolean | undefined`

**Default:** `false`

Whether to wait for the result of the bulk request processing. If `true`, the
method will wait for all tasks to complete and return results. If `false`, it
will return immediately with task IDs.

```ts twoslash
import { IExecDataProtectorCore, type BulkRequest } from '@iexec/dataprotector';
const dataProtectorCore = {} as IExecDataProtectorCore;
const bulkRequest = {} as BulkRequest;
// ---cut---
// @errors: 2304 7034 7005
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest,
  waitForResult: true, // [!code focus]
});
```

### onStatusUpdate <OptionalBadge />

**Type:** `OnStatusUpdateFn<ProcessBulkRequestStatuses>`

Callback function to be notified at intermediate steps during bulk processing.
You can expect this callback function to be called with the following titles:

- `'FETCH_ORDERS'` - Fetching app and workerpool orders
- `'CREATE_BULK_TASKS'` - Creating bulk tasks from matched orders
- `'WAIT_FOR_WORKERPOOL_AVAILABILITY'` - Waiting for workerpool availability
  (when no workerpool order is available)
- `'REQUEST_TO_PROCESS_BULK_DATA'` - Requesting to process bulk data (matching
  orders)
- `'PROCESS_BULK_SLICE'` - Processing a slice of the bulk request (only when
  `waitForResult: true`)
- `'TASK_EXECUTION'` - Task execution in progress (only when
  `waitForResult: true`)
- `'TASK_RESULT_DOWNLOAD'` - Downloading task result (only when
  `waitForResult: true`)
- `'TASK_RESULT_DECRYPT'` - Decrypting task result (only when
  `waitForResult: true` and encryption is enabled)

Each status is called once with `isDone: false`, and then with `isDone: true`.

```ts twoslash
import { IExecDataProtectorCore, type BulkRequest } from '@iexec/dataprotector';
const dataProtectorCore = {} as IExecDataProtectorCore;
const bulkRequest = {} as BulkRequest;
// ---cut---
// @errors: 2304 7034 7005 7031
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest,
  onStatusUpdate: ({ title, isDone, payload }) => {
    // [!code focus]
    // Handle status updates
    // [!code focus]
  }, // [!code focus]
});
```

## Return Value

```ts twoslash
import { type ProcessBulkRequestResponse } from '@iexec/dataprotector';
```

### tasks

**Type:** `Array<{ taskId: string; dealId: string; bulkIndex: number }>` (when
`waitForResult: false`)

**Type:**
`Array<{ taskId: string; dealId: string; bulkIndex: number; success: boolean; status: TaskStatus; result?: ArrayBuffer; error?: Error }>`
(when `waitForResult: true`)

An array of task objects created by processing the bulk request. Each task
represents a batch of protected data items being processed together.

**When `waitForResult: false` (default):**

- **taskId**: A unique identifier for the task
- **dealId**: Identifies the specific deal associated with this task
- **bulkIndex**: The index of this task within the bulk request (useful when
  multiple tasks are created)

**When `waitForResult: true`:**

- **taskId**: A unique identifier for the task
- **dealId**: Identifies the specific deal associated with this task
- **bulkIndex**: The index of this task within the bulk request
- **success**: Whether the task completed successfully
- **status**: The task status (`'COMPLETED' | 'FAILED' | 'TIMEOUT'`)
- **result**: The task result as an ArrayBuffer (only present if successful)
- **error**: Error object if the task failed (only present if failed)

```ts twoslash
import { IExecDataProtectorCore, type BulkRequest } from '@iexec/dataprotector';
const dataProtectorCore = {} as IExecDataProtectorCore;
const bulkRequest = {} as BulkRequest;
// ---cut---
// @errors: 2304 7034 7005
const { tasks } = await dataProtectorCore.processBulkRequest({
  bulkRequest: bulkRequest,
});
```

## Related Documentation

- [prepareBulkRequest Method](/references/dataProtector/methods/prepareBulkRequest) -
  Prepare a bulk request for processing
- [grantAccess Method](/references/dataProtector/methods/grantAccess) - Grant
  access with bulk processing capability
- [processProtectedData Method](/references/dataProtector/methods/processProtectedData) -
  Process a single protected data item
- [getResultFromCompletedTask Method](/references/dataProtector/methods/getResultFromCompletedTask) -
  Retrieve results from completed tasks

<script setup>
import { computed } from 'vue';
import RequiredBadge from '@/components/RequiredBadge.vue';
import OptionalBadge from '@/components/OptionalBadge.vue';
import ChainNotSupportedBadge from '@/components/ChainNotSupportedBadge.vue';
import useUserStore from '@/stores/useUser.store';
import { getChainById } from '@/utils/chain.utils';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const explorerUrl = computed(() => chainData.value.iexecExplorerUrl);
const workerpoolAddress = computed(() => chainData.value.workerpoolAddress);
</script>

```

```

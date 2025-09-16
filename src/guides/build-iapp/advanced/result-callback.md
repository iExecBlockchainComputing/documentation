---
title: Result Callback Guide
description:
  Use the iExec result callback to have the protocol invoke a function on your
  smart contract at the end of a (optionally confidential TEE) task execution.
---

# Result Callback

This guide explains how to trigger a callback function at the end of a
successful task on your smart contract.

Use a callback when your smart contract should:

- Ingest off-chain computed data (API aggregation, ML inference, analytics) and
  persist it
- React to an execution outcome (conditional trigger, state transition)
- Store a timestamped record (price feed, score, KPI, proof hash)
- Bridge logic between external systems and on-chain state

## 🧩 High-Level Flow

1. A requester executes an iApp.
2. The iApp writes `${IEXEC_OUT}/computed.json` with a `callback-data` field
   (ABI‑encoded bytes you crafted).
3. After the task completes and is validated, the iExec protocol invokes your
   contract’s `receiveResult(bytes32,bytes)`.
4. Your contract decodes and processes those bytes if callback data have been
   provided.

## Step-by-Step Implementation

### Step 1: Prepare the Callback Payload in the iApp

You only need to write `computed.json` containing the key `callback-data`.  
That value must be the ABI‑encoded bytes your contract knows how to decode.  
Example tuple schema we'll use:
`(uint256 timestamp, string pairAndPrecision, uint256 scaledValue)`.

```ts twoslash
import { writeFileSync } from 'node:fs';
import { AbiCoder } from 'ethers';

const timestamp = Math.floor(Date.now() / 1000);
const pair = 'BTC-USD';
const scaled = '9';
// ---cut---

async function main() {
  // Your business logic here ...

  const abiCoder = new AbiCoder();
  const abiPayload = abiCoder.encode(
    ['uint256', 'string', 'uint256'],
    [timestamp, pair, scaled]
  );

  writeFileSync(
    `${process.env.IEXEC_OUT}/computed.json`,
    JSON.stringify({
      'callback-data': abiPayload,
    })
  );
}
```

### Step 2: Implement the Callback Contract

Your contract must expose `receiveResult(bytes32,bytes)`
[ERC1154](https://github.com/iExecBlockchainComputing/iexec-solidity/blob/master/contracts/ERC1154/IERC1154.sol).
The protocol calls it with:

- `_callID`: the first arg the taskId
- `callback`: exactly the bytes you encoded as `callback-data`

Decode using the same tuple. (Optional) Add protections: authorized caller check
(iExec hub / proxy), replay guard, bounds checks.

```solidity
contract IExecCallbackReceiver {
    // Your business logic here ...

    // ERC1154 - Callback processing
    function receiveResult(bytes32 _callID, bytes memory callback) external {
        // Parse results
        (uint256 timestamp, string memory pairAndPrecision, uint256 scaledValue) =
            abi.decode(callback, (uint256, string, uint256));
    }
}
```

::: tip Important

The callback transaction is subject to a gas limit of {{ gasLimit }}.  
Ensure your callback logic fits within this limit to avoid out-of-gas errors.

:::

### Step 3: Run the iApp with a Callback

When creating the request order, set the `callback` field to your callback
contract address.  
After completion, the protocol calls your contract, passing the `callback-data`
bytes.

First install the iExec SDK if you have not already (see
[Getting Started](/guides/use-iapp/getting-started)).

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
  callback: '0x8e5bB6...', // Callback contract address
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

## 🔄 Other Use Cases

| Use Case             | Description                              |
| -------------------- | ---------------------------------------- |
| Price oracle         | Multi-source API aggregation             |
| Reputation / scoring | Off-chain ML / analytics pushed on-chain |
| Audit hash           | Security scan or verification artifact   |
| Automation           | Workflow step completion signal          |
| Dynamic parameters   | Adjust rates / thresholds / quorums      |
| Logical bridge       | Sync external (IoT / legacy) state       |

<script setup>
import { computed } from 'vue';
import useUserStore from '@/stores/useUser.store';
import { getChainById } from '@/utils/chain.utils';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());
const chainData = computed(() => getChainById(selectedChain.value));
const chainName = computed(() => chainData.value.chainName);

const gasLimit = computed(() => {
  const chainId = selectedChain.value;
  if (chainId === 42161) return '100,000'; // Arbitrum One
  if (chainId === 134) return '200,000'; // Bellecour
  return '100,000'; // default
});
</script>

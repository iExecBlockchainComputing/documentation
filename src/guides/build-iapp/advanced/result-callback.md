---
title: Result Callback Guide
description:
  Use the iExec result callback to have the protocol invoke a function on your
  smart contract at the end of an (optionally confidential TEE) task execution.
---

# Result Callback

This guide explains how to trigger a callback function at the end of a
successful task on your smart contract.

Use a callback when a smart contract should:

- Ingest off-chain computed data (API aggregation, ML inference, analytics) and
  persist it
- React to an execution outcome (conditional trigger, state transition)
- Store a timestamped record (price feed, score, KPI, proof hash)
- Bridge logic between external systems and on-chain state

## 🧩 High-Level Flow

1. A requester executes an iApp.
2. The iApp writes `${IEXEC_OUT}/computed.json` with a `callback-data` field
   (ABI‑encoded bytes you crafted).
3. Once the task is completed and validated, the iExec protocol invokes your
   contract’s `receiveResult(bytes32,bytes)`.
4. Your contract decodes and processes those bytes if callback data have been
   pushed.

## Step-by-Step Implementation

### Step 1: Prepare the Callback Payload in the iApp

You only need to write `computed.json` containing the key `callback-data`.  
That value must be the ABI‑encoded bytes your contract knows how to decode.  
Example schema we’ll use: (uint256 timestamp, string pairAndPrecision, uint256
scaledValue).

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

Your contract must expose `receiveResult(bytes32,bytes)` (ERC1154). The protocol
calls it with:

- `_callID`: the task / call identifier.
- `callback`: exactly the bytes you encoded as `callback-data`.

You decode using the same tuple. Add (optional) protections: authorized caller
check (the iExec hub / proxy address), replay guard, bounds checks.

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

### Step 3: Run the iApp with Callback

When requesting the execution, set the callback contract address in the deal (or
order) parameters.  
After completion, the protocol calls your contract passing the `callback-data`
bytes.

Checklist:

- Ensure the contract adheres to the expected callback function signature.
- Guard against replay (e.g. track processed task IDs).
- Validate business invariants (timestamps, ranges, freshness).

## 🔄 Other Use Cases

| Use Case             | Description                              |
| -------------------- | ---------------------------------------- |
| Price oracle         | Multi-source API aggregation             |
| Reputation / scoring | Off-chain ML / analytics pushed on-chain |
| Audit hash           | Security scan or verification artifact   |
| Automation           | Workflow step completion signal          |
| Dynamic parameters   | Adjust rates / thresholds / quorums      |
| Logical bridge       | Sync external (IoT / legacy) state       |

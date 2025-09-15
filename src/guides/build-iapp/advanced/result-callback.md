---
title: Result Callback Guide
description: Guide to using the iExec result callback to push an off-chain iApp task result directly into a smart contract (price feeds, automation, triggers, proofs, scoring, etc.).
---

# Result Callback

This guide explains how to securely push an iExec task result into a smart contract using the callback mechanism.  
Oracles are only one of many possible use cases.

## When to Use a Callback

Use a callback when a smart contract should:

- Ingest off-chain computed data (API aggregation, ML inference, analytics) and persist it on-chain
- React to an execution outcome (conditional trigger, state transition)
- Store a timestamped record (price feed, score, KPI, proof hash)
- Act as a logic bridge between external systems and on-chain logic

## 🧩 High-Level Flow

1. A requester executes an iApp on iExec.
2. The iApp writes `${IEXEC_OUT}/computed.json` with a `callback-data` field containing ABI‑encoded calldata.
3. The iExec protocol, once the task is completed, invokes the specified callback contract with that data.
4. Your callback smart contract (receiver) ingests the data.

## Step-by-Step Implementation

### Step 1: Write the iApp

The iApp MUST write a file named `computed.json` in the directory pointed to by `IEXEC_OUT`.  
Required key: `callback-data` (raw ABI‑encoded bytes you want passed to your contract).

Replaced Web3.js example with ethers v6:

```js
// ethers v6 example producing ABI-encoded callback data

import { writeFileSync } from 'node:fs';
import { AbiCoder } from 'ethers';

// Placeholder: replace with real price retrieval / aggregation logic
async function fetchPrice(pair) {
  // e.g. query multiple APIs, median, etc.
  return 12345.6789;
}

async function main() {
  const [pair = 'BTC-USD', precision = '9'] = process.argv.slice(2);

  const price = await fetchPrice(pair);
  const scale = 10n ** BigInt(Number(precision));
  const scaled = BigInt(Math.round(price * Number(scale)));

  const timestamp = Math.floor(Date.now() / 1000);

  const abiCoder = new AbiCoder();
  const abiPayload = abiCoder.encode(
    ['uint256', 'string', 'uint256'],
    [timestamp, `${pair}-${precision}`, scaled]
  );

  writeFileSync(
    `${process.env.IEXEC_OUT}/computed.json`,
    JSON.stringify(
      {
        'callback-data': abiPayload,
        metadata: {
          pair,
          precision,
          timestamp,
        }
      }
    )
  );
}

main().catch(() => process.exit(1));
```

### Step 2: Deploy the Callback Contract

The callback contract receives and processes the off-chain result.  
It can read the stored `resultsCallback` from the iExec hub (or proxy) to independently verify the task state.

```solidity
interface IIexecProxy {
    struct Task {
        uint256 status;
        bytes   resultsCallback; // raw callback-data bytes
        // ...existing fields...
    }
    function viewTask(bytes32 _id) external view returns (Task memory);
}

abstract contract IExecCallbackReceiver {
    IIexecProxy public immutable iexec;
    constructor(address _iexec) { iexec = IIexecProxy(_iexec); }

    function _getCallback(bytes32 taskid) internal view returns (bytes memory) {
        IIexecProxy.Task memory t = iexec.viewTask(taskid);
        require(t.status == 3, "task-not-completed"); // 3 = COMPLETED (example)
        return t.resultsCallback;
    }
}
```

### Step 3: Run the iApp with Callback

When requesting the execution, set the callback contract address in the deal (or order) parameters.  
After completion, the protocol calls your contract passing the `callback-data` bytes.

Checklist:

- Ensure the contract adheres to the expected callback function signature.
- Guard against replay (e.g. track processed task IDs).
- Validate business invariants (timestamps, ranges, freshness).

## 🔄 Other Use Cases

| Use Case | Description |
|----------|-------------|
| Price oracle | Multi-source API aggregation |
| Reputation / scoring | Off-chain ML / analytics pushed on-chain |
| Audit hash | Security scan or verification artifact |
| Automation | Workflow step completion signal |
| Dynamic parameters | Adjust rates / thresholds / quorums |
| Logical bridge | Sync external (IoT / legacy) state |

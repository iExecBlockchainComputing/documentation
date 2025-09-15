---
title: Result Callback Guide
description:
  Guide to using the iExec result callback to push an off-chain iApp task result
  directly into a smart contract (price feeds, automation, triggers, proofs,
  scoring, etc.).
---

# Result Callback

This guide explains how to securely push an iExec task result into a smart
contract using the callback mechanism.  
Use a callback when a smart contract should:

- Ingest off-chain computed data (API aggregation, ML inference, analytics) and
  persist it on-chain
- React to an execution outcome (conditional trigger, state transition)
- Store a timestamped record (price feed, score, KPI, proof hash)
- Act as a logic bridge between external systems and on-chain logic

## 🧩 High-Level Flow

1. A requester executes an iApp on iExec.
2. The iApp writes `${IEXEC_OUT}/computed.json` with a `callback-data` field
   containing ABI‑encoded calldata.
3. The iExec protocol, once the task is completed, invokes the specified
   callback contract with that data.
4. Your callback smart contract (receiver) ingests the data.

## Step-by-Step Implementation

### Step 1: Write the iApp

The iApp MUST write a file named `computed.json` in the directory pointed to by
`IEXEC_OUT`.  
Required key: `callback-data` (raw ABI‑encoded bytes you want passed to your
contract).

Replaced Web3.js example with ethers v6:

```ts twoslash
import { writeFileSync } from 'node:fs';
import { AbiCoder } from 'ethers';

const timestamp = Math.floor(Date.now() / 1000);
const pair = 'BTC-USD';
const scaled = '9';
// ---cut---

async function main() {
  // Your business logic here

  const abiCoder = new AbiCoder();
  const abiPayload = abiCoder.encode(
    ['uint256', 'string', 'uint256'],
    [timestamp, `${pair}`, scaled]
  );

  writeFileSync(
    `${process.env.IEXEC_OUT}/computed.json`,
    JSON.stringify({
      'callback-data': abiPayload,
    })
  );
}
```

### Step 2: Deploy the Callback Contract

The callback contract receives and processes the off-chain result. Your contract
must implement `receiveResult(bytes32,bytes)`interface from
[ERC1154](https://github.com/iExecBlockchainComputing/iexec-solidity/blob/master/contracts/ERC1154/IERC1154.sol)

```solidity
contract IExecCallbackReceiver {
    // ERC1154 - Callback processing
    function receiveResult(bytes32 _callID, bytes memory callback) external {
        // Parse results
        (uint256 timestamp, string memory pairAndPrecision, uint256 scaledValue) =
            abi.decode(callback, (uint256, string, uint256));

        ...business logic...
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

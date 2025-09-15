---
title: Result Callback Guide
description: Practical guide to using the iExec Result Callback mechanism to push an off-chain task result (iApp) directly into a smart contract—Oracles, automation, triggers, proofs, and more.
---

# Result Callback

This guide explains how to securely push an iExec task result into a smart contract using the “callback” mechanism.  
Oracles are only **one** of the possible use cases.

## When to Use a Callback

Use a callback whenever a smart contract should:

- Consume off-chain computed data (API aggregation, ML inference, analytics) and store it on-chain
- React on-chain to an execution outcome (conditional trigger, state transition)
- Store a timestamped record (price feed, score, KPI, proof hash) on-chain
- Act as a logic bridge between external systems and on-chain logic

## 🧩 High-Level Flow

1. A requester executes an iApp on iExec.
2. The iApp writes in the file `${IEXEC_OUT}/computed.json` under the filed `callback-data` the necessary calldata to make on-chain call.
3. iExec decentralized Protocol trigger corresponding on-chain contract based on the deal & task result `callback-data` field.
4. Your smart contract (receiver) callback data, verifies, and ingests it.

## Step-by-Step Implementation

### Step 1: Write the iApp

Your iApp must write a JSON file named `computed.json` in the directory pointed to by the environment variable `IEXEC_OUT`. This file must contain at least the key `callback-data`, which holds the ABI-encoded data you want to send to your smart contract.

```js
import fs from 'node:fs';
import Web3 from 'web3';
const web3 = new Web3();

async function main() {
  const [pair = 'BTC-USD', precision = '9'] = process.argv.slice(2);
  const price = await fetchPrice(pair); // Your logic
  const scaled = BigInt(Math.round(price * 10 ** Number(precision)));

  const now = Math.floor(Date.now() / 1000);
  const abiPayload = web3.eth.abi.encodeParameters(
    ['uint256','string','uint256'],
    [now, `${pair}-${precision}`, scaled.toString()]
  );

  fs.writeFileSync(
    process.env.IEXEC_OUT + '/computed.json',
    JSON.stringify({
      'callback-data': abiPayload,
      metadata: { pair, precision, now, source: 'demo' }
    })
  );
}

main().catch(() => process.exit(1));
```

### Step 2: Deploy the Callback Contract

The callback contract is the receiver of the off-chain computed data. Implement your custom logic based on your use case.

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
        require(t.status == 3, "task-not-completed"); // Example: 3 = COMPLETED
        return t.resultsCallback;
    }
}
```

### Step 3: Run the iApp with Callback

When running the iApp, specify the callback contract address in the deal parameters. The iExec protocol will automatically call the specified contract with the `callback-data` once the task is completed.

## 🔄 Other Use Cases

| Use Case | Description |
|----------|-------------|
| Price oracle | Multi-source API aggregation |
| Reputation / scoring | Off-chain ML / analytics pushed on-chain |
| Audit hash | Security scan or verification artifact |
| Automation | Workflow step completion signal |
| Dynamic parameters | Adjust rates / thresholds / quorums |
| Logical bridge | Sync external (IoT / legacy) state |

---
title: Proof of Contribution
description:
  PoCo protocol for governance, trust, and secure payment in decentralized iExec
  computing platform.
---

# Proof-of-Contribution (PoCo)

## What is PoCo?

PoCo (Proof-of-Contribution) is the trust and governance layer of the iExec
protocol. It ensures that off-chain computations running inside Trusted
Execution Environments (TEEs) are executed correctly, confidentially, and under
clear economic rules.

PoCo provides three core guarantees:

- **Confidentiality**: data and secrets are only processed inside secure
  enclaves.
- **Governance and access control**: users decide who can access their data.
- **Trusted payments and penalties**: contributors get paid automatically, and
  misbehavior is economically discouraged.

## Why PoCo matters?

iExec is built around confidential computing, where computations run inside
Trusted Execution Environments. Users don’t need to trust the machine running
the task, TEE’s cryptographic attestation prove that execution happens in a
private way.

PoCo uses this model to guarantee:

- execution happens **inside a genuine enclave**
- secrets are handled **securely and privately**
- results come from **verified enclaves**
- payments and penalties are applied **automatically** on-chain.

In short: PoCo allows building production-grade confidential compute workflows,
backed by hardware security, without needing to design trust, access, or
monetization layers.

## How the TEE-centric workflow works?

This reflects the default workflow used today on iExec networks.

1. ### The user triggers match orders on-chain operation

A requester matches the app, dataset, and workerpool orders. This creates a
**Deal** on-chain and locks the requester’s funds.

PoCo now governs:

- who has access
- what is paid
- under which conditions the task is considered valid

2. ### The scheduler assigns the task to a TEE-enabled worker

The workerpool selects an available worker with the required TEE capabilities.
No replication is needed, trust comes from hardware attestation, not from
multiple workers.

3. ### The worker executes the app inside a secure enclave

The worker runs a confidential application inside its enclave:

- the code is measured
- the environment is verified
- the enclave proves its authenticity through remote attestation
- PoCo verifies this attestation through the SMS

This guarantees:

- no one can inspect the data
- the worker cannot tamper with the execution
- results come from a genuine, verified enclave

4. ### Secrets are transferred securely (SMS → Enclave)

If the task uses secrets (dataset decryption key, ...):

- the Secret Management Service (SMS) enclave verifies the worker’s enclave
- secrets are provisioned for the specific enclave only
- secrets are only accessible and processed inside the TEE enclave.

This is fundamental for confidential and monetizable datasets.

5. ### The enclave computes and produces the result

At the end of execution, the enclave:

- makes the result available for the requester (on IPFS for example)
- signs a challenge to prove that the execution happened inside an enclave
- sends the proof to the PoCo via the worker

6. ### PoCo validates and finalizes the task on-chain

PoCo checks:

- worker permission to push a result for the task (through an off-chain
  scheduler authorization)
- enclave authenticity by validating the the enclave challenge signature

If everything is valid the ask is finalized and funds are released according to
the on-chain rules:

- the requester's locked money is finally seized
- the worker gets paid
- app & dataset owners get their revenue shares
- any misbehavior results in stake-based penalties for the scheduler

## Brokering

On iExec, **brokering** is the mechanism that matches all parties involved in a computation:

- the **application** (the logic to run)
- the **dataset** (optional, confidential input data)
- the **workerpool** (TEE-enabled workers)
- the **requester** (the user paying for the execution)

Each party publishes an **order** describing what they offer or request.
When compatible orders are combined, a **deal** is created and PoCo enforces all economic, confidentiality, and governance rules.

### Why off-chain brokering?

iExec uses an **off-chain order book and off-chain matching** system because it provides major advantages:

- orders can be created, shared, and canceled **without gas costs**
- signatures make orders **trustless and verifiable**
- brokering is fast and flexible
- the blockchain is used only to **validate signatures** and **create the final deal**

Although off-chain, the system is secure because each order is:

- encoded as a structured object
- hashed using **EIP-712**
- **signed** by the resource owner

This makes an order **as authoritative as if it were published on-chain**, without paying gas.
The **PoCo** smart contract validates every signature and ensures correct matching.

### What brokering enables?

- **Access control / permissioning**
  Different actors define who can use their resources (specific apps, requesters, or workerpools).

- **Dynamic pricing & monetization**
  Apps, datasets, and workerpools set prices; requesters set maximum prices.

- **Asynchronous, trust-minimized execution**
  After a successful `matchorders`, the PoCo ensures that all parties can operate
  asynchronously and without direct trust:
  - the deal is created on-chain and acts as the single source of truth
  - the requester does not need to stay online during execution
  - TEE-enabled workers independently fetch tasks when ready
  - results, proofs, and outputs are submitted later when execution completes

  PoCo guarantees that even though all actors act at different times, the workflow
  remains secure, deterministic, and economically enforced.

### Order structures

Each actor expresses intent through a signed **order**.
There are four order types, all using **EIP-712 signatures**:

1. **AppOrder** — how the application can be used
2. **DatasetOrder** — how the dataset can be accessed
3. **WorkerpoolOrder** — what TEE workers are available
4. **RequestOrder** — what the requester wants to run

Every order includes:

- the resource address (app/dataset/workerpool/requester)
- price
- volume (number of times the order can be matched)
- optional matching restrictions
- a `tag` describing features (e.g., TEE requirement)
- a `salt` for uniqueness
- a cryptographic **signature**

#### AppOrder

```
struct AppOrder
{
  address app;
  uint256 appprice;
  uint256 volume;
  uint256 tag;
  address datasetrestrict;
  address workerpoolrestrict;
  address requesterrestrict;
  bytes32 salt;
  bytes   sign;
}
```

#### DatasetOrder

```text
struct DatasetOrder
{
  address dataset;
  uint256 datasetprice;
  uint256 volume;
  uint256 tag;
  address apprestrict;
  address workerpoolrestrict;
  address requesterrestrict;
  bytes32 salt;
  bytes   sign;
}
```

#### WorkerpoolOrder

```text
struct WorkerpoolOrder
{
  address workerpool;
  uint256 workerpoolprice;
  uint256 volume;
  uint256 tag;
  uint256 category;
  uint256 trust;
  address apprestrict;
  address datasetrestrict;
  address requesterrestrict;
  bytes32 salt;
  bytes   sign;
}
```

#### RequesterOrder

```text
struct RequestOrder
{
  address app;
  uint256 appmaxprice;
  address dataset;
  uint256 datasetmaxprice;
  address workerpool;
  uint256 workerpoolmaxprice;
  address requester;
  uint256 volume;
  uint256 tag;
  uint256 category;
  uint256 trust;
  address beneficiary;
  address callback;
  string  params;
  bytes32 salt;
  bytes   sign;
}
```

## Additional protocol concepts

### Tag

The tag specifies the need or the availability of features that go beyond the
specifications of the category. The tag is a requirement when it is part of an
app order, a dataset order or a requester order. On the other hand, the tag in
the workerpool order expresses the availability of the corresponding features.

Tags are 32 bytes (256 bits) long array where each bit corresponds to a feature.

**Pre-defined tags:**

| **Value**                                                                       | **Description**        |
| ------------------------------------------------------------------------------- | ---------------------- |
| `0x0000000000000000000000000000000000000000000000000000000000000001` (`0b0001`) | TEE                    |
| `0x0000000000000000000000000000000000000000000000000000000000000003` (`0b0011`) | TEE Scone              |
| `0x0000000000000000000000000000000000000000000000000000000000000005` (`0b0101`) | TEE Gramine            |
| `0x0000000000000000000000000000000000000000000000000000000000000009` (`0b1001`) | TEE TDX                |

For orders matching, the worker pool order must enable all bits that enable in
any of the app order, dataset order and requester order. Meaning that if the app
order tag is `0x12 = 0x10 | 0x02`, the dataset order is `0x81 = 0x80 | 0x01` and
the requester order is `0x03 = 0x02 | 0x01`, then the worker pool order must, at
least, have a tag `0x93 = 0x80 | 0x10 | 0x02 | 0x01`.

### Reward kitty

When a task fails, the requester gets a refund and the scheduler loses its
stake. In order to remove an attack vector, the requester does not get any of
the seized stake. If this was a feature, anyone could build a flawed application
that would not reach consensus to drain money from the scheduler. This would
force the scheduler to whitelist all applications thus reducing the usability of
the platform. Seized stake from the scheduler goes into a specific account
called the _reward kitty_. No one controls this account, nor can withdraw from
it. However, the tokens are not burned. Whenever a task finalizes, the scheduler
that organized the execution of this task receives a reward by the requester and
also gets a small part of the reward kitty.

As described in the protocol parameters section, this reward is
`reward = kitty.percentage(KITTY_RATIO).max(KITTY_MIN).min(kitty)`.

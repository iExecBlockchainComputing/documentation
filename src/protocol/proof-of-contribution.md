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

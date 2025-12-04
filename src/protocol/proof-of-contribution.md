---
title: Proof of Contribution
description:
  PoCo protocol for trust, consensus, and secure payment in decentralized iExec
  computing.
---

# Proof-of-Contribution (PoCo)

## What is PoCo?

PoCo (Proof-of-Contribution) is the trust and governance layer of the iExec protocol.
It ensures that off-chain computations running inside Trusted Execution Environments (TEEs) are executed correctly, confidentially, and under clear economic rules.

PoCo provides three core guarantees:

* **Confidentiality**: data and secrets are only processed inside secure enclaves.
* **Governance and access control**: users decide who can access their data.
* **Trusted payments and penalties**: contributors get paid automatically, and misbehavior is economically discouraged.

PoCo allows building production-grade confidential compute workflows without needing to design trust, access, or monetization layers.

## Why PoCo matters

iExec is built around confidential computing, where computations run inside Trusted Execution Environments.
Users don’t need to trust the machine running the task, TEE’s cryptographic attestation prove that execution
happens in a private way.

PoCo uses this model to guarantee:

* execution happens **inside a genuine enclave**
* secrets are handled **securely and privately**
* results come from **verified enclaves**
* payments and penalties are applied **automatically** on-chain.

In short: PoCo provides the verifiable, confidential, decentralized compute layer backed by hardware security.


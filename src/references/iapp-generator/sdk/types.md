---
title: Types
description:
  Complete reference for iApp types including GrantedAccess,
  ProtectedData, Collection, and other essential data structures.
---

# Types

Types in DataProtector.

## 🔑 GrantedAccess

### app: <span class="text-yellow">`string`</span>

- Address of the iExec Tee application (IApp)

### appprice: <span class="text-yellow">`string`</span>

- Price (in nRLC) to charge the user specified in `requesterrestrict` for each
  use of this `iapp`

### volume: <span class="text-yellow">`string`</span>

- Total number of authorized accesses for running an iApp when the access was signed and published

### remainingAccess: <span class="text-yellow">`number`</span>

- Number of remaining authorized accesses for running an iApp; each use decrements this counter

### tag: <span class="text-yellow">`string`</span>

- Defines whether a `protectedData` is usable in a TEE environment; `0x00` is
  TEE while `0x03` is non-TEE

### datasetrestrict: <span class="text-yellow">`string`</span>

- Address of the authorized protected data; a value of 0x0 indicates any
  protected data may run with this iapp

### requesterrestrict: <span class="text-yellow">`string`</span>

- Address of the requester authorized to run this `iapp` in workloads;
  a value of 0x0 indicates any requester may use this data

### workerpoolrestrict: <span class="text-yellow">`string`</span>

- Address of the decentralized infrastructure (worker pool) authorized to
  execute the application; a value of 0x0 indicates any worker pool may access
  this data

### salt: <span class="text-yellow">`string`</span>

- Random value to make an order unique and reusable as nonce in a blockchain
  transaction

### sign: <span class="text-yellow">`string`</span>

- Order signature of all the `grantedAccess` fields

## 🔐 IApp

### name: <span class="text-yellow">`string`</span>

- Name specified when the iApp was created. This piece of information
  is public and visible on-chain.

### address: <span class="text-yellow">`Address`</span>

- Ethereum address of the iapp.

### owner: <span class="text-yellow">`Address`</span>

- Ethereum address of the iapp owner.

### creationTimestamp: <span class="text-yellow">`number`</span>

- Timestamp specifying when the iapp was created, expressed in
  milliseconds since the epoch. This timestamp provides precise information
  about the moment of creation and can be used for chronological ordering or
  time-based operations.

### multiaddr: <span class="text-yellow">`string` | `undefined`</span>

- The multiaddr field is the IPFS path of iapp published on Dockerhub.

## ❌ RevokedAccess

### access: <span class="text-yellow">[`GrantedAccess`](#-grantedaccess)</span>

- The granted access that was revoked.

### txHash: <span class="text-yellow">`string`</span>

- The ID of the transaction that happened on iExec's side chain. You may view
  details on the transaction using the
  [iExec explorer](https://explorer.iex.ec).

<!-- prettier-ignore-start -->
_Hash example:_ `0xc9c2d58fc01fe54149b7daf49a0026d4ab1fdd3d10fb7c76350790fff03fe24d`
<!-- prettier-ignore-end -->

You can read more about the
[iExec Explorer](/get-started/tooling-and-explorers/iexec-explorer).

## ✅ SuccessWithTransactionHash

### txHash: <span class="text-yellow">`string`</span>

- The hash of the transaction that happened on iExec's side chain. You may view
  details on the transaction using the
  [iExec explorer](https://explorer.iex.ec).

<!-- prettier-ignore-start -->
_Hash example:_ `0xc9c2d58fc01fe54149b7daf49a0026d4ab1fdd3d10fb7c76350790fff03fe24d`
<!-- prettier-ignore-end -->

---
title: Types
description:
  Complete reference for DataProtector types including GrantedAccess,
  ProtectedData, Collection, and other essential data structures.
---

# Types

Types in DataProtector.

## 🔑 GrantedAccess

### dataset: <span class="text-yellow">`string`</span>

- Address of the `protectedData` containing user data

### datasetprice: <span class="text-yellow">`string`</span>

- Price (iun nRLC) to charge the user specified in `requesterrestrict` for each
  use of this `protectedData`

### volume: <span class="text-yellow">`string`</span>

- Number of authorized uses of this `protectedData`; each use decrements this
  counter

### tag: <span class="text-yellow">`string`</span>

- Defines whether a `protectedData` is usable in a TEE environment; `0x00` is
  TEE while `0x03` is non-TEE

### apprestrict: <span class="text-yellow">`string`</span>

- Address of the authorized application; a value of 0x0 indicates any
  application may access this data

### requesterrestrict: <span class="text-yellow">`string`</span>

- Address of the requester authorized to use this `protectedData` in workloads;
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

## 🔐 ProtectedData

### name: <span class="text-yellow">`string`</span>

- Name specified when the protected data was created. This piece of information
  is public and visible on-chain.

### address: <span class="text-yellow">`Address`</span>

- Ethereum address of the protected data.

### owner: <span class="text-yellow">`Address`</span>

- Ethereum address of the protected data owner.

### schema: <span class="text-yellow">`DataSchema`</span>

- Data schema for the protected data as defined when the protected data was
  created (see [protectedData](./dataProtectorCore/protectData.md)). `schema`
  provides a structured representation of the protected data format and
  attributes. This field plays a crucial role in understanding and interpreting
  the underlying structure of the sensitive information.

### creationTimestamp: <span class="text-yellow">`number`</span>

- Timestamp specifying when the protected data was created, expressed in
  milliseconds since the epoch. This timestamp provides precise information
  about the moment of creation and can be used for chronological ordering or
  time-based operations.

### multiaddr: <span class="text-yellow">`string` | `undefined`</span>

- The multiaddr field is the IPFS path of your encrypted data.

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

You can read more about he iExec Explorer
[here](https://protocol.docs.iex.ec/for-developers/toolbox/iexec-explorer).

## ✅ SuccessWithTransactionHash

### txHash: <span class="text-yellow">`string`</span>

- The hash of the transaction that happened on iExec's side chain. You may view
  details on the transaction using the
  [iExec explorer](https://explorer.iex.ec).

<!-- prettier-ignore-start -->
_Hash example:_ `0xc9c2d58fc01fe54149b7daf49a0026d4ab1fdd3d10fb7c76350790fff03fe24d`
<!-- prettier-ignore-end -->

You can read more about he iExec Explorer
[here](https://protocol.docs.iex.ec/for-developers/toolbox/iexec-explorer).

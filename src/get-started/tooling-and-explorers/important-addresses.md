---
title: Important Addresses
description:
  Quick reference guide to all important iExec protocol addresses including RLC
  tokens, PoCo contracts, and applications across all supported networks.
---

# Important Addresses

Quick reference guide to all important iExec protocol addresses. Find RLC token
addresses, PoCo smart contracts, and application addresses for Ethereum,
Arbitrum, and Bellecour networks.

::: tip 💡 Quick Access

Bookmark this page for easy access to all iExec protocol addresses when building
on the platform.

:::

## RLC Token Addresses

RLC (RLC Token) is the native cryptocurrency powering the iExec protocol. Use
these addresses to interact with RLC tokens on each network.

| Network              | Chain ID | RLC Address                                  |
| -------------------- | -------- | -------------------------------------------- |
| **Ethereum Mainnet** | 1        | `0x607F4C5BB672230e8672085532f7e901544a7375` |
| **Arbitrum Mainnet** | 42161    | `0xe649e6a1F2afc63ca268C2363691ceCAF75CF47C` |
| **Arbitrum Sepolia** | 421614   | `0x9923eD3cbd90CD78b910c475f9A731A6e0b8C963` |
| **Bellecour**        | 134      | `xRLC` (Native token)                        |

::: info

On **Bellecour**, RLC tokens are bridged from Ethereum and become **xRLC**
(native token). No contract address is needed as it's the native currency.

:::

## PoCo Smart Contracts

Proof of Contribution (PoCo) smart contracts manage the iExec protocol's
decentralized computing marketplace.

### Arbitrum Mainnet

| Contract               | Address                                      |
| ---------------------- | -------------------------------------------- |
| **Diamond Proxy**      | `0x098bFCb1E50ebcA0BaA92C12eA0c3F045A1aD9f0` |
| **AppRegistry**        | `0x9950D94fb074182ee93ff79A50Cd698C4983281F` |
| **DatasetRegistry**    | `0x07Cc4E1EA30dD02796795876509A3BfC5053128D` |
| **WorkerpoolRegistry** | `0xe3c13bb4A5068601c6A08041Cb50887B07B5F398` |

### Arbitrum Sepolia

| Contract               | Address                                      |
| ---------------------- | -------------------------------------------- |
| **Diamond Proxy**      | `0xB2157BF2fAb286b2A4170E3491Ac39770111Da3E` |
| **AppRegistry**        | `0x9950D94fb074182ee93ff79A50Cd698C4983281F` |
| **DatasetRegistry**    | `0x07Cc4E1EA30dD02796795876509A3BfC5053128D` |
| **WorkerpoolRegistry** | `0xe3c13bb4A5068601c6A08041Cb50887B07B5F398` |

### Ethereum Mainnet

| Contract               | Address                                      |
| ---------------------- | -------------------------------------------- |
| **Diamond Proxy**      | `0x3eca1B216A7DF1C7689aEb259eFB04Ad753aafE5` |
| **AppRegistry**        | `0x9950D94fb074182ee93ff79A50Cd698C4983281F` |
| **DatasetRegistry**    | `0x07Cc4E1EA30dD02796795876509A3BfC5053128D` |
| **WorkerpoolRegistry** | `0xe3c13bb4A5068601c6A08041Cb50887B07B5F398` |

### Bellecour

| Contract               | Address                                      |
| ---------------------- | -------------------------------------------- |
| **Diamond Proxy**      | `0x3eca1B216A7DF1C7689aEb259fFB83ADFB894E7f` |
| **AppRegistry**        | `0xB1C52075b276f87b1834919167312221d50c9D16` |
| **DatasetRegistry**    | `0x799DAa22654128d0C64d5b79eac9283008158730` |
| **WorkerpoolRegistry** | `0xC76A18c78B7e530A165c5683CB1aB134E21938B4` |

## Data Protector Contracts

Smart contracts for managing protected data and access control.

### Arbitrum Mainnet

| Contract                                 | Address                                      |
| ---------------------------------------- | -------------------------------------------- |
| **Core**                                 | `0xF08f91F7646FDb95a4E24977b8Db91318252A667` |
| **Sharing: AddOnlyAppWhitelistRegistry** | `0xe4f319aDf2f3DbFD3270f35CEc90575dC858A0dA` |
| **Sharing Contract**                     | `0x2dA2D268281d79b81D609D68e4507e7ACDfd7E05` |

### Arbitrum Sepolia

| Contract                                 | Address                                      |
| ---------------------------------------- | -------------------------------------------- |
| **Core**                                 | `0x168eAF6C33a77E3caD9db892452f51a5D91df621` |
| **Sharing: AddOnlyAppWhitelistRegistry** | `0x36a1544cE8c72f9b80dB39Fd8A193b6B94FD92B3` |
| **Sharing Contract**                     | `0x34AD9D161E815D7696777a9D2d668aF2d6e675e9` |

## Application Addresses

### Web3Mail

Web3Mail enables decentralized email communication with privacy-preserving
features.

| Network              | Whitelist Address                            |
| -------------------- | -------------------------------------------- |
| **Arbitrum Mainnet** | `0xD5054a18565c4a9E5c1aa3cEB53258bd59d4c78C` |
| **Arbitrum Sepolia** | `0x8d46d40840f1Aa2264F96184Ffadf04e5D573B9B` |
| **Bellecour**        | `0x781482C39CcE25546583EaC4957Fb7Bf04C277D2` |

### Web3Telegram

Web3Telegram enables decentralized Telegram messaging with Web3 integration.

| Network              | Whitelist Address                            |
| -------------------- | -------------------------------------------- |
| **Arbitrum Mainnet** | `0x53AFc09a647e7D5Fa9BDC784Eb3623385C45eF89` |
| **Arbitrum Sepolia** | `0x7291ff96100DA6CF97933C225B86124ef95aEc9b` |
| **Bellecour**        | `0x192C6f5AccE52c81Fcc2670f10611a3665AAA98F` |

## Workerpool Addresses

Default workerpool addresses for each network.

| Network              | Workerpool Address                           |
| -------------------- | -------------------------------------------- |
| **Arbitrum Mainnet** | `0x2C06263943180Cc024dAFfeEe15612DB6e5fD248` |
| **Arbitrum Sepolia** | `0xB967057a21dc6A66A29721d96b8Aa7454B7c383F` |
| **Bellecour**        | `prod-v8-bellecour.main.pools.iexec.eth`     |

::: tip

These are the default workerpools for each network. You can specify a different
workerpool when processing protected data or running iApps.

:::

## Additional Resources

- [iExec Explorer](/get-started/tooling-and-explorers/iexec-explorer) - Explore
  deals, tasks, and assets
- [RLC Bridge](/get-started/tooling-and-explorers/bridge) - Bridge RLC tokens
  between networks
- [Blockchain Explorers](/get-started/tooling-and-explorers/blockchain-explorer) -
  View contracts on block explorers

<script setup>
import { getSupportedChains } from '@/utils/chain.utils';

// Get chain data for dynamic content
const chains = getSupportedChains();
</script>

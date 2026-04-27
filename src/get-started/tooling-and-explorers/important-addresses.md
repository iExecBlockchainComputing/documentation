---
title: Important Addresses
description:
  Quick reference guide to all important iExec protocol addresses including RLC
  tokens, PoCo contracts, and applications across all supported networks.
---

# Important Addresses

Quick reference guide to all important iExec protocol addresses. Find RLC token
addresses, PoCo smart contracts, and application addresses for Ethereum and
Arbitrum networks.

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
| **Arbitrum Mainnet** | `0xfa9cceff9431ee0e2a3fe58911073f1357f24e31` |
| **Arbitrum Sepolia** | `0x09d59e1b696d0cb69f46bf762412636e8652ab58` |

### Web3Telegram

Web3Telegram enables decentralized Telegram messaging with Web3 integration.

| Network              | Whitelist Address                            |
| -------------------- | -------------------------------------------- |
| **Arbitrum Mainnet** | `0xa7101cf61d4602d55a715be4f2b9e1bc71d22301` |
| **Arbitrum Sepolia** | `0x7f67e78a4b0a98c50333b8b72851952c396601a1` |

## Workerpool Addresses

Default workerpool addresses for each network.

| Network              | Workerpool Address                           |
| -------------------- | -------------------------------------------- |
| **Arbitrum Mainnet** | `0x8ef2ec3ef9535d4b4349bfec7d8b31a580e60244` |
| **Arbitrum Sepolia** | `0x2956f0cb779904795a5f30d3b3ea88b714c3123f` |

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

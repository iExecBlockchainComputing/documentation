---
title: RLC Token
description:
  The RLC token is the native cryptocurrency that powers the iExec decentralized
  computing ecosystem
---

<div class="flex flex-col items-center mb-8">
  <img :src="rlcGif" alt="RLC Token Animation" class="w-100 h-100 mb-4" />
  <h1 class="text-3xl font-bold text-center mb-2">RLC Token</h1>
  <p class="text-lg text-center text-gray-600 max-w-2xl">The native cryptocurrency that powers the entire iExec decentralized confidential computing ecosystem</p>
</div>

**RLC** (Run on Lots of Computers) serves as the primary medium of exchange for
all interactions within the protocol, enabling users to access confidential
computing services and rewarding providers for their contributions.

## 🎯 What RLC Enables

RLC is essential for interacting with the iExec protocol and accessing its
decentralized confidential computing services:

### 💰 Transparent Payment Flow

When you pay for a task execution with RLC, your payment is automatically and
transparently distributed to all iExec protocol participants:

<div class="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700 my-6">
  <h4 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">🔍 How Your RLC Payment is Distributed</h4>
  
  **1. App Provider** - Gets paid for providing the confidential application
  
  **2. Protected Data Provider** - Gets paid for providing access to protected datasets
  
  **3. Worker** - Gets paid for running the confidential computation on their decentralized machine
  
</div>

**💡 Transparent:** Payments are distributed based on orders defined by each
provider (iApp, Protected Data, Worker) with their specific pricing and
conditions.

## 💰 Tokenomics

RLC operates on a utility-driven economic model where demand for confidential
computing services drives token value:

**Fixed Supply**: RLC has a maximum supply of 87 million tokens, ensuring
scarcity and value preservation.

**Network Effects**: As more users and providers join the iExec ecosystem, the
demand for RLC increases, driving token value through network effects.

<div class="mt-8">
  <ImageViewer
    :image-url-dark="duneDashboard"
    image-alt="RLC Token Economics Dashboard"
    link-url="https://dune.com/datawarlock/arbitrum-economics"
    class="rounded-lg shadow-lg"
  />
  <p class="text-center text-sm text-gray-600 mt-2">
    <a href="https://dune.com/datawarlock/arbitrum-economics" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">View live RLC analytics on Dune Dashboard</a>
  </p>
</div>

## 🌐 RLC Across Networks

RLC is available on multiple blockchain networks to serve different use cases:

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <DescriptionCard
    title="Ethereum Mainnet"
    icon="⟠"
    color="gray"
    :features="[
      'Original ERC-20 RLC token',
      'DeFi integrations available',
      'High liquidity markets'
    ]"
  />
  
  <DescriptionCard
    title="Bellecour Sidechain"
    icon="⚡"
    color="yellow"
    :features="[
      'xRLC native asset',
      'Gasless blockchain',
    ]"
  />
  
  <DescriptionCard
    title="Arbitrum"
    icon="🔷"
    color="blue"
    :features="[
      'Layer 2 scaling solution',
      'DeFi integrations available',
      'Reduced transaction costs',
      'Ethereum ecosystem access',
    ]"
  />
</div>

## 🔄 Getting RLC

You can acquire RLC tokens through several methods:

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <DescriptionCard
    title="Centralized Exchanges"
    icon="🏪"
    color="indigo"
    :features="[
      { text: 'Binance: RLC/BTC, RLC/USDT', link: 'https://www.binance.com/en/trade/RLC_BTC' },
      { text: 'Coinbase: RLC/USD', link: 'https://www.coinbase.com/price/rlc' },
      { text: 'Kraken: RLC/USD', link: 'https://pro.kraken.com/app/trade/rlc-usd' },
      { text: 'MEXC: RLC/USDT', link: 'https://www.mexc.com/exchange/RLC_USDT' },
      { text: 'BitGet: RLC/USDT', link: 'https://www.bitget.com/spot/RLCUSDT' },
      '...'
    ]"
  />
  
  <DescriptionCard
    title="Decentralized Exchanges"
    icon="🌊"
    color="purple"
    :features="[
      { text: 'ETH: RLC/ETH on Uniswap', link: 'https://app.uniswap.org/explore/pools/ethereum/0x56Ea002B411FD5887E55329852D5777EcB170713' },
      'ARB: RLC/ETH (coming soon)',
      'High liquidity DEX trading'
    ]"
  />
  
  <DescriptionCard
    title="Cross-Chain Bridging"
    icon="🌉"
    color="teal"
    :features="[
      'Bellecour Bridge',
      'Stargate Bridge (Arbitrum)',
    ]"
  />
  
  <DescriptionCard
    title="Earn RLC"
    icon="💎"
    color="pink"
    :features="[
      'Develop confidential apps',
      'Monetize protected datasets',
      'Become a compute provider',
    ]"
  />
</div>

## 🚀 Ready to get started?

Ready to dive into the iExec ecosystem? Here are the next steps:

- **[Bridge RLC](./tooling-and-explorers/bridge.md)** - Transfer RLC between
  networks
- **[Start Using iExec](./quick-start.md)** - Begin your confidential computing
  journey
- **[Earn RLC](../manage-data/guides/create-and-share-access.md)** - Become a
  provider and monetize your resources

<script setup>
import ImageViewer from '../components/ImageViewer.vue';
import DescriptionCard from '../components/DescriptionCard.vue';

// Assets
import rlcGif from '../assets/rlc/rlc.gif';
import duneDashboard from '../assets/rlc/dune-dashboard.png';
</script>

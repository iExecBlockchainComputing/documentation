---
title: RLC Token
description:
  RLC (Run on Lots of Computers) is the cryptocurrency powering iExec's
  confidential computing ecosystem. Learn about RLC tokenomics, utility, and how
  it drives privacy-first Web3 apps.
---

<div class="flex flex-col items-center mb-8">
  <img :src="rlcGif" alt="RLC Token Animation" class="w-80 h-80 mb-0" />
  <h1 class="text-3xl font-bold text-center mb-2">RLC Token</h1>
  <p class="text-lg text-center text-gray-600 max-w-2xl">The native cryptocurrency that powers the entire iExec decentralized confidential computing ecosystem</p>
</div>

RLC (Run on Lots of Computers) powers all privacy apps on iExec. Every
confidential computation requires RLC. Every piece of protected data consumed
requires RLC. Every app execution requires RLC. The more builders use iExec
tools, the more utility RLC gains in real apps.

::: tip Info

On the iExec sidechain (Bellecour), the RLC token symbol becomes **xRLC**. xRLC
is the native token of the Bellecour chain and is used for all transactions and
payments on this network.

:::

## 🎯 Why RLC Matters

**Stack adoption = token usage.** When developers build with iExec tools, RLC
gets used. More privacy apps deployed means more RLC demand.

### For users

Every confidential computation you run uses RLC. That's how iExec keeps your
data private while making it usable.

### For providers

Build apps, provide data, or run workers. All earn RLC when people use your
contributions.

### For holders

**Clear positioning:** More developers using iExec's privacy tools means more
RLC utility in real dApps. iExec builds actionable privacy, not just protocols.

## 💰 Transparent Payment Flow

When you pay for a task execution with RLC, your payment is automatically and
transparently distributed to all iExec protocol participants:

<div class="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg px-4 border border-blue-200 dark:border-blue-700 my-0">
  <h4 class="text-lg font-semibold text-blue-800 dark:text-blue-200">🔍 How Your RLC Payment is Distributed</h4>
  
  **1. App Provider** - Gets paid for providing the iApp
  
  **2. Protected Data Provider** - Gets paid for providing access to protected confidential datasets
  
  **3. Worker** - Gets paid for running the confidential computation on their decentralized machine
</div>

**💡 Transparent:** Payments are distributed based on pricing and conditions
defined by each provider (iApp, Protected Data, Worker) in their marketplace
orders.

**🔒 RLC Staking:** To run a task on the protocol (executing an iApp with
protected data on a decentralized workerpool), you need to **lock RLC** in the
protocol during the task period. In exchange, you receive **sRLC (staked RLC)**.
Once the task is completed, you can recover the RLC that wasn't consumed for the
task payment.

### 📊 Ecosystem Growth Metrics

RLC operates on a utility-driven economic model where demand for confidential
computing services drives token value:

**Fixed Supply**: RLC has a maximum supply of 87 million tokens, ensuring
scarcity and value preservation.

**Network Effects**: As more users and providers join the iExec ecosystem, the
demand for RLC increases, driving token value through network effects.

**Utility-Driven Growth**: Every interaction in the **Turnkey Privacy**
ecosystem requires RLC:

- iApp executions consume RLC for computation
- Protected Data access requires RLC
- Confidential computations need RLC for execution
- Staking mechanisms lock RLC, reducing circulating supply

## 🔄 Getting RLC

You can acquire RLC tokens through several methods:

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <FeatureCard
    title="Centralized Exchanges"
    icon="mdi:store"
    icon-color="text-indigo-500"
    :features="[
      { text: 'View all available CEX on CoinMarketCap', link: 'https://coinmarketcap.com/fr/currencies/rlc/' },
      'High liquidity markets',
      'Fiat to RLC purchase options'
    ]"
  />
  
  <FeatureCard
    title="Decentralized Exchanges"
    icon="mdi:waves"
    icon-color="text-purple-500"
    :features="[
      { text: 'ETH: RLC/ETH on Uniswap', link: 'https://app.uniswap.org/explore/pools/ethereum/0x56Ea002B411FD5887E55329852D5777EcB170713' },
      'ARB: RLC/ETH (coming soon)',
      'High liquidity DEX trading'
    ]"
  />
  
  <FeatureCard
    title="Cross-Chain Bridging"
    icon="mdi:bridge"
    icon-color="text-teal-500"
    :features="[
      'Bellecour Bridge',
      'Stargate Bridge (Arbitrum)',
    ]"
  />
  
  <FeatureCard
    title="Earn RLC"
    icon="mdi:diamond"
    icon-color="text-pink-500"
    :features="[
      'Develop confidential apps',
      'Monetize protected datasets',
      'Become a compute provider',
    ]"
  />
</div>

## 🚀 Ready to Get Started?

Ready to dive into the iExec ecosystem? Here are the next steps:

- **[Bridge RLC](/get-started/tooling-and-explorers/bridge)** - Transfer RLC
  between networks
- **[Start Using iExec](/get-started/quick-start)** - Begin your confidential
  computing journey
- **[Earn RLC](/guides/manage-data/manage-access)** - Become a provider and
  monetize your resources

<script setup>
import FeatureCard from '@/components/FeatureCard.vue';

// Assets
import rlcGif from '@/assets/rlc/rlc.gif';
</script>

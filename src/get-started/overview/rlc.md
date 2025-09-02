---
title: RLC Token
description:
  RLC is the cryptocurrency powering iExec's confidential computing ecosystem.
  Learn about RLC tokenomics, utility, and how it drives privacy-first Web3
  apps.
---

<img :src="rlcPng" alt="RLC Token" class="size-80 -my-10 mx-auto" />

# RLC Token

The native cryptocurrency that powers the entire iExec decentralized
confidential computing ecosystem

RLC powers all privacy apps running on iExec. Every confidential computation
requires RLC. Every piece of protected data consumed requires RLC. Every app
execution requires RLC. The more builders use iExec tools, the more RLC has to
be bought and used by builder leveraging iExec's technology.

## 🎯 Why RLC Matters

**iExec's adoption is linearly correlated to the real-time usage of the RLC
token** When developers build with iExec tools, RLC gets used. More privacy apps
deployed means more RLC demand.

### For users

Every confidential computation you run uses RLC. That's how iExec keeps your
data private while making it usable.

### For providers

Build apps, provide data, or [run workers](/get-started/overview/workerpool).
All stakeholders earn RLC when people use their contributions.

### For holders

More developers using iExec's privacy tools means more RLC utility in real
dApps. iExec builds actionable privacy, not just protocols.

## 💰 Transparent Payment Flow

When you pay for a task execution with RLC, your payment is automatically and
transparently distributed to all iExec protocol participants:

::: tip How Your RLC Payment is Distributed

**1. App Provider** - Gets paid for providing the iApp

**2. Protected Data Provider** - Gets paid for providing access to protected
confidential datasets

**3. Worker** - Gets paid for running the confidential computation on their
decentralized machine

:::

**Transparent:** Payments are distributed based on pricing and conditions
defined by each provider (iApp, Protected Data, Worker) in their marketplace
orders.

**RLC Staking:** To run a task on the protocol (executing an iApp with protected
data on a decentralized workerpool), you need to **lock RLC** in the protocol
during the task period. In exchange, you receive **sRLC (staked RLC)**. Once the
task is completed, you can recover the RLC that wasn't consumed for the task
payment.

### 📊 Ecosystem Growth Metrics

**RLC operates** on a utility-driven economic model where demand for
confidential computing services drives token value:

**Fixed Supply**: RLC has a maximum supply of 87 million tokens, ensuring
scarcity and value preservation.

The entire circulating supply of RLC has already been minted. There are no
pending token unlocks or private allocations that could impact the market. Since
launch, iExec has been self-funded, without relying on VCs.

**Network Effects**: As more users and providers join the iExec ecosystem, the
demand for RLC increases, driving token value through network effects.

**Utility-Driven Growth**: Every interaction in the **Privacy Toolkit**
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
    :features="[
      { text: 'View all available CEX on CoinMarketCap', link: 'https://coinmarketcap.com/fr/currencies/rlc/' },
      'High liquidity markets',
      'Fiat to RLC purchase options'
    ]"
  />
  
  <FeatureCard
    title="Decentralized Exchanges"
    :features="[
      { text: 'ETH: RLC/ETH on Uniswap', link: 'https://app.uniswap.org/explore/pools/ethereum/0x56Ea002B411FD5887E55329852D5777EcB170713' },
      'ARB: RLC/ETH (coming soon)',
      'High liquidity DEX trading'
    ]"
  />
  
  <FeatureCard
    title="Cross-Chain Bridging"
    :features="[
      'Bellecour Bridge',
      'Stargate Bridge (Arbitrum)',
    ]"
  />
  
  <FeatureCard
    title="Earn RLC"
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
import rlcPng from '@/assets/rlc/rlc.png';
</script>

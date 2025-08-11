---
title: RLC Token
description:
  The RLC token is the cryptocurrency that powers the iExec decentralized
  computing ecosystem
---

<div class="flex flex-col items-center mb-8">
  <img :src="rlcGif" alt="RLC Token Animation" class="w-80 h-80 mb-0" />
  <h1 class="text-3xl font-bold text-center mb-2">RLC Token</h1>
  <p class="text-lg text-center text-gray-600 max-w-2xl">The native cryptocurrency that powers the entire iExec decentralized confidential computing ecosystem</p>
</div>

**RLC** (**R**un on **L**ots of **C**omputers) powers all privacy apps on iExec.
Every confidential computation uses RLC. Every data protection service uses RLC.
Every app execution uses RLC. More builders using our tools = more RLC utility
in real applications.

## 🎯 Why RLC Matters

**Stack adoption = token usage.** Developers build with iExec tools. RLC gets
used. More privacy apps deployed = more RLC demand.

### For Users

Every confidential computation you run uses RLC. That's how we keep your data
private while making it usable.

### For Providers

Build apps, provide data, or run workers. All earn RLC when people use your
contributions.

### For Holders

**Clear positioning:** More developers using iExec's privacy tools = more RLC
utility in real applications. We're building activable privacy, not just
protocols.

## 💰 Transparent Payment Flow

When you pay for a task execution with RLC, your payment is automatically and
transparently distributed to all iExec protocol participants:

<div class="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg px-4 border border-blue-200 dark:border-blue-700 my-0">
  <h4 class="text-lg font-semibold text-blue-800 dark:text-blue-200">🔍 How Your RLC Payment is Distributed</h4>
  
  **1. App Provider** - Gets paid for providing the confidential application
  
  **2. Protected Data Provider** - Gets paid for providing access to protected confidential datasets
  
  **3. Worker** - Gets paid for running the confidential computation on their decentralized machine
</div>

**💡 Transparent:** Payments are distributed based on pricing and conditions
defined by each provider (iApp, Protected Data, Worker) in their marketplace
orders.

**🔒 RLC Staking:** To run a task on the protocol (executing an application with
protected data on a decentralized workerpool), you need to **lock RLC** in the
protocol during the task period. In exchange, you receive **sRLC (staked RLC)**.
Once the task is completed, you can recover the RLC that wasn't consumed for the
task payment.

## 💰 Tokenomics & Ecosystem Metrics

RLC operates on a utility-driven economic model where demand for confidential
computing services drives token value:

**Fixed Supply**: RLC has a maximum supply of 87 million tokens, ensuring
scarcity and value preservation.

**Network Effects**: As more users and providers join the iExec ecosystem, the
demand for RLC increases, driving token value through network effects.

**Utility-Driven Growth**: Every interaction in the **Turnkey Privacy**
ecosystem requires RLC:

- iApp executions consume RLC for computation
- Data protection services use RLC for encryption and access control
- Cross-chain operations require RLC for bridge fees
- Staking mechanisms lock RLC, reducing circulating supply

### 📊 Ecosystem Growth Metrics

<ImageViewer
    :image-url-dark="duneDashboard"
    image-alt="RLC Token Economics Dashboard"
    link-url="https://dune.com/datawarlock/arbitrum-economics"
    caption="🔗 Access iExec Dune Dashboard"
  />

**Key Growth Indicators:**

- **Task Volume**: Increasing daily/monthly iApp executions
- **Developer Adoption**: Growing number of deployed iApps
- **Data Provider Growth**: More protected datasets entering the ecosystem
- **Cross-Chain Expansion**: Multi-chain deployment driving broader adoption
- **Enterprise Integration**: Real-world adoption in finance, healthcare, and AI
  sectors

### 🚀 Strategic Roadmap & Token Utility Expansion

**2024-2025 Growth Drivers:**

- **Multi-Chain Expansion**: Ethereum, Arbitrum, and Polygon integrations
- **Enterprise Partnerships**: Fortune 500 confidential computing adoption
- **AI Integration**: Privacy-preserving AI model execution at scale
- **DeFi Integration**: Confidential financial applications and protocols
- **Web3 Communication**: Mass adoption of Web3Mail and Web3Telegram

**Long-term Vision (2025+):**

- **Global Privacy Infrastructure**: Becoming the standard for confidential
  computing
- **Regulatory Compliance**: GDPR, HIPAA, and SOX-compliant data processing
- **Consumer Applications**: Privacy-first apps for everyday users
- **IoT & Edge Computing**: Confidential processing at the network edge

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

- **[Bridge RLC](./tooling-and-explorers/bridge.md)** - Transfer RLC between
  networks
- **[Start Using iExec](./quick-start.md)** - Begin your confidential computing
  journey
- **[Earn RLC](../manage-data/guides/create-and-share-access.md)** - Become a
  provider and monetize your resources

<script setup>
import ImageViewer from '../components/ImageViewer.vue';
import FeatureCard from '../components/FeatureCard.vue';

// Assets
import rlcGif from '../assets/rlc/rlc.gif';
import duneDashboard from '../assets/rlc/dune-dashboard.png';
</script>

---
title: RLC Bridge
description:
  Bridge RLC tokens between networks to interact with the iExec protocol.
  Transfer RLC to Bellecour (xRLC) and Arbitrum networks using dedicated bridges
---

# 🌉 RLC Bridge

**RLC** (RLC Token) is the essential cryptocurrency for interacting with the iExec protocol. Whether you are executing tasks, accessing protected data, or participating in the iExec decentralized confidential computing network, you will need RLC tokens on the appropriate network.

This guide helps you bridge RLC tokens to **Bellecour** (becoming xRLC) and **Arbitrum** networks using dedicated bridge solutions.

## 🎯 Why Bridge RLC?

RLC tokens are required for various iExec protocol interactions:

- **Task Execution**: Pay for confidential computing tasks
- **Data Access**: Purchase access to protected datasets
- **Protocol Participation**: Stake tokens for workerpool operations
- **Application Usage**: Pay for iApp executions
- **Data Protection**: Cover costs for data encryption and storage

### Network-Specific Requirements

- **Bellecour Network**: Uses **xRLC** (bridged RLC) for gasless transactions
- **Arbitrum Network**: Uses **RLC** for mainnet operations with lower gas fees

## 🗂️ Available Bridges

iExec provides dedicated bridge solutions for seamless token transfers across networks:

<CardGrid>
  <ProjectCard
    title="Bellecour Bridge"
    description="Bridge RLC from Ethereum mainnet to Bellecour sidechain (xRLC) for gasless transactions and protocol interactions"
    icon-image="/assets/icons/iexec-logo.png"
    status="available"
    status-label="Live"
    button-label="Access Bridge"
    button-icon="mdi:bridge"
    button-href="https://bridge-bellecour.iex.ec/"
    button-target="_blank"
    button-rel="noreferrer"
  />
  
  <ProjectCard
    title="Stargate Bridge"
    description="Bridge RLC to Arbitrum mainnet using LayerZero's Stargate protocol for cross-chain transfers"
    icon-image="/assets/icons/arbitrum-logo.png"
    status="available"
    status-label="Live"
    button-label="Access Bridge"
    button-icon="mdi:bridge"
    button-href="https://stargateprotocol.com/"
    button-target="_blank"
    button-rel="noreferrer"
  />
</CardGrid>

## 🔄 Bellecour Bridge (RLC → xRLC)

The **Bellecour Bridge** enables seamless transfer of RLC tokens from Ethereum mainnet to the Bellecour sidechain, where they become **xRLC** tokens.

### Key Features

- **Gasless Transactions**: Bellecour is a gasless blockchain
- **Instant Transfers**: Quick bridge operations with minimal waiting time
- **Native Integration**: Fully integrated with iExec protocol
- **User-Friendly Interface**: Simple and intuitive bridge interface

### How to Bridge to Bellecour

1. **Connect Wallet**: Visit [Bellecour Bridge](https://bridge-bellecour.iex.ec/) and connect your wallet
2. **Select Amount**: Choose the amount of RLC you want to bridge
3. **Confirm Transaction**: Approve the bridge transaction on Ethereum mainnet
4. **Receive xRLC**: Your xRLC tokens will be available on Bellecour network

<ImageViewer
  image-url-dark="/assets/tooling-&-explorers/bridge/bellecour-bridge.png"
  image-alt="Bellecour Bridge Process"
  link-url="https://bridge-bellecour.iex.ec/"
  caption="🔗 Start Bridging to Bellecour"
/>

### Bridge Process Details

The Bellecour bridge operates on a **lock & mint / burn & unlock** principle:

- **Ethereum → Bellecour**: RLC tokens are locked on Ethereum mainnet, and equivalent xRLC tokens are minted on Bellecour
- **Bellecour → Ethereum**: xRLC tokens are burned on Bellecour, and equivalent RLC tokens are unlocked on Ethereum mainnet

### Using xRLC on Bellecour

Once you have xRLC on Bellecour, you can:

```javascript
// Deposit xRLC into your iExec account
iexec.account.deposit(xRLC_amount);

// Check your sRLC balance
iexec.account.show();

// Use sRLC for task execution
// Your tasks will automatically use sRLC for payments
```

## 🌉 Stargate Bridge (RLC → Arbitrum)

The **Stargate Bridge** powered by LayerZero enables cross-chain transfers of RLC tokens to Arbitrum mainnet.

### Key Features

- **Cross-Chain Protocol**: Powered by LayerZero's Stargate protocol
- **Arbitrum Integration**: Native support for Arbitrum mainnet
- **Fast Transfers**: Optimized for cross-chain efficiency
- **Security**: Audited and secure bridge infrastructure

### How to Bridge to Arbitrum

1. **Visit Stargate**: Go to [Stargate Protocol](https://stargateprotocol.com/)
2. **Connect Wallet**: Connect your wallet to the Stargate interface
3. **Select Networks**: Choose Ethereum as source and Arbitrum as destination
4. **Select Token**: Choose RLC as the token to bridge
5. **Enter Amount**: Specify the amount of RLC to transfer
6. **Confirm Transaction**: Approve the bridge transaction

<ImageViewer
  image-url-dark="/assets/tooling-&-explorers/bridge/stargate-bridge.png"
  image-alt="Stargate Bridge Interface"
  link-url="https://stargateprotocol.com/"
  caption="🔗 Access Stargate Bridge"
/>

### Bridge Process Details

Stargate uses LayerZero's cross-chain messaging protocol:

- **Source Chain**: RLC tokens are locked/burned on the source chain
- **Cross-Chain Message**: LayerZero relays the transfer message
- **Destination Chain**: Equivalent RLC tokens are minted/unlocked on Arbitrum

## 💡 Bridge Comparison

| Feature | Bellecour Bridge | Stargate Bridge |
|---------|------------------|-----------------|
| **Destination** | Bellecour Sidechain | Arbitrum Mainnet |
| **Token** | RLC → xRLC | RLC → RLC |
| **Gas Fees** | Gasless | Low gas fees |
| **Speed** | Fast | Fast |
| **Use Case** | Protocol interactions | Mainnet operations |
| **Integration** | Native iExec | Third-party |

## 🚀 Getting Started

### Prerequisites

1. **RLC Tokens**: Ensure you have RLC tokens on Ethereum mainnet
2. **Wallet**: MetaMask or compatible Web3 wallet
3. **Network Support**: Ensure your wallet supports the target network

### Step-by-Step Guide

#### For Bellecour (Recommended for Development)

1. **Acquire RLC**: Purchase RLC from supported exchanges
2. **Bridge to Bellecour**: Use [Bellecour Bridge](https://bridge-bellecour.iex.ec/)
3. **Deposit xRLC**: Deposit xRLC into your iExec account
4. **Start Building**: Begin interacting with the iExec protocol

#### For Arbitrum (Production)

1. **Acquire RLC**: Purchase RLC from supported exchanges
2. **Bridge to Arbitrum**: Use [Stargate Bridge](https://stargateprotocol.com/)
3. **Connect to Protocol**: Use RLC directly on Arbitrum mainnet
4. **Deploy Production**: Launch your applications on Arbitrum

## 🔗 Additional Resources

- [Bellecour Bridge](https://bridge-bellecour.iex.ec/) - Official Bellecour bridge interface
- [Stargate Protocol](https://stargateprotocol.com/) - Cross-chain bridge solution
- [iExec Explorer](https://explorer.iex.ec/) - Monitor transactions and balances
- [RLC Token Information](https://iex.ec/rlc) - Learn more about RLC token
- [Bellecour Network](https://chainlist.org/?search=bellecour) - Network configuration

---

<div class="bg-gradient-to-r from-yellow-400/10 to-orange-400/5 rounded-[6px] p-6 border-l-4 border-yellow-700 mb-6">
  <h4 class="!mt-0 !mb-2">💡 Pro Tip</h4>
  <p class="!mb-0">Use <strong>Bellecour</strong> for development and testing (gasless), then bridge to <strong>Arbitrum</strong> for production deployments. This approach saves on gas costs during development while ensuring your applications are ready for mainnet.</p>
</div>

<script setup>
import ImageViewer from '../../components/ImageViewer.vue';
import CardGrid from '../../components/CardGrid.vue';
import ProjectCard from '../../components/ProjectCard.vue';
</script>

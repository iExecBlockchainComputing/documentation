---
title: RLC Bridge
description:
  Bridge RLC tokens between networks to interact with the iExec protocol.
  Transfer RLC to Bellecour (xRLC) and Arbitrum networks using dedicated bridges
---

# RLC Bridge

**RLC** (RLC Token) is the essential cryptocurrency for interacting with the
iExec protocol. Whether you are executing tasks, accessing protected data, or
participating in the iExec decentralized confidential computing network, you
will need RLC tokens on the appropriate network.

This guide helps you bridge RLC tokens to **Bellecour** (becoming xRLC) and
**Arbitrum** networks using dedicated bridge solutions.

## 🎯 Why Bridge RLC?

RLC tokens are required for various iExec protocol interactions:

- **Task Execution**: Pay for confidential computing tasks
- **Data Access**: Purchase access to protected datasets
- **Application Usage**: Pay for iApp executions

## 🗂️ Available Bridges

iExec provides dedicated bridge solutions for seamless token transfers across
networks:

<CardGrid>
  <ProjectCard
    title="Bellecour Bridge"
    description="Bridge RLC from Ethereum mainnet to Bellecour sidechain (xRLC)"
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
    description="Bridge RLC to Arbitrum mainnet using LayerZero's Stargate protocol"
    icon-image="/assets/icons/arbitrum-logo.png"
    status="available"
    status-label="Live"
    button-label="Access Bridge"
    button-icon="mdi:bridge"
    button-href="https://stargate.finance/bridge"
    button-target="_blank"
    button-rel="noreferrer"
  />
</CardGrid>

## 🔄 How to Bridge to Bellecour

The **Bellecour Bridge** enables seamless transfer of RLC tokens from Ethereum
mainnet to the Bellecour sidechain, where they become **xRLC** tokens.

1. **Connect Wallet**: Visit
   [Bellecour Bridge](https://bridge-bellecour.iex.ec/) and connect your wallet
2. **Select Amount**: Choose the amount of RLC you want to bridge
3. **Confirm Transaction**: Approve the bridge transaction on Ethereum mainnet
4. **Receive xRLC**: Your xRLC tokens will be available on Bellecour network

<ImageViewer
  image-url-dark="/assets/tooling-&-explorers/bridge/bellecour-bridge.png"
  image-alt="Bellecour Bridge Process"
  link-url="https://bridge-bellecour.iex.ec/"
/>

## How to Bridge to Arbitrum

The **Stargate Bridge** powered by LayerZero enables cross-chain transfers of
RLC tokens to Arbitrum mainnet.

1. **Visit Stargate**: Go to [Stargate](https://stargate.finance/bridge)
2. **Connect Wallet**: Connect your wallet to the Stargate interface
3. **Select Networks**: Choose Ethereum as source and Arbitrum as destination
4. **Select Token**: Choose RLC as the token to bridge
5. **Enter Amount**: Specify the amount of RLC to transfer
6. **Confirm Transaction**: Approve the bridge transaction

<ImageViewer
  image-url-dark="/assets/tooling-&-explorers/bridge/stargate-bridge.png"
  image-alt="Stargate Bridge Interface"
  link-url="https://stargate.finance/bridge"
/>

<script setup>
import ImageViewer from '../../components/ImageViewer.vue';
import CardGrid from '../../components/CardGrid.vue';
import ProjectCard from '../../components/ProjectCard.vue';
</script>

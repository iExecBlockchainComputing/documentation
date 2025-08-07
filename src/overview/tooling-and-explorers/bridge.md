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
    description="Bridge RLC tokens between Ethereum mainnet and Bellecour sidechain (xRLC) in both directions"
    :icon-image="iexecLogoIcon"
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
    description="Bridge RLC tokens between Ethereum and Arbitrum mainnet in both directions using LayerZero protocol"
    :icon-image="arbitrumLogoIcon"
    status="available"
    status-label="Live"
    button-label="Access Bridge"
    button-icon="mdi:bridge"
    button-href="https://stargate.finance/bridge"
    button-target="_blank"
    button-rel="noreferrer"
  />
</CardGrid>

## 🔄 Bellecour Bridge

The **Bellecour Bridge** enables seamless transfer of RLC tokens between
Ethereum mainnet and the Bellecour sidechain in both directions.

### From Ethereum to Bellecour (RLC → xRLC)

1. **Connect Wallet**: Visit
   [Bellecour Bridge](https://bridge-bellecour.iex.ec/) and connect your wallet
2. **Switch to Ethereum**: Ensure your wallet is connected to Ethereum mainnet
3. **Select Amount**: Choose the amount of RLC you want to bridge
4. **Confirm Transaction**: Approve the bridge transaction on Ethereum mainnet
5. **Receive xRLC**: Your xRLC tokens will be available on Bellecour network

<ImageViewer
  :image-url-dark="bellecourBridgeImage"
  image-alt="Bellecour Bridge Process"
  link-url="https://bridge-bellecour.iex.ec/"
/>

<div class="bg-gradient-to-r from-purple-400/10 to-purple-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 my-6">
  <h4 class="!mt-0 !mb-2">🔄 Bidirectional Bridge</h4>
  <p class="!mb-0">The bridge interface automatically detects your wallet's network and available tokens. The process is similar in both directions - simply switch to the appropriate network (source chain) in your wallet and refresh the page to update the bridge direction, then the bridge will handle the conversion between RLC and xRLC seamlessly.</p>
</div>

## ⚡ Stargate Bridge

The **Stargate Bridge** powered by LayerZero enables cross-chain transfers of
RLC tokens between Ethereum and Arbitrum mainnet in both directions.

### From Ethereum to Arbitrum

1. **Visit Stargate**: Go to [Stargate](https://stargate.finance/bridge)
2. **Connect Wallet**: Connect your wallet to the Stargate interface
3. **Select Networks**: Choose Ethereum as source and Arbitrum as destination
4. **Select Token**: Choose RLC as the token to bridge
5. **Enter Amount**: Specify the amount of RLC to transfer
6. **Confirm Transaction**: Approve the bridge transaction

<ImageViewer
  :image-url-dark="stargateBridgeImage"
  image-alt="Stargate Bridge Interface"
  link-url="https://stargate.finance/bridge"
/>

<div class="bg-gradient-to-r from-purple-400/10 to-purple-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 my-6">
  <h4 class="!mt-0 !mb-2">🔄 Bidirectional Bridge</h4>
  <p class="!mb-0">The Stargate bridge interface automatically detects your wallet's network and available RLC tokens. The process is similar in both directions - simply select the appropriate source and destination networks to transfer RLC between Ethereum and Arbitrum seamlessly.</p>
</div>

<script setup>
import ImageViewer from '../../components/ImageViewer.vue';
import CardGrid from '../../components/CardGrid.vue';
import ProjectCard from '../../components/ProjectCard.vue';

// Assets
import iexecLogoIcon from '../../assets/icons/iexec-logo.png';
import arbitrumLogoIcon from '../../assets/icons/arbitrum.svg';
import bellecourBridgeImage from '../../assets/tooling-&-explorers/bridge/bellecour-bridge.png';
import stargateBridgeImage from '../../assets/tooling-&-explorers/bridge/stargate-bridge.png';
</script>

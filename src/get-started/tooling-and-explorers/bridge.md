---
title: iExec RLC Bridge
description:
  Bridge RLC tokens between networks to interact with the iExec protocol.
  Transfer RLC to Arbitrum networks using the Stargate Bridge
---

# RLC Bridge

**RLC** (RLC Token) powers all iExec protocol interactions. You need RLC tokens
whether you're executing tasks, accessing protected data, or participating in
the iExec confidential computing network.

This guide helps you bridge RLC tokens to **Arbitrum** using the Stargate
Bridge.

::: tip 🧪 Testing on Arbitrum Sepolia

For development and testing purposes, you can get free RLC tokens on **Arbitrum
Sepolia testnet** using the
[iExec RLC Faucet](https://explorer.iex.ec/arbitrum-sepolia-testnet/faucet).
This allows you to test your iApps, pay for workerpool executions, and access
protected datasets without spending real tokens.

:::

## Available Bridges

iExec provides officially supported bridges for seamless token transfer across
networks:

<CardGrid>
  <ProjectCard
    title="Stargate Bridge"
    description="Bridge RLC tokens between Ethereum and Arbitrum using LayerZero protocol"
    :icon-image="arbitrumLogoIcon"
    status="available"
    status-label="Live"
    button-label="Access Bridge"
    button-icon="mdi:bridge"
    button-href="https://stargate.finance/bridge"
    button-rel="noreferrer"
  />
</CardGrid>

## Stargate Bridge

The **Stargate Bridge** powered by LayerZero enables cross-chain transfers of
RLC tokens between Ethereum and Arbitrum mainnet in both directions.

### Ethereum <> Arbitrum (RLC <> RLC)

1. **Visit Stargate**: Go to [Stargate UI](https://stargate.finance/bridge)
2. **Connect Wallet**: Connect your wallet to the Stargate interface
3. **Select Networks**: Choose your source network (Ethereum or Arbitrum) and
   destination network
4. **Select Token**: Choose RLC as the token to bridge
5. **Enter Amount**: Specify the amount of RLC to transfer
6. **Confirm Transaction**: Approve the bridge transaction and wait for
   confirmation

<ImageViewer
  :image-url-dark="stargateBridgeImage"
  image-alt="Stargate Bridge Interface"
  link-url="https://stargate.finance/bridge"
/>

## Security & Audits

The **Stargate Bridge** uses the **LayerZero protocol** under the hood, which
provides secure cross-chain communication infrastructure. LayerZero is a
decentralized protocol that enables trustless cross-chain messaging without
requiring intermediate chains or wrapped tokens.

<div style="display: flex; align-items: center; justify-content: center; margin: 1.5rem 0;">
  <a href="https://halborn.com/audits" target="_blank" rel="noopener noreferrer">
    <img :src="halbornLogoIcon" alt="Halborn Security Logo" style="height: 200px;" />
  </a>
</div>

The RLC multichain bridge implementation has been thoroughly audited by
[**Halborn**](https://www.halborn.com/), a leading blockchain security firm. The
audit report is accessible at
[halborn.com/audits](https://www.halborn.com/audits/iexec/rlc-multichain-bridge-979ae0).

### Open source

The complete source code for the RLC multichain bridge system is publicly
available and open source on GitHub:
[RLC Bridge Repository](https://github.com/iExecBlockchainComputing/rlc-multichain)

### Security features

- **LayerZero Protocol**: Battle-tested cross-chain messaging protocol
- **Smart Contract Audits**: Professional security audits by Halborn
- **Open Source**: Transparent codebase for community review
- **UUPS Upgradeable**: Secure upgrade mechanism for future improvements
- **Role-Based Access Control**: Granular permission management
- **Emergency Pause**: Dual-level pause system for security incidents

<script setup>
import ImageViewer from '@/components/ImageViewer.vue';
import CardGrid from '@/components/CardGrid.vue';
import ProjectCard from '@/components/ProjectCard.vue';

// Assets
import arbitrumLogoIcon from '@/assets/icons/arbitrum.svg';
import stargateBridgeImage from '@/assets/tooling-&-explorers/bridge/stargate-bridge.png';
import halbornLogoIcon from '@/assets/icons/halborn.svg';
</script>

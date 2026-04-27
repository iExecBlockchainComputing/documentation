---
title: Blockchain Explorers
description:
  Explore iExec smart contracts on verified blockchain explorers for Arbitrum
  mainnet and Arbitrum Sepolia testnet.
---

# Blockchain Explorers

Monitor iExec protocol smart contracts on all supported networks through
verified blockchain explorers. All protocol contracts have been verified and are
publicly auditable.

## Supported Networks

<div class="grid grid-cols-1 gap-8 my-8">
  <UseCaseCard
    title="🔷 Arbitrum One"
    description="Production network for mainnet operations with verified smart contracts and comprehensive transaction tracking."
    :image-url="arbitrumExplorerImage"
    image-alt="Arbitrum Explorer"
    :features="['Verified Contracts', 'Transaction History', 'Token Tracking', 'Contract Interactions']"
    demo-url="https://arbiscan.io/"
    demo-icon="mdi:eye"
    demo-label="Visit Arbiscan"
  />
  
  <UseCaseCard
    title="🔷 Arbitrum Sepolia"
    description="Test network for development and testing with verified smart contracts and comprehensive transaction tracking."
    :image-url="arbitrumExplorerImage"
    image-alt="Arbitrum Sepolia Explorer"
    :features="['Verified Contracts', 'Transaction History', 'Token Tracking', 'Contract Interactions']"
    demo-url="https://sepolia.arbiscan.io/"
    demo-icon="mdi:eye"
    demo-label="Visit Arbiscan"
  />
  
</div>

::: tip 💡 Dev Tip

Use **Arbitrum Sepolia** for development and testing then deploy to **Arbitrum**
for production workloads.

:::

<script setup>
import UseCaseCard from '@/components/UseCaseCard.vue';

// Assets
import arbitrumExplorerImage from '@/assets/tooling-&-explorers/blockchain-explorer/arbitrum-explorer.png';
</script>

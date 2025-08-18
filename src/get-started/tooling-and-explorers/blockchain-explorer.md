---
title: Blockchain Explorers
description:
  Explore iExec smart contracts on verified blockchain explorers for both
  Arbitrum mainnet and Bellecour network.
---

# 🔍 Blockchain Explorers

Monitor iExec protocol smart contracts on both supported networks through
verified blockchain explorers. All protocol contracts have been verified and are
publicly auditable.

## 🌐 Supported Networks

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
    title="⚡ Bellecour"
    description="iExec's dedicated sidechain for optimized performance with native integration and enhanced protocol analytics."
    :image-url="bellecourExplorerImage"
    image-alt="Bellecour Explorer"
    :features="['Verified Contracts', 'Transaction History', 'Token Tracking', 'Contract Interactions']"
    demo-url="https://blockscout-bellecour.iex.ec/"
    demo-icon="mdi:eye"
    demo-label="Visit Blockscout"
  />
</div>

::: tip 💡 Dev Tip

Use **Bellecour** for development and testing as it's a gas-free blockchain, then
deploy to **Arbitrum** for production workloads.

:::

<script setup>
import UseCaseCard from '@/components/UseCaseCard.vue';

// Assets
import arbitrumExplorerImage from '@/assets/tooling-&-explorers/blockchain-explorer/arbitrum-explorer.png';
import bellecourExplorerImage from '@/assets/tooling-&-explorers/blockchain-explorer/bellecour-explorer.png';
</script>

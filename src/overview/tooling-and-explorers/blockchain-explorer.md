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

<div class="networks-grid">
  <div class="network-card">
    <div class="card-image">
      <a href="https://arbiscan.io/" target="_blank" rel="noreferrer">
        <img src="/assets/tooling-&-explorers/blockchain-explorer/arbitrum-explorer.png" alt="Arbitrum Explorer">
      </a>
    </div>
    <div class="card-content">
      <h3>🔷 Arbitrum Mainnet</h3>
      <p class="card-description">
        Production network for mainnet operations with verified smart contracts and comprehensive transaction tracking.
      </p>
      <div class="card-features">
        <span class="feature-tag">Verified Contracts</span>
        <span class="feature-tag">Transaction History</span>
        <span class="feature-tag">Token Tracking</span>
        <span class="feature-tag">Contract Interactions</span>
      </div>
      <div class="card-actions">
        <a href="https://arbiscan.io/" target="_blank" rel="noreferrer" class="explorer-link">
          <Icon icon="mdi:eye" height="18" />
          Explore on Arbiscan
        </a>
      </div>
    </div>
  </div>

  <div class="network-card">
    <div class="card-image">
      <a href="https://blockscout-bellecour.iex.ec/" target="_blank" rel="noreferrer">
        <img src="/assets/tooling-&-explorers/blockchain-explorer/bellecour-explorer.png" alt="Bellecour Explorer">
      </a>
    </div>
    <div class="card-content">
      <h3>⚡ Bellecour Network</h3>
      <p class="card-description">
        iExec's dedicated sidechain for optimized performance with native integration and enhanced protocol analytics.
      </p>
      <div class="card-features">
        <span class="feature-tag">Verified Contracts</span>
        <span class="feature-tag">Transaction History</span>
        <span class="feature-tag">Token Tracking</span>
        <span class="feature-tag">Contract Interactions</span>
      </div>
      <div class="card-actions">
        <a href="https://blockscout-bellecour.iex.ec/" target="_blank" rel="noreferrer" class="explorer-link">
          <Icon icon="mdi:eye" height="18" />
          Explore on Bellecour Blockscout
        </a>
      </div>
    </div>
  </div>
</div>

::: tip 💡 Dev Tip

Use **Bellecour** for development and testing as it's a gasless blockchain, then
deploy to **Arbitrum** for production workloads.

:::

<style scoped>
.networks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.network-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.network-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: var(--vp-c-brand-1);
}

.card-image {
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-image:hover img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
  font-weight: 600;
}

.card-description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature-tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--vp-c-brand-2);
}

.card-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.explorer-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  background: var(--vp-c-brand-1);
  color: white;
}

.explorer-link:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .networks-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .card-actions {
    flex-direction: column;
  }
  
  .explorer-link {
    justify-content: center;
  }
}
</style>

<script setup>
import { Icon } from '@iconify/vue';
</script>

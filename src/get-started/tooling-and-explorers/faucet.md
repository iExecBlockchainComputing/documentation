---
title: RLC Faucet
description:
  Get free RLC tokens on Arbitrum Sepolia testnet for testing your iApps,
  workerpools, and protected datasets without spending real tokens.
---

# 🚰 RLC Faucet

Get free RLC tokens on **Arbitrum Sepolia testnet** to test your iApps, pay for
workerpool executions, and access protected datasets without spending real
tokens.

## What are RLC Tokens Used For?

In the iExec ecosystem, RLC tokens are used to pay for various services:

- **Pay Workerpools** - Compensate computational resources for executing your
  iApps
- **Pay Protected Data Providers** - Access and use protected datasets in your
  applications
- **Pay iApp Providers** - Use decentralized applications deployed on the
  network

These testnet RLC tokens allow you to test all these payment flows without
spending real tokens.

## Eligibility Requirements

To be eligible for RLC claims, builders must meet these criteria:

- **GitHub login** required for verification
- **Maximum 1 RLC** in your wallet to claim (prevents abuse and ensures fair
  distribution)
- **One claim per 24 hours** per authenticated account

## 💰 Claim Details

<UseCaseCard
  title="🚰 iExec RLC Faucet"
  description="Get 5 RLC tokens per claim on Arbitrum Sepolia testnet for testing your iExec applications and services."
  :image-url="faucetImage"
  image-alt="iExec RLC Faucet Interface"
  :features="[
    '5 RLC per claim',
    'GitHub authentication',
    '24-hour cooldown period',
    'Balance verification (max 1 RLC)',
    'Arbitrum Sepolia testnet only'
  ]"
  demo-url="https://explorer.iex.ec/arbitrum-sepolia-testnet/faucet"
  demo-icon="mdi:water"
  demo-label="Access Faucet"
/>

::: tip 💡 Development Workflow

Use the RLC Faucet for development and testing, then bridge real RLC tokens when
ready for production deployment on Arbitrum mainnet.

:::

<script setup>
import UseCaseCard from '@/components/UseCaseCard.vue';

// Assets
import faucetImage from '@/assets/tooling-&-explorers/faucet/faucet.png';
</script>

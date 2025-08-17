---
title: Getting Started with iApps
description:
  Learn the basics of finding and executing iApps on the iExec network
---

# 🚀 Getting Started with iApps

Welcome to the world of secure, privacy-preserving computation! This guide gives
you a high-level overview of how to use iApps on the iExec network.

## Prerequisites

Before you begin, make sure you have:

- A Web3 wallet (MetaMask, WalletConnect, etc.)
- Some RLC tokens for paying computation fees (or access to free vouchers
  through learning programs) - [Learn about RLC tokens](/get-started/rlc) and
  [how to bridge them](/get-started/tooling-and-explorers/bridge)
- Basic understanding of blockchain transactions
- iExec SDK installed

::: code-group

```sh [npm]
npm install -g iexec
```

```sh [yarn]
yarn global add iexec
```

```sh [pnpm]
pnpm add -g iexec
```

```sh [bun]
bun add -g iexec
```

:::

Ready to dive in? Let's get started with finding and executing your first iApp!

## Overview: How to Use iApps

Using iApps involves these main steps:

1. **Find iApps** - Browse available applications in the
   [iExec Explorer](/get-started/tooling-and-explorers/iexec-explorer)
2. **Prepare Data** - Set up any required protected data or inputs
3. **Execute** - Run the iApp
4. **Get Results** - Retrieve your computation results

### Understanding Orders

iApps are executed through a marketplace system where different actors publish
orders:

- **App orders** - Published by developers with pricing and availability
- **Workerpool orders** - Published by computation providers with capacity and
  pricing
- **Dataset orders** - Published by data owners with access conditions and
  pricing

When you execute an iApp, the system matches your request with available orders
from all three categories. For a deeper understanding of how orders work and how
to manage them, see the
[Build & Deploy guide](/guides/build-iapp/build-&-deploy) in the Build iApp
section.

## Detailed Guides

For step-by-step instructions, check out these guides:

- **[Different Ways to Execute](./different-ways-to-execute.md)** - iExec cli,
  lib, and other execution methods
- **[Use iApps with Protected Data](./use-iapp-with-protected-data.md)** -
  Working with sensitive data securely
- **[Add Inputs to Execution](./add-inputs-to-execution.md)** - How to provide
  data and parameters to iApps
- **[How to Pay for Executions](./how-to-pay-executions.md)** - Understanding
  costs and payment options

## Quick Start

Ready to jump in? Follow the execution guides for detailed instructions on how
to use iApps.

<script setup>
import ImageViewer from '@/components/ImageViewer.vue';

// Assets
import appViewImage from '@/assets/tooling-&-explorers/iexec-explorer/app-view.png';
</script>

---
title: Getting Started with iApp
description: Learn the basics of finding and executing iApp on the iExec network
---

# 🚀 Getting Started with iApp

Welcome to secure, privacy-preserving computation! This guide shows you how to
use iApp on the iExec confidential computing network.

### Prerequisites

Before getting started, ensure that you have the following installed on your
system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### Installation

::: code-group

```sh [npm]
npm install @iexec/dataprotector
```

```sh [yarn]
yarn add @iexec/dataprotector
```

```sh [pnpm]
pnpm add @iexec/dataprotector
```

```sh [bun]
bun add @iexec/dataprotector
```

:::

Ready to dive in? Let's get started with finding and executing your first iApp!

## Overview: How to Use iApp

Using iApp involves these main steps:

1. **Find iApp** - Browse available applications in the
   [iExec Explorer](/get-started/tooling-and-explorers/iexec-explorer)
2. **Prepare Data** - Set up any required protected data or inputs
3. **Execute** - Run the iApp
4. **Get Results** - Retrieve your computation results

### Understanding Orders

iApp are executed through a marketplace system where different actors publish
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

- **[Different Ways to Execute](/guides/use-iapp/different-ways-to-execute)** -
  iExec CLI, lib, and other execution methods
- **[Use iApp with Protected Data](/guides/use-iapp/use-iapp-with-protected-data)** -
  Working with sensitive data securely
- **[Add Inputs to Execution](/guides/use-iapp/add-inputs-to-execution)** - How
  to provide data and parameters to iApp
- **[How to Pay for Executions](/guides/use-iapp/how-to-pay-executions)** -
  Understanding costs and payment options

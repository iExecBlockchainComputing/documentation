---
title: Getting Started
description:
  Get started with DataProtector - iExec's privacy toolkit for encrypting,
  controlling, and monetizing sensitive data. Learn SDK setup, data protection,
  and access controls in minutes.
---

# 🛡 Getting Started

[![GitHub package.json version (branch)](https://img.shields.io/badge/npm-2.0.0--beta-green)](https://www.npmjs.com/package/@iexec/dataprotector)

## 🕕 Prerequisites

Before using DataProtector, make sure you have:

<div class="flex flex-col gap-2 my-4 pl-0">
  <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      📦 Node.js v18+ (required)
    </div>
    <a target="_blank" href="https://nodejs.org/en/" class="no-underline! text-sm ml-auto hover:underline!">Download →</a>
  </div>
   <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      📦 NPM (Node.js package manager)
    </div>
    <a target="_blank" href="https://docs.npmjs.com/" class="no-underline! text-sm ml-auto hover:underline!">Learn More →</a>
  </div>
   <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      💰 RLC Tokens (for data protection)
    </div>
    <a href="/get-started/overview/rlc" class="no-underline! text-sm ml-auto hover:underline!">Learn More →</a>
  </div>
</div>

### 📦 Installation

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

**This package is an ESM package. Your project needs to use ESM too.**
&nbsp;[**Read more**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

If you use it with **Webpack**, some polyfills will be needed. You can find a
minimal working project
[here](https://github.com/iExecBlockchainComputing/dataprotector-sdk/tree/115b797cf62dcff0f41e2ba783405d5083d78922/packages/demo/browser-webpack).

### Instantiate SDK

::: code-group

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate only the Core module
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
```

```ts twoslash [NodeJS]
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

// Get Web3 provider from a private key
const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY', 'RPC_URL');

// Instantiate the Core module
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
```

:::

#### Instantiate Without a Web3 Provider

For projects that only require read functions, you can instantiate the SDK
without a Web3 provider.

::: code-group

```ts twoslash [Singleton Modules]
import { IExecDataProtectorCore } from '@iexec/dataprotector';

// Instantiate only the Core module for read-only core methods
const dataProtectorCore = new IExecDataProtectorCore('RPC_URL');
```

```ts twoslash [Umbrella Module]
import { IExecDataProtector } from '@iexec/dataprotector';

// Instantiate using the umbrella module for read-only functions
const dataProtector = new IExecDataProtector('RPC_URL');

// Access to read-only core methods
const dataProtectorCore = dataProtector.core;
```

:::

#### Advanced Configuration

To add optional parameters, see
[advanced configuration](/references/dataProtector/advanced-configuration).

## Sandbox

<CardGrid>

<ProjectCard
  title="DataProtector Core"
  description="Essential data protection features including encryption, access control, and secure storage."
  icon="mdi:shield-lock"
  status="interactive"
  statusLabel="Interactive"
  buttonLabel="Open Sandbox"
  buttonHref="https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main"
  githubUrl="https://github.com/iExecBlockchainComputing/dataprotector-sandbox"
  githubLabel="Sandbox Github"
/>

</CardGrid>

<script setup>
import CardGrid from '@/components/CardGrid.vue';
import ProjectCard from '@/components/ProjectCard.vue';
</script>

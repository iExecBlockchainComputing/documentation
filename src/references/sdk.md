---
title: iExec SDK
description: iExec SDK
---

# iExec SDK

The iExec SDK is a [CLI](#command-line-interface) and a
[JS library](#javascripttypescript-library) that allows easy interactions with
iExec decentralized marketplace in order to run off-chain computations.

## Overview

### Prerequisites

Before getting started, ensure that you have the following installed on your
system:

\- [**Node.js**](https://nodejs.org/en/) version 18 or higher

\- [**NPM**](https://docs.npmjs.com/) (Node.js package manager)

### Installation

For complete installation instructions and requirements, see the
[iExec SDK documentation](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/README.md).

::: code-group

```sh [npm]
npm install iexec
```

```sh [yarn]
yarn add iexec
```

```sh [pnpm]
pnpm add iexec
```

```sh [bun]
bun add iexec
```

:::

### Instantiate SDK

::: code-group

```ts twoslash [Browser]
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExec } from 'iexec';

// Connect to injected provider
const iexec = new IExec({ ethProvider: window.ethereum });
```

```ts twoslash [NodeJS]
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  'http://localhost:8545', // blockchain node URL
  'YOUR_PRIVATE_KEY'
);
const iexec = new IExec({
  ethProvider,
});
```

:::

For comprehensive documentation and advanced usage examples, see the
[iExec SDK GitHub repository](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/README.md).

## Command Line Interface

The CLI documentation is available
[here](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/README.md)

## JavaScript/TypeScript Library

The library documentation is available
[here](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/README.md)

### Browser integration

<a href="https://codesandbox.io/p/github/iExecBlockchainComputing/iexec-sdk-sandbox-buy-computation/main?file=%2Fsrc%2Findex.js&moduleview=1&theme=dark" target="_blank" rel="noreferrer" class="link-as-block" style="margin-top: 16px">
  ⚡ &nbsp;Code Sandbox
</a>

### NodeJS integration

<a href="https://codesandbox.io/p/sandbox/iexec-sdk-nodejs-hu6n6v?file=%2Findex.js" target="_blank" rel="noreferrer" class="link-as-block" style="margin-top: 16px">
  ⚡ &nbsp;Code Sandbox
</a>

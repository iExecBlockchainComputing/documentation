---
title: Protect Data
description:
  Learn how to protect your data using iExec's DataProtector SDK in this
  hands-on tutorial step.
---

<script setup>
import ProtectData from '@/modules/helloWorld/ProtectData.vue';
import Banner from '../../components/Banner.vue'
import Container from '../../components/Container.vue'
</script>

# 🛡️ Protect Data

> Reading time: 6 minutes

<Banner>

## Time to get practical

Follow Alice as she learns how to protect her data using DataProtector on Bob's
dApp, the developer tool for protecting data creation and management.

</Banner>

::: tip <i></i>

**Protected data** refers to encrypted data that remains confidential throughout
its entire lifecycle - during storage, transfer and processing.

:::

## DataProtector, Key Features

DataProtector is a developer tool built on top of our technology. It helps
developers easily add data protection, management, and monetization features to
their DApp with these key features:

- 🔐 **Data Privacy and Security**

  Uses end-to-end encryption and decentralized storage
  ([IPFS](https://ipfs.tech/) or [AR.io](https://ar.io/)) to ensure protection
  and confidentiality, leveraging advanced confidential computing technology.

- 🎮 **Dynamic Access Management**

  Allows users to manage access, enabling flexible control and monetization of
  data assets.

- 🔌 **Seamless iApp Integration**

  Features an SDK for easy integration into your DApp, enhancing functionality
  and user experience.

## Create protected data

<ProtectData />

## What Happened Under the Hood

::: tip <i></i>

You won't believe how easy it is to protect your data with DataProtector. Just a
few lines of code, and you're done!

:::

To use it, simply call the `protectData` method from the **DataProtector SDK**
with two arguments.

- The data object to be protected (can contain text, files, JSON data etc.)
- The name of the protected data

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { address: protectedDataAddress } = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
});
```

For this tutorial, you can try out the code directly in our interactive
CodeSandbox demo
[try the interactive DataProtector sandbox](https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2FApp.tsx&preventWorkspaceRedirect=true).
Here's a quick overview of what happened when you clicked the **Protect Data**
button:

![DataProtector workflow diagram showing the 4-step process: SDK called, data encrypted with symmetric key, protected data address returned to user, and protected data encrypted and stored on decentralized storage](/assets/hello-world/dataprotector_light.png){.light-only}
![DataProtector workflow diagram showing the 4-step process: SDK called, data encrypted with symmetric key, protected data address returned to user, and protected data encrypted and stored on decentralized storage](/assets/hello-world/dataprotector_dark.png){.dark-only}

<div class="flex flex-col gap-2.5 my-6">
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">1</span>
    <span>The DataProtector SDK is called</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">2</span>
    <span>DataProtector encrypts the data with a symmetric key</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">3</span>
    <span>iExec's protocol stores the encrypted data on IPFS</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">4</span>
    <span>iExec's protocol stores the symmetric key in a secure enclave (TEE) in the Secret Management Service</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">5</span>
    <span>The DataProtector smart contract is used to establish data ownership as an NFT</span>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-gray-950 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center font-medium">6</span>
    <span>The system returns the protected data address to the user</span>
  </div>
</div>

## How to Install and Use DataProtector

Decentralized confidential computing might sound complex, but we've made it
simple through our developer tools.

<div class="flex flex-col mb-4">
  <div>
    <p><strong>1. Install the Developer Tool</strong></p>
    <p>Run the install command:</p>

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

  </div>
  <div>
    <p><strong>2. Import and Initialize it in your project</strong></p>
    Import the tool

```ts twoslash
import { Address, IExecDataProtector } from '@iexec/dataprotector';
```

Create a new instance and call the methods you need.

  </div>
</div>

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { address: protectedDataAddress } = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
});
```

::: tip <i></i>

Check out our
<a target="_blank" href="https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main?file=%2Fsrc%2Fmain.tsx%3A18%2C7">code
sandbox</a> for ready-to-use examples!

:::

## 🎯 Key Takeaways

- 🔒 **DataProtector** ensures data protection, management, and confidentiality

- 📦 **Protected Data** - DataProtector encrypts and stores data on
  decentralized storage such as [ar.io](https://ar.io) or
  [IPFS](https://ipfs.io)

- ⛓️ **Ownership** iExec's protocol writes ownership on the blockchain and links
  it to your wallet

- 🔌 **Integration** is simple with our developer tools

<Container variant="success">

In the next chapter, learn how to build, deploy, and run an iApp to process your
protected data.

</Container>

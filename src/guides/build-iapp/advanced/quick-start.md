---
title: Quick Start for Developers
description:
  Learn how to create and deploy decentralized applications on the iExec
  infrastructure using the iExec SDK command-line interface
---

# Quick Start

> This tutorial shows how to create decentralized app over the iExec
> infrastructure.

iExec enables decentralized docker app deployment and monetization on the
blockchain.

This guide uses the iExec SDK command-line interface to deploy an iExec app on a
test blockchain.

## Install the iExec SDK

Requirements:
[![npm version](https://img.shields.io/badge/nodejs-%3E=18.0.0-brightgreen.svg)](https://nodejs.org/en/)

```bash
npm -g install iexec # install the CLI
iexec --version
iexec --help
```

## Create your identity on the blockchain

On the blockchain, your identity is defined by your **wallet,** consisting of
cryptographically encrypted **private key** and **public address.** What you own
on the blockchain is associated with your address. The applications you deploy
on iExec are associated with your wallet.

Let's set up your wallet.

Create a new Wallet file

```text
iexec wallet create
```

You will be asked to choose a password to protect your wallet, don't forget it
since there is no way to recover it. The SDK creates a wallet file that contains
a randomly generated private key encrypted by the chosen password and the
derived public address. Make sure to back up the wallet file in a safe place and
write down your address.

::: tip Your wallet is stored in the ethereum keystore, the location depends on
your OS:

- On Linux: ~/.ethereum/keystore
- On Mac : ~/Library/Ethereum/keystore
- On Windows: ~/AppData/Roaming/Ethereum/keystore

Wallet file name follow the pattern `UTC--<CREATION_DATE>--<ADDRESS>`

:::

::: info

iExec SDK uses standard Ethereum wallet, you can reuse or import existing
Ethereum wallet. See iExec SDK documentation
[wallet command](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/v8.1.5/CLI.md#iexec-wallet).

:::

## What's next?

You are now familiar with the following key iExec concepts for developers:

- Your wallet is your on-chain ID and blockchain account
- You can deploy decentralized applications on iExec
- Anyone can run tasks against payment in RLC on iExec
- Payments are processed by the decentralized platform between users' iExec
  Accounts
- Resource governance is managed by orders

Continue with these guides:

- [Learn how to build your first confidential application running on iExec](/guides/build-iapp/advanced/build-your-first-sgx-iapp.md)

<script setup>
import { computed } from 'vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const chainName = computed(() => chainData.value.chainName);
const workerpoolAddress = computed(() => chainData.value.workerpoolAddress);
</script>

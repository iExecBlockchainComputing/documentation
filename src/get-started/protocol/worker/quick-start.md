---
title: Worker Quick Start
description:
  A worker is an essential actor of the iExec Network. It will be in charge of
  computing tasks sent by requesters on the iExec Marketplace
---

# Quick start

> A worker is an essential actor of the iExec Network. It will be in charge of
> computing tasks sent by requesters on the iExec Marketplace.

The iExec Worker participates in a workerpool by computing tasks purchased by
requesters on the iExec marketplace. The iExec Worker must connect to the iExec
Core Scheduler of the workerpool to actively participate in the computation.

A worker will be rewarded with <TokenSymbol /> for every properly computed
tasks.

Please note that:

- your wallet must be loaded with <TokenSymbol />. Some <TokenSymbol /> must be
  deposited to your iExec account in order to stake for incoming tasks.
- your computer needs at least 2 CPUs.

## Start a worker

Find a workerpool which allows your worker to connect.

As an example of how you could deploy you own worker, you can check the
configuration documentation of the
[Worker Pass](https://github.com/iExecBlockchainComputing/wpwp-worker-setup).

For security reason, it is **highly recommended** to launch your worker in a
virtual machine.

After loading some <TokenSymbol /> and depositing them to your iExec account,
you can start your worker.

When the worker initialization process is complete, the worker will start and
you will get: **Your worker is all set**. Your worker will now be able to
compute tasks from the iExec network to earn <TokenSymbol />.

## Wallet restriction

An exclusive wallet must be associated to your worker. You need N wallets if you
want N workers.

<script setup>
import TokenSymbol from '@/components/TokenSymbol.vue'
</script>

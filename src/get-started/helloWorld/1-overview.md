---
title: iExec Overview
description:
  Explore how iExec's confidential computing toolkit helps developers build
  privacy-preserving iApp. Learn how DataProtector and iApp let users control,
  protect, and monetize sensitive data.
---

<script setup>
import Banner from '../../components/Banner.vue'
import Container from '../../components/Container.vue'
import CardWithoutBorder from '../../components/CardWithoutBorder.vue'
</script>

# 🧐 iExec Overview

> Reading time 🕒 8 min

<Banner>

## Let's start with the basics

and explore how iExec can help you build Privacy-preserving applications and
securely manage sensitive data.

</Banner>

## 👨‍💻 Building Privacy-preserving iApp with iExec

Imagine you're building a decentralized application (iApp) that needs to
**handle sensitive user data**, for example:

<CardWithoutBorder class="**:list-none *:pl-0!">

- 🤖 An AI model training on sensitive data
- 💰 A financial app handling financial data
- 🔬 A research platform working with private datasets
- 🏥 A healthcare app processing confidential patient records

<strong>You'll need a way to:</strong>

- 🔒 Keep the data confidential
- 🎮 Control who can access it
- ⚡ Process it securely
- 💎 Potentially monetize it

</CardWithoutBorder>

::: tip <i></i>

This is where **iExec** comes in! We provide tools to easily add **privacy** and
**monetization** features into your iApp.

:::

## 👷 How do we Solve it?

Unlike traditional tools, iExec protects your data throughout its entire
lifecycle - during storage, transfer, and even while **being processed by
applications.** This is made possible thanks to
**<a target="_blank" href="https://protocol.docs.iex.ec/for-developers/confidential-computing/intel-sgx-technology">Trusted
Execution Environment (TEE)</a>** and
**<a target="_blank" href="https://www.iex.ec/academy/iexec-decentralized-confidential-computing">Confidential
Computing</a>** technologies.

::: tip <i></i>

Our technology allows users to control the **ownership**, **confidentiality**,
and **monetization** of their data and digital assets within the **Web3**
ecosystem.

:::

## 🔒 The Three Key Elements?

iExec combines three fundamental elements that work together seamlessly:

#### 1. Protect Data with our DevTool [DataProtector](/references/dataProtector/getting-started)

- Encrypt your sensitive data and store it securely on Arweave or IPFS
- Only you control who can access it and when
- Perfect for private information like research data, business analytics, or
  personal records

#### 2. Compute Data with iExec Apps (iApp) Running in Secure Environment

- Special applications that can work with protected data
- Run in secure environments (called TEEs) that keep your data private
- Process data without exposing sensitive information

#### 3. Set the Rules with the Blockchain Layer

- Enables tokenization of data
- Regain ownership of your data
- Provides transparent governance rules for data access

::: tip <i></i>

By merging **blockchain technology** with **confidential computing**, we've
pioneered
**<a target="_blank" href="https://www.iex.ec/academy/iexec-decentralized-confidential-computing">DeCC</a>**
(Decentralized Confidential Computing) to take **privacy** and **security** to
the next level in **Web3** ecosystems.

:::

### 🧸 DeCC Explained Like You're 5

Imagine a **secure room**, like a private bank vault for data, where everything
inside stays **safe** and **private**.

With a tool called **DataProtector**, your data becomes **protected** and can
only be read and processed inside this secure room.

Special applications called **iApp** (applications built to run in secure
environments) can enter the room to work with your data. You stay in **control**
by setting **access rules** that only you can modify about who can access it and
when.

## 🔍 Building your First Privacy-preserving iApp

Let's meet Bob and Alice to understand how iExec enables Privacy-preserving
applications:

### 1. Meet Bob: the iApp Developer 👨‍💻

Bob is building a decentralized application that uses iExec's technology. His
platform consists of:

- A user-friendly interface for users.
- A DataProtector SDK that's easy to integrate into any application.
- Thanks to DataProtector, end users can protect their data, manage access, and
  process it seamlessly.

### 2. Meet Alice: the iApp User 👩‍💼

When using Bob's platform, Alice can:

- Protect her data using the Bob's platform's DataProtector feature
- Maintain full control over who can access her protected data
- Authorize specific iExec Apps and persons like Bob to use her data in a secure
  environment

Depending on the iApp's use case, Alice could:

- Apply algorithms to her data and get results confidentially
- Share her data with other users privately (and get paid for it)
- Ask questions to AI models about her data and get answers confidentially

And many other use cases...

## 🎯 Key Takeaways

<div class="flex flex-col my-6">
<p>In this chapter, we covered the core concepts of iExec:</p>
  <div class="flex items-center gap-3">
    <span class="text-xl">🔒</span>
    <p class="m-0"><strong>Privacy-preserving Toolkit:</strong> iExec provides tools to protect sensitive data throughout its entire lifecycle - storage, transfer, and processing</p>
  </div>
   <div class="flex items-center gap-3">
    <span class="text-xl">💡</span>
    <p class="m-0"><strong>User Control:</strong> Data owners maintain full control over access, confidentiality, and monetization of their assets</p>
  </div>
  <div class="flex items-center gap-3">
    <span class="text-xl">📦</span>
    <p class="m-0"><strong>iApp (iExec App):</strong> Special applications that can process protected data</p>
  </div>
  <div class="flex items-center gap-3">
    <span class="text-xl">⛓️</span>
    <p class="m-0"><strong>Blockchain:</strong> Enables tokenization of data, regain ownership, and governance rules for data access</p>
  </div>
  <div class="flex items-center gap-3">
    <span class="text-xl">🔌</span>
    <p class="m-0"><strong>Wide Application:</strong> From AI to finance, enabling confidential data processing across various industries</p>
  </div>
</div>

::: info <i></i>

Now that you understand the fundamentals, let's dive into protecting your first
piece of data! With Alice!

:::

---
title: iExec Overview
description:
  Explore how iExec enables developers to build privacy-preserving dApps using
  confidential computing, blockchain, and secure data management. Learn how
  tools like DataProtector and iApps empower users to control, protect, and
  monetize sensitive data across Web3 applications.
---

# 🧐 iExec Overview

> Reading time 🕒 8 mins

<div class="bg-gradient-to-r from-[#fcd15a] to-[#ffad4d] rounded-[6px] px-8 pb-4 text-gray-800 max-w-3xl mx-auto mb-6">
  <h2 class="text-2xl font-bold mt-0 border-none!">Let's start with the basics</h2>
  <p>and explore how iExec can help you build Privacy-preserving applications and securely manage sensitive data.</p>
</div>

## 👨‍💻 Building Privacy-preserving dApps with iExec

<p>Imagine you're building a decentralized application (dApp) that needs to <strong> handle sensitive user data</strong>, for example:</p>
<div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 mb-6">
  <div class="flex flex-col gap-2.5">
    <div class="flex items-center gap-2 text-base">
      <span>🤖</span>
      <span>An AI model training on sensitive data</span>
    </div>
    <div class="flex items-center gap-2 text-base">
      <span>💰</span>
      <span>A financial app handling financial data</span>
    </div>
    <div class="flex items-center gap-2 text-base">
      <span>🔬</span>
      <span>A research platform working with private datasets</span>
    </div>
    <div class="flex items-center gap-2 text-base">
      <span>🏥</span>
      <span>A healthcare app processing confidential patient records</span>
    </div>
  </div>

  <div class="flex flex-col gap-2.5 mt-4">
    <p><strong>You'll need a way to:</strong></p>
    <div class="flex items-center gap-2 text-base">
      <span>🔒</span>
      <span>Keep the data confidential</span>
    </div>
    <div class="flex items-center gap-2 text-base">
      <span>🎮</span>
      <span>Control who can access it</span>
    </div>
    <div class="flex items-center gap-2 text-base">
      <span>⚡</span>
      <span>Process it securely</span>
    </div>
    <div class="flex items-center gap-2 text-base">
      <span>💎</span>
      <span>Potentially monetize it</span>
    </div>
  </div>
</div>

<div class="bg-gradient-to-r from-purple-400/10 to-purple-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 mb-6">
  <p class="m-0!">This is where <span class="text-fuchsia-700 font-semibold">iExec</span> comes in! We provide tools to easily add <span class="text-fuchsia-700 font-semibold">privacy</span> and <span class="text-fuchsia-700 font-semibold">monetization</span> features into your dApp.</p>
</div>

## 👷 How do we Solve it?

Unlike traditional tools, iExec protects your data throughout its entire
lifecycle, during storage, transfer, and even while **being processed by
applications.**

This is made possible thanks to
<span class="text-fuchsia-700 font-semibold"><a target="_blank" href="https://protocol.docs.iex.ec/for-developers/confidential-computing/intel-sgx-technology">Trusted
Execution Environment (TEE)</a></span> and
<span class="text-fuchsia-700 font-semibold"><a target="_blank" href="https://www.iex.ec/academy/iexec-decentralized-confidential-computing">Confidential
Computing</a></span> technologies.

<div class="bg-gradient-to-r from-purple-400/10 to-purple-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 mb-6">
  <p class="m-0!">Our technology allows users to control the <span class="text-fuchsia-700 font-semibold">ownership</span>,
  <span class="text-fuchsia-700 font-semibold">confidentiality</span>, and <span class="text-fuchsia-700 font-semibold">monetization</span> of their data and digital assets within the <span class="text-fuchsia-700 font-semibold">Web3</span> ecosystem.</p>
</div>

## 🔒 The Three Key Elements?

iExec combines three fundamental elements that work together seamlessly:

#### 1. Protect Data with our Devtool [DataProtector](/references/dataProtector/getting-started)

- Encrypt your sensitive data and store it securely on Arweave or IPFS
- Only you control who can access it and when
- Perfect for private information like research data, business analytics, or
  personal records

#### 2. Compute Data with iExec Apps (iApps) Running in Secure Environment

- Special applications that can work with protected data
- Run in secure environments (called TEEs) that keep your data private
- Process data without exposing sensitive information

#### 3. Set the Rules with the Blockchain Layer

- Enables tokenization of data
- Regain ownership of your data
- Provides transparent governance rules for data access

<div class="bg-gradient-to-r from-purple-400/10 to-purple-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 mb-6">
  <p class="m-0!">By merging <span class="text-fuchsia-700 font-semibold">blockchain technology</span> with <span class="text-fuchsia-700 font-semibold">confidential computing</span>, we've pioneered <span class="text-fuchsia-700 font-semibold"><a target="_blank" href="https://www.iex.ec/academy/iexec-decentralized-confidential-computing">DeCC</a></span> (Decentralized Confidential Computing) to take <span class="text-fuchsia-700 font-semibold">privacy</span> and <span class="text-fuchsia-700 font-semibold">security</span> to the next level in <span class="text-fuchsia-700 font-semibold">Web3</span> ecosystems.</p>
</div>

### 🧸 DeCC Explained Like You're 5

Imagine a **secure room**, like a private bank vault for data, where everything
inside stays **safe** and **private**.

With a tool called **DataProtector**, your data becomes **protected** and can
only be read and processed inside this secure room.

Special applications called **iApps** (applications built to run in secure
environments) can enter the room to work with your data. You stay in **control**
by setting **access rules** that only you can modify about who can access it and
when.

## 🔍 Building your First Privacy-preserving dApp

Let's meet Bob and Alice to understand how iExec enables Privacy-preserving
applications:

### 1. Meet Bob: the dApp Developer 👨‍💻

Bob is building a decentralized application that uses iExec's technology. His
platform consists of:

- A user-friendly interface for users.
- A DataProtector SDK that's easy to integrate into any application.
- Thanks to DataProtector, end users can protect their data, manage access, and
  process it seamlessly.

### 2. Meet Alice: the dApp User 👩‍💼

When using Bob's platform, Alice can:

- Protect her data using the Bob's platform's DataProtector feature
- Maintain full control over who can access her protected data
- Authorize specific iExec Apps and persons like Bob to use her data in a secure
  environment

Depending on the dApp's use case, Alice could:

- Apply algorithms to her data and get results confidentially
- Share her data with other users privately (and get paid for it)
- Ask questions to AI models about her data and get answers confidentially

And many other use cases...

## 🎯 Key Takeaways

<div class="flex flex-col my-6">
<p>In this chapter, we covered the core concepts of iExec:</p>
  <div class="flex items-center gap-3">
    <span class="text-xl">🔒</span>
    <p class="m-0"><strong>Privacy-preserving Solution:</strong> iExec provides tools to protect sensitive data throughout its entire lifecycle - storage, transfer, and processing</p>
  </div>
   <div class="flex items-center gap-3">
    <span class="text-xl">💡</span>
    <p class="m-0"><strong>User Control:</strong> Data owners maintain full control over access, confidentiality, and monetization of their assets</p>
  </div>
  <div class="flex items-center gap-3">
    <span class="text-xl">📦</span>
    <p class="m-0"><strong>iApps (iExec App):</strong> Special applications that can process protected data</p>
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

<div class="bg-gradient-to-r from-green-400/10 to-green-400/5 rounded-[6px] p-6 border-l-4 border-green-600 mb-6">
  <p class="m-0!">Now that you understand the fundamentals, let's dive into protecting your first piece of data! With Alice!</p>
</div>

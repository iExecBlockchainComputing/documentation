---
title: What Is an iApp?
description: Privacy-first applications that run on decentralized infrastructure
---

# 🚀 What Is an iApp?

An iExec Application (iApp) is your regular application code (Python script, AI
model, data processor) that can securely process protected data (created by
DataProtector) inside a confidential computing environment called TEE (a Trusted
Execution Environment).

## Why iApps Matter?

iApps let you process sensitive data while keeping it private and secure.

Imagine you want to build:

<div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 mb-6">
  <div class="flex flex-col gap-2.5">
    <div class="flex items-center gap-2 text-base">
      <span>🤖</span>
      <span>An AI that analyzes personal health data</span>
    </div>
    <div class="flex items-center gap-2 text-base">
      <span>📧</span>
      <span>An email tool that needs access to contact lists</span>
    </div>
    <div class="flex items-center gap-2 text-base">
      <span>💰</span>
      <span>A financial advisor that processes bank statements</span>
    </div>
    <div class="flex items-center gap-2 text-base">
      <span>🛡️</span>
      <span>A content filter that reads private messages</span>
    </div>
  </div>
</div>

Users have this data, but they won't give it to your regular app. **With iApps,
they will.**

## Key Concepts

<div class="grid grid-cols-1 gap-4 mb-6">
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4 flex items-center gap-3">
    <span class="text-green-500 text-xl">✅</span>
    <p class="m-0"><strong>True Privacy:</strong> Users never expose their raw data. Your app processes it privately inside secure enclaves.</p>
  </div>
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4 flex items-center gap-3">
    <span class="text-green-500 text-xl">✅</span>
    <p class="m-0"><strong>Verifiable Execution:</strong> Cryptographic proof that your code ran exactly as intended. No black box execution.</p>
  </div>
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4 flex items-center gap-3">
    <span class="text-green-500 text-xl">✅</span>
    <p class="m-0"><strong>Decentralized Infrastructure:</strong> No single point of failure. Your app runs across a distributed network of workers.</p>
  </div>
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4 flex items-center gap-3">
    <span class="text-green-500 text-xl">✅</span>
    <p class="m-0"><strong>Zero Trust Architecture:</strong> Users don't need to trust you with their data. The protocol guarantees privacy.</p>
  </div>
</div>

## How It Works

Your code runs in a Trusted Execution Environment (TEE) a secure area inside
specific processors (Intel SGX/TDX chipset). Everything that happens there stays
private and protected, even from the operating system.

An authorized user can trigger an iApp that processes someone's protected data
inside this private environment. The data is used, but never exposed, not even
to the person running the app.

<div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 mb-6">
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
      <span>User provides personal data</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
      <span>Data is protected with DataProtector</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
      <span>Protected data transferred to Trusted Execution Environment (TEE)</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
      <span>Your iApp runs inside TEE and processes protected data</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">5</span>
      <span>Confidential computing performed while maintaining privacy</span>
    </div>
  </div>
</div>

<div class="bg-gradient-to-r from-purple-400/10 to-purple-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 mb-6">
  <p class="m-0!"><strong>Nobody sees the raw data except your code running inside the secure enclave.</strong></p>
</div>

Your iApp can send emails, update contracts, make transactions, trigger
notifications - anything your code needs to do with the protected data. This
isn't about trust - it's about **mathematical guarantees** that privacy is
preserved.

## Use Cases

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 flex flex-col gap-2">
    <div class="flex items-baseline gap-2 text-lg">
      <span>📧</span>
      <h3 class="font-semibold m-0!">Private Communication</h3>
    </div>
    <p class="text-sm m-0!">Users send emails, notifications, or messages using their protected contact lists without exposing recipient information.</p>
  </div>

  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 flex flex-col gap-2">
    <div class="flex items-baseline gap-2 text-lg">
      <span>🔮</span>
      <h3 class="font-semibold m-0!">Trustworthy Oracles</h3>
    </div>
    <p class="text-sm m-0!">Users contribute real data to oracles while keeping their private information confidential.</p>
  </div>

  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 flex flex-col gap-2">
    <div class="flex items-baseline gap-2 text-lg">
      <span>🤖</span>
      <h3 class="font-semibold m-0!">Personal AI Assistants</h3>
    </div>
    <p class="text-sm m-0!">Users let AI models perform actions based on their private data - trading, scheduling, recommendations.</p>
  </div>

  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 flex flex-col gap-2">
    <div class="flex items-baseline gap-2 text-lg">
      <span>⚡</span>
      <h3 class="font-semibold m-0!">Automated Actions</h3>
    </div>
    <p class="text-sm m-0!">Users set up automated workflows that use their private data to trigger actions, transactions, or updates.</p>
  </div>
</div>

## ❓ Frequently Asked Questions

::: details 📦 What can I build with iApps?

Anything that runs in Docker! AI models, data processing scripts, web scrapers,
image processing, financial calculations, etc. If it runs in a container, it can
be an iApp.

:::

::: details ⚡How fast are iApps?

Initial task scheduling takes ~30 seconds (depending on the resources the worker
download, congestion etc), then your code runs at normal speed depending on
complexity.

:::

::: details 🛡️ Are iApps really secure?

Yes! Code runs in Intel SGX or TDX secure enclaves. Even the worker running your
iApp can't see what's happening inside the enclave.

:::

::: details 🚀 How do I deploy my first iApp?

Try our [Hello World](/overview/helloWorld) for a quick start, or check the
[iApp Generator](/build_iapp/iapp-generator) section for detailed instructions.

:::

::: details 🔧 What programming languages are supported?

iApps can be built in any language that runs in Docker (Python, JavaScript, R,
Java, Go, etc.). However, **iApp Generator** currently supports only Python and
Node.js for simplified development.

:::

## Start Building

Ready to build privacy-first applications?

### 🚀 **Try iApp Generator**

- [Getting Started](/build_iapp/iapp-generator/getting-started) - Deploy your
  first iApp in 15 minutes
- [Building Your iExec App](/build_iapp/iapp-generator/building-your-iexec-app) -
  Complete development guide

### 📖 **Learn with Guides**

- [Orders](/build_iapp/guides/orders) - How iApp execution works
- [Inputs and Outputs](/build_iapp/guides/inputs-and-outputs) - Handle data flow
- [Debugging Your iApp](/build_iapp/guides/debugging-your-iapp) - Troubleshoot
  issues

### 🎯 **See iApps in Action**

Real iApps you can use today:

- [Web3Mail](/use_iapp/web3mail) - Private emailing iApp SDK
- [Web3Telegram](/use_iapp/web3telegram) Private messaging iApp SDK
- [Oracle Factory](/use_iapp/oracle-factory) - Decentralized oracles

---

**TL;DR**: iApps = Your code + Secure execution + User privacy + Verifiable
results. Cloud computing, but nobody can spy on your stuff. 🔒

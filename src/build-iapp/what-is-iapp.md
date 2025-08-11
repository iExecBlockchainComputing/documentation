---
title: What is an iApp?
description:
  Learn about iExec Applications (iApps) - confidential computing apps that
  process sensitive data in secure TEE environments. Build privacy-preserving
  AI, data analysis, and Web3 apps.
keywords:
  iApp, iExec application, confidential computing, TEE, trusted execution
  environment, privacy-preserving apps, secure data processing, Web3 development
---

# 🚀 What is an iApp?

An iExec Application (iApp) brings Turnkey Privacy to your regular application
code. Your Python scripts, AI models, or data processors can securely process
protected data inside a TEE (Trusted Execution Environment).

## Why iApps Matter ?

iApps provide Turnkey Privacy capabilities. Process sensitive data while keeping
it private and secure.

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

Users have this data, but they won't trust your regular app with it. **With
Turnkey Privacy iApps, they will.**

**You gain their trust. They gain their privacy. Everyone wins.**

## Key Concepts

<div class="grid grid-cols-1 gap-4 mb-6">
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4 flex items-center gap-3">
    <span class="text-green-500 text-xl">✅</span>
    <p class="m-0"><strong>True Privacy:</strong> Users never expose their raw data. Your app processes it privately inside secure enclaves.</p>
  </div>
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4 flex items-center gap-3">
    <span class="text-green-500 text-xl">✅</span>
    <p class="m-0"><strong>Trusted Execution:</strong> iExec ensures that your code runs inside a Trusted Execution Environment (TEE), which guarantees that only the specified Docker image is executed in a secure and isolated environment.</p>
  </div>
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4 flex items-center gap-3">
    <span class="text-green-500 text-xl">✅</span>
    <p class="m-0"><strong>Decentralized Infrastructure:</strong> No single point of failure. Your app runs across a distributed network of workers.</p>
  </div>
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4 flex items-center gap-3">
    <span class="text-green-500 text-xl">✅</span>
    <p class="m-0"><strong>Zero Trust Architecture:</strong> User data is protected by hardware-based TEEs, which keep data confidential and inaccessible to the host, cloud provider, or operating system during execution.</p>
  </div>
</div>

## How it Works

Your code runs in a Trusted Execution Environment (TEE). This secure area exists
inside specific processors (Intel SGX/TDX chipset). Everything stays private and
protected there, even from the operating system.

Authorized users trigger iApps that process protected data inside this private
environment. Your iApp uses the data but never exposes it, not even to you.

<div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 mb-6">
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
      <span>User provides private data</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
      <span>Data is protected with DataProtector</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
      <span>User builds and deploys a confidential iApp that processes protected data</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
      <span>Run the iApp with the corresponding protected data, performing confidential computing</span>
    </div>
  </div>
</div>

Your iApp can send emails, update contracts, make transactions, trigger
notifications - anything your code needs. This isn't about trust. We provide
**cryptographic and hardware-enforced guarantees** that preserve privacy within
the TEE execution environment.

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
    <p class="text-sm m-0!">Users let AI models perform actions based on their private data - trading, scheduling, recommendations...</p>
  </div>

  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 flex flex-col gap-2">
    <div class="flex items-baseline gap-2 text-lg">
      <span>⚡</span>
      <h3 class="font-semibold m-0!">Automated Actions</h3>
    </div>
      <p class="text-sm m-0!">Users let AI models perform actions based on their private data - trading, scheduling, recommendations...</p>
  </div>
</div>

## ❓ Frequently Asked Questions

::: details 📦 What can I build with iApps?

Anything that runs in Docker! AI models, data processing scripts, web scrapers,
image processing, financial calculations, etc. If it runs in a container, it can
be an iApp.

:::

::: details ⚡ How fast are iApps?

Initial task scheduling takes a few seconds (depending on the resources the
worker download, congestion etc), then your code runs at normal speed depending
on complexity.

:::

::: details 🛡️ Are iApps really secure?

Yes! Code runs in Intel SGX or TDX secure enclaves. Even the worker running your
iApp can't see what's happening inside the enclave.

:::

::: details 🚀 How do I deploy my first iApp?

Try our [Hello World](/overview/helloWorld) for a quick start, or check the
[iApp Generator](/build-iapp/iapp-generator) section for detailed instructions.

:::

::: details 🔧 What programming languages are supported?

You can build iApps in any language that runs in Docker (Python, JavaScript, R,
Java, Go, etc.). However, **iApp Generator** currently supports only Python and
uns in Docker (Python, JavaScript, R, Java, Go, etc.). However, **iApp
Generator** currently supports only Python and Node.js for simplified
development.

:::

## Next Steps

<div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 mb-6">

<div class="flex flex-col gap-4">
  <div class="flex items-start gap-3">
    <div>📚</div>
    <div>
      Learn More - iApp Generator:
      <a href="/build-iapp/iapp-generator">Complete iApp Generator Documentation</a>
    </div>
  </div>
  <div class="flex items-start gap-3">
    <div>🚀</div>
    <div>
      Getting Started - deploy your first iApp:
      <a href="/build-iapp/guides/build-&-deploy-iapp">iApp Quick Start Guide</a>
    </div>
  </div>
</div>

</div>

---

**TL;DR**: iApps = Your code + Secure execution + User privacy + Verifiable
results.

**Cloud computing where privacy is guaranteed, not hoped for.** 🔒

<div class="bg-gradient-to-r from-green-400/10 to-green-400/5 rounded-[6px] p-6 border-l-4 border-green-600 mt-6">
  <h4 class="!mt-0 !mb-2">💪 You're Building the Future</h4>
  <p class="!mb-0">Every iApp you create **empowers users to take control of their data** while still benefiting from powerful applications. You're not just building software—**you're building trust, privacy, and digital sovereignty for the next billion users**.</p>
</div>

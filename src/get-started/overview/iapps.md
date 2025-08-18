---
title: iApps
description: Privacy-first applications that run on decentralized infrastructure
---

# iApps

An iExec Application (iApp) is your regular application code (Python script, AI
model, data processor, ...) that can securely process protected data (created by
[DataProtector](/references/dataProtector)) inside a confidential computing
environment called TEE (a Trusted Execution Environment).

## Why iApps Matter ?

iApps let you process sensitive data while keeping it private and secure.

Imagine you want to build:

<div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 mb-6">
  <div class="flex flex-col gap-2.5">
    <div class="flex items-center gap-2 text-base">
      <span>An AI that analyzes personal health data</span>
    </div>
    <div class="flex items-center gap-2 text-base">
      <span>An email tool that needs access to contact lists</span>
    </div>
    <div class="flex items-center gap-2 text-base">
      <span>A financial advisor that processes bank statements</span>
    </div>
    <div class="flex items-center gap-2 text-base">
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

Your code runs in a Trusted Execution Environment (TEE), a secure area inside
specific processors (Intel SGX/TDX chipset). Everything that happens there stays
private and protected, even from the operating system.

An authorized user can trigger an iApp that processes someone's protected data
inside this private environment. The data is used, but never exposed, not even
to the person running the app.

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
notifications - anything your code needs to do with the protected data. This
isn't about trust - it's about **cryptographic and hardware-enforced
guarantees** that privacy is preserved within the TEE execution environment.

## Use Cases

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4">
    <h4 class="text-lg font-semibold mb-2">Healthcare</h4>
    <p class="text-sm m-0">Process medical data for AI diagnosis without exposing patient information</p>
  </div>
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4">
    <h4 class="text-lg font-semibold mb-2">Finance</h4>
    <p class="text-sm m-0">Analyze financial data for credit scoring while maintaining privacy</p>
  </div>
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4">
    <h4 class="text-lg font-semibold mb-2">Media</h4>
    <p class="text-sm m-0">Content recommendation engines that don't track user behavior</p>
  </div>
  <div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-4">
    <h4 class="text-lg font-semibold mb-2">Research</h4>
    <p class="text-sm m-0">Collaborative research on sensitive datasets across institutions</p>
  </div>
</div>

## Getting Started

<div class="bg-gradient-to-r from-[#fcd15a] to-[#ffad4d] rounded-[6px] px-8 pb-4 text-gray-800 max-w-3xl mx-auto mb-6">
  <h2 class="text-2xl font-bold mt-0 border-none!">Time to build!</h2>
  <p>Let's build an iApp that can process protected data in a secure environment using the <a href="/references/iapp-generator" target="_blank" class="!text-gray-900 !font-bold underline hover:!text-black">iExec iApp generator tool</a>. This tool helps you create, test and deploy iApps with just a few commands.</p>
</div>

### Quick Start Path

1. **Protect your data** with [DataProtector](/references/dataProtector)
2. **Build your iApp** using the [iApp Generator](/references/iapp-generator)
3. **Deploy and test** your application
4. **Process protected data** securely

### What You'll Learn

- How to create a Docker container for your application
- How to handle inputs and outputs securely
- How to deploy to the iExec network
- How to process protected data in TEE environments

<div class="bg-gradient-to-r from-fuchsia-400/10 to-fuchsia-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 mb-6">
  <p class="m-0!">These are just a few examples, the possibilities are endless. Want to explore iApp Generator? Check out our <a href="/references/iapp-generator" target="_blank">documentation</a> and see what you can build!</p>
</div>

## Technical Requirements

- **Docker**: Your application must be containerized
- **Input/Output**: Define clear input and output schemas
- **TEE Compatibility**: Ensure your code runs in secure enclaves
- **Network Access**: Configure any external API calls or dependencies

## Next Steps

Ready to build your first privacy-preserving application? Start with our
[Hello World tutorial](/get-started/helloWorld) or dive into the
[iApp Generator documentation](/references/iapp-generator).

For more technical details, see the
[DataProtector Sharing](/references/dataProtector/dataProtectorSharing)
documentation.

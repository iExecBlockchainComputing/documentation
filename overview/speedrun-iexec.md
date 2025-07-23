---
title: Speedrun iExec
description:
  Understand iExec protocol in 3 minutes - privacy-first computing for Web3
---

# ⚡ Speedrun iExec

**Privacy-first computing protocol.** Your data stays protected, your code runs
in secure enclaves, results come back encrypted. Here's how it works.

## The Protocol (Simple Version)

### 🔒 Step 1: Protect Data

Your sensitive data gets encrypted and stored online. Only you control who can
access it.

→ **Devtool**: [DataProtector](/manage_data/dataProtector) handles this for you

### ⚙️ Step 2: Secure Computing (Workers)

Code runs inside **secure enclaves** (TEEs) on iExec workers. The worker can
access your data to process it, but only within the privacy-safe TEE
environment - your data never leaves the secure bubble.

### 🚀 Step 3: Run iApps

You submit a **Task** = "Run this iApp on this protected data". The protocol
finds available workers and executes everything confidentially.

→ **Devtool**: [iApp Generator](/build_iapp/iapp-generator) helps you create and
deploy iApps

### 📦 Step 4: Get Results

Results come back **encrypted to you**. Workers never see raw data, you never
lose control.

```
Protected Data + iApp + Worker = Task → Encrypted Result
```

## What Each Piece Does

### 🛡️ **Protected Data**

Your data, encrypted. You set the rules: "Only these apps can use it, only for
these purposes."

### 🚀 **iApps**

Your code, packaged to run on workers. Can be AI models, data processing
scripts, any computation.

### 🏭 **Workers (Secure Enclaves)**

Computers that process your data inside privacy-safe TEE environments. They can
access your data to work with it, but the TEE ensures it stays confidential and
tamper-proof.

### ⚡ **Deals**

A job request: "Execute iApp X on protected data Y, send results to Z." The
protocol handles the rest.

## Real Example Walkthrough

**AI Model Training (Private)**

1. **Protect**: Medical researchers upload patient data → becomes Protected Data
2. **Deploy**: AI company packages their model → becomes iApp
3. **Execute**: Someone submits Task → "Train model on this data"
4. **Result**: Model gets trained, researcher gets insights, raw data never
   leaves enclave

**Web3 Email**

1. **Protect**: Users upload email contacts → Protected Data
2. **Execute**: App submits Task → "Send email via Web3Mail iApp"
3. **Result**: Email sent, addresses stay private, sender/receiver authenticated

## Why This Architecture Rocks

### ✅ **True Privacy**

Data processing happens in secure enclaves. Workers can't peek, hackers can't
break in.

### ✅ **User Ownership**

Data owners control access programmatically. Revoke permissions anytime.

### ✅ **Composable**

Any iApp can use any Protected Data (if authorized). Build once, use everywhere.

### ✅ **Monetizable**

Data owners get paid automatically when their data gets used in tasks.

## Start Building

Now that you get the protocol, pick your devtools:

- **📧 Quick Win**: Add [Web3Mail](/use_iapp/web3mail) or
  [Web3Telegram](/use_iapp/web3telegram.md) to your project ! (uses the protocol
  under the hood)
- **🛡️ Protect Data**: Try [DataProtector](/manage_data/dataProtector) to
  encrypt your first dataset
- **🚀 Build iApps**: Create confidential compute with
  [iApp Generator](/build_iapp/iapp-generator)
- **👋 Hands-On**: Follow our [Hello World](/overview/helloWorld) to see all
  devtools working together

---

**TL;DR**: iExec = Encrypted data + Secure computing + Your code → Private
results. Privacy made easy.

---
title: What is iExec?
description:
  Learn about iExec, the decentralized computing platform that enables
  privacy-preserving apps
---

# What is iExec?

iExec is a **decentralized confidential computing toolkit** that helps
developers build privacy-preserving apps.

## SpeedRun The Protocol

### Step 1: Protect Data

Your sensitive data gets encrypted and stored online. Only you control who can
access it.

→ **DevTool**: [DataProtector](/references/dataProtector) handles this for you

### Step 2: Secure Computing (Workers)

Code runs inside **secure enclaves** (Trusted Execution Environments - TEEs) on
iExec workers. The worker can access your data to process it, but only within
the privacy-safe TEE environment - your data never leaves the secure bubble.

### Step 3: Run iApp

You submit a **Task** = "Run this iApp on this protected data". The protocol
finds available workers and executes everything confidentially.

→ **DevTool**: [iApp Generator](/references/iapp-generator) helps you create and
deploy iApp

### Step 4: Get Results

Results come back **encrypted to you**. Workers never see raw data, you never
lose control.

```
Protected Data + iApp + Worker = Task → Encrypted Result
```

## What each piece does

### **Protected Data**

Your data, encrypted. You set the rules: "Only these apps can use it, only for
these purposes."

### **iApp**

Your code, packaged to run on workers. Can be AI models, data processing
scripts, any computation.

### **Workers (Secure Enclaves)**

Computers that process your data inside privacy-safe TEE environments. They can
access your data to work with it, but the TEE ensures it stays confidential and
tamper-proof.

### **Deals**

The execution instruction that unifies the entire flow: "Run this iApp on this
Protected Data using a TEE Worker, then return the encrypted result to me." The
protocol takes care of worker allocation and secure coordination.

## Real example walkthrough

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

## Start building

Now that you get the protocol, pick your devtools:

- **Quick Win**: Add [Web3Mail](/references/web3mail) or
  [Web3Telegram](/references/web3telegram) to your project ! (uses the protocol
  under the hood)
- **Protect Data**: Try [DataProtector](/references/dataProtector) to encrypt
  your first dataset
- **Build iApp**: Create confidential compute with
  [iApp Generator](/references/iapp-generator)
- **Hands-On**: Follow the [Hello World](/get-started/helloWorld) to see all
  devtools working together

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

![iExec Deal Lifecycle](/assets/overview/deal-lifecycle.png)

### Step 1: Prepare Resources

- **Data Provider** protects sensitive data with encryption and sets access
  rules.
  - → **DevTool**: [DataProtector](/references/dataProtector)
- **App Provider** deploys an iApp to process data securely.
  - → **DevTool**: [iApp Generator](/references/iapp-generator)

### Step 2: Create a Deal

**Requester** submits a computation request. The **PoCo smart contract**
automatically matches and brings together all required resources: the iApp,
protected data, and available workerpool.

→ **Guides**:
[Run iApp with ProtectedData](/guides/use-iapp/run-iapp-with-ProtectedData),
[Run iApp without ProtectedData](/guides/use-iapp/run-iapp-without-ProtectedData)

### Step 3: Execute in TEE

**Workers** from the selected workerpool download the iApp and execute it inside
**secure enclaves** (TEEs). Your data is processed confidentially - workers can
run computations but never access raw data outside the TEE.

### Step 4: Deliver Results & Pay

Results are encrypted and delivered back to the requester. **RLC tokens** are
automatically distributed to all participants (app provider, data provider,
workerpool) based on their contribution.

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

---
title: Getting Started with iApps
description:
  From iApp to integration - understand tools vs custom iApps and choose your
  path
---

# 🚀 Getting Started with iApps

**iApps are applications that run inside secure enclaves (TEEs) on the iExec
network.** They can access and process Protected Data while keeping everything
private and verifiable.

_New to iApps? Check out
[What Is an iApp?](/build_iapp/iapp-generator/what-is-iapp) to understand the
concept first._

## How iApp Execution Works

When someone runs an iApp, here's what happens:

1. **Task is submitted** to the iExec network with the iApp address and any
   input data
2. **TEE worker picks up the task** - only workers with secure enclaves can
   execute iApps
3. **iApp runs inside the TEE** - code executes in an isolated, tamper-proof
   environment
4. **Results are encrypted** and sent back to the user who initiated the task

This execution model ensures that even the worker running your iApp can't see
the data being processed.

## Integration Challenge

**You want to add privacy-first services to your application.** Whether you need
email functionality, oracle data, or custom privacy-preserving logic, iApps can
power your features without compromising user privacy.

The question is: **how do you integrate them?**

## Tools vs Other iApps

Not all iApps are integrated the same way. There are three main categories:

### 🛠️ **Tools (Ready-to-Use SDKs)**

These are our **developer-friendly services** with polished SDKs:

- **[Web3Mail](/use_iapp/web3mail)** - Private email functionality
- **[Web3Telegram](/use_iapp/web3telegram)** - Secure messaging via Telegram
- **[Oracle Factory](/use_iapp/oracle-factory)** - Decentralized oracle services

**Why use these?** They come with:

- ✅ Clean APIs and comprehensive documentation
- ✅ Built-in user flows and UX patterns
- ✅ Payment handling and error management
- ✅ Ready-to-use examples and quick setup

### 🛡️ **DataProtector (Process Protected Data)**

If your goal is to **process Protected Data** specifically:

- **[DataProtector](/manage_data/dataProtector)** - SDK for processing Protected
  Data in TEE environments
- Use `processProtectedData()` to run computation on encrypted datasets
- Built-in privacy guarantees and access control

**Why use this?** When you need to:

- ✅ Process users' Protected Data with your custom logic
- ✅ Combine multiple Protected Datasets securely
- ✅ Get privacy-preserving analytics results
- ✅ Keep data encrypted throughout the entire process

### 🚀 **Custom iApps**

These are **any other iApps** in the ecosystem:

- Your own iApp that you built and deployed
- Third-party iApps created by other developers
- Specialized services for specific use cases

**Integration is more manual** - you handle the execution flow, payments, and
user experience yourself.

## Three Integration Paths

### Path 1: Using Tool SDKs (Recommended for Tools)

```javascript
// Clean, purpose-built APIs
import { IExecWeb3mail } from '@iexec/web3mail';

const web3mail = new IExecWeb3mail(web3Provider);
await web3mail.sendEmail({
  emailSubject: 'Welcome!',
  emailContent: 'Thanks for signing up',
  protectedData: userContactData,
  contentType: 'text/html',
});
```

### Path 2: Using DataProtector (For Processing Protected Data)

```javascript
// Process Protected Data directly
import { IExecDataProtector } from '@iexec/dataprotector';

const dataprotector = new IExecDataProtector(web3Provider);
const result = await dataprotector.processProtectedData({
  protectedData: userHealthData,
  app: 'health-risk-analyzer.eth',
  maxPrice: 100, // RLC
});
```

### Path 3: Using iExec SDK (For Custom iApps)

```javascript
// General-purpose iApp execution
import { IExec } from 'iexec';

const iexec = new IExec({ ethProvider: web3Provider });
const task = await iexec.task.run({
  app: 'your-sentiment-analysis-iapp.eth',
  dataset: protectedTweetData,
  params: { model: 'bert-sentiment' },
});
```

## Choose Your Path

### ✅ **Use Tool SDKs if:**

- You need email, messaging, or oracle functionality
- You want quick integration with minimal setup
- You prefer polished APIs and documentation
- You want UX patterns already figured out

**→ Start with [Web3Mail](/use_iapp/web3mail),
[Web3Telegram](/use_iapp/web3telegram), or
[Oracle Factory](/use_iapp/oracle-factory)**

### ✅ **Use DataProtector if:**

- You need to process users' Protected Data
- You want built-in privacy guarantees for data processing
- You're building analytics or AI services on encrypted datasets
- You need to combine multiple Protected Datasets securely

**→ Start with
[DataProtector Core](/manage_data/dataProtector/dataProtectorCore) and
[Protected Data Guide](/manage_data/dataProtector/what-is-protected-data)**

### ✅ **Use iExec SDK if:**

- You have a custom iApp (yours or third-party)
- You need specialized functionality not covered by our tools
- You want full control over the integration
- You're building advanced privacy-preserving workflows

**→ Start with [General iApp Integration](/use_iapp/guides) and
[Payment Handling](/use_iapp/payment)**

### 💡 **Not sure what you need?**

Check out our [Hello World](/overview/helloWorld) tutorial to see all approaches
in action.

---

**TL;DR**: Tools = Easy SDKs for common use cases. Custom iApps = Full
flexibility with more integration work. Choose based on your needs! 🎯

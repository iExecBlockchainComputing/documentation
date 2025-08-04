---
title: What Is an iApp?
description: Privacy-first applications that run on decentralized infrastructure
---

# 🚀 What Is an iApp?

**Think about code, but it runs in a privacy-safe environment.** An iApp is just
your regular application code (Python script, AI model, data processor) packaged
to run inside secure enclaves.

## Why Would You Want This?

Simple: **to process sensitive data that users won't normally share.**

Imagine you want to build:

- An AI that analyzes personal health data
- An email tool that needs access to contact lists
- A financial advisor that processes bank statements
- A content filter that reads private messages

Users have this data, but they won't give it to your regular app. **With iApps,
they will.**

## How It Works

Your code runs in a **trusted execution environment** (TEE) - think of it as a
"privacy bubble" that even iExec workers can't peek into.

Users run your iApp when they want to **use** their Protected Data for
something. Your code gets access to their protected data, performs actions with
it - all without you ever seeing the raw data.

## iApp Generator: Your Development Tool

Creating iApps used to be complex. **iApp Generator** simplifies this by:

- **Simulating TEE environment locally** - Test your code in conditions close to
  real execution
- **Handling deployment** - Package and deploy with simple commands
- **Managing dependencies** - Docker containers, environment setup, etc.

```bash
# Create your iApp (Python or Node.js supported)
iapp init my-sentiment-analyzer
cd my-sentiment-analyzer

# Develop and test locally (simulates TEE environment)
iapp test
# Deploy to the network
iapp deploy
```

_Note: iApp Generator currently supports Python and Node.js, but iApps can be
built in any language that runs in Docker._

## Real Examples

**Email Notification iApp**

```python
# User runs: "Send updates to my contacts about my project"
contacts = load_protecteddata()  # User's protected contact list
for contact in contacts:
    send_email(contact, project_update_message)
# → Emails sent directly, you never see the addresses
```

**Oracle Update iApp**

```python
# User runs: "Update price oracle with my private trading data"
trading_data = load_protecteddata()  # User's protected trading history
average_price = calculate_weighted_average(trading_data)
update_oracle_contract(average_price)
# → Oracle updated with real data, trading history stays private
```

**Automated Transactions iApp**

```python
# User runs: "Buy tokens when my portfolio meets certain conditions"
portfolio = load_protecteddata()  # User's protected portfolio data
if should_buy_tokens(portfolio):
    execute_trade(token_address, amount)
# → Trade executed based on private data, portfolio details stay hidden
```

## The Trust Model

Here's why users will actually use your iApp with their private data:

### What Users See

- ✅ "This code runs in a secure enclave, not on the developer's servers"
- ✅ "My data gets used privately for actions I want"
- ✅ "Even iExec workers can't see my data during execution"
- ✅ "I can revoke access anytime"

### What You Get

- ✅ Users willing to use your services with their sensitive data
- ✅ New business models around privacy-preserving analytics
- ✅ Competitive advantage through privacy guarantees

### The Technical Reality

```
User's Private Data → Encrypted → TEE Environment → Your iApp uses it → Actions Performed
```

**Nobody sees the raw data except your code running inside the secure enclave.**

Your iApp can send emails, update contracts, make transactions, trigger
notifications - anything your code needs to do with the protected data. This
isn't about trust - it's about **mathematical guarantees** that privacy is
preserved.

## What This Enables

### 📧 **Private Communication**

Users send emails, notifications, or messages using their protected contact
lists without exposing recipient information.

### 🔮 **Trustworthy Oracles**

Users contribute real data to oracles while keeping their private information
confidential.

### 🤖 **Personal AI Assistants**

Users let AI models perform actions based on their private data - trading,
scheduling, recommendations.

### ⚡ **Automated Actions**

Users set up automated workflows that use their private data to trigger actions,
transactions, or updates.

## ❓ Frequently Asked Questions

::: details 📦 What can I build with iApps? Anything that runs in Docker! AI
models, data processing scripts, web scrapers, image processing, financial
calculations, etc. If it runs in a container, it can be an iApp. :::

::: details ⚡ How fast are iApps? Initial task scheduling takes ~30 seconds
(depending on the resources the worker download, congestion etc), then your code
runs at normal speed depending on complexity. :::

::: details 🛡️ Are iApps really secure? Yes! Code runs in Intel SGX or TDX
secure enclaves. Even the worker running your iApp can't see what's happening
inside the enclave. :::

::: details 🚀 How do I deploy my first iApp? Try our
[Hello World](/overview/helloWorld) for a quick start, or check the
[iApp Generator](/build_iapp/iapp-generator) section for detailed instructions.
:::

::: details 🔧 What programming languages are supported? iApps can be built in
any language that runs in Docker (Python, JavaScript, R, Java, Go, etc.).
However, **iApp Generator** currently supports only Python and Node.js for
simplified development. :::

## Why This Changes Everything

### ✅ **True Privacy**

Users never expose their raw data. Your app processes it privately inside secure
enclaves.

### ✅ **Verifiable Execution**

Cryptographic proof that your code ran exactly as intended. No black box
execution.

### ✅ **Decentralized Infrastructure**

No single point of failure. Your app runs across a distributed network of
workers.

### ✅ **Zero Trust Architecture**

Users don't need to trust you with their data. The protocol guarantees privacy.

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

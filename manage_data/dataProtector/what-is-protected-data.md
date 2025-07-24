---
title: What Is Protected Data?
description: Data ownership meets privacy - understand how iExec gives you control
---

# 🛡️ What Is Protected Data?

**Your data, but with superpowers.** Protected Data is how iExec gives you blockchain-verified ownership over your information. You control who uses it, for what purpose, and you can get paid when it creates value.

## The Problem

Traditional apps treat your data like their property. You upload it, they own it. You lose control, they make money from it.

## The Solution: Blockchain-Verified Ownership

Protected Data flips this model. Here's how you protect data:

```javascript
const protectedData = await dataprotector.protectData({
  name: 'my-contacts.json', 
  data: { emails: ['user@example.com', ...] }
});
```

Now you have **blockchain-verified ownership** of this data. No one can access it without your explicit permission.

## Access Control That Actually Works

Traditional permissions: "This app can access your contacts" *(forever, for anything)*

Protected Data permissions: "This newsletter app can use my contacts to send marketing emails, but only during weekdays, and I get 2€ per campaign."

```javascript
await dataprotector.grantAccess({
  protectedData: protectedData.address,
  authorizedApp: '0x123...', // Specific app
  authorizedUser: '0xabc...', // Specific user
  // Plus pricing, time limits, usage rules...
});
```

## Privacy-Safe Processing

When apps use your Protected Data, they process it inside **secure enclaves** (TEEs). They get the results they need, but your raw data never leaves the privacy bubble.

### How the Technical Magic Works

Here's what actually happens under the hood:

1. **Your data gets encrypted** and stored online (IPFS,Arweave..)
2. **The decryption key** is stored in a secure TEE database 
3. **Only authorized TEE workers** can retrieve this key to process your data
4. **Apps run inside these TEE workers** - they can decrypt and use your data, but only within the secure enclave
5. **Results come back encrypted** to you - the raw data never leaves the TEE environment

```
Your Data (encrypted, online) + Decryption Key (in TEE database) = Processing (only in authorized TEEs)
```

This architecture ensures that even iExec workers can't access your raw data - only the TEE environment can decrypt it for processing, and only when you've authorized it.

## What This Enables

### 📧 **Privacy-First Email Marketing**
Your users upload their contact lists as Protected Data. Your newsletter app can send personalized emails without ever seeing the actual email addresses. Users stay private, you get engagement.

### 🤖 **Ethical AI Training**  
People contribute personal data (health records, preferences) as Protected Data. AI models can learn from this data without seeing individual information. Better AI, fair compensation, zero privacy trade-offs.

### 🏢 **Confidential Business Intelligence**
Companies protect their datasets but still collaborate on insights. Research partners get aggregate results without accessing raw competitive data. Innovation without information leaks.

### 💰 **Data Monetization**
Create marketplaces where data owners set their own terms. "Use my fitness data for $5/month, health insights only, no advertising." Automatic payments, programmable rules.



## ❓ Frequently Asked Questions

::: details 💰 How much does it cost?
It's **free**! No gas fees on iExec's Bellecour network. You just need a Web3 wallet to sign transactions.
:::

::: details 📏 What's the maximum dataset size?
It depends on your use case context. For standard cases (contacts, small datasets), no problem. For large volumes, [contact us](https://iex.ec/contact/) so we can assess if it fits your needs.
:::

::: details 💸 Can I monetize my data?
Yes! You can sell access to your Protected Data with flexible pricing, subscriptions, etc. See the [Manage Data Monetization](/manage_data/guides/manage-data-monetization) guide for all details.
:::

::: details 🚀 How do I get started?
You need a Web3 wallet (MetaMask, WalletConnect) and Node.js 16+. Follow [DataProtector Core](/manage_data/dataProtector/dataProtectorCore) for installation and first examples.
:::



::: details 🔒 Is my data really secure?
Yes! Your data is encrypted and keys are stored in secure TEE environments. Even iExec workers can't see your raw data - only the authorized TEE environment can decrypt it for processing.
:::

## Why This Changes Everything

### ✅ **True Ownership**
Your data is blockchain-verified yours. Not "terms & conditions" yours, actually yours.

### ✅ **Privacy by Design**
Apps get utility without compromising privacy. No more "privacy vs functionality" trade-offs.

### ✅ **Programmable Control**
Set complex rules: "Use my data only for health insights, only on weekdays, only if I get paid 5€."

### ✅ **Composable Privacy**
Any iApp can use your Protected Data (if authorized). Build privacy-first ecosystems.

## Start Building

Ready to give your users data ownership?

### 🚀 **Try DataProtector**
- [Getting Started](/manage_data/dataProtector/getting-started) - Protect your first dataset
- [DataProtector Core](/manage_data/dataProtector/dataProtectorCore) - Full SDK reference
- [DataProtector Sharing](/manage_data/dataProtector/dataProtectorSharing) - Monetization features

### 📖 **Learn with Guides**
- [Create and Share Access](/manage_data/guides/create-and-share-access) - Basic workflow
- [Handle Schemas & Dataset Types](/manage_data/guides/handle-schemas-dataset-types) - Advanced data types
- [Manage Data Monetization](/manage_data/guides/manage-data-monetization) - Get paid for your data

### 🎯 **Use in iApps**
Protected Data works with any iApp:
- [Web3Mail](/use_iapp/web3mail) - Private email with contact protection
- [Build your own iApp](/build_iapp/iapp-generator) - Custom privacy-first apps

---

**TL;DR**: Protected Data = Your data + Your rules + Privacy guarantees. Finally, data ownership that actually works. 🔒
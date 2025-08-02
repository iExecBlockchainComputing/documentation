---
title: Manage Data Monetization
description:
  Explore different ways to monetize your protected data with pay-per-use and
  DataProtector Sharing
---

# 💰 Manage Data Monetization

**Your protected data can generate revenue automatically.** iExec offers two
main approaches for monetizing your data: simple pay-per-use access and advanced
DataProtector Sharing with multiple distribution models.

Each approach serves different use cases, from direct data processing to
autonomous smart contract distribution.

## Two Monetization Approaches

### 🎯 **Pay-Per-Use (DataProtector Core)**

Direct access control with simple pricing. You grant access to specific users
and apps, charging per data usage.

### 🏪 **DataProtector Sharing**

Advanced distribution features with collections, subscriptions, rentals, and
sales. Users can purchase access autonomously through smart contracts.

Let's explore both in detail.

---

## Pay-Per-Use (DataProtector Core)

**How it works**: When you grant access to your protected data, you set a price
per access. Each time someone processes your data, they pay your specified fee
automatically.

```ts
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

// Grant paid access to your data
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...', // Your data address
  authorizedApp: 'email-processor.apps.iexec.eth',
  authorizedUser: '0x456def...', // Specific user
  pricePerAccess: 5000000000, // 5 RLC per access
  numberOfAccess: 100, // Max 100 uses
});
```

### **Use Cases for Pay-Per-Use**

::: code-group

```ts [API Access]
// Charge for AI model inference
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: myAIModelAddress,
  authorizedApp: 'ai-inference.apps.iexec.eth',
  authorizedUser: clientAddress,
  pricePerAccess: 1000000000, // 1 RLC per inference
  numberOfAccess: 1000,
});
```

```ts [Data Processing]
// Charge for data analysis
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: healthDataAddress,
  authorizedApp: 'health-analyzer.apps.iexec.eth',
  authorizedUser: researcherAddress,
  pricePerAccess: 10000000000, // 10 RLC per analysis
  numberOfAccess: 50,
});
```

```ts [Free Access]
// Grant free access (still controlled)
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: publicDatasetAddress,
  authorizedApp: 'research.apps.iexec.eth',
  authorizedUser: '0x0000000000000000000000000000000000000000', // Any user
  pricePerAccess: 0, // Free
  numberOfAccess: 10000,
});
```

:::

### **Pros & Cons of Pay-Per-Use**

✅ **Advantages**:

- Simple setup and direct control
- Works with any existing iApp
- You know exactly who has access
- Immediate payment per usage

❌ **Limitations**:

- Manual access granting for each user
- Direct relationship required with each consumer
- No automated distribution features

---

## DataProtector Sharing

**How it works**: Create collections of your protected data and set up
distribution models. Users can discover and purchase access autonomously through
smart contracts.

::: tip See It Live The
[Content Creator demo](/overview/use-case-demo/content-creator) shows
DataProtector Sharing in action with file monetization. While it uses
content-delivery for file transfers, the same patterns work for any iApp - AI
models, data processing, oracles, etc. :::

### **Step 1: Create a Collection**

```ts
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

// Create a collection to group your data
const collection = await dataProtectorSharing.createCollection();
console.log('Collection address:', collection.collectionId);

// Add your protected data to the collection
await dataProtectorSharing.addToCollection({
  protectedData: '0x123abc...', // Your protected data address
  collectionId: collection.collectionId,
  addOnlyAppWhitelist: '0x256bcd881c33bdf9df952f2a0148f27d439f2e64', // iExec apps whitelist
});
```

### **Step 2: Choose Your Distribution Model**

DataProtector Sharing offers four distribution models:

### 🆓 **Free Access**

Perfect for building audience, beta testing, or public datasets.

```ts
// Make data freely available (but still controlled)
await dataProtectorSharing.setProtectedDataToRenting({
  protectedData: '0x123abc...',
  price: 0, // Free access
  duration: 86400, // 24 hours access
});
```

### 🏠 **Rental Model**

Users pay once for temporary access to your data.

```ts
// Set up rental terms
await dataProtectorSharing.setProtectedDataToRenting({
  protectedData: '0x123abc...',
  price: 5000000000, // 5 RLC rental fee
  duration: 604800, // 7 days access (in seconds)
});

// Users can then rent your data
const rental = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 5000000000,
  duration: 604800,
});
```

**Perfect for**:

- Time-limited datasets (event data, seasonal trends)
- Expensive datasets where users need short-term access
- Content that loses value over time

### 📅 **Subscription Model**

Users pay for ongoing access to a bundle of data that you can expand over time.

```ts
// First, set subscription parameters for the collection
await dataProtectorSharing.setSubscriptionParams({
  collectionId: collection.collectionId,
  price: 20000000000, // 20 RLC subscription fee
  duration: 2592000, // 30 days access
});

// Add protected data to the subscription bundle
await dataProtectorSharing.setProtectedDataToSubscription({
  protectedData: '0x123abc...',
});

// Add more data to the same subscription
await dataProtectorSharing.setProtectedDataToSubscription({
  protectedData: '0x456def...', // Additional dataset
});

// Users subscribe to access all data in the bundle
const subscription = await dataProtectorSharing.subscribeToCollection({
  collectionId: collection.collectionId,
  price: 20000000000,
  duration: 2592000,
});
```

**Perfect for**:

- Growing datasets (daily market data, news feeds)
- Educational content series
- Research datasets that expand over time
- SaaS-style data access

### 💸 **Sale Model**

Transfer permanent ownership of your data to the buyer.

```ts
// List data for sale
await dataProtectorSharing.setProtectedDataForSale({
  protectedData: '0x123abc...',
  price: 100000000000, // 100 RLC purchase price
});

// Buyers can purchase ownership
const purchase = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 100000000000,
});
```

**Perfect for**:

- Unique datasets or models
- Digital assets and NFT data
- One-time valuable insights
- When you want to exit data ownership

## Comparison: When to Use What?

| Feature                   | Pay-Per-Use            | DataProtector Sharing                 |
| ------------------------- | ---------------------- | ------------------------------------- |
| **Setup Complexity**      | Simple                 | Moderate                              |
| **Consumer Relationship** | Direct                 | Smart contract mediated               |
| **Payment**               | Per processing         | Per access period                     |
| **User Autonomy**         | Requires your approval | Self-service                          |
| **Distribution Models**   | One (pay-per-use)      | Four (free, rent, subscription, sale) |
| **Best for**              | Direct partnerships    | Autonomous distribution               |

### 🎯 **Choose Pay-Per-Use when**

- You have direct relationships with data consumers
- You want full control over each access grant
- Your data is processed by specific iApps
- Simple pricing model is sufficient

### 🏪 **Choose DataProtector Sharing when**

- You want automated distribution via smart contracts
- Users should purchase access autonomously without your involvement
- You need flexible pricing models (free, rental, subscription)
- You want to build a data business with recurring revenue

## Real-World Example

**Want to see data monetization in action?** Check out our **Content Creator
demo** that showcases DataProtector Sharing with real file transfers:

**[Content Creator Demo](/overview/use-case-demo/content-creator)** - A complete
app demonstrating collections, rentals, and subscriptions for content
monetization.

::: tip Live Example The Content Creator demo uses a content-delivery iApp for
file transfers, but the same monetization patterns apply to **any iApp and use
case** - AI model inference, data analysis, oracle feeds, Web3Mail, etc. :::

## Next Steps

**Ready to start monetizing your data?** Here are your next steps:

- **See it in action**: Try the
  [Content Creator demo](/overview/use-case-demo/content-creator) to understand
  the full flow
- **Start simple**: Begin with
  [pay-per-use via grantAccess](/manage-data/guides/create-and-share-access)
- **Explore sharing**: Try
  [DataProtector Sharing](/manage-data/dataProtector/dataProtectorSharing) for
  automated distribution
- **Build collections**: Learn about
  [collection management](/manage-data/dataProtector/dataProtectorSharing/collection)
- **Set up subscriptions**: Implement
  [recurring revenue models](/manage-data/dataProtector/dataProtectorSharing/subscription)

---

**TL;DR**: Pay-per-use = Simple direct control. DataProtector Sharing = Smart
contract automation with free/rent/subscription/sale models. Choose based on
your distribution strategy and technical needs. 💰

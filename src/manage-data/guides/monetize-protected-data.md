---
title: Monetize Protected Data
description:
  Explore different ways to monetize your protected data with signed orders
  (usage-based) and time-based access (time-period payments)
---

# 💰 Monetize Protected Data

**Your protected data can generate revenue automatically.**

iExec offers two fundamental approaches for monetizing your data:

- **DataProtector Core**: **Signed orders** with pay-per-use counting - specify
  exact conditions, users pay for each individual data processing
- **DataProtector Sharing**: **Time-based access** with period payments - users
  pay for unlimited access during specific time periods

## Signed Orders (DataProtector Core)

**How it works**: You create and publish signed orders that specify the exact
conditions for accessing your protected data. Each order defines:

- **Authorized App**: Which iApp can process your data
- **Authorized User**: Who can access your data (specific address or any user)
- **Price per Access**: Cost for each individual use
- **Number of Access**: Maximum times the data can be used
- **Usage Counting**: Each data processing decrements the available access count

```ts twoslash
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Create a signed order with specific conditions
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...', // Your data address
  authorizedApp: 'email-processor.apps.iexec.eth', // Specific iApp only
  authorizedUser: '0x456def...', // Specific user only
  pricePerAccess: 5000000000, // 5 RLC per individual use
  numberOfAccess: 100, // Maximum 100 total uses
});

console.log('Signed order created:', grantedAccess);
```

**Perfect for**:

- Direct partnerships with known clients
- Precise control over access conditions
- Simple setup with specific partners
- Exact counting of data usage

## Time-Based Access Implementation (DataProtector Sharing)

**How it works**: Instead of counting individual uses, DataProtector Sharing
provides **time-based access periods**. Users purchase access for specific
durations (hours, days, months) and can use your protected data unlimited times
during that period. Smart contracts handle all distribution automatically.

**Key Innovation**: Shift from usage counting to time-based access - users buy
access time, not individual transactions.

**Access Models Available**:

- **Rental**: Pay once to access to individual protected data (not all the
  collection)
- **Subscription**: Recurring payments for ongoing access
- **Sale**: Permanent ownership transfer

::: tip See It Live

The [Content Creator demo](/overview/use-case-demo/content-creator) shows
DataProtector Sharing in action with file monetization. While it uses the
content-delivery iApp for file streaming, the same patterns work for any iApp -
AI models, data processing, oracles, etc.

:::

### **Step 1: Create a Collection**

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
// Create a collection to group your data and provide
// a set of protectedData available for the subscription.
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

**DataProtector Sharing offers tree distribution models:**

#### 🏠 **Time-Based Rental Model**

Users pay once for **unlimited access during a specific time period** (not per
use). For a specific protectedData of the created collection :

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
// DATA OWNER: Set up time-based rental terms
await dataProtectorSharing.setProtectedDataToRenting({
  protectedData: '0x123abc...',
  price: 5000000000, // 5 RLC for the entire period
  duration: 604800, // 7 days of unlimited access
});

// CLIENT/SUBSCRIBER: Rent access for the full time period
const rental = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 5000000000, // One payment for full period
  duration: 604800, // Unlimited use for 7 days
});
```

**Perfect for**:

- Time-sensitive datasets (event data, seasonal trends)
- Expensive datasets where users need intensive short-term access
- Content that loses value over time
- Users who need to run multiple analyses during a period

#### 📅 **Time-Based Subscription Model**

Users pay for **recurring time-based access** to a bundle of data. Unlimited
usage during each subscription period.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

// Mock collection for the example
const collection = { collectionId: 123 };
// ---cut---
// DATA OWNER: Set time-based subscription parameters
await dataProtectorSharing.setSubscriptionParams({
  collectionId: collection.collectionId,
  price: 20000000000, // 20 RLC per 30-day period
  duration: 2592000, // 30 days unlimited access
});

// DATA OWNER: Add protected data to the time-based subscription bundle
await dataProtectorSharing.setProtectedDataToSubscription({
  protectedData: '0x123abc...',
});

// DATA OWNER: Add more data to the same subscription
await dataProtectorSharing.setProtectedDataToSubscription({
  protectedData: '0x456def...', // Additional dataset
});

// CLIENT/SUBSCRIBER: Get time-based subscription access
const subscription = await dataProtectorSharing.subscribeToCollection({
  collectionId: collection.collectionId,
  price: 20000000000, // Pay for full period
  duration: 2592000, // 30 days unlimited usage
});
```

**Perfect for**:

- Growing datasets (daily market data, news feeds)
- Educational content series
- Research datasets that expand over time
- SaaS-style data access

#### 💸 **Sale Model**

Transfer permanent ownership of your data to the buyer.

```ts twoslash
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
// DATA OWNER: List data for sale
await dataProtectorSharing.setProtectedDataForSale({
  protectedData: '0x123abc...',
  price: 100000000000, // 100 RLC purchase price
});

// CLIENT/BUYER: Purchase ownership
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

## Which Approach to Choose?

| **Signed Orders (Core)**     | **Time-Based Access (Sharing)** |
| ---------------------------- | ------------------------------- |
| Usage counting & pay-per-use | Time periods & unlimited usage  |
| Direct signed orders         | Smart contract automation       |
| High control, simple setup   | Medium control, flexible models |

**Choose Signed Orders when**: You need precise control, direct partnerships,
and usage-based billing.

**Choose Time-Based Access when**: You want automated distribution, unlimited
usage periods, and flexible pricing models.

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

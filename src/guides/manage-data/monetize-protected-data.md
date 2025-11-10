---
title:
  Monetize your encrypted data with iExec's DataProtector. Learn usage-based
  payments with signed orders and time-based access subscriptions. Turn your
  data into revenue streams securely.
description:
  Explore different ways to monetize your protected data with signed orders
  (usage-based) and time-based access (time-period payments)
---

# Monetize Protected Data

**Transform your encrypted data into a sustainable revenue stream.**

iExec DataProtector enables you to monetize your protected data through **signed
orders** - a flexible system that lets you specify exact conditions for data
access. Whether you're a data provider, researcher, or business owner, you can
generate income from your valuable datasets while maintaining complete privacy
and control.

**How it works**: You create and publish signed orders that define who can
access your data, how much they pay per use, and how many times they can access
it. Users pay automatically each time they process your data, giving you precise
control over monetization.

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

---
title: Getting Started with iApps
description:
  Learn the basics of finding and executing iApps on the iExec network
---

# 🚀 Getting Started with iApps

Welcome to the world of secure, privacy-preserving computation! This guide will
walk you through the essential steps to start using iApps on the iExec network.

## Prerequisites

Before you begin, make sure you have:

- A Web3 wallet (MetaMask, WalletConnect, etc.)
- Some RLC tokens for paying computation fees (or access to free vouchers
  through learning programs)
- Basic understanding of blockchain transactions

### 🆓 Use Our Stack for Free!

Good news! You can start using iApps **completely free** through our learning
programs:

- **Learn Web3 Program**: Get free access to our entire stack, including
  vouchers for iApp executions
- **Free Vouchers**: Pre-funded computation credits provided through learning
  initiatives
- **No RLC Required**: Start experimenting and building without any upfront
  costs

### 💰 Getting Started Without RLC

Don't have RLC tokens yet? No problem! Our learning programs provide everything
you need:

- **Free Vouchers**: Access to pre-funded computation credits
- **Full Stack Access**: Use all iExec tools and infrastructure at no cost
- **Educational Support**: Learn while you build with our community

Ready to dive in? Let's get started with finding and executing your first iApp!

## Step 1: Find Available iApps

The first step is discovering what iApps are available for your use case. You
can find iApps through several methods:

1. Visit the [iExec Explorer](https://explorer.iex.ec)
2. Navigate to the "Apps" section
3. Browse available applications by category or search by name
4. Check the app's description, requirements, and pricing

## Step 2: Understand App Requirements

Before executing an iApp, understand what it needs:

- **Protected Data**: Some apps require specific types of protected data
- **Input Parameters**: Check if the app needs command-line arguments
- **Input Files**: Some apps require additional files (URLs to public files)
- **Secrets**: Certain apps need requester secrets for API keys, etc.

## Step 3: Prepare Your Data

If the iApp requires protected data:

1. **Protect Your Data**: Use the
   [Data Protector](/manage-data/dataProtector/dataProtectorCore/protectData) to
   encrypt your sensitive information
2. **Grant Access**: Ensure the iApp has permission to access your protected
   data using
   [grantAccess](/manage-data/dataProtector/dataProtectorCore/grantAccess)

## Step 4: Execute the iApp

### Using the DataProtector SDK

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider(window.ethereum);
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

// Execute the iApp with protected data
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...', // Your protected data address
  app: '0x456def...', // The iApp address
  args: 'optional arguments',
  maxPrice: 10, // Maximum price in nRLC
});
```

### Using the CLI

```bash
# Execute an iApp with protected data
iexec app run 0x456def... --dataset 0x123abc... --args "your arguments"
```

## Step 5: Monitor and Retrieve Results

After submitting your task:

1. **Monitor Progress**: Track your task on the
   [iExec Explorer](https://explorer.iex.ec)
2. **Retrieve Results**: Get your results once the task completes

### Using the DataProtector SDK

```typescript
// Retrieve results from a completed task
const taskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: '0x7ac398...', // Your task ID
});
```

### Using the CLI

```bash
# Get task result
iexec task show 0x7ac398...

# Download task result
iexec task show 0x7ac398... --download
```

## Step 6: Understand Costs

iApp execution costs include:

- **Application Fee**: Paid to the app developer
- **Data Fee**: Paid to the data owner (if using protected data)
- **Workerpool Fee**: Paid to the computation provider
- **Gas Fees**: Blockchain transaction costs (free on Bellecour sidechain)

## Next Steps

Now that you understand the basics:

- Explore our [Guides](./guides/) for detailed tutorials
- Learn about [Different Ways to Execute](./guides/different-ways-to-execute.md)
  iApps
- Understand [How to Pay for Executions](./guides/how-to-pay-executions.md)
- Discover how to
  [Use iApps with Protected Data](./guides/use-iapp-with-protected-data.md)

## Need Help?

- Check the [iExec Explorer](https://explorer.iex.ec) for app details
- Visit our [Discord community](https://discord.gg/iexec) for support

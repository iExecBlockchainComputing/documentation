---
title: App Access Control and Pricing
description: Control who can use your iApp and set pricing with app orders
---

# Manage Access

**Orders control who can use your iApp and under what conditions.** Once your
iApp is deployed with iApp Generator, you need to publish app orders to make it
accessible to users and define your governance rules.

Think of orders as **usage proposals** - they define pricing, access
restrictions, and execution conditions for your app.

## What is an Order?

An **app order** is a signed proposal that defines the usage conditions for your
iApp:

- **Price per execution** (in nRLC)
- **Number of authorized uses**
- **Access restrictions** (specific users, workerpools)
- **TEE configuration** (for confidential applications)

::: tip

Currently, order management is not yet available in iApp Generator. This guide
shows you how to use the iExec SDK CLI to create and manage your app orders.

For complete SDK documentation, check the
[iExec SDK documentation](/references/sdk).

:::

## How Orders Work

Here's the simplified process:

1. **You create an app order** with your conditions (price, restrictions, etc.)
2. **You sign the order** with your wallet
3. **You publish the order** on the iExec marketplace
4. **Users can discover** and execute your iApp according to your conditions
5. **You automatically receive** payment in RLC for each execution

```
Deployed iApp + Published Signed App Order = Application accessible on iExec
```

## App Order Example

Here's an example app order for a sentiment analysis iApp:

```json
{
  "app": "0x123abc...", // Your iApp address
  "appprice": "1000000000", // 1 RLC per execution
  "volume": "100", // 100 authorized uses
  "tag": "0x0000000000000000000000000000000000000000000000000000000000000003", // TEE required
  "datasetrestrict": "0x0000000000000000000000000000000000000000",
  "workerpoolrestrict": "0x0000000000000000000000000000000000000000",
  "requesterrestrict": "0x0000000000000000000000000000000000000000"
}
```

## Creating an App Order

### Step 1: Install the iExec SDK

Since iApp Generator doesn't handle orders yet, you need to use the iExec SDK
CLI. For detailed installation instructions, see the
[iExec SDK documentation](/references/sdk).

::: code-group

```sh [npm]
npm install iexec
```

```sh [yarn]
yarn add iexec
```

```sh [pnpm]
pnpm add iexec
```

```sh [bun]
bun add iexec
```

:::

Verify the installation:

```bash
iexec --version
iexec --help
```

### Step 2: Configure your iExec Project

In your iApp Generator project folder, initialize the iExec configuration:

```bash
# In your iApp Generator project folder
iexec init --skip-wallet
```

This creates the necessary configuration files:

- `iexec.json` - Project configuration
- `chain.json` - Blockchain configuration

### Step 3: Configure your Wallet

If you don't have an iExec wallet yet:

```bash
iexec wallet create
```

Or import an existing wallet:

```bash
iexec wallet import <private-key>
```

::: tip iApp Generator Users

If you used iApp Generator, you already have an `iapp.config.json` file with a
generated private key. You can use this existing private key to initialize your
wallet:

```bash
# Extract the private key from your `iapp.config.json`
iexec wallet import <your-private-key>
```

:::

Check your wallet:

```bash
iexec wallet show
```

### Step 4: Create the App Order

Initialize the app order:

```bash
iexec order init --app
```

This adds an `apporder` section to your `iexec.json`. Edit the parameters
according to your needs:

```json
{
  "apporder": {
    "app": "0xYourAppAddress",
    "appprice": "1000000000",
    "volume": "100",
    "tag": "0x0000000000000000000000000000000000000000000000000000000000000003",
    "datasetrestrict": "0x0000000000000000000000000000000000000000",
    "workerpoolrestrict": "0x0000000000000000000000000000000000000000",
    "requesterrestrict": "0x0000000000000000000000000000000000000000"
  }
}
```

### Step 5: Sign and Publish the Order

Sign your app order with your wallet:

```bash
iexec order sign --app
```

Publish the order on the marketplace:

```bash
iexec order publish --app
```

Your iApp is now accessible according to the conditions you defined!

## Managing orders

### View published orders

Check active orders for your app:

```bash
iexec orderbook app <your-app-address>
```

### Modify an Order

To change conditions, create a new order with new parameters.

### Cancel an Order

Remove an order from the marketplace:

```bash
iexec order unpublish --app <orderHash>
```

Completely invalidate an order:

```bash
iexec order cancel --app <orderHash>
```

### **Confidential App (TEE Required)**

```json
{
  "appprice": "2000000000",
  "volume": "500",
  "tag": "0x0000000000000000000000000000000000000000000000000000000000000003"
}
```

## App order parameters

Here's the detailed description of each parameter:

### `app` <Badge type="danger" text="required" />

**Description:** Ethereum address of your deployed iApp

**Example:** `"0x123abc456def..."`

### `appprice` <Badge type="tip" text="optional" />

**Description:** Price to charge per execution (in nano RLC - nRLC)

**Common values:**

- `"0"` - Free
- `"1000000000"` - 1 RLC per execution
- `"500000000"` - 0.5 RLC per execution

::: tip

1 RLC = 1,000,000,000 nano RLC (10^9)

:::

### `volume` <Badge type="tip" text="optional" />

**Description:** Number of authorized executions (decrements with each use)

**Examples:**

- `1` - Single use
- `100` - Limited campaign
- `10000` - Virtually unlimited usage

### `tag` <Badge type="tip" text="optional" />

**Description:** Specifies the required execution environment

**Supported values:**

| Value                                                                | Description          |
| -------------------------------------------------------------------- | -------------------- |
| `0x0000000000000000000000000000000000000000000000000000000000000000` | Standard execution   |
| `0x0000000000000000000000000000000000000000000000000000000000000003` | TEE required (Scone) |

### Access restrictions

All restrictions use `0x0000000000000000000000000000000000000000` to indicate
"no restriction".

#### `datasetrestrict` <Badge type="tip" text="optional" />

**Description:** Restrict usage to a specific dataset

**Typical usage:** `0x0000000000000000000000000000000000000000` (no restriction)

#### `workerpoolrestrict` <Badge type="tip" text="optional" />

**Description:** Restrict execution to a specific workerpool

**Example:** `{{ workerpoolAddress }}` for the main workerpool

#### `requesterrestrict` <Badge type="tip" text="optional" />

**Description:** Restrict usage to a specific user

**Typical usage:** `0x0000000000000000000000000000000000000000` (open to all)

## What's Next?

**Your iApp is now accessible with custom conditions!**

Next steps:

- **Monitor executions**: Track usage with `iexec task show`
- **Adjust pricing**: Create new orders based on demand
- **Manage revenue**: Check your earnings with `iexec account show`

### Technical deep dive

- **[iExec SDK Documentation](/references/sdk)** - Complete CLI reference

<script setup>
import { computed } from 'vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const workerpoolAddress = computed(() => chainData.value.workerpoolAddress);
</script>

---
title: Build Intel TDX iApp
description:
  Learn how to build and run Confidential Computing applications with Intel TDX
  technology using both traditional deployment and the iApp Generator
---

# Build Intel TDX iApp

In this tutorial, you will learn how to build and run a Confidential Computing
application with Intel TDX technology using both traditional deployment and the
iApp Generator.

Before implementing TDX, make sure you understand the foundational concepts and
differences between TEE technologies. Check out our
**[Intel TDX Technology](/protocol/tee/intel-tdx)** guide for comprehensive
explanations of TDX technology and its benefits.

## Choose Your Approach

This tutorial covers two methods for building TDX applications:

1. **[Traditional Deployment](#build-your-application)** - Manual configuration
   with `chain.json` and `iexec.json`
2. **[iApp Generator](#using-iapp-generator)** - Simplified deployment using the
   iApp Generator tool

## Build your application

Thanks to **Intel TDX**, neither the source code or the binaries of your
application need to be changed in order to run securely in a TEE. Only two files
need to be configured: `chain.json` and `iexec.json`.

iApp using Intel TDX technology follow the same format as non-TEE applications;
follow the instructions on
[Build and deploy your first iApp](/guides/build-iapp/deploy-&-run) to create
and Dockerize your iApp.

After this step, the Docker image of your iApp should be published on Docker Hub
(e.g. `<docker-hub-user>/hello-world:1.0.0`).

### Update `chain.json`

Modify your `chain.json` as follows to reference the TDX Workerpool:

::: code-group

```json [Arbitrum Sepolia (testnet)]
{
  "default": "arbitrum-sepolia-testnet",
  "chains": {
    "arbitrum-sepolia-testnet": {
      "sms": { "tdx": "https://sms.labs.iex.ec" }
    }
  }
}
```

```json [Arbitrum Mainnet]
{
  "default": "arbitrum-mainnet",
  "chains": {
    "arbitrum-mainnet": {
      "sms": { "tdx": "https://sms.arbitrum-mainnet.iex.ec" }
    }
  }
}
```

:::

### Update `iexec.json`

TEE applications need a few more keys in the `iexec.json` file; run this to add
them automatically:

```bash
iexec app init --tee-framework tdx
```

Your `iexec.json` should now look like this example:

```json
{
  ...
  "app": {
    "owner": "<your-wallet-address>", // starts with 0x
    "name": "tee-tdx-hello-world", // application name
    "type": "DOCKER",
    "multiaddr": "<docker-hub-user>/hello-world:1.0.0", // app image
    "checksum": "<checksum>", // starts with 0x, update it with your own image digest
    "mrenclave": {
      "framework": "TDX", // TEE framework (keep default value)
   }
  },
  ...
}
```

::: info

See [Deploy your iApp on iExec](/guides/build-iapp/deploy-&-run.md) to retrieve
your image `<checksum>`.

:::

### Deploy and run the TEE iApp

Deploy the iApp with the standard command:

```bash
iexec app deploy
```

To execute the iApp in TDX, add `--tag tee,tdx` to the `iexec app run` and
select the TDX workerpool for your target network.

::: code-group

```bash [Arbitrum Sepolia (testnet)]
iexec app run --tag tee,tdx --workerpool 0x2956f0cb779904795a5f30d3b3ea88b714c3123f --watch
```

```bash [Arbitrum Mainnet]
iexec app run --tag tee,tdx --workerpool 0x8ef2ec3ef9535d4b4349bfec7d8b31a580e60244 --watch
```

:::

::: info

Remember, you can access task and iApp logs by following the instructions on
page [Debug your tasks](/guides/build-iapp/debugging).

:::

## Using iApp Generator

The iApp Generator provides a simplified way to deploy and run TDX applications
with minimal configuration.

### Enabling TDX in iApp Generator

#### Environment Variable Method

**Enable TDX for deployment and execution**:

```bash
# Set the experimental flag
export EXPERIMENTAL_TDX_APP=true

# Deploy and run with TDX
iapp deploy
iapp run <app-address>
```

:::warning Environment Variable Declaration

The syntax for setting environment variables differs between operating systems:

- **Mac/Linux**: `export EXPERIMENTAL_TDX_APP=true`
- **Windows**: `set EXPERIMENTAL_TDX_APP=true`

:::

#### Per-Command Method

**Enable TDX for specific commands**:

```bash
# Deploy TDX-enabled iApp
EXPERIMENTAL_TDX_APP=true iapp deploy

# Run with TDX
EXPERIMENTAL_TDX_APP=true iapp run <app-address>

# Debug TDX execution
EXPERIMENTAL_TDX_APP=true iapp debug <taskId>
```

#### Verification

**Check if TDX is enabled**:

```bash
# Your deployed iApp should show TDX-related tags
iexec app show <app-address>
```

### DataProtector SDK Configuration

⚠️ **To use** the iExec DataProtector SDK with TDX support, you must configure
the SDK with the right SMS endpoint.

::: code-group

```jsx [Arbitrum Sepolia (testnet)]
const dataProtector = new IExecDataProtector(web3Provider, {
  iexecOptions: {
    smsURL: 'https://sms.labs.iex.ec',
  },
});
```

```jsx [Arbitrum Mainnet]
const dataProtector = new IExecDataProtector(web3Provider, {
  iexecOptions: {
    smsURL: 'https://sms.arbitrum-mainnet.iex.ec',
  },
});
```

:::

⚠️**You need** to specify the TDX workerpool in your `processProtectedData`
call.

::: code-group

```jsx [Arbitrum Sepolia (testnet)]
await dataProtector.core.processProtectedData({
  protectedData: protectedData.address,
  workerpool: '0x2956f0cb779904795a5f30d3b3ea88b714c3123f',
  app: '0x456def...',
});
```

```jsx [Arbitrum Mainnet]
await dataProtector.core.processProtectedData({
  protectedData: protectedData.address,
  workerpool: '0x8ef2ec3ef9535d4b4349bfec7d8b31a580e60244',
  app: '0x456def...',
});
```

:::

### Protected Data Compatibility

:::warning Protected Data Requirements

**TDX iApp may require TDX-compatible protected data.** Check compatibility
before using protected data with TDX iApp.

:::

**Important**: The exact process for creating TDX-compatible protected data may
differ from standard protected data creation. Consult the latest DataProtector
documentation for TDX-specific requirements.

### Development Workflow

#### 1. **Local Testing**

```bash
# Test locally (same as regular iApp)
iapp test --protectedData "mock_name"

# TDX only affects remote deployment/execution
```

#### 2. **Deployment**

```bash
# Deploy TDX iApp
EXPERIMENTAL_TDX_APP=true iapp deploy
```

#### 3. **Execution**

```bash
# Run with TDX
EXPERIMENTAL_TDX_APP=true iapp run <app-address>
```

## Current Limitations

:::danger Production Warnings

- **🚫 NOT for production use**
- **🚫 Limited worker availability**
- **🚫 Unstable execution** environment
- **🚫 Breaking changes** without notice

:::

## What's Next?

### **Continue with TDX Development**

**Enhance your TDX application**:

- **[Debugging Your iApp](/guides/build-iapp/debugging)** - Troubleshoot
  execution issues and TDX-specific problems
- **[Inputs](/guides/build-iapp/inputs)** - Handle data inputs
- **[Outputs](/guides/build-iapp/outputs)** - Handle data outputs in TEE
  environment with TDX
- **[iApp Access Control and Pricing](/guides/build-iapp/manage-access)** -
  Configure access control for your TDX applications

### **Learn More About TEE Technologies**

**Deepen your understanding**:

- **[Intel TDX Technology](/protocol/tee/intel-tdx)** - Comprehensive guide to
  TDX technology and benefits
- **[Introduction to TEE Technologies](/protocol/tee/introduction)** -
  Foundation concepts of TEE technologies

### **Related Resources**

**Explore the iExec ecosystem**:

- **[iApp Generator Reference](/references/iapp-generator)** - Complete iApp
  Generator documentation
- **[DataProtector SDK](/references/dataProtector)** - Work with protected data
  in TDX
- **[Advanced iApp Building](/guides/build-iapp/advanced/quick-start)** -
  Advanced development techniques

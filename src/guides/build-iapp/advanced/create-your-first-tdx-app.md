---
title: Build Intel TDX App (Experimental)
description:
  Learn how to build and run Confidential Computing applications with Intel TDX
  technology using both traditional deployment and the iApp Generator
---

# 🛡️ Build Intel TDX App (Experimental) <ChainNotSupportedBadge/>

In this tutorial, you will learn how to build and run a Confidential Computing
application with Intel TDX technology using both traditional deployment and the
iApp Generator.

:::danger ⚠️ EXPERIMENTAL FEATURE

**TDX support is currently experimental and should NOT be used in production.**
This feature is provided for testing and development purposes only. Expect
instabilities, limited compatibility, and potential outages.

:::

:::info Understanding TDX Concepts

Before implementing TDX, make sure you understand the foundational concepts and
differences between TEE technologies. Check out our
**[Intel TDX Technology](/get-started/protocol/tee/intel-tdx)** guide for
comprehensive explanations of TDX technology and its benefits.

:::

::: info

**Request access to the experimental feature**

- The TDX-powered workerpool is currently in a development environment and not
  intended for production use.
- Expect occasional instability or incomplete features. Service is subject to
  change or discontinuation
- Development environment only - do not share sensitive data or secrets.
- Please share any bug reports, suggestions for improvement, or general feedback
  on your experience.
- To request early access, please [contact us](https://discord.gg/9h25DQFSCU)

:::

## Prerequisites

- [Docker](https://docs.docker.com/install/) 17.05 or higher on the daemon and
  client.
- [iExec SDK 8.13.0-tdx](https://github.com/aimen-djari/iexec-sdk/tree/feature/tdx).
  Contact us to have this special release.

## Choose Your Approach

This tutorial covers two methods for building TDX applications:

1. **[Traditional Deployment](#build-your-application)** - Manual configuration
   with `chain.json` and `iexec.json`
2. **[iApp Generator](#using-iapp-generator)** - Simplified deployment using the
   iApp Generator tool

## Build your application

Thanks to **Intel TDX**, neither the source code or the binaries of your
application need to be changed in order to run securely in a TEE. Only two files
need to be changed compared to the usual SGX workflow: `chain.json` and
`iexec.json`.

iApps using Intel TDX technology follow the same format as non-TEE applications;
follow the instructions on [Build your first application](./your-first-app) to
create and Dockerize your iApp.

After this step, the Docker image of your iApp should be published on Docker Hub
(e.g. `<docker-hub-user>/hello-world:1.0.0`).

### Update `chain.json`

Modify your `chain.json` as follows to reference the TDX Workerpool:

```json
{
  "default": "bellecour",
  "chains": {
    "bellecour": {
      "sms": { "tdx": "https://sms.labs.iex.ec" }
    }
  }
}
```

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
    "name": "tee-scone-hello-world", // application name
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

See [Deploy your app on iExec](./your-first-app.md#deploy-your-app-on-iexec) to
retrieve your image `<checksum>`.

:::

### Deploy and run the TEE app

Deploy the app with the standard command:

```bash
iexec app deploy
```

To execute the app in TDX, add `--tag tee,tdx` to the `iexec app run` and select
the TDX workerpool (`tdx-labs.pools.iexec.eth`).

```bash
iexec app run --tag tee,tdx --workerpool tdx-labs.pools.iexec.eth --watch
```

::: info

Remember, you can access task and app logs by following the instructions on page
[Debug your tasks](/guides/build-iapp/debugging).

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

```jsx
const dataProtector = new IExecDataProtector(web3Provider, {
  iexecOptions: {
    smsURL: 'https://sms.labs.iex.ec',
  },
});
```

⚠️**You need** to change the default worker pool in your protected Data
declaration

```jsx
await dataProtector.core.processProtectedData({
  protectedData: protectedData.address,
  workerpool: 'tdx-labs.pools.iexec.eth',
  app: '0x456def...',
});
```

### Protected Data Compatibility

:::warning Protected Data Requirements

**TDX iApps may require TDX-compatible protected data.** Check compatibility
before using protected data with TDX iApps.

:::

**Important**: The exact process for creating TDX-compatible protected data may
differ from standard protected data creation. Consult the latest DataProtector
documentation for TDX-specific requirements.

### Development Workflow

#### 1. **Local Testing**

```bash
# Test locally (same as regular iApps)
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

### 🔧 **Continue with TDX Development**

**Enhance your TDX application**:

- **[Debugging Your iApp](/guides/build-iapp/debugging)** - Troubleshoot
  execution issues and TDX-specific problems
- **[Inputs and Outputs](/guides/build-iapp/inputs-and-outputs)** - Handle data
  in TEE environment with TDX
- **[App Access Control and Pricing](/guides/build-iapp/manage-access)** -
  Configure access control for your TDX applications

### 📚 **Learn More About TEE Technologies**

**Deepen your understanding**:

- **[Intel TDX Technology](/get-started/protocol/tee/intel-tdx)** -
  Comprehensive guide to TDX technology and benefits
- **[SGX vs TDX Comparison](/get-started/protocol/tee/sgx-vs-tdx)** - Understand
  the differences between TEE technologies
- **[Introduction to TEE Technologies](/get-started/protocol/tee/introduction)** -
  Foundation concepts of TEE technologies

### 🚀 **Production Considerations**

**For production applications**:

- **⚠️ TDX is experimental**: Consider using
  **[Intel SGX Technology](/get-started/protocol/tee/intel-sgx)** for production
- **[Create Your First SGX App](/guides/build-iapp/advanced/create-your-first-sgx-app)** -
  Build production-ready SGX applications
- **[Deploy & Run](/guides/build-iapp/deploy-&-run)** - Standard iApp deployment
  guide

### 🔗 **Related Resources**

**Explore the iExec ecosystem**:

- **[iApp Generator Reference](/references/iapp-generator)** - Complete iApp
  Generator documentation
- **[DataProtector SDK](/references/dataProtector)** - Work with protected data
  in TDX
- **[Advanced iApp Building](/guides/build-iapp/advanced/quick-start-for-developers)** -
  Advanced development techniques

<script setup>
import ChainNotSupportedBadge from '@/components/ChainNotSupportedBadge.vue'
</script>

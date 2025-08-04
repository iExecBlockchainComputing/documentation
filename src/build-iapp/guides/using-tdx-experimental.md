---
title: Using TDX (Experimental)
description:
  Enable Intel TDX for enhanced TEE security in iApps - experimental feature
---

# 🛡️ Using TDX (Experimental)

:::danger ⚠️ EXPERIMENTAL FEATURE **TDX support is currently experimental and
should NOT be used in production.** This feature is provided for testing and
development purposes only. Expect instabilities, limited compatibility, and
potential outages. :::

**Intel TDX (Trust Domain Extensions) is the next generation of TEE
technology.** This guide shows you how to enable TDX in your iApps and
understand the differences from the default SGX implementation.

## What is TDX?

**TDX (Trust Domain Extensions)** is Intel's newer confidential computing
technology, different from the default SGX implementation.

### SGX vs TDX Differences

**SGX (Current Default)**:

- ✅ **Production ready** and stable
- ✅ **Widely supported** by iExec workers
- ❌ **Memory limitations** in TEE environment

**TDX (Experimental)**:

- ✅ **Potentially better** for memory-intensive workloads
- ❌ **Experimental** and unstable
- ❌ **Limited worker availability**
- ❌ **Not production ready**

## Enabling TDX in iApp Generator

### Environment Variable Method

**Enable TDX for deployment and execution**:

```bash
# Set the experimental flag
export EXPERIMENTAL_TDX_APP=true

# Deploy and run with TDX
iapp deploy
iapp run <app-address>
```

### Per-Command Method

**Enable TDX for specific commands**:

```bash
# Deploy TDX-enabled iApp
EXPERIMENTAL_TDX_APP=true iapp deploy

# Run with TDX
EXPERIMENTAL_TDX_APP=true iapp run <app-address>

# Debug TDX execution
EXPERIMENTAL_TDX_APP=true iapp debug <taskId>
```

### Verification

**Check if TDX is enabled**:

```bash
# Your deployed iApp should show TDX-related tags
iexec app show <app-address>
```

## Protected Data Compatibility

:::warning Protected Data Requirements **TDX iApps may require TDX-compatible
protected data.** Check compatibility before using protected data with TDX
iApps. :::

**Important**: The exact process for creating TDX-compatible protected data may
differ from standard protected data creation. Consult the latest DataProtector
documentation for TDX-specific requirements.

## Development Workflow

### 1. **Local Testing**

```bash
# Test locally (same as regular iApps)
iapp test --protectedData "mock_name"

# TDX only affects remote deployment/execution
```

### 2. **Deployment**

```bash
# Deploy TDX iApp
EXPERIMENTAL_TDX_APP=true iapp deploy
```

### 3. **Execution**

```bash
# Run with TDX
EXPERIMENTAL_TDX_APP=true iapp run <app-address>
```

## Current Limitations

:::danger Production Warnings

- **🚫 NOT for production use**
- **🚫 Limited worker availability**
- **🚫 Unstable execution** environment
- **🚫 Breaking changes** without notice :::

## When to Use TDX

**Consider TDX only for**:

- 🔬 **Research/development** purposes
- 🧪 **Testing future capabilities**

**Use SGX for**:

- 🚀 **All production applications**
- ⚡ **Reliable execution** requirements

## What's Next?

**For production applications, use the standard SGX guides**:

- **[Debugging Your iApp](/build_iapp/guides/debugging-your-iapp)** -
  Troubleshoot execution issues
- **[Inputs and Outputs](/build_iapp/guides/inputs-and-outputs)** - Handle data
  in TEE environment
- **[App Access Control and Pricing](/build_iapp/guides/orders)** - Deploy
  production-ready iApps

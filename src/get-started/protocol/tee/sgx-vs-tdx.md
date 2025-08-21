---
title: SGX vs TDX Comparison
description:
  Comprehensive comparison of Intel SGX and Intel TDX TEE technologies
---

# 🛡️ SGX vs TDX: Technology Comparison

**Intel SGX and Intel TDX are both TEE technologies, but they solve the security
problem differently.** On the iExec platform, SGX is the **production-ready,
widely-supported technology**, while TDX is the **experimental, next-generation
technology** for advanced use cases.

## Quick Overview

| Aspect                  | Intel SGX                       | Intel TDX                 |
| ----------------------- | ------------------------------- | ------------------------- |
| **Release Year**        | 2015                            | 2023                      |
| **Protection Scope**    | Application level               | Trusted domain level      |
| **Memory Size**         | Limited                         | Extensive (multi-GB+)     |
| **Code Changes**        | ❌ Significant changes required | ✅ Minimal changes needed |
| **iExec Status**        | ✅ Production ready             | 🔬 Experimental           |
| **Worker Availability** | ✅ Widely supported             | ❌ Limited availability   |
| **iExec Use Cases**     | Lightweight applications        | Complex workloads         |
| **Platform Support**    | Full iExec ecosystem            | Experimental workerpools  |

## Key Differences

### 🎯 **Protection Scope**

| Aspect               | [Intel SGX](/get-started/protocol/tee/intel-sgx)             | [Intel TDX](/get-started/protocol/tee/intel-tdx)               |
| -------------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| **What it protects** | Individual applications or parts of applications             | Trusted domains (secure virtual machines)                      |
| **Scope**            | Small, focused secure areas within larger applications       | Multiple trusted domains can run on a single TDX machine       |
| **Analogy**          | Like installing a small, specialized safe inside your office | Like having multiple secure offices within one secure building |

### 💾 **Memory and Performance**

| Aspect                     | Intel SGX                                           | Intel TDX                                          |
| -------------------------- | --------------------------------------------------- | -------------------------------------------------- |
| **Memory**                 | Limited secure memory (typically 1-2GB)             | Large secure memory space (multi-GB+)              |
| **Performance**            | Optimized for lightweight applications              | Optimized for complex, memory-intensive workloads  |
| **Limitations/Advantages** | Memory constraints can limit application complexity | Can handle large datasets and complex applications |

### 🔧 **Development and Integration**

| Aspect             | Intel SGX                                            | Intel TDX                                          |
| ------------------ | ---------------------------------------------------- | -------------------------------------------------- |
| **Code Changes**   | Requires significant modifications to applications   | Minimal changes needed - "lift and shift" approach |
| **Integration**    | Higher complexity, more development work             | Lower complexity, easier migration                 |
| **Frameworks**     | Uses Scone framework on iExec for easier development | Works with standard development practices          |
| **Learning Curve** | Steeper learning curve for developers                | Familiar development experience                    |

## When to Use Each Technology

### Use SGX When:

- ✅ Building production applications
- ✅ Need proven, stable technology
- ✅ Working with lightweight applications
- ✅ Require maximum worker availability
- ✅ Need focused security for specific application parts

### Use TDX When:

- 🔬 Experimenting with next-generation technology
- 💾 Working with memory-intensive applications
- 🔄 Running existing applications with minimal changes
- 🚀 Running complex workloads with VM-level protection

## What's Next?

**Learn about specific TEE technologies**:

- **[Intel SGX Technology](/get-started/protocol/tee/intel-sgx)** -
  First-generation application-level TEE
- **[Intel TDX Technology](/get-started/protocol/tee/intel-tdx)** -
  Next-generation VM-level TEE

**Ready to build with TEE?** Check out the practical guides:

- **[Build Intel TDX App (Experimental)](/guides/build-iapp/advanced/build-your-first-tdx-app)** -
  Build TDX applications with traditional deployment and iApp Generator
- **[Deploy & Run](/guides/build-iapp/deploy-&-run)** - Create your first TEE
  application

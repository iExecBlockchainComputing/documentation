---
title: Introduction to TEE Technologies
description:
  Learn the fundamentals of Trusted Execution Environments and Confidential
  Computing
---

# 🛡️ Introduction to TEE Technologies

**Trusted Execution Environments (TEE)** are the foundation of confidential
computing, providing hardware-level security for sensitive applications and data
processing. On the iExec platform, TEE technologies enable secure,
privacy-preserving computation in a decentralized environment.

## What is Confidential Computing?

**Confidential Computing** ensures that your data and code are protected even
when running on computers you don't control. Think of it as having a secure
vault inside any computer where your sensitive operations happen privately.

**Key Benefits:**

- 🔒 **Data Privacy**: Your data stays encrypted and private during processing
- 🛡️ **Hardware Security**: Special CPU features keep your data safe
- 🌐 **Trust Anywhere**: Run securely on remote computers

## Understanding TEE: The Foundation

### What is TEE (Trusted Execution Environment)?

Think of a **TEE** as a **secure vault inside your computer** where sensitive
operations happen. It's like having a private room that only authorized code can
enter, and once inside, everything is protected from the outside world.

**Real-world analogy**: Imagine a bank vault inside a regular building. The
building (your computer) can be accessed by many people, but the vault (TEE) has
special security measures that keep its contents completely private and secure.

### TEE vs Regular Computing

| **Regular Computing**           | **TEE Computing**                      |
| ------------------------------- | -------------------------------------- |
| Code and data visible to OS     | Code and data encrypted and hidden     |
| Vulnerable to system attacks    | Protected even from privileged access  |
| No hardware security guarantees | Hardware-level security protection     |
| Like working in a public space  | Like working in a secure, private room |

## TEE Technology Evolution

TEE technologies have evolved to address different use cases:

### First Generation: Application-Level Protection (Intel SGX)

- **Focus**: Protecting specific parts of applications
- **Memory**: Limited secure memory
- **Use Cases**: Lightweight applications
- **iExec Support**: ✅ Production-ready

### Second Generation: Virtual Machine-Level Protection (Intel TDX)

- **Focus**: Protecting entire virtual machines
- **Memory**: Large secure memory space
- **Use Cases**: Complex applications, AI workloads
- **iExec Support**: 🔬 Experimental

## What's Next?

**Learn about specific TEE technologies**:

- **[Intel SGX Technology](/get-started/protocol/tee/intel-sgx)** -
  First-generation application-level TEE
- **[Intel TDX Technology](/get-started/protocol/tee/intel-tdx)** -
  Next-generation VM-level TEE
- **[SGX vs TDX Comparison](/get-started/protocol/tee/sgx-vs-tdx)** -
  Side-by-side technology comparison

**Ready to build with TEE?** Check out the practical guides:

- **[Build Intel TDX App (Experimental)](/guides/build-iapp/advanced/create-your-first-tdx-app)** -
  Build TDX applications with traditional deployment and iApp Generator
- **[Build & Deploy](/guides/build-iapp/build-&-deploy)** - Create your first
  TEE application

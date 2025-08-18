---
title: Intel SGX Technology
description:
  Learn about Intel Software Guard Extensions (SGX) - the first-generation TEE
  technology
---

# 🛡️ Intel SGX Technology

**Intel® Software Guard Extensions (Intel® SGX)** is the first-generation TEE
technology that enables **Trusted Computing** and **Confidential Computing**. On
the iExec platform, SGX is the **production-ready, widely-supported TEE
technology** that powers secure, privacy-preserving applications in the
decentralized cloud.

## Why SGX Matters for iExec

iExec has chosen SGX as its primary TEE technology because it provides the
perfect balance of **security, stability, and accessibility** for decentralized
computing:

### 🔒 **Decentralized Security**

- **Hardware-Level Protection**: SGX provides hardware-level security guarantees
  regardless of who owns the worker hardware
- **Trust in Untrusted Environments**: Users can trust computation results even
  from unknown workers in the network
- **Proof of Contribution**: SGX enables verifiable proof that computations were
  executed correctly

### 💰 **Data Monetization Platform**

- **Protected Data Processing**: Data owners can safely monetize their data
  without losing control
- **Secure Computation**: Sensitive data remains encrypted during processing
- **Access Control**: Fine-grained control over who can access and process data

### 🌐 **Global Computing Network**

- **Wide Worker Support**: SGX is supported by the majority of iExec workers
- **Reliable Execution**: Production-ready technology with proven stability
- **Cost-Effective**: Standard pricing due to wide availability

## What is Intel SGX?

[Intel® SGX](https://software.intel.com/en-us/sgx) is a technology that enables
**Trusted Computing** and **Confidential Computing**. At its core, it relies on
the creation of a special zone in the memory called an "enclave". This enclave
can be considered as a vault, to which only the CPU can have access. Neither
privileged access-levels such as root, nor the operating system itself is
capable of inspecting the content of this region. The code, as well as the data
inside the protected zone, is totally unreadable and unalterable from the
outside. This guarantees non-disclosure of data as well as tamper-proof
execution of the code.

An application's code can be separated into "trusted" and "untrusted" parts
where sensitive data is manipulated inside the protected area.

## SGX: The "Application-Level" Security

**Intel SGX** is like having a **small, specialized safe** inside your office
for specific valuable items. It protects individual applications or parts of
applications.

### Key Characteristics

- **Scope**: Protects specific parts of your application
- **Memory**: Limited secure memory (like a small safe)
- **Code Changes**: Requires significant modifications to your application
- **Use Case**: Perfect for focused, lightweight applications

**Analogy**: SGX is like installing a small, specialized safe inside your office
for specific valuable items.

### Visual Representation

```mermaid
graph TB
    OS[Operating System<br/>Can see everything]
    App[Regular Application<br/>Visible & Vulnerable]
    Enclave[🔒 SGX Enclave<br/>Protected]
    Data[Sensitive Code & Data<br/>Encrypted]

    OS --> App
    App --> Enclave
    Enclave --> Data

    style Enclave fill:#ffffff,stroke:#0000ff,stroke-width:2px,color:#000000
    style Data fill:#ffffff,stroke:#00ff00,stroke-width:2px,color:#000000
```

## SGX Technology Details

### How SGX Works

1. **Enclave Creation**: SGX creates a secure memory region (enclave) that only
   the CPU can access
2. **Code Isolation**: Sensitive code runs inside the enclave, isolated from the
   rest of the system
3. **Memory Encryption**: All data in the enclave is automatically encrypted
4. **Integrity Protection**: The enclave can prove it's running the correct,
   unmodified code

### SGX Limitations

With native Intel® SGX technology, the OS is not a part of the Trusted
Computing Base (TCB), hence system calls and kernel services are not available
from an Intel® SGX enclave. This can be limiting as the application will not be
able to use File System and sockets directly from the code running inside the
enclave.

## SGX with iExec and Scone

iExec has built a comprehensive SGX infrastructure that makes it easy for
developers to create secure, privacy-preserving applications without deep SGX
expertise.

### iExec's SGX Infrastructure

iExec provides a complete SGX ecosystem that includes:

- **🔐 Secret Management Service (SMS)**: Secure storage for encryption keys and
  secrets
- **🛡️ SGX Workers**: Computing nodes with SGX hardware support
- **📋 Task Verification**: Proof of contribution system that verifies SGX
  execution
- **🔗 Blockchain Integration**: Decentralized coordination and payment
- **📦 Scone Framework**: High-level development framework for SGX applications

### Why iExec Uses Scone

To build Confidential Computing (TEE) applications with SGX, iExec uses the
high-level **Scone framework** instead of requiring developers to manipulate the
Intel® SGX SDK directly.

#### Scone Framework Benefits

At a high-level, Scone protects the confidentiality and integrity of the data
and the code without needing to modify or recompile the application. The
[Scone](https://scontain.com/) framework resolves the limitations of native SGX
and reduces the burden of porting the application to Intel® SGX.

#### How Scone Works

More precisely, Scone provides a C standard library interface to container
processes. System calls are executed outside of the enclave, but they are
shielded by transparently encrypting/decrypting application data. Files stored
outside of the enclave are therefore encrypted, and network communication is
protected by Transport Layer Security (TLS).

For a deeper understanding, you can have a look to the official
[Scone documentation](https://sconedocs.github.io/).

### iExec SGX Workflow

```mermaid
graph TD
    Dev[Developer]
    Build[Build with Scone]
    Deploy[Deploy to iExec]
    Worker[SGX Worker Selected]
    Enclave[SGX Enclave Created]
    Execute[Secure Execution]
    Proof[Proof of Contribution]
    Result[Results]

    Dev --> Build
    Build --> Deploy
    Deploy --> Worker
    Worker --> Enclave
    Enclave --> Execute
    Execute --> Proof
    Proof --> Result

    style Enclave fill:#ffffff,stroke:#0000ff,stroke-width:2px,color:#000000
    style Execute fill:#ffffff,stroke:#0000ff,stroke-width:2px,color:#000000
```

## SGX Use Cases on iExec

### Best For

- ✅ **Production Applications**: SGX is production-ready and stable on iExec
- ✅ **Lightweight Applications**: Perfect for focused, high-assurance modules
- ✅ **Crypto Operations**: Wallets, cryptographic key operations
- ✅ **Small AI Models**: Lightweight machine learning applications
- ✅ **Maximum Compatibility**: Widely supported by iExec workers

## When to Use SGX

**SGX is ideal for**:

- ✅ Building production applications
- ✅ Need proven, stable technology
- ✅ Working with lightweight applications
- ✅ Require maximum worker availability
- ✅ Need focused security for specific application parts

## What's Next?

**Learn about the next generation**:

- **[Intel TDX Technology](/get-started/protocol/tee/intel-tdx)** -
  Next-generation VM-level TEE technology
- **[SGX vs TDX Comparison](/get-started/protocol/tee/sgx-vs-tdx)** - Detailed
  comparison of both technologies

**Ready to build with SGX?** Check out the practical guides:

- **[Build & Deploy](/guides/build-iapp/build-&-deploy)** - Create your first
  SGX application
- **[Advanced SGX Development](/guides/build-iapp/advanced/create-your-first-sgx-app)** -
  Deep dive into SGX development

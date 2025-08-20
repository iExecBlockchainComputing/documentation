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

## What is Intel SGX?

[Intel® SGX](https://software.intel.com/en-us/sgx) creates a special secure
zone in memory called an "enclave" - think of it as a vault that only the CPU
can access. Neither the operating system nor any other software can see what's
happening inside this protected area. Your code and data are completely private
and secure.

## SGX: The "Application-Level" Security

**Intel SGX** is like having a **small, specialized safe** inside your office
for specific valuable items. It protects individual applications or parts of
applications.

### Key Characteristics

- **Scope**: Protects specific parts of your application
- **Memory**: Limited secure memory (like a small safe)
- **Code Changes**: Requires modifications to your application
- **Use Case**: Perfect for focused, lightweight applications

**Analogy**: SGX is like installing a small, specialized safe inside your office
for specific valuable items.

## SGX with iExec

iExec has built a comprehensive SGX infrastructure that makes it easy for
developers to create secure, privacy-preserving applications.

### iExec's SGX Infrastructure

iExec provides a complete SGX ecosystem that includes:

- **🔐 Secret Management Service (SMS)**: Secure storage for encryption keys and
  secrets
- **🛡️ SGX Workers**: Computing nodes with SGX hardware support
- **📋 Task Verification**: Proof of contribution system that verifies SGX
  execution
- **🔗 Blockchain Integration**: Decentralized coordination and payment
- **📦 Scone Framework**: High-level development framework for SGX applications

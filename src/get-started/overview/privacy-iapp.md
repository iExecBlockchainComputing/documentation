---
title: What is an iApp?
description:
  Learn about iExec Applications (iApp) - confidential computing apps that
  process sensitive data in secure TEE environments. Build privacy-preserving
  AI, data analysis, and Web3 apps.
---

<script setup>
import Banner from '../../components/Banner.vue'
import CardWithBorder from '@/components/CardWithBorder.vue';
import CardGrid from '@/components/CardGrid.vue';
import CardWithoutBorder from '@/components/CardWithoutBorder.vue';
</script>

# What is an iApp?

An iExec Application (iApp) is an application that runs inside a confidential
environment (TEEs) to process Protected Data (created with DataProtector).

Your Python scripts, AI models, or data processors can securely process
protected data inside a TEE.

## Why iApp Matters?

iApp provide privacy capabilities, allowing you to process sensitive data while
keeping it private and secure.

Imagine you want to build:

<CardWithoutBorder>

- An AI that analyzes personal health data
- An email tool that needs access to contact lists
- A financial advisor that processes bank statements
- A content filter that reads private messages

</CardWithoutBorder>

Users have this data, but they won't trust your regular app with it. **With
Privacy iApp, they will.**

**You gain their trust. They gain their privacy. Everyone wins.**

## Key Concepts

<CardWithBorder>

✅ **True Privacy:** Users never expose their raw data. Your app processes it
privately inside secure enclaves.

✅ **Trusted Execution:** iExec ensures your code runs inside a Trusted
Execution Environment (TEE), guaranteeing only the specified Docker image
executes in a secure, isolated environment.

✅ **Decentralized Infrastructure:** No single point of failure. Your app runs
across a distributed network of workers.

✅ **Zero Trust Architecture:** User data is protected by hardware-based TEEs,
keeping data confidential and inaccessible to the host, cloud provider, or
operating system during execution.

</CardWithBorder>

## How it Works

Your code runs in a Trusted Execution Environment (TEE). This secure area exists
inside specific processors (Intel Software Guard Extensions (SGX) or Trust
Domain Extensions (TDX) chipsets). Everything stays private and protected there,
even from the operating system.

Authorized users trigger an iApp that processes protected data inside this
private environment. Your iApp uses the data but never exposes it, not even to
you.

<CardWithBorder>

1. User provides private data
2. Data is protected with DataProtector
3. You build and deploy a confidential iApp that processes protected data
4. Run the iApp with the corresponding protected data, performing confidential
   computing

</CardWithBorder>

Your iApp can send emails, update contracts, make transactions, trigger
notifications - anything your code needs. This isn't about trust. We provide
**cryptographic and hardware-enforced guarantees** that preserve privacy within
the TEE execution environment.

## Use Cases

<CardGrid>
  <CardWithoutBorder>

### Healthcare

Process medical data for AI diagnosis without exposing patient information

  </CardWithoutBorder>

  <CardWithoutBorder>

### Finance

Analyze financial data for credit scoring while maintaining privacy

  </CardWithoutBorder>

  <CardWithoutBorder>

### Media

Content recommendation engines that don't track user behavior

  </CardWithoutBorder>

  <CardWithoutBorder>

### Research

Collaborative research on sensitive datasets across institutions

  </CardWithoutBorder>

</CardGrid>

## Next Steps

Ready to build your first privacy-preserving application? Start with our
[Hello World tutorial](/get-started/helloWorld) or dive into the
[iApp Generator documentation](/references/iapp-generator).

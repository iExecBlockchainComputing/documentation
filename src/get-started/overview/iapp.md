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

iApps provide privacy capabilities, allowing you to process sensitive data while
keeping it private and secure.

Imagine you want to build:

<CardWithoutBorder>

- An AI that analyzes personal health data
- An email tool that needs access to contact lists
- A financial advisor that processes bank statements
- A content filter that reads private messages

</CardWithoutBorder>

Users have this data, but they won't trust your regular app with it. **With
Privacy iApps, they will.**

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

## Getting Started

<Banner>

## Time to build

Let's build an iApp that can process protected data in a secure environment
using the [iExec iApp generator tool](/references/iapp-generator). This tool
helps you create, test and deploy iApps with just a few commands.

</Banner>

### Quick Start Path

1. **Protect your data** with [DataProtector](/references/dataProtector)
2. **Build your iApp** using the [iApp Generator](/references/iapp-generator)
3. **Deploy and test** your application
4. **Process protected data** securely

### What You'll Learn

- How to create a Docker container for your application
- How to handle inputs and outputs securely
- How to deploy to the iExec network
- How to process protected data in TEE environments

::: tip

These are just a few examples, the possibilities are endless. Want to explore
iApp Generator? Check out our [documentation](/references/iapp-generator) and
see what you can build!

:::

## Technical Requirements

- **Docker**: Your application must be containerized
- **Input/Output**: Define clear input and output schemas
- **TEE Compatibility**: Ensure your code runs in secure enclaves
- **Network Access**: Configure any external API calls or dependencies

## Next Steps

Ready to build your first privacy-preserving application? Start with our
[Hello World tutorial](/get-started/helloWorld) or dive into the
[iApp Generator documentation](/references/iapp-generator).

For more technical details, see the
[DataProtector Sharing](/references/dataProtector/dataProtectorSharing)
documentation.

---
title: Introduction to Using iApps
description:
  Learn how to use iExec Applications (iApps) to securely process protected data
  in a privacy-safe environment
---

# 📝 Introduction to Using iApps

In the iExec network, multiple actors work together in a coordinated process to
ensure secure, decentralized computation. Here's how the ecosystem operates:

### Key Actors in the Network

- **👤 Requesters**: Users who need computation performed on protected data
- **🏭 Workerpool Managers**: Operators who manage groups of workers and
  coordinate task execution
- **⚙️ Workers**: Individual machines that execute the actual computations
- **👨‍💻 iApp Developers**: Developers who create and deploy applications to the
  iExec marketplace
- **🔐 Data Providers**: Users who own and protect the data being processed

### Network Assets

- **📱 iApps**: Applications that process the data securely
- **💾 Data**: Protected information that needs to be processed
- **⚡ Computational Power**: Processing resources provided by workers
- **💰 PoCo**: Proof of Contribution system that matches all actors through
  marketplace

### Network Coordination

The iExec network coordinates all actors through the PoCo (Proof of
Contribution) system, which automatically matches requesters with the
appropriate applications, data, and computational resources based on
availability, requirements, and pricing.

### Deal Execution Flow

When a deal is triggered, the following sequence occurs:

1. **Request Creation**: Requester submits a computation request with parameters
2. **Resource Matching**: PoCo system matches the request with available
   applications, data, and computational resources
3. **Deal Creation**: When compatible resources are found, a deal is created
   containing multiple tasks
4. **Task Distribution**: Selected workerpool manager distributes tasks to their
   workers
5. **Secure Execution**: Workers download the iApp and execute it in TEE
   environments
6. **Data Processing**: iApp processes protected data without accessing raw
   content
7. **Result Generation**: Computation results are generated
8. **Result Delivery**: Results are returned to the requester through the
   network
9. **Payment Settlement**: <TokenSymbol /> tokens are distributed to all participants

### Network Architecture Diagram

![iExec Network Actors](/assets/use-iapp/iexec-actors-diagram.svg)

### Detailed Interaction Flow

1. **Request Submission**: Requester creates a request specifying the iApp,
   Protected Data, etc.
2. **PoCo Processing**: PoCo system validates the request and matches resources
3. **Deal Creation**: When resources are matched, PoCo creates a deal
4. **Secure Environment Setup**: Workers initialize TEE environments and
   download the iApp
5. **Data Access**: iApp requests access to protected data through secure
   channels
6. **Computation**: iApp processes data within the TEE, maintaining privacy
7. **Payment Distribution**: <TokenSymbol /> tokens are distributed to all participants
   based on completed tasks

This decentralized architecture ensures that no single entity has control over
the entire process, while the use of TEEs guarantees that sensitive data remains
protected throughout the computation.

## Getting Started

Ready to start using iApps? Check out our
[Getting Started Guide](./getting-started.md) to learn how to find, execute, and
interact with iApps on the iExec network.

<script setup>
import TokenSymbol from '@/components/TokenSymbol.vue'
</script>

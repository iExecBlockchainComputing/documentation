---
title: Deal
description:
  Understand how deals coordinate the iExec network actors to execute
  computations securely and distribute payments
---

# Deal

A **deal** is the core coordination mechanism in the iExec network. It brings
together all the necessary components—requesters, applications, data, and
computational resources to execute secure computations in TEE environments.

## What is a Deal?

When you want to run a computation on iExec, you don't directly interact with
workers or applications. Instead, the **PoCo (Proof of Contribution)**
decentralized smart contract automatically creates a deal that:

- Matches your request with compatible resources
- Coordinates all network actors (requester, app provider, data provider,
  workerpool)
- Ensures secure execution in TEE environments
- Handles result delivery
- Manages payment distribution

## Deal Execution Flow

When a deal is triggered, the following sequence occurs:

1. **Request Creation**: Requester submits a computation request with parameters
2. **Resource Matching**: PoCo system matches the request with available
   applications, data, and computational resources
3. **Deal Creation**: When the system finds compatible resources, it creates a
   deal containing multiple tasks
4. **Task Distribution**: Selected workerpool manager distributes tasks to their
   workers
5. **Secure Execution**: Workers download the iApp and execute it in TEE
   environments
6. **Data Processing**: iApp processes protected data without accessing raw
   content
7. **Result Generation**: Computation results are generated
8. **Result Delivery**: Results are returned to the requester through the
   network
9. **Payment Settlement**: RLC tokens are distributed to all participants

## Network Architecture

The diagram below illustrates how different actors interact in the iExec
network:

![iExec Network Actors](/assets/use-iapp/iexec-actors-diagram.svg)

## Detailed Interaction Flow

1. **Request Submission**: Requester creates a request specifying the iApp,
   Protected Data, and other parameters
2. **PoCo Processing**: PoCo system validates the request and matches available
   resources
3. **Deal Creation**: When resources are matched, PoCo creates a deal containing
   tasks
4. **Secure Environment Setup**: Workers initialize TEE environments and
   download the iApp
5. **Data Access**: iApp requests access to protected data through secure
   channels
6. **Computation**: iApp processes data within the TEE, maintaining privacy
7. **Payment Distribution**: RLC tokens are distributed to all participants
   based on completed tasks

This decentralized architecture ensures that no single entity has control over
the entire process, while the use of TEEs guarantees that sensitive data remains
protected throughout the computation.

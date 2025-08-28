---
title: Workerpool
description:
  Learn about workerpool in iExec - the computing resources that execute iApp
---

<script setup>
import CardWithoutBorder from '@/components/CardWithoutBorder.vue';
</script>

# Workerpool

A **Workerpool** is a group of computing machines (workers) managed by a
**Workerpool Manager** that provides computational resources to execute iApp in
secure environments on the iExec network.

::: tip <i></i>

Think of a workerpool as a **computing cluster** where your iApp runs. Each
workerpool consists of multiple workers (machines) coordinated by a manager who
ensures tasks are executed efficiently and securely.

:::

## Key Concepts

### Workerpool Manager

- **Resource Coordinator:** Manages and organizes available computing resources
- **Task Scheduler:** Distributes tasks among available workers
- **Network Interface:** Connects the workerpool to the iExec marketplace

### Workers (Computing Machines)

- **TEE-enabled Hardware:** Machines equipped with Trusted Execution
  Environments
- **Task Execution:** Run iApp and process protected data securely
- **RLC Rewards:** Earn RLC tokens for successfully completed tasks

### Security & Privacy

- **TEE Protection:** All computations happen inside secure enclaves
- **Data Isolation:** Protected data never leaves the secure environment
- **Proof of Contribution:** Cryptographic verification of task completion

## How Workerpool Work

1. **Task Request:** User submits a task to execute an iApp on protected data
2. **Workerpool Selection:** PoCo system matches request with available
   workerpool
3. **Task Distribution:** Workerpool manager assigns task to an available worker
4. **Secure Execution:** Worker downloads iApp and executes it in TEE
   environment
5. **Result Delivery:** Encrypted results are returned to the requester

## Getting Started

<Container variant="success">

Want to **use workerpool**? Start building iApp and the protocol will handle
workerpool selection automatically.

</Container>

## Next Steps

<CardWithoutBorder>

**Start Using:** [Build your first iApp](/get-started/helloWorld) and see a workerpool in action

**Join as Worker:** [Contact us on Discord](https://discord.com/invite/pbt9m98wnU) for guidance and support

**Manage Workerpool:** [Contact us on Discord](https://discord.com/invite/pbt9m98wnU) for deployment assistance

</CardWithoutBorder>

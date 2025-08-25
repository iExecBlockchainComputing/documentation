---
title: Workerpool
description:
  Learn about workerpool in iExec - the computing resources that execute iApp
---

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

<div class="mb-4"></div>

<div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 mb-6">
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <span>•</span>
      <div>
        <strong>Resource Coordinator:</strong> Manages and organizes available computing resources
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span>•</span>
      <div>
        <strong>Task Scheduler:</strong> Distributes tasks among available workers
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span>•</span>
      <div>
        <strong>Network Interface:</strong> Connects the workerpool to the iExec marketplace
      </div>
    </div>
  </div>
</div>

### Workers (Computing Machines)

<div class="mb-4"></div>

<div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 mb-6">
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <span>•</span>
      <div>
        <strong>TEE-enabled Hardware:</strong> Machines equipped with Trusted Execution Environments
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span>•</span>
      <div>
        <strong>Task Execution:</strong> Run iApp and process protected data securely
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span>•</span>
      <div>
        <strong>RLC Rewards:</strong> Earn RLC tokens for successfully completed tasks
      </div>
    </div>
  </div>
</div>

### Security & Privacy

<div class="mb-4"></div>

<div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 mb-6">
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <span>•</span>
      <div>
        <strong>TEE Protection:</strong> All computations happen inside secure enclaves
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span>•</span>
      <div>
        <strong>Data Isolation:</strong> Protected data never leaves the secure environment
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span>•</span>
      <div>
        <strong>Proof of Contribution:</strong> Cryptographic verification of task completion
      </div>
    </div>
  </div>
</div>

## How Workerpool Work

<div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 mb-6">
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-3">
      <span class="text-xl font-bold text-blue-700">1.</span>
      <div>
        <strong>Task Request:</strong> User submits a task to execute an iApp on protected data
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="text-xl font-bold text-blue-700">2.</span>
      <div>
        <strong>Workerpool Selection:</strong> PoCo system matches request with available workerpool
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="text-xl font-bold text-blue-700">3.</span>
      <div>
        <strong>Task Distribution:</strong> Workerpool manager assigns task to an available worker
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="text-xl font-bold text-blue-700">4.</span>
      <div>
        <strong>Secure Execution:</strong> Worker downloads iApp and executes it in TEE environment
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="text-xl font-bold text-blue-700">5.</span>
      <div>
        <strong>Result Delivery:</strong> Encrypted results are returned to the requester
      </div>
    </div>
  </div>
</div>

## Getting Started

<Container variant="success">

Want to **use workerpool**? Start building iApp and the protocol will handle
workerpool selection automatically.

</Container>

## Next Steps

<div class="bg-[var(--vp-c-bg-soft)] rounded-[6px] p-6 mb-6">
  <div class="flex flex-col gap-4">
    <div class="flex items-start gap-3">
      <div>
        <strong>Start Using:</strong> <a href="/get-started/helloWorld" class="text-blue-700 hover:text-blue-600">Build your first iApp</a> and see a workerpool in action
      </div>
    </div>
    <div class="flex items-start gap-3">
      <div>
        <strong>Join as Worker:</strong> <a href="https://discord.com/invite/pbt9m98wnU" target="_blank" class="text-blue-700 hover:text-blue-600">Contact us on Discord</a> for guidance and support
      </div>
    </div>
    <div class="flex items-start gap-3">
      <div>
        <strong>Manage Workerpool:</strong> <a href="https://discord.com/invite/pbt9m98wnU" target="_blank" class="text-blue-700 hover:text-blue-600">Contact us on Discord</a> for deployment assistance
      </div>
    </div>
  </div>
</div>

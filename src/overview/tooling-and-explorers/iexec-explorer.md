---
title: iExec Explorer
description:
  Explore and analyze transactions on the iExec decentralized computing
  platform. Monitor deals, tasks, apps, and datasets in real-time.
---

# 🔍 iExec Explorer

The **iExec Explorer** is your real-time window into the iExec confidential
decentralized computing protocol. Track deals, monitor task execution, and
explore apps and protectedData—all in one powerful dashboard.

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://explorer.iex.ec/" target="_blank" rel="noreferrer">
    <img src="/assets/tooling-&-explorers/iexec-explorer/explorer-global.png" alt="iExec Explorer" style="width: 100%; max-width: 800px; border-radius: 8px; border: 1px solid var(--vp-c-border); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />
  </a>
  <p style="margin-top: 1rem; font-weight: 500;">
    <a href="https://explorer.iex.ec/" target="_blank" rel="noreferrer" style="text-decoration: none; color: var(--vp-c-brand-1);">
      🔗 Explore the iExec Protocol
    </a>
  </p>
</div>

## 🎯 What You Can Explore

<div class="feature-grid">
  <a href="#deals-tasks" class="feature-card-link">
    <div class="feature-card">
      <div class="feature-icon">💼</div>
      <h3>Deals & Tasks</h3>
      <p>Monitor deal orchestration and task execution with their asset relationships (app + dataset + workerpool) from initialization to result download, including pricing</p>
    </div>
  </a>
  
  <a href="#iapps-listing" class="feature-card-link">
    <div class="feature-card">
      <div class="feature-icon">📱</div>
      <h3>iApps Listing</h3>
      <p>Explore the catalog of trusted execution environment (TEE) applications, including their use cases and ownership details</p>
    </div>
  </a>
  
  <a href="#protected-data-listing" class="feature-card-link">
    <div class="feature-card">
      <div class="feature-icon">🗄️</div>
      <h3>Protected Data Listing</h3>
      <p>Discover encrypted datasets with their asset types, including usage and ownership details</p>
    </div>
  </a>

  <a href="#workerpools" class="feature-card-link">
    <div class="feature-card">
      <div class="feature-icon">⚡</div>
      <h3>Workerpools</h3>
      <p>Explore the decentralized computing infrastructure, including usage and ownership details</p>
    </div>
  </a>
</div>

<div class="bg-gradient-to-r from-purple-400/10 to-purple-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 mb-6">
  <h4 class="!mt-0 !mb-2">🏗️ Understanding iExec Architecture</h4>
  <p class="!mb-2"><strong>Deals</strong> are the fundamental orchestration unit - each deal coordinates a set of related tasks that share resources and execution parameters.</p>
  <p class="!mb-0">Each <strong>Task</strong> brings together three essential assets: an <strong>iApp</strong> (the confidential computation logic), a <strong>Dataset</strong> (protected data), and a <strong>Workerpool</strong> (the decentralized execution infrastructure).</p>
</div>

## 💼 Deals & Tasks {#deals-tasks}

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://explorer.iex.ec/bellecour/deals" target="_blank" rel="noreferrer">
    <img src="/assets/tooling-&-explorers/iexec-explorer/deal-view.png" alt="Deal View" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-border); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);" />
  </a>
  <p style="margin-top: 0.5rem; font-weight: 500;">
    <a href="https://explorer.iex.ec/bellecour/deals" target="_blank" rel="noreferrer" style="text-decoration: none; color: var(--vp-c-brand-1);">
      🔗 Explore Deals on iExec Explorer
    </a>
  </p>
</div>

> **💡 Understanding Deals**: A deal is a coordinated set of tasks that brings
> together all the necessary components (app, dataset, workerpool) to execute
> confidential computation requests. Each deal can contain one or multiple
> related tasks.

### Deal Management Dashboard

- **Deal Architecture**: Visualize how deals orchestrate multiple tasks with
  shared resources and parameters
- **Task Composition**: See which tasks belong to each deal and their execution
  dependencies
- **Asset Coordination**: Monitor how apps, datasets, and workerpools are
  allocated across deal tasks
- **Deal Lifecycle**: Track deals from initiation through task execution to
  final completion
- **Pricing Analysis**: View payment distributions across the different assets
  of a deal (workerpool, dataset, app)

### Tasks Overview

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://explorer.iex.ec/bellecour/tasks" target="_blank" rel="noreferrer">
    <img src="/assets/tooling-&-explorers/iexec-explorer/task-view.png" alt="Task View" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-border); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);" />
  </a>
  <p style="margin-top: 0.5rem; font-weight: 500;">
    <a href="https://explorer.iex.ec/bellecour/tasks" target="_blank" rel="noreferrer" style="text-decoration: none; color: var(--vp-c-brand-1);">
      🔗 Browse All Tasks
    </a>
  </p>
</div>

Browse and analyze all tasks across the iExec network:

- **Task Listing**: View all tasks independently of their parent deals
- **Task Status**: Monitor task states across the entire network
- **Performance Analytics**: Analyze execution success rates
- **Historical Analysis**: Access task execution history for trend analysis

### Task Execution Monitoring

<div class="image-grid">
  <div class="image-container">
    <a href="https://explorer.iex.ec/bellecour/tasks" target="_blank" rel="noreferrer">
      <img src="/assets/tooling-&-explorers/iexec-explorer/task-details-started.png" alt="Task Started" />
    </a>
    <p>Task Initialization & Progress</p>
    <p style="margin-top: 0.5rem; font-weight: 500;">
      <a href="https://explorer.iex.ec/bellecour/tasks" target="_blank" rel="noreferrer" style="text-decoration: none; color: var(--vp-c-brand-1); font-size: 0.9rem;">
        🔗 Explore Tasks
      </a>
    </p>
  </div>
  <div class="image-container">
    <a href="https://explorer.iex.ec/bellecour/tasks" target="_blank" rel="noreferrer">
      <img src="/assets/tooling-&-explorers/iexec-explorer/task-details-completed.png" alt="Task Completed" />
    </a>
    <p>Task Completion & Results</p>
    <p style="margin-top: 0.5rem; font-weight: 500;">
      <a href="https://explorer.iex.ec/bellecour/tasks" target="_blank" rel="noreferrer" style="text-decoration: none; color: var(--vp-c-brand-1); font-size: 0.9rem;">
        🔗 Explore Tasks
      </a>
    </p>
  </div>
</div>

> **🔗 Task Assets**: Each task involves three key assets working together: the
> **iApp** (application logic), the **Dataset** (protected data), and the
> **Workerpool** (execution infrastructure). The Explorer shows how these
> components interact.

- **Asset Relationships**: Visualize the connections between iApp, dataset, and
  workerpool for each task
- **Real-time Progress**: Monitor task status from queued → running → completed
  with detailed state transitions
- **Execution Environment**: See which workerpool nodes are processing your
  tasks and their TEE capabilities (TDX, SGX)
- **Data Flow**: Track which protected datasets are securely accessed by
  authorized iApps
- **Result Management**:
  - **Download Results**: Access completed task outputs directly from the
    Explorer interface
  - **Encryption Status**: Understand if results are encrypted based on
    requester specifications
  - **Result Verification**: Validate computation correctness and integrity

## 📱 iApps Listing {#iapps-listing}

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://explorer.iex.ec/bellecour/apps" target="_blank" rel="noreferrer">
    <img src="/assets/tooling-&-explorers/iexec-explorer/app-view.png" alt="App View" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-border); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);" />
  </a>
  <p style="margin-top: 0.5rem; font-weight: 500;">
    <a href="https://explorer.iex.ec/bellecour/apps" target="_blank" rel="noreferrer" style="text-decoration: none; color: var(--vp-c-brand-1);">
      🔗 Explore iApps Marketplace
    </a>
  </p>
</div>

Explore the iExec application marketplace:

- **iApp Directory**: Browse available applications
- **Usage Analytics**: View execution counts, and user adoption
- **Performance Metrics**: Analyze execution success rates

## 🗄️ Protected Data Listing {#protected-data-listing}

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://explorer.iex.ec/bellecour/datasets" target="_blank" rel="noreferrer">
    <img src="/assets/tooling-&-explorers/iexec-explorer/dataset-view.png" alt="Dataset View" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-border); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);" />
  </a>
  <p style="margin-top: 0.5rem; font-weight: 500;">
    <a href="https://explorer.iex.ec/bellecour/datasets" target="_blank" rel="noreferrer" style="text-decoration: none; color: var(--vp-c-brand-1);">
      🔗 Explore Protected Datasets
    </a>
  </p>
</div>

Navigate the protected data landscape:

- **Data Catalog**: Discover available datasets with their metadata and asset
  type
- **Usage Patterns**: Analyze dataset popularity and user adoption
- **Schema Validation**: Ensure data structure compatibility with your
  applications

## ⚡ Workerpools {#workerpools}

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://explorer.iex.ec/bellecour/workerpools" target="_blank" rel="noreferrer">
    <img src="/assets/tooling-&-explorers/iexec-explorer/workerpool-view.png" alt="Workerpool View" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-border); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);" />
  </a>
  <p style="margin-top: 0.5rem; font-weight: 500;">
    <a href="https://explorer.iex.ec/bellecour/workerpools" target="_blank" rel="noreferrer" style="text-decoration: none; color: var(--vp-c-brand-1);">
      🔗 Explore Workerpools Infrastructure
    </a>
  </p>
</div>

Explore the decentralized computing infrastructure:

- **Infrastructure Overview**: Monitor the distributed network of computing
  nodes
- **Worker Metrics**: Analyze execution success rates
- **Resource Availability**: Check computational resources and capacity
- **Usage Statistics**: Analyze workerpool utilization

<style>
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card-link {
  text-decoration: none !important;
  color: inherit;
  display: block;
  height: 100%;
}

.feature-card-link:hover {
  text-decoration: none !important;
  color: inherit;
}

.feature-card-link:visited {
  text-decoration: none !important;
  color: inherit;
}

.feature-card-link:active {
  text-decoration: none !important;
  color: inherit;
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
}

.feature-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex-grow: 1;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  margin: 3rem 0;
}

.image-container {
  text-align: center;
}

.image-container img {
  width: 100%;
  max-width: 700px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.image-container p {
  margin-top: 0.5rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>

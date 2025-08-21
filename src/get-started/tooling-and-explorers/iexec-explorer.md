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

<ImageViewer
  :image-url-dark="explorerGlobalImage"
  image-alt="iExec Explorer"
  :link-url="explorerUrl"
  caption="🔗 Explore the iExec Protocol"
/>

::: tip

Before searching or exploring, make sure to select your desired network. The
Explorer displays data for the network you choose.

:::

## 🎯 What you Can Explore

<CardGrid>
  <FeatureCard
    icon="mdi:briefcase"
    title="Deals & Tasks"
    description="Monitor deal orchestration and task execution with their asset relationships (app + dataset + workerpool) from initialization to result download, including pricing"
    link-url="#deals-tasks"
    icon-color="text-blue-500"
  />
  
  <FeatureCard
    icon="mdi:apps"
    title="iApp Listing"
    description="Explore the catalog of trusted execution environment (TEE) applications, including their use cases and ownership details"
    link-url="#iApp-listing"
    icon-color="text-green-500"
  />
  
  <FeatureCard
    icon="mdi:database"
    title="Protected Data Listing"
    description="Discover encrypted datasets with their asset types, including usage and ownership details"
    link-url="#protected-data-listing"
    icon-color="text-orange-500"
  />

<FeatureCard
    icon="mdi:lightning-bolt"
    title="Workerpools"
    description="Explore the decentralized computing infrastructure, including usage and ownership details"
    link-url="#workerpools"
    icon-color="text-purple-500"
  />

</CardGrid>

<div class="bg-gradient-to-r from-purple-400/10 to-purple-400/5 rounded-[6px] p-6 border-l-4 border-fuchsia-700 my-6">
  <h4 class="!mt-0 !mb-2">🏗️ Understanding iExec Architecture</h4>
  <p class="!mb-2"><strong>Deals</strong> are the fundamental orchestration unit - each deal coordinates a set of different stakeholders that share resources and execution parameters to execute a confidential computation task.</p>
  <p class="!mb-0">Each <strong>Deal</strong> brings together:</p>
  <ul class="!mb-0">
    <li><strong>Requester</strong>: The entity requesting the computation</li>
    <li><strong>iApp</strong>: The confidential computation logic</li>
    <li><strong>Dataset</strong>: The data that will be processed by the iApp</li>
    <li><strong>Workerpool</strong>: The decentralized network of workers providing computation power</li>
  </ul>
</div>

## 💼 Deals & Tasks

<ImageViewer
  :image-url-dark="dealViewImage"
  image-alt="Deal View"
  :link-url="`${explorerUrl}/deals`"
  caption="🔗 Explore Deals"
/>

> **💡 Understanding Deals**: A deal is a coordinated set of stakeholders that
> brings together all the necessary components (app, dataset, workerpool) to
> execute confidential computation requests.

### Deal Management Dashboard

- **Deal Architecture**: Visualize how deals orchestrate multiple stakeholders
  with shared resources and parameters
- **Stakeholder Composition**: See which stakeholders belong to each deal and
  their execution dependencies
- **Asset Coordination**: Monitor how apps, datasets, and workerpools are
  allocated across deal tasks
- **Deal Lifecycle**: Track deals from initiation through task execution to
  final completion
- **Pricing Analysis**: View payment distributions across the different assets
  of a deal (workerpool, dataset, app)

### Tasks Overview

<ImageViewer
  :image-url-dark="taskViewImage"
  image-alt="Task View"
  :link-url="`${explorerUrl}/tasks`"
  caption="🔗 Explore Tasks"
/>

Browse and analyze all tasks across the iExec network:

- **Task Listing**: View all tasks independently of their parent deals
- **Task Status**: Monitor task states across the entire network
- **Performance Analytics**: Analyze execution success rates
- **Historical Analysis**: Access task execution history for trend analysis

### Task Execution Monitoring

<ImageViewer
    :image-url-dark="taskDetailsStartedImage"
    image-alt="Result Decryption"
    :link-url="`${explorerUrl}/tasks`"
    caption="🔗 Explore Tasks"
/>

<ImageViewer
    :image-url-dark="taskDetailsCompletedImage"
    image-alt="Task Completed"
    :link-url="`${explorerUrl}/tasks`"
    caption="🔗 Explore Tasks"
/>

> **🔗 Task Assets**: Each task involves four key assets working together: the
> requester, the **iApp** (application logic), the **Dataset** (protected data),
> and the **Workerpool** (execution infrastructure). The Explorer shows how
> these components interact.

- **Asset Relationships**: Visualize the connections between iApp, dataset, and
  workerpool for each task
- **Real-time Progress**: Monitor task status from queued → running → completed
  with detailed state transitions
- **Execution Environment**: See which workerpool nodes are processing your
  tasks and their TEE capabilities (TDX, SGX)
- **Data Flow**: Track which protected datasets are securely accessed by
  authorized iApp
- **Result Management**:
  - **Download Results**: Access completed task outputs directly from the
    Explorer interface
  - **Encryption Status**: Understand if results are encrypted based on
    requester specifications
  - **Result Verification**: Validate computation correctness and integrity

## 📱 iApp Listing

<ImageViewer
  :image-url-dark="appViewImage"
  image-alt="App View"
  :link-url="`${explorerUrl}/apps`"
  caption="🔗 Explore iApp Marketplace"
/>

Explore the iExec application marketplace:

- **iApp Directory**: Browse available applications
- **Usage Analytics**: View execution counts, and user adoption
- **Performance Metrics**: Analyze execution success rates

## 🗄️ Protected Data Listing

<ImageViewer
  :image-url-dark="datasetViewImage"
  image-alt="Dataset View"
  :link-url="`${explorerUrl}/datasets`"
  caption="🔗 Explore Protected Datasets"
/>

Navigate the protected data landscape:

- **Data Catalog**: Discover available datasets with their metadata and asset
  type
- **Usage Patterns**: Analyze dataset popularity and user adoption
- **Schema Validation**: Ensure data structure compatibility with your
  applications

## ⚡ Workerpools

<ImageViewer
  :image-url-dark="workerpoolViewImage"
  image-alt="Workerpool View"
  :link-url="`${explorerUrl}/workerpools`"
  caption="🔗 Explore Workerpools Infrastructure"
/>

Explore the decentralized computing infrastructure:

- **Infrastructure Overview**: Monitor the distributed network of computing
  nodes
- **Worker Metrics**: Analyze execution success rates
- **Resource Availability**: Check computational resources and capacity
- **Usage Statistics**: Analyze workerpool utilization

<script setup>
import { computed } from 'vue';
import ImageViewer from '@/components/ImageViewer.vue';
import FeatureCard from '@/components/FeatureCard.vue';
import CardGrid from '@/components/CardGrid.vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';

- // Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const explorerUrl = computed(() => chainData.value.iexecExplorerUrl);

// Assets
import explorerGlobalImage from '@/assets/tooling-&-explorers/iexec-explorer/explorer-global.png';
import dealViewImage from '@/assets/tooling-&-explorers/iexec-explorer/deal-view.png';
import taskViewImage from '@/assets/tooling-&-explorers/iexec-explorer/task-view.png';
import taskDetailsStartedImage from '@/assets/tooling-&-explorers/iexec-explorer/task-details-started.png';
import taskDetailsCompletedImage from '@/assets/tooling-&-explorers/iexec-explorer/task-details-completed.png';
import appViewImage from '@/assets/tooling-&-explorers/iexec-explorer/app-view.png';
import datasetViewImage from '@/assets/tooling-&-explorers/iexec-explorer/dataset-view.png';
import workerpoolViewImage from '@/assets/tooling-&-explorers/iexec-explorer/workerpool-view.png';
</script>

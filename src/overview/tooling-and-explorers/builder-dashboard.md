---
title: Builder Dashboard
description:
  Monitor iExec applications with the powerful Builder Dashboard. Manage your
  iApps and your manage vouchers
---

# 🏗️ Builder Dashboard

The **Builder Dashboard** is your comprehensive development hub for iExec
protocol. Monitor voucher usage, track your remaining compute capacity for TEE
iApp runs, and view execution history—all in one place. This powerful interface
streamlines your development workflow and provides deep insights on your
confidential iApps deployed on the protocol.

<ImageViewer
  image-url-dark="/assets/tooling-&-explorers/builder-dashboard/builder-dashboard.png"
  image-alt="Builder Dashboard Overview"
  link-url="https://builder.iex.ec/"
  caption="🔗 Access the Builder Dashboard"
/>

## 🎯 Key Features

<CardGrid>
  <FeatureCard
    icon="mdi:chart-line"
    title="Voucher consumption & Task History"
    description="View complete task execution history with status, pricing, deals, and comprehensive voucher consumption tracking"
    icon-color="text-blue-500"
  />
  
  <FeatureCard
    icon="mdi:apps"
    title="Confidential iApp Monitoring"
    description="Monitor deployed iApps, track execution statistics, unique users"
    icon-color="text-green-500"
  />
</CardGrid>

## 📊 Voucher Consumption & Task History {#voucher-history}

The first screen of the Builder Dashboard provides comprehensive voucher
monitoring with detailed task execution history and real-time balance tracking.

<ImageViewer
  image-url-dark="/assets/tooling-&-explorers/builder-dashboard/build-voucher-view.png"
  image-alt="Voucher Consumption Dashboard"
  link-url="https://builder.iex.ec/vouchers"
  caption="🔗 Access Voucher Dashboard"
/>

### Current Voucher Balance & Management

<div class="bg-gradient-to-r from-green-400/10 to-green-400/5 rounded-[6px] p-6 border-l-4 border-green-700 my-6">
  <h4 class="!mt-0 !mb-2">💰 Voucher Balance Overview</h4>
  <ul class="!mb-0">
    <li><strong>Current Balance</strong>: View your remaining voucher credits and compute capacity</li>
    <li><strong>Claim New Vouchers</strong>: Request additional vouchers directly from the dashboard</li>
    <li><strong>Expiration Alerts</strong>: Get notified before vouchers expire</li>
  </ul>
</div>

### Task Execution History

<CardGrid>
  <FeatureCard
    icon="mdi:history"
    title="Complete Task History"
    description="Chronological list of all executed tasks with detailed execution information"
    icon-color="text-blue-500"
  />
  
  <FeatureCard
    icon="mdi:chart-line"
    title="Task Status Tracking"
    description="Real-time status updates: Pending, Running, Completed, Failed"
    icon-color="text-green-500"
  />
  
  <FeatureCard
    icon="mdi:currency-usd"
    title="Pricing & Cost Analysis"
    description="Detailed cost breakdown per task and cumulative spending analytics"
    icon-color="text-orange-500"
  />
  
  <FeatureCard
    icon="mdi:handshake"
    title="Deal Association"
    description="View which deal each task belongs to and track deal performance"
    icon-color="text-purple-500"
  />
</CardGrid>

## 📱 Confidential iApp Management {#iapp-management}

The second screen provides comprehensive management and analytics for your
deployed confidential iApps with detailed statistics and user insights.

<ImageViewer
  image-url-dark="/assets/tooling-&-explorers/builder-dashboard/my-iapps-view.png"
  image-alt="My Confidential iApps Dashboard"
  link-url="https://builder.iex.ec/iapps"
  caption="🔗 Manage Your iApps"
/>

### My Confidential iApps Overview

<div class="bg-gradient-to-r from-blue-400/10 to-blue-400/5 rounded-[6px] p-6 border-l-4 border-blue-700 my-6">
  <h4 class="!mt-0 !mb-2">📱 iApp Portfolio Metrics</h4>
  <ul class="!mb-0">
    <li><strong>Deployed Applications</strong>: Complete list of all your confidential iApps currently deployed</li>
    <li><strong>Execution Statistics</strong>: See exactly how many times each iApp has been executed</li>
    <li><strong>Unique Users</strong>: Track total unique users who have run each application</li>
    <li><strong>Revenue Insights</strong>: Track earnings and profitability per application</li>
  </ul>
</div>

### Application Statistics Dashboard

<CardGrid>
  <FeatureCard
    icon="mdi:apps"
    title="Deployed iApps"
    description="View all your confidential applications with deployment status, versions, and metadata"
    icon-color="text-blue-500"
  />
  
  <FeatureCard
    icon="mdi:counter"
    title="Execution Count"
    description="Track how many times each iApp has been executed since deployment"
    icon-color="text-green-500"
  />
  
  <FeatureCard
    icon="mdi:account-group"
    title="Unique Users"
    description="Monitor total unique users who have interacted with each application"
    icon-color="text-orange-500"
  />
  
  <FeatureCard
    icon="mdi:trending-up"
    title="Usage Trends"
    description="Analyze usage patterns, peak times, and growth trends for each iApp"
    icon-color="text-purple-500"
  />
</CardGrid>

::: tip 💡 Dev Tip

Use the **Builder Dashboard** to monitor your iExec applications and optimize
your development workflow. The comprehensive analytics help you make data-driven
decisions for better application performance.

:::

<script setup>
import { Icon } from '@iconify/vue';
import ImageViewer from '../../components/ImageViewer.vue';
import FeatureCard from '../../components/FeatureCard.vue';
import CardGrid from '../../components/CardGrid.vue';
</script>

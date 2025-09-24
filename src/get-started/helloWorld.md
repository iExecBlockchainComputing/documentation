---
title: Hello World Tutorial
description:
  Kickstart your Web3 journey with iExec. In just 30 minutes, learn how to build
  privacy-focused DApp, protect sensitive data, and manage data access.
---

<script setup>
import { Icon } from '@iconify/vue';
import InfoIcon from '@/components/InfoIcon.vue'
import Banner from '../components/Banner.vue'
import Container from '../components/Container.vue'
import CardWithBorder from '../components/CardWithBorder.vue'
import CardGrid from '../components/CardGrid.vue'
import Badge from '../components/Badge.vue'
import TutorialCard from '../components/TutorialCard.vue'
</script>

# 👋 Welcome to iExec

> Reading time 🕒 2 min

<CardWithBorder>
  <div class="flex gap-2 items-center flex-wrap">
    <h3 class="my-0! text-lg font-medium">🌐 Select Your Network :</h3>
    <ChainSelector />
  </div>
</CardWithBorder>

<Banner>

## Start Your Web3 Privacy Journey

And learn how to build Privacy-preserving decentralized applications (DApp) with
iExec in this interactive guide.

  <div class="mt-6 w-fit grid justify-center mx-auto sm:mx-0 sm:grid-cols-2 items-center gap-4">
    <span class="bg-gray-900 text-white px-4 py-2 rounded-full font-medium">☕ 30 minutes journey</span>
    <p class="my-0!">Perfect for hackathons 😊</p>
  </div>
</Banner>

## What you'll Learn and Build

<CardGrid>

<TutorialCard
    href="helloWorld/1-overview"
    title="1 - iExec Overview"
    readTime="8 min read"
    description="Discover how iExec technologies work and the problems they solve"
    actionText="Read"
    badgeVariant="primary"
  />

<TutorialCard
    href="helloWorld/2-protectData"
    title="2. Protect Your Data"
    readTime="6 min read"
    description="Learn to secure your sensitive data using our developer tools"
    actionText="Read"
    badgeVariant="primary"
  />

<TutorialCard
    href="helloWorld/3-buildIApp"
    title="3. Build your iApp"
    readTime="10 min read"
    description="Build and run your first iExec App to work with protected data in a safe environment"
    actionText="Read"
    badgeVariant="primary"
  />

<TutorialCard
    href="helloWorld/4-manageDataAccess"
    title="4. Manage Data Access"
    readTime="6 min read"
    description="Learn advanced data access management, permissions and monetization"
    actionText="Read"
    badgeVariant="primary"
  />

<TutorialCard
    href="helloWorld/5-bonusChapter"
    title="Bonus Chapter"
    description="Finish the journey with a surprise bonus chapter!"
    actionText="Special content"
    variant="bonus"
  /> </CardGrid>

## Getting Started

Before you begin, make sure you have:

<div class="flex flex-col gap-2 my-4 pl-0">
  <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      🦊 Ethereum Wallet
      <InfoIcon tooltip="Required to interact with iExec protocol, manage your data access permissions, and handle transactions on the iExec platform" />
    </div>
    <a target="_blank" href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" class="no-underline! text-sm ml-auto hover:underline!">Metamask Download →</a>
  </div>
  <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      📦 Node.js v20+ (for javascript iApps)
      <InfoIcon tooltip="Required runtime environment for running JavaScript code and managing project dependencies" />
    </div>
    <a target="_blank" href="https://nodejs.org/en/" class="no-underline! text-sm ml-auto hover:underline!">Download →</a>
  </div>
   <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      🐍 Python 3.8+ (for Python iApps)
      <InfoIcon tooltip="Required runtime environment for Python-based iExec applications" />
    </div>
    <a target="_blank" href="https://www.python.org/downloads/" class="no-underline! text-sm ml-auto hover:underline!">Download →</a>
  </div>
   <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      🐳 Docker installed
      <InfoIcon tooltip="Docker is essential for creating isolated containers that package your iExec applications with all dependencies. This ensures consistent and secure execution across different environments, especially in TEEs (Trusted Execution Environments)" />
    </div>
    <a target="_blank" href="https://docker.com/" class="no-underline! text-sm ml-auto hover:underline!">Download →</a>
  </div>
  
  <div class="flex items-center gap-4 text-left">
    <div class="flex items-center gap-1 flex-1 text-sm font-medium">
      🐳 DockerHub Account
      <InfoIcon tooltip="Needed to publish and manage your iExec applications in containers for secure deployment" />
    </div>
    <a target="_blank" href="https://hub.docker.com/" class="no-underline! text-sm ml-auto hover:underline!">Sign Up →</a>
  </div>
</div>

::: tip Need help setting up or got some questions?

Join our <a target="_blank" href="https://discord.gg/6yrgRH6ATD">Discord
Community</a> for support!

:::

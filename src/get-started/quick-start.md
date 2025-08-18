---
title: Quick Start
description:
  Get started quickly with iExec's privacy-preserving technologies and explore
  our project starters and interactive sandboxes
---

# Quick Start

Get started quickly with iExec's privacy-preserving technologies. Choose from
our pre-built starters or dive into interactive sandboxes to explore specific
features.

## Project Starters

Bootstrap your project with our framework-specific templates and start building
privacy-first applications.

<CardGrid>
  <ProjectCard
    title="Next.js Starter"
    description="Full-featured Next.js template with iExec integration, TypeScript support, and example implementations."
    icon="logos:nextjs-icon"
    status="available"
    statusLabel="Available"
    buttonLabel="Get Started"
    buttonIcon="mdi:github"
    buttonHref="https://github.com/iExecBlockchainComputing/iexec-nextjs-starter"
  />

<ProjectCard
    title="React Starter"
    description="React application template with hooks, components, and utilities for seamless iExec integration."
    icon="logos:react"
    status="coming-soon"
    statusLabel="Coming Soon"
    buttonLabel="Coming Soon"
    buttonIcon="mdi:github"
    buttonDisabled
  />

<ProjectCard
    title="Vue.js Starter"
    description="Vue 3 Composition API template with TypeScript and optimized build configuration for iExec apps."
    icon="logos:vue"
    status="coming-soon"
    statusLabel="Coming Soon"
    buttonLabel="Coming Soon"
    buttonIcon="mdi:github"
    buttonDisabled
  /> </CardGrid>

## Interactive Sandboxes

Explore and experiment with iExec features directly in your browser. Perfect for
learning and prototyping.

<CardGrid>
  <ProjectCard
    title="DataProtector Core"
    description="Essential data protection features including encryption, access control, and secure storage."
    icon="mdi:shield-lock"
    status="interactive"
    statusLabel="Interactive"
    buttonLabel="Open Sandbox"
    buttonIcon="mdi:code-braces"
    buttonHref="https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sandbox/main"
  />

<ProjectCard
    title="DataProtector Sharing"
    description="Advanced data sharing capabilities with granular permissions and monetization features."
    icon="mdi:share-variant"
    status="interactive"
    statusLabel="Interactive"
    buttonLabel="Open Sandbox"
    buttonIcon="mdi:code-braces"
    buttonHref="https://codesandbox.io/p/github/iExecBlockchainComputing/dataprotector-sharing-sandbox/main"
  />

<ProjectCard
    title="Web3 Telegram"
    description="Privacy-preserving Telegram messaging integration with user consent management."
    icon="mdi:message-lock"
    status="interactive"
    statusLabel="Interactive"
    buttonLabel="Open Sandbox"
    buttonIcon="mdi:code-braces"
    buttonHref="https://codesandbox.io/p/github/iExecBlockchainComputing/web3-telegram-sandbox/main"
  />

<ProjectCard
    title="Web3 Mail"
    description="Secure email communication for Web3 users without revealing personal email addresses."
    icon="mdi:email-lock"
    status="interactive"
    statusLabel="Interactive"
    buttonLabel="Open Sandbox"
    buttonIcon="mdi:code-braces"
    buttonHref="https://codesandbox.io/p/github/iExecBlockchainComputing/web3mail-sandbox/main"
  />

</CardGrid>

## Next Steps After Exploring our Starters and Sandboxes

1. **Choose Your Framework**: Start with our Next.js template or wait for
   React/Vue options
2. **Experiment**: Try the interactive sandboxes to understand core concepts
3. **Build**: Integrate the features you need into your application
4. **Deploy**: Use our deployment guides for production-ready applications

<script setup>
import CardGrid from '@/components/CardGrid.vue';
import ProjectCard from '@/components/ProjectCard.vue';
</script>

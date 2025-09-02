---
title: Use Cases
description:
  Explore real-world applications and demo showcases of iExec's
  privacy-preserving technologies in action
---

# Use Cases Showcase

Explore our demo applications showcasing iExec's confidential computing toolkit
in action. Each use case shows real-world applications of privacy-preserving
technologies.

<div class="space-y-8">

<UseCaseCard
  title="Content Creator"
  description="A comprehensive demo showcasing iExec's DataProtector Sharing module. Experience privacy-first data sharing where content creators can securely share their work while maintaining full control over access permissions and monetization."
  :imageUrl="contentCreatorImage"
  imageAlt="Content Creator Demo Screenshot"
  :features="['DataProtector Core', 'DataProtector Sharing']"
  demoUrl="https://demo.iex.ec/content-creator/"
  githubUrl="https://github.com/iExecBlockchainComputing/content-creator-usecase-demo"
/>

<UseCaseCard
  title="Web3 Messaging"
  description="Secure communication platform for Web3 users enabling privacy-preserving messaging through Web3Mail and Web3Telegram. Users maintain control over their data while enabling targeted communication and monetizing their engagement."
  :imageUrl="web3MessagingImage"
  imageAlt="Web3Messaging Demo Screenshot"
  :features="['DataProtector Core', 'Web3Mail', 'Web3Telegram']"
  demoUrl="https://demo.iex.ec/web3messaging"
  githubUrl="https://github.com/iExecBlockchainComputing/web3-messaging-usecase-demo"
/>

## iExec Confidential AI

### At the crossroads of DePIN and AI

iExec provides the confidential computing infrastructure for AI, enabling
developers to protect and monetize the entire AI pipeline. With the Confidential
AI framework, you can:

- **Train models collaboratively.**
- **Monetize and reward contributors.**
- **Ensure integral, end-to-end encryption across the workflow.**

### End-to-end confidential AI pipeline

- **Trusted Execution Environments (TEEs):** Secure, tamper-proof enclaves for
  AI training and inference.
- **Models and data stay encrypted at all times—processed without being
  exposed.**
- **Execution and results are traced on-chain, ensuring verifiability and
  accountability.**

<UseCaseCard
    title="AI Agent"
    description="Execute ElizaOS AI agents with full confidentiality in iExec TDX Trusted Execution Environments (TEEs)"
    :imageUrl="elizaosImage"
    imageAlt="AI Applications Demo Screenshot"
    :features="['AI Agents', 'TDX TEE', 'Confidential Computing']"
    githubUrl="https://github.com/iExecBlockchainComputing/iexec-elizaos-agent"
  />

<UseCaseCard
    title="MCP Server"
    description="A Model Context Protocol (MCP) compatible server to interact with the iExec protocol — built for Claude, agents, and AI tooling"
    :imageUrl="mpcServer"
    imageAlt="AI Applications Demo Screenshot"
    :features="['MCP Protocol', 'AI Integration', 'Claude Support']"
    githubUrl="https://github.com/iExecBlockchainComputing/iexec-mcp-server"
  />

<UseCaseCard
    title="Image Caption Matcher"
    description="The Image-Caption Matcher Project validates how well an image matches a textual description using Artificial Intelligence (AI)"
    :imageUrl="imageCaptionMatcher"
    imageAlt="AI Applications Demo Screenshot"
    :features="['Image Analysis', 'Text Matching', 'AI Validation']"
    githubUrl="https://github.com/iExecBlockchainComputing/image-caption-matcher-poc"
  />

<UseCaseCard
    title="Image Generator iApp"
    description="The Image Generator iApp is a Confidential Computing application that generates an image based on a provided text prompt. It leverages iExec's Trusted Execution Environments (TEE) and the CompVis/stable-diffusion-v1-4 model from Hugging Face for secure, private computation."
    :imageUrl="privateImageGenerator"
    imageAlt="AI Applications Demo Screenshot"
    :features="['Image Generation', 'Text-to-Image']"
    githubUrl="https://github.com/iExecBlockchainComputing/image-generation-poc"
  />

</div>

<script setup>
import UseCaseCard from '@/components/UseCaseCard.vue';

// Assets
import contentCreatorImage from '@/assets/use-cases/content-creator.png';
import web3MessagingImage from '@/assets/use-cases/web3-messaging.png';
import elizaosImage from '@/assets/use-cases/elizaos.png';
import mpcServer from '@/assets/use-cases/mpc-server.jpg';
import privateImageGenerator from '@/assets/use-cases/private-image-generator.png';
import imageCaptionMatcher from '@/assets/use-cases/image-caption-matcher.png';
</script>

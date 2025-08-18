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

<div class="grid grid-cols-1 gap-8 my-8">
  <UseCaseCard
    title="Content Creator"
    description="A comprehensive demo showcasing iExec's DataProtector Sharing module. Experience privacy-first data sharing where content creators can securely share their work while maintaining full control over access permissions and monetization."
    :imageUrl="contentCreatorImage"
    imageAlt="Content Creator Demo Screenshot"
    :features="['DataProtector Core', 'DataProtector Sharing']"
    demoUrl="https://demo.iex.ec/content-creator/"
    githubUrl="https://github.com/iExecBlockchainComputing/content-creator-usecase-demo"
    demoIcon="mdi:art"
  />

<UseCaseCard
    title="Web3 Messaging"
    description="Secure communication platform for Web3 users enabling privacy-preserving messaging through Web3Mail and Web3Telegram. Users maintain control over their data while enabling targeted communication and monetizing their engagement."
    :imageUrl="web3MessagingImage"
    imageAlt="Web3Messaging Demo Screenshot"
    :features="['DataProtector Core', 'Web3Mail', 'Web3Telegram']"
    demoUrl="https://demo.iex.ec/web3messaging"
    githubUrl="https://github.com/iExecBlockchainComputing/web3-messaging-usecase-demo"
    demoIcon="mdi:message-processing"
  />

<UseCaseCard
    title="AI Agent"
    description="Showcase of artificial intelligence applications running on iExec's confidential computing infrastructure. Experience privacy-preserving AI inference, machine learning model execution, and secure data analysis with TEE protection."
    :imageUrl="elizaosImage"
    imageAlt="AI Applications Demo Screenshot"
    :features="['AI', 'TEE', 'Confidential Computing']"
    githubUrl="https://github.com/iExecBlockchainComputing/iexec-elizaos-agent"
    demoIcon="mdi:brain"
  />

</div>

<script setup>
import UseCaseCard from '@/components/UseCaseCard.vue';

// Assets
import contentCreatorImage from '@/assets/use-cases/content-creator.png';
import web3MessagingImage from '@/assets/use-cases/web3-messaging.png';
import elizaosImage from '@/assets/use-cases/elizaos.png';
</script>

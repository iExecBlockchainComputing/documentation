# Use Cases Showcase

Explore our demo applications showcasing iExec's privacy-preserving technologies
in action. Each use case demonstrates real-world applications of confidential
computing and decentralized data protection.

<div class="grid grid-cols-1 gap-8 my-8">
  <UseCaseCard
    title="Content Creator"
    description="A comprehensive demo showcasing iExec's DataProtector Sharing module. Experience privacy-first data sharing where content creators can securely share their work while maintaining full control over access permissions and monetization."
    imageUrl="/assets/content-creator-screenshot.png"
    imageAlt="Content Creator Demo Screenshot"
    :features="['DataProtector Core', 'DataProtector Sharing']"
    demoUrl="https://demo.iex.ec/content-creator/"
    githubUrl="https://github.com/iExecBlockchainComputing/content-creator-usecase-demo"
    demoIcon="mdi:art"
  />

  <UseCaseCard
    title="Web3Messaging"
    description="Secure communication platform for Web3 users enabling privacy-preserving messaging through Web3Mail and Web3Telegram. Users maintain control over their data while enabling targeted communication and monetizing their engagement."
    imageUrl="/assets/web3messaging-screenshot.png"
    imageAlt="Web3Messaging Demo Screenshot"
    :features="['Web3Mail', 'Web3Telegram', 'DataProtector Core']"
    demoUrl="https://demo.iex.ec/web3messaging"
    githubUrl="https://github.com/iExecBlockchainComputing/web3-messaging-usecase-demo"
    demoIcon="mdi:message-processing"
  />
</div>

<script setup>
import UseCaseCard from '../components/UseCaseCard.vue';
</script>

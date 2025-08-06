# Use Cases Showcase

Explore our demo applications showcasing iExec's privacy-preserving technologies
in action. Each use case demonstrates real-world applications of confidential
computing and decentralized data protection.

<div class="grid grid-cols-1 gap-8 my-8">
  <UseCaseCard
    title="Content Creator"
    description="A comprehensive demo showcasing iExec's DataProtector Sharing module. Experience privacy-first data sharing where content creators can securely share their work while maintaining full control over access permissions and monetization."
    imageUrl="/assets/use-cases/content-creator.png"
    imageAlt="Content Creator Demo Screenshot"
    :features="['DataProtector Core', 'DataProtector Sharing']"
    demoUrl="https://demo.iex.ec/content-creator/"
    githubUrl="https://github.com/iExecBlockchainComputing/content-creator-usecase-demo"
    demoIcon="mdi:art"
  />

<UseCaseCard
    title="Web3 Messaging"
    description="Secure communication platform for Web3 users enabling privacy-preserving messaging through Web3Mail and Web3Telegram. Users maintain control over their data while enabling targeted communication and monetizing their engagement."
    imageUrl="/assets/use-cases/web3-messaging.png"
    imageAlt="Web3Messaging Demo Screenshot"
    :features="['DataProtector Core', 'Web3Mail', 'Web3Telegram']"
    demoUrl="https://demo.iex.ec/web3messaging"
    githubUrl="https://github.com/iExecBlockchainComputing/web3-messaging-usecase-demo"
    demoIcon="mdi:message-processing"
  />

<UseCaseCard
    title="Oracle Factory"
    description="Decentralized oracle platform providing secure and verifiable data feeds for smart contracts. Data are fetched through iApps that run on a decentralized confidential computing layer, ensuring privacy-preserving computation and access to verified external data sources for your DeFi and Web3 applications."
    imageUrl="/assets/use-cases/oracle-factory.png"
    imageAlt="OracleFactory Demo Screenshot"
    :features="['Oracle Factory']"
    demoUrl="https://oracle-factory.iex.ec/gallery"
    demoIcon="mdi:database-search"
  />

<UseCaseCard
    title="AI Agent"
    description="Showcase of artificial intelligence applications running on iExec's confidential computing infrastructure. Experience privacy-preserving AI inference, machine learning model execution, and secure data analysis with TEE protection."
    imageUrl="/assets/use-cases/elizaos.png"
    imageAlt="AI Applications Demo Screenshot"
    :features="['AI', 'TEE', 'Confidential Computing']"
    githubUrl="https://github.com/iExecBlockchainComputing/iexec-elizaos-agent"
    demoIcon="mdi:brain"
  />

</div>

<script setup>
import UseCaseCard from '../components/UseCaseCard.vue';
</script>

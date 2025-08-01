# Use Cases Showcase

Explore our demo applications showcasing iExec's privacy-preserving technologies
in action. Each use case demonstrates real-world applications of confidential
computing and decentralized data protection.

<div class="use-cases-grid">
  <div class="use-case-card">
    <div class="card-image">
      <a href="https://demo.iex.ec/content-creator/" target="_blank" rel="noreferrer">
        <img src="/assets/content-creator-screenshot.png" alt="Content Creator Demo Screenshot">
      </a>
    </div>
    <div class="card-content">
      <h3>Content Creator</h3>
      <p class="card-description">
        A comprehensive demo showcasing iExec's DataProtector Sharing module. Experience privacy-first data sharing where content creators can securely share their work while maintaining full control over access permissions and monetization.
      </p>
      <div class="card-features">
        <span class="feature-tag">DataProtector</span>
        <span class="feature-tag">Privacy-First</span>
        <span class="feature-tag">Content Sharing</span>
        <span class="feature-tag">Monetization</span>
      </div>
      <div class="card-actions">
        <a href="https://demo.iex.ec/content-creator/" target="_blank" rel="noreferrer" class="demo-link">
          <Icon icon="mdi:art" height="18" />
          Try Live Demo
        </a>
        <a href="https://github.com/iExecBlockchainComputing/content-creator-usecase-demo" target="_blank" rel="noreferrer" class="github-link">
          <Icon icon="mdi:github" height="18" />
          View Code
        </a>
      </div>
    </div>
  </div>

  <div class="use-case-card">
    <div class="card-image">
      <a href="https://demo.iex.ec/web3messaging/" target="_blank" rel="noreferrer">
        <img src="/assets/web3messaging-screenshot.png" alt="Web3Messaging Demo Screenshot">
      </a>
    </div>
    <div class="card-content">
      <h3>Web3Messaging</h3>
      <p class="card-description">
        Secure communication platform for Web3 users enabling privacy-preserving messaging through Web3Mail and Web3Telegram. Users maintain control over their data while enabling targeted communication and monetizing their engagement.
      </p>
      <div class="card-features">
        <span class="feature-tag">Web3Mail</span>
        <span class="feature-tag">Web3Telegram</span>
        <span class="feature-tag">User Consent</span>
        <span class="feature-tag">Monetization</span>
      </div>
      <div class="card-actions">
        <a href="https://demo.iex.ec/web3messaging" target="_blank" rel="noreferrer" class="demo-link">
          <Icon icon="mdi:message-processing" height="18" />
          Try Live Demo
        </a>
        <a href="https://github.com/iExecBlockchainComputing/web3-messaging-usecase-demo" target="_blank" rel="noreferrer" class="github-link">
          <Icon icon="mdi:github" height="18" />
          View Code
        </a>
      </div>
    </div>
  </div>
</div>

<style scoped>
.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.use-case-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.use-case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: var(--vp-c-brand-1);
}

.card-image {
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-image:hover img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
  font-weight: 600;
}

.card-description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature-tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--vp-c-brand-2);
}

.card-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.demo-link,
.github-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.demo-link {
  background: var(--vp-c-brand-1);
  color: white;
}

.demo-link:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

.github-link {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-border);
}

.github-link:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-text-2);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .use-cases-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .card-actions {
    flex-direction: column;
  }
  
  .demo-link,
  .github-link {
    justify-content: center;
  }
}
</style>

<script setup>
import { Icon } from '@iconify/vue';
</script>

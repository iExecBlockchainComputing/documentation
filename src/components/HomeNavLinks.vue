<script setup lang="ts">
import { useRoute } from 'vitepress';
import { computed } from 'vue';

const route = useRoute();
const isHome = computed(() => route.path === '/');
</script>

<template>
  <nav v-if="isHome" class="home-nav-links">
    <a class="VPNavBarMenuLink" href="https://docs.noxprotocol.io/"
      >Nox Protocol</a
    >
    <a class="VPNavBarMenuLink" href="/get-started/welcome">iExec PoCo</a>
  </nav>
</template>

<style scoped>
.home-nav-links {
  display: flex;
  align-items: center;
}

/* Match VitePress's default .VPNavBarMenuLink exactly */
.VPNavBarMenuLink {
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.VPNavBarMenuLink:hover {
  color: var(--vp-c-brand-1);
}
</style>

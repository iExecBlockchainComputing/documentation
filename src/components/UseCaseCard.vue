<template>
  <div class="bg-soft-bg border group border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary shadow-md">
    <!-- Image -->
    <div class="relative overflow-hidden group">
      <a :href="demoUrl" target="_blank" rel="noreferrer">
        <img 
          :src="imageUrl" 
          :alt="imageAlt"
          class="w-full max-h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
        >
      </a>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <h3 class="text-text1 text-2xl font-semibold mb-4 mt-0!">{{ title }}</h3>
      <p class="text-text2 leading-relaxed mb-6 text-sm">{{ description }}</p>
      
      <!-- Feature Tags -->
      <div class="flex flex-wrap gap-2 mb-6">
        <Badge 
          v-for="feature in features" 
          :key="feature" 
          :label="feature" 
          variant="primary"
        />
      </div>
      
      <!-- Actions -->
      <div class="flex gap-4 flex-wrap">
        <Button 
          as="a"
          :href="demoUrl" 
          target="_blank" 
          rel="noreferrer"
        >
          <Icon :icon="demoIcon" height="18" />
          Try Live Demo
        </Button>
        <Button 
          as="a"
          :href="githubUrl" 
          target="_blank" 
          rel="noreferrer" 
          variant="secondary"
        >
          <Icon icon="mdi:github" height="18" />
          View Code
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Badge from './Badge.vue';
import Button from './ui/Button.vue';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  features: string[];
  demoUrl: string;
  githubUrl: string;
  demoIcon: string;
}

defineProps<Props>();
</script>

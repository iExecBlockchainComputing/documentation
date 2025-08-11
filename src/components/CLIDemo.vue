<template>
  <div class="my-8">
    <div class="overflow-hidden rounded-lg bg-gray-900 font-mono shadow-2xl">
      <!-- Terminal Header -->
      <div class="flex items-center gap-3 bg-gray-800 px-4 py-3">
        <div class="flex gap-2">
          <div class="h-3 w-3 rounded-full bg-red-500"></div>
          <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div class="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div class="text-sm font-medium text-gray-400">Terminal</div>
      </div>

      <!-- Terminal Content -->
      <div
        class="max-h-96 overflow-y-auto p-5 text-sm leading-relaxed text-white"
        ref="terminalContent"
      >
        <!-- Initial Command -->
        <div class="mb-2">
          <span class="font-bold text-green-400">$ </span>
          <span class="ml-1 text-white">iapp init</span>
        </div>

        <!-- ASCII Art -->
        <div v-if="showStep >= 1" class="my-4 font-mono text-xs text-blue-400">
          <pre>{{ asciiArt }}</pre>
        </div>

        <!-- Project Name Question -->
        <div
          v-if="showStep >= 2"
          class="animate-fade-in my-4 flex flex-wrap items-center gap-2"
        >
          <span class="font-bold text-green-400">✔</span>
          <span class="text-white"
            >What's your project name? (A folder with this name will be
            created)</span
          >
          <span class="text-gray-500">…</span>
          <span
            v-if="showStep >= 3"
            class="font-medium text-yellow-400"
            >{{ typedProjectName }}</span
          >
          <span
            v-if="showStep >= 3 && typedProjectName.length < 'hello-world'.length"
            class="animate-blink inline-block h-4 w-0.5 bg-yellow-400 ml-0.5"
          ></span>
        </div>

        <!-- Language Question -->
        <div
          v-if="showStep >= 4"
          class="animate-fade-in my-4 flex flex-wrap items-center gap-2"
        >
          <span class="font-bold" :class="showStep >= 6 ? 'text-green-400' : 'text-blue-400'">
            {{ showStep >= 6 ? '✔' : '?' }}
          </span>
          <span class="text-white">Which language do you want to use?</span>
          <span v-if="showStep >= 6" class="font-medium text-yellow-400 ml-2">JavaScript</span>
        </div>

        <div v-if="showStep >= 4 && showStep < 6" class="animate-fade-in mb-2 ml-5">
          <div
            class="flex items-center gap-1 py-0.5 transition-all duration-200"
            :class="{
              '-mx-2 animate-pulse rounded bg-blue-400/10 px-2':
                showStep >= 5 && selectedLanguage === 'JavaScript',
            }"
          >
            <span class="w-3 font-bold text-blue-400">❯</span>
            <span class="text-white">JavaScript</span>
          </div>
          <div class="flex items-center gap-1 py-0.5">
            <span class="w-3 font-bold text-blue-400">&nbsp;</span>
            <span class="text-white">Python</span>
          </div>
        </div>

        <!-- Project Type Question -->
        <div
          v-if="showStep >= 6"
          class="animate-fade-in my-4 flex flex-wrap items-center gap-2"
        >
          <span class="font-bold" :class="showStep >= 8 ? 'text-green-400' : 'text-blue-400'">
            {{ showStep >= 8 ? '✔' : '?' }}
          </span>
          <span class="text-white"
            >What kind of project do you want to init?</span
          >
          <span v-if="showStep >= 8" class="font-medium text-yellow-400 ml-2">Hello World</span>
        </div>

        <div v-if="showStep >= 6 && showStep < 8" class="animate-fade-in mb-4 ml-5">
          <div
            class="flex items-center gap-1 py-0.5 transition-all duration-200"
            :class="{
              '-mx-2 animate-pulse rounded bg-blue-400/10 px-2': showStep >= 7,
            }"
          >
            <span class="w-3 font-bold text-blue-400">❯</span>
            <span class="text-white">Hello World - iapp quick start</span>
          </div>
          <div class="flex items-center gap-1 py-0.5">
            <span class="w-3 font-bold text-blue-400">&nbsp;</span>
            <span class="text-white">advanced</span>
          </div>
        </div>

        <!-- Completion Message -->
        <div
          v-if="showStep >= 8"
          class="animate-fade-in mt-4 border-t border-gray-700 pt-3"
        >
          <div class="mb-2 flex items-center gap-2">
            <span class="font-bold text-green-400">✨</span>
            <span class="font-medium text-green-400"
              >Generating your iApp...</span
            >
          </div>
          <div class="ml-5 space-y-1 text-xs text-gray-400">
            <div>📁 Created hello-world/</div>
            <div>📄 Added package.json</div>
            <div>🐳 Added Dockerfile</div>
            <div>⚙️ Added iExec configuration</div>
          </div>
          <div class="mt-2 flex items-center gap-2">
            <span class="font-bold text-green-400">✅</span>
            <span class="font-medium text-green-400">Your iApp is ready!</span>
          </div>
        </div>

        <!-- Cursor -->
        <div
          v-if="showStep < TOTAL_STEPS"
          class="animate-blink ml-1 inline-block h-4 w-2 bg-green-400"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Constants
const STEP_DELAY = 1200;
const TOTAL_STEPS = 9;
const RESTART_DELAY = 3000;
const TYPING_SPEED = 120;

const asciiArt = `
  ___    _    ____  ____
 |_ _|  / \  |  _ \|  _ \\
  | |  / _ \ | |_) | |_) |
  | | / ___ \|  __/|  __/
 |___/_/   \_\\_|   |_|`;

// Reactive state
const showStep = ref(0);
const selectedLanguage = ref('JavaScript');
const terminalContent = ref<HTMLElement | null>(null);
const typedProjectName = ref('');

// Timers
let animationTimer: NodeJS.Timeout | null = null;
let typingTimer: NodeJS.Timeout | null = null;

// Typing animation for project name
const typeProjectName = () => {
  const fullName = 'hello-world';
  let currentIndex = 0;
  
  const typeNextChar = () => {
    if (currentIndex < fullName.length) {
      typedProjectName.value = fullName.substring(0, currentIndex + 1);
      currentIndex++;
      typingTimer = setTimeout(typeNextChar, TYPING_SPEED);
    }
  };
  
  typeNextChar();
};

// Auto-scroll to bottom
const scrollToBottom = () => {
  if (terminalContent.value) {
    terminalContent.value.scrollTop = terminalContent.value.scrollHeight;
  }
};

// Main animation loop
const animate = () => {
  let currentStep = 0;

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      showStep.value = currentStep + 1;
      currentStep++;

      // Start typing animation at step 3
      if (currentStep === 3) {
        typeProjectName();
      }

      scrollToBottom();

      if (currentStep < TOTAL_STEPS) {
        animationTimer = setTimeout(nextStep, STEP_DELAY);
      } else {
        // Auto-restart after completion
        animationTimer = setTimeout(() => {
          showStep.value = 0;
          typedProjectName.value = '';
          animate();
        }, RESTART_DELAY);
      }
    }
  };

  animationTimer = setTimeout(nextStep, STEP_DELAY);
};

// Cleanup timers
const cleanup = () => {
  if (animationTimer) clearTimeout(animationTimer);
  if (typingTimer) clearTimeout(typingTimer);
};

onMounted(() => {
  animate();
});

onUnmounted(cleanup);
</script>

<template>
  <div
    class="relative mb-4 flex flex-col items-center text-white"
    ref="dropdownRef"
  >
    <!-- Split button: main button + dropdown trigger -->
    <div
      class="flex h-9 cursor-pointer rounded-full bg-neutral-800 text-sm font-medium shadow-md"
    >
      <!-- Main button - launches ChatGPT directly -->
      <a
        class="flex items-center rounded-l-full px-3 duration-200 hover:bg-neutral-700"
        :href="chatGPTLink"
        target="_blank"
        rel="noopener"
      >
        <img
          src="/assets/icons/chatgpt.svg"
          alt="ChatGPT"
          class="mr-2 h-6 w-6"
        />
        Ask in ChatGPT
      </a>

      <!-- Dropdown trigger button -->
      <button
        class="flex w-6 items-center justify-center rounded-r-full border-l border-white/10 p-0 duration-200 hover:bg-neutral-700!"
        @click.stop="toggleDropdown"
        aria-label="More options"
      >
        <Icon
          :class="{ 'rotate-180': isDropdownOpen }"
          class="transition-transform duration-200"
          icon="ep:arrow-down"
          height="12"
          width="12"
        />
      </button>
    </div>

    <!-- Dropdown menu -->
    <div
      class="absolute top-full z-[1000] mt-2 min-w-[280px] rounded-xl border border-neutral-700 bg-neutral-800 shadow-2xl"
      v-show="isDropdownOpen"
    >
      <a
        class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-neutral-300 transition-all duration-200 hover:bg-neutral-700 hover:text-white focus:outline-none active:bg-neutral-600 active:text-white"
        :href="chatGPTLink"
        target="_blank"
        rel="noopener"
        @click="closeDropdown"
      >
        <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center">
          <img
            src="/assets/icons/chatgpt.svg"
            alt="ChatGPT"
            class="h-auto max-w-[80%]"
          />
        </div>
        <div class="flex flex-1 flex-col gap-0.5">
          <div class="text-sm font-medium">Open in ChatGPT</div>
          <div class="text-xs leading-tight text-neutral-400">
            Ask questions about this page
          </div>
        </div>
        <Icon
          class="flex-shrink-0 text-neutral-500 transition-colors duration-200 group-hover:text-neutral-400"
          icon="ep:arrow-right"
          height="16"
          width="16"
        />
      </a>

      <a
        class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-neutral-300 transition-all duration-200 hover:bg-neutral-700 hover:text-white focus:outline-none active:bg-neutral-600 active:text-white"
        :href="claudeLink"
        target="_blank"
        rel="noopener"
        @click="closeDropdown"
      >
        <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center">
          <img
            src="/assets/icons/anthropic.svg"
            alt="Anthropic"
            class="h-auto max-w-[80%]"
          />
        </div>
        <div class="flex flex-1 flex-col gap-0.5">
          <div class="text-sm font-medium">Open in Claude</div>
          <div class="text-xs leading-tight text-neutral-400">
            Ask questions about this page
          </div>
        </div>
        <Icon
          class="flex-shrink-0 text-neutral-500 transition-colors duration-200 group-hover:text-neutral-400"
          icon="ep:arrow-right"
          height="16"
          width="16"
        />
      </a>

      <button
        class="flex w-full items-center gap-3 rounded-xl px-4! py-3! text-left text-neutral-300 transition-all duration-200 hover:bg-neutral-700! focus:outline-none active:bg-neutral-600! disabled:cursor-not-allowed disabled:opacity-50"
        @click="copyPageContent"
        :disabled="isCopying"
      >
        <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center">
          <Icon
            class="h-auto max-w-[80%]"
            icon="ep:copy-document"
            height="20"
            width="20"
          />
        </div>
        <div class="flex flex-1 flex-col gap-0.5">
          <div class="text-sm font-medium">
            {{ isCopying ? 'Copied!' : 'Copy page' }}
          </div>
          <div class="text-xs leading-tight text-neutral-400">
            Copy page as Markdown for LLMs
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vitepress';
import TurndownService from 'turndown';
import { Icon } from '@iconify/vue';

const route = useRoute();
const dropdownRef = ref(null);
const isDropdownOpen = ref(false);
const isCopying = ref(false);

// Initialize handleClickOutside ref
const handleClickOutsideRef = ref(null);

const chatGPTLink = computed(() => {
  const fullUrl = `https://tools.docs.iex.ec${route.path}`;
  const prompt = `Please research and analyze this page: ${fullUrl} so I can ask you questions about it. Once you have read it, prompt me with any questions I have. Do not post content from the page in your response. Any of my follow up questions must reference the site I gave you.`;
  return `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`;
});

const claudeLink = computed(() => {
  const fullUrl = `https://tools.docs.iex.ec${route.path}`;
  const prompt = `Please research and analyze this page: ${fullUrl} so I can ask you questions about it. Once you have read it, prompt me with any questions I have. Do not post content from the page in your response. Any of my follow up questions must reference the site I gave you.`;
  return `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const copyPageContent = async () => {
  isCopying.value = true;

  const turndownService = new TurndownService();
  const mainContent = document.querySelector('.vp-doc');
  const markdown = turndownService.turndown(mainContent);

  await navigator.clipboard.writeText(markdown);

  await new Promise((resolve) => setTimeout(resolve, 800));

  isCopying.value = false;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    closeDropdown();
  }
};

onMounted(() => {
  handleClickOutsideRef.value = handleClickOutside;
  document.addEventListener('click', handleClickOutsideRef.value);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutsideRef.value);
});
</script>

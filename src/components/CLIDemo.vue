<template>
  <div class="my-8">
    <div
      class="h-96 w-full overflow-hidden rounded-lg bg-gray-900 font-mono shadow-2xl"
    >
      <!-- Terminal Header -->
      <div
        class="flex items-center gap-3 border-b border-gray-700 bg-gray-800 px-4 py-3"
      >
        <div class="flex gap-2">
          <div class="h-3 w-3 rounded-full bg-red-500"></div>
          <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div class="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div class="text-sm font-medium text-gray-400">Terminal</div>
      </div>

      <!-- Terminal Content -->
      <div
        class="h-80 overflow-x-hidden overflow-y-auto p-5 text-sm leading-relaxed text-white"
        ref="terminalContent"
      >
        <!-- Initial Command -->
        <div class="mb-2">
          <span class="font-bold text-green-400">$ </span>
          <span class="ml-1 text-white">{{ initialCommand }}</span>
        </div>

        <!-- ASCII Art -->
        <div
          v-if="displayAsciiArt"
          class="my-2 font-mono text-xs text-blue-400"
        >
          <pre>{{ displayAsciiArt }}</pre>
        </div>

        <!-- Dynamic Steps -->
        <template v-for="(step, index) in steps" :key="index">
          <!-- Question/Step -->
          <div
            v-if="showStep >= step.showAt"
            class="animate-fade-in my-2 flex items-start gap-2"
          >
            <span
              class="mt-0.5 flex-shrink-0 font-bold"
              :class="step.isComplete ? 'text-green-400' : 'text-blue-400'"
            >
              {{ step.isComplete ? '✔' : '?' }}
            </span>
            <div class="flex-1">
              <span class="text-white">{{ step.question }}</span>
              <!-- Show typed text if currently typing -->
              <span
                v-if="
                  step.answer &&
                  step.showTyping &&
                  showStep > step.showAt &&
                  (typedAnswers[index] || '').length < step.answer.length
                "
                class="ml-2 font-medium text-yellow-400"
                >{{ typedAnswers[index] || '' }}</span
              >
              <!-- Show full answer if typing is done or no typing animation -->
              <span
                v-else-if="
                  step.answer &&
                  showStep > step.showAt &&
                  (!step.showTyping ||
                    (typedAnswers[index] || '').length >= step.answer.length)
                "
                class="ml-2 font-medium text-yellow-400"
                >{{ step.answer }}</span
              >
              <!-- Typing cursor -->
              <span
                v-if="
                  step.showTyping &&
                  step.answer &&
                  showStep > step.showAt &&
                  (typedAnswers[index] || '').length < step.answer.length
                "
                class="animate-blink ml-0.5 inline-block h-4 w-0.5 bg-yellow-400"
              ></span>
            </div>
          </div>

          <!-- Options for selection steps -->
          <div
            v-if="
              step.options &&
              showStep >= step.showAt &&
              step.completeAt &&
              showStep < step.completeAt
            "
            class="animate-fade-in mb-1 ml-5"
          >
            <div
              v-for="(option, optIndex) in step.options"
              :key="optIndex"
              class="flex items-center gap-1 py-0.5 transition-all duration-200"
              :class="{
                '-mx-2 animate-pulse rounded bg-blue-400/10 px-2':
                  step.highlighted && option.selected,
              }"
            >
              <span class="w-3 font-bold text-blue-400">{{
                option.selected ? '❯' : '\u00A0'
              }}</span>
              <span class="text-white">{{ option.label }}</span>
            </div>
          </div>
        </template>

        <!-- Completion Message -->
        <div
          v-if="showStep >= completionStep"
          class="animate-fade-in mt-2 mb-4 border-t border-gray-700 pt-2"
        >
          <div class="mb-2 flex items-center gap-2">
            <span class="font-bold text-green-400">✨</span>
            <span class="font-medium text-green-400">{{
              completionMessage
            }}</span>
          </div>
          <div class="ml-5 space-y-0.5 text-xs text-gray-400">
            <div v-for="(item, index) in completionItems" :key="index">
              {{ item }}
            </div>
          </div>
          <div class="mt-2 flex items-center gap-2">
            <span class="font-bold text-green-400">✅</span>
            <span class="font-medium text-green-400">{{ successMessage }}</span>
          </div>
        </div>

        <!-- Cursor (only show if not completed) -->
        <div
          v-if="showStep < totalSteps && showStep < completionStep"
          class="animate-blink ml-1 inline-block h-4 w-2 bg-green-400"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue';
import figlet from 'figlet';

// Props interface
interface CLIProps {
  initialCommand?: string;
  asciiText?: string;
  steps?: CLIStep[];
  completionStep?: number;
  completionMessage?: string;
  completionItems?: string[];
  successMessage?: string;
  autoStart?: boolean;
  autoRestart?: boolean;
}

interface CLIStep {
  showAt: number;
  completeAt?: number;
  question: string;
  answer?: string;
  options?: CLIOption[];
  highlighted?: boolean;
  showTyping?: boolean;
  isComplete?: boolean;
}

interface CLIOption {
  label: string;
  selected: boolean;
}

// Props with defaults
const props = withDefaults(defineProps<CLIProps>(), {
  initialCommand: 'iapp init',
  steps: () => [],
  completionStep: 8,
  completionMessage: 'Process completed',
  completionItems: () => [],
  successMessage: 'Ready!',
  autoStart: true,
  autoRestart: true,
});

// Constants
const TYPING_SPEED = 120;
const RESTART_DELAY = 3000;

// Computed values
const totalSteps = computed(
  () => Math.max(...props.steps.map((s) => s.showAt), props.completionStep) + 1
);

// Generate ASCII art using figlet
const displayAsciiArt = computed(() => {
  // Only generate ASCII art if asciiText prop is provided and not empty
  if (props.asciiText && props.asciiText.trim()) {
    try {
      return figlet.textSync(props.asciiText.trim(), { font: 'Standard' });
    } catch (error) {
      console.warn('Figlet error:', error);
      return ''; // Return empty string on error
    }
  }
  return ''; // Return empty string if no asciiText provided
});

// Reactive state
const showStep = ref(0);
const terminalContent = ref<HTMLElement | null>(null);
const typedAnswers = ref<Record<number, string>>({});

// Timers
let animationTimer: NodeJS.Timeout | null = null;
let typingTimer: NodeJS.Timeout | null = null;

// Typing animation
const typeText = (text: string, stepIndex: number, onComplete?: () => void) => {
  let currentIndex = 0;
  typedAnswers.value[stepIndex] = '';

  const typeNextChar = () => {
    if (currentIndex < text.length) {
      typedAnswers.value[stepIndex] = text.substring(0, currentIndex + 1);
      currentIndex++;
      scrollToBottom(); // Scroll after each character
      typingTimer = setTimeout(typeNextChar, TYPING_SPEED);
    } else {
      // Typing finished, update completion status and call callback
      updateStepCompletion();
      scrollToBottom(); // Scroll after typing completion
      if (onComplete) {
        setTimeout(onComplete, 500); // Small delay before next step
      }
    }
  };

  typeNextChar();
};

// Auto-scroll to bottom (always scroll when content changes)
const scrollToBottom = () => {
  if (terminalContent.value) {
    // Use nextTick to ensure DOM is updated before scrolling
    nextTick(() => {
      if (terminalContent.value) {
        terminalContent.value.scrollTop = terminalContent.value.scrollHeight;
      }
    });
  }
};

// Update step completion status
const updateStepCompletion = () => {
  props.steps.forEach((step, index) => {
    // For typing steps, only mark complete when typing is finished
    if (step.completeAt && showStep.value >= step.completeAt) {
      if (step.showTyping && step.answer) {
        // Only mark complete if typing is finished
        const typedAnswer = typedAnswers.value[index] || '';
        if (typedAnswer.length >= step.answer.length) {
          step.isComplete = true;
        }
      } else {
        step.isComplete = true;
      }
    }
    if (step.highlighted !== undefined && step.options && step.completeAt) {
      step.highlighted = showStep.value >= step.completeAt - 1;
    }
  });
};

// Main animation loop
const animate = () => {
  let currentStep = 0;

  const nextStep = () => {
    if (currentStep < totalSteps.value) {
      showStep.value = currentStep + 1;
      currentStep++;
      scrollToBottom(); // Scroll when new step is shown

      // Find if this step needs typing animation
      const typingStep = props.steps.find(
        (s) => s.showTyping && s.answer && showStep.value === s.showAt + 1
      );

      if (typingStep && typingStep.answer) {
        // Start typing animation with callback for next step
        const stepIndex = props.steps.findIndex((s) => s === typingStep);
        setTimeout(() => {
          typeText(typingStep.answer!, stepIndex, () => {
            // Continue to next step after typing is complete
            if (currentStep < totalSteps.value) {
              animationTimer = setTimeout(nextStep, 1000);
            } else if (props.autoRestart) {
              // Auto-restart after completion
              animationTimer = setTimeout(() => {
                showStep.value = 0;
                typedAnswers.value = {};
                animate();
              }, RESTART_DELAY);
            }
          });
        }, 200);
      } else {
        // No typing, just update completion and continue
        updateStepCompletion();
        scrollToBottom();

        if (currentStep < totalSteps.value) {
          // Fixed delay for non-typing steps
          animationTimer = setTimeout(nextStep, 2000);
        } else if (props.autoRestart) {
          // Auto-restart after completion
          animationTimer = setTimeout(() => {
            showStep.value = 0;
            typedAnswers.value = {};
            animate();
          }, RESTART_DELAY);
        }
      }

      scrollToBottom();
    }
  };

  animationTimer = setTimeout(nextStep, 1000);
};

// Cleanup timers
const cleanup = () => {
  if (animationTimer) clearTimeout(animationTimer);
  if (typingTimer) clearTimeout(typingTimer);
};

// Watch for prop changes to restart animation
watch(
  () => props.initialCommand,
  () => {
    if (props.autoStart) {
      cleanup();
      showStep.value = 0;
      typedAnswers.value = {};
      animate();
    }
  }
);

onMounted(() => {
  if (props.autoStart) {
    animate();
  }
});

onUnmounted(cleanup);
</script>

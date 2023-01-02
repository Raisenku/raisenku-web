<script setup lang="ts">
import type { FunctionalComponent } from "vue";

defineProps<{
  endIcon?: FunctionalComponent;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    class="p-4 w-fit border-2 border-primary-base text-primary-base rounded text-lg flex items-center gap-2"
    @click="emit('click')"
  >
    <span><slot /></span>
    <component v-if="endIcon" :is="endIcon" class="w-6 h-6" />
  </button>
</template>

<script setup lang="ts">
import { useCoreLang } from "@/composables/lang";
import Button from "../atoms/Button.vue";
import { PlayCircleIcon } from "@heroicons/vue/24/solid";

const { t } = useCoreLang();
</script>

<template>
  <div class="flex gap-4">
    <Button :endIcon="PlayCircleIcon">{{ t("actions.experience") }}</Button>
  </div>
</template>

<script setup lang="ts">
import { useCoreLang } from "@/composables/lang";

const { t } = useCoreLang();
</script>

<template>
  <main class="text-primary-base">{{ t("welcome") }}</main>
</template>

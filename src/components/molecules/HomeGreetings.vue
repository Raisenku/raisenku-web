<script setup lang="ts">
import { useCoreLang } from "@/composables/lang";

const { t } = useCoreLang();
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-primary-base text-5xl">{{ t("welcome") }}</h1>
    <h2 class="text-primary-base text-4xl">{{ t("greetings") }}</h2>
    <h3 class="text-primary-base text-2xl">{{ t("whoAmI") }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useCoreLang } from "@/composables/lang";
import { GlobeAltIcon } from "@heroicons/vue/24/solid";
import { useI18n } from "vue-i18n";

const { locale } = useI18n({
  useScope: "global",
});

function changeLanguage() {
  locale.value = locale.value === "en" ? "fr" : "en";
}
</script>

<template>
  <div class="cursor-pointer" @click="changeLanguage">
    <GlobeAltIcon class="w-10 h-10 text-primary-base" />
  </div>
</template>

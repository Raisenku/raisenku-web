<script setup lang="ts">
import { RouterView } from "vue-router";
import Overlay from "./components/organisms/Overlay.vue";
</script>

<template>
  <div>
    <RouterView />
  </div>

  <Overlay />
</template>

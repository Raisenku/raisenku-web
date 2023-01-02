<script setup lang="ts">
import HomeActions from "@/components/molecules/HomeActions.vue";
import HomeGreetings from "@/components/molecules/HomeGreetings.vue";
</script>

<template>
  <main class="w-full h-screen flex items-center justify-center">
    <div class="p-4 flex flex-col gap-8">
      <HomeGreetings class="max-w-4xl" />
      <HomeActions />
    </div>
  </main>
</template>

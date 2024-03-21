<template>
  <main class="flex flex-col items-center px-4">
    <ReferenceSection />
    <hr class="my-5 w-full">
    <PublicationsSection />
  </main>
</template>

<script setup lang="ts">
import PublicationsSection from './components/PublicationsSection.vue';
import ReferenceSection from './components/ReferenceSection.vue';
</script>

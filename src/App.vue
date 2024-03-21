<template>
  <div class="flex flex-col">
    <HeaderComponent class="w-full" />
    <main class="flex flex-col items-center px-4 flex-1 py-5">
      <ReferenceSection />
      <hr class="my-5 w-full">
      <PublicationsSection />
    </main>
    <footer class="shadow border-t border-gray-100 py-2">
      <p class="text-center">
        &copy; 2024 JPlag
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import PublicationsSection from './components/PublicationsSection.vue';
import ReferenceSection from './components/ReferenceSection.vue';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

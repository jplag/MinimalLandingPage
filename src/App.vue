<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent class="w-full mt-0 md:hidden" />
    <main class="flex flex-col items-center px-4 flex-1 py-5 md:mt-2">
      <ReferenceSection />
      <hr class="my-5 w-full">
      <PublicationsSection class="md:max-w-[90%] md:min-w-[960px]" />
      <hr class="my-5 w-full">
      <SurveySection class="md:max-w-[90%] md:min-w-[960px]" />
    </main>
    <footer class="shadow border-t border-gray-100 py-2 relative bottom-0">
      <p class="ml-2">
        &copy; 2025 JPlag
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import PublicationsSection from './components/PublicationsSection.vue';
import ReferenceSection from './components/ReferenceSection.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import SurveySection from './components/SurveySection.vue';
</script>

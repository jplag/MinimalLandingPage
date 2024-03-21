<template>
  <header class="sticky top-0 min-h-10 max-h-40 overflow-hidden shadow duration-300 bg-white"
    :class="scrolled ? 'h-10' : 'h-40'"
  >
    <img
      class="max-h-full mx-auto"
      src="https://raw.githubusercontent.com/jplag/JPlag/develop/report-viewer/src/assets/jplag-dark-transparent.png"
      alt="Header image"
    />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const scrolled = ref(false);

window.addEventListener('scroll', () => {
  if (!scrolled.value && window.scrollY > 0) {
    scrolled.value = true;
  } 
})
</script>
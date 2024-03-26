<template>
  <div class="w-fit max-w-32">
    <a
    :href="referenceLink.url"
    class="font-light h-40 flex flex-col items-center text-center text-link hover:text-link-hover visited:text-link-visited active:text-link-clicked underline"
  >
    <div class="flex-1 flex flex-col justify-center">
      <img 
      class="max-h-32 object-cover"
      :class="{
        'rounded-full w-32': forceCircle
      }"
      :src="referenceLink.image" 
      :alt="referenceLink.alt ?? referenceLink.title" 
    />
    </div>
      
    
    <b>
      {{ referenceLink.title }}
    </b>
  </a>
  </div>
</template>

<script setup lang="ts">
import type { ReferenceLink } from '@/model/referenceLink'
import type { PropType } from 'vue';

defineProps({
  referenceLink: {
    type: Object as PropType<ReferenceLink>,
    required: true
  },
  forceCircle: {
    type: Boolean,
    default: true,
    required: false
  }
})
</script>
<template>
  <div>
    <a
    :href="publicationLink.url"
    class="font-light"
  >
    <b>{{ publicationLink.title }}</b> <br />
    {{ publicationLink.authors.join(', ') }} <br /> 
    <i>{{ publicationLink.venue }}</i>, {{ publicationLink.year }} <br />
    <button class="border rounded-sm border-black px-2 mt-1">
      PDF
    </button>
  </a>
  </div>
  
  
</template>

<script setup lang="ts">
import type { PublicationsLink } from '@/model/publicationsLink'
import type { PropType } from 'vue'

defineProps({
  publicationLink: {
    type: Object as PropType<PublicationsLink>,
    required: true
  }
})
</script>

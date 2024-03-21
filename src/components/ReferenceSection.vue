<template>
  <section class="flex flex-col gap-5 md:flex-row w-fit md:gap-20">
    <ReferenceLinkComponent
      v-for="referenceLink in referenceLinks"
      :key="referenceLink.title"
      :referenceLink="referenceLink"
    />
  </section>
</template>

<script setup lang="ts">
import type { ReferenceLink } from '@/model/referenceLink'
import ReferenceLinkComponent from './ReferenceLinkComponent.vue'
import jplagLogo from '@/assets/JPlag.png'
import helmholtzLogo from '@/assets/helmholtz.jpg'
import githubLogo from '@/assets/github.png'

const referenceLinks: ReferenceLink[] = [
  {
    url: 'https://jplag.github.io/Demo/',
    title: 'JPlag Demo',
    image: jplagLogo,
    alt: 'JPlag logo for link to Demo page'
  },
  {
    url: 'https://helmholtz.software/software/jplag',
    title: 'Helmholtz RSD',
    image: helmholtzLogo,
    alt: 'Helmholtz logo for link to RSD page'
  },
  {
    url: 'https://www.github.com/jplag/JPlag',
    title: 'Github',
    image: githubLogo,
    alt: 'Github logo for link to JPlag repository'
  }
]
</script>
<template>
  <section class="flex w-fit flex-col gap-5 md:flex-row md:gap-20 items-center">
    <ReferenceLinkComponent
      v-for="referenceLink in referenceLinks"
      :key="referenceLink[0].title"
      :referenceLink="referenceLink[0]"
      :forceCircle="referenceLink[1]"
    />
  </section>
</template>

<script setup lang="ts">
import type { ReferenceLink } from '@/model/referenceLink'
import ReferenceLinkComponent from './ReferenceLinkComponent.vue'
import helmholtzLogo from '@/assets/helmholtz.jpg'
import githubLogo from '@/assets/github.png'

const referenceLinks: [ReferenceLink, boolean][] = [
  [{
    url: 'https://jplag.github.io/Demo/',
    title: 'JPlag Demo',
    image: 'https://raw.githubusercontent.com/jplag/JPlag/develop/report-viewer/src/assets/jplag-dark-transparent.png',
    alt: 'JPlag logo for link to Demo page'
  }, false],
  [{
    url: 'https://helmholtz.software/software/jplag',
    title: 'Helmholtz RSD',
    image: helmholtzLogo,
    alt: 'Helmholtz logo for link to RSD page'
  }, true],
  [{
    url: 'https://www.github.com/jplag/JPlag',
    title: 'Github',
    image: githubLogo,
    alt: 'Github logo for link to JPlag repository'
  }, false]
]
</script>

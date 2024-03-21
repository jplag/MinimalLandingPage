<template>
  <section class="px-4">
    <h2 class="text-2xl pb-2">Recent Publications:</h2>
    <hr class="pb-2">
    <p class="space-y-3">
      <PublicationLinkComponent
        v-for="publicationLink in publicationLinks"
        :key="publicationLink.title"
        :publicationLink="publicationLink"
      />
    </p>
  </section>
</template>

<script setup lang="ts">
import type { PublicationsLink } from '@/model/publicationsLink'
import PublicationLinkComponent from './PublicationLinkComponent.vue'

const publicationLinks: PublicationsLink[] = [
  {
    url: '',
    title: 'Obfuscation-Resilient Software Plagiarism Detection with JPlag',
    authors: ['Timur Sağlam', 'Sebastian Hahner', 'Larissa Schmid', 'Erik Burger'],
    venue:
      '2024 IEEE/ACM 46th International Conference on Software Engineering: Companion Proceedings (ICSE-Companion ’24)',
    year: 2024
  },
  {
    url: '',
    title: 'Detecting Automatic Software Plagiarism via Token Sequence Normalization',
    authors: ['Timur Sağlam', 'Moritz Brödel', 'Larissa Schmid', 'Sebastian Hahner'],
    venue: '2024 IEEE/ACM 46th International Conference on Software Engineering (ICSE ’24)',
    year: 2024
  },
  {
    url: '',
    title: 'Automated Detection of AI-Obfuscated Plagiarism in Modeling Assignments',
    authors: ['Timur Sağlam', 'Sebastian Hahner', 'Larissa Schmid', 'Erik Burger'],
    venue:
      '46th International Conference on Software Engineering: Software Engineering Education and Training (ICSE-SEET ’24)',
    year: 2024
  },
  {
    url: '',
    title: 'How Students Plagiarize Modeling Assignments',
    authors: ['Timur Sağlam', 'Larissa Schmid', 'Sebastian Hahner', 'Erik Burger'],
    venue:
      '2023 ACM/IEEE International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C)',
    year: 2023
  },
  {
    url: '',
    title: 'Token-based plagiarism detection for metamodels',
    authors: ['Timur Sağlam', 'Sebastian Hahner', 'Jan Willem Wittler', 'Thomas Kühn'],
    venue:
      '25th International Conference on Model Driven Engineering Languages and Systems: Companion Proceedings',
    year: 2022
  }
]
</script>

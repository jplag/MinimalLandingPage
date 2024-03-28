<template>
  <section>
    <h2 class="text-2xl pb-2">Recent Publications:</h2>
    <hr class="pb-2 md:mx-[-1rem]">
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
    url: 'https://publikationen.bibliothek.kit.edu/1000167858/152125267',
    title: 'Obfuscation-Resilient Software Plagiarism Detection with JPlag',
    authors: ['Timur Sağlam', 'Sebastian Hahner', 'Larissa Schmid', 'Erik Burger'],
    venue:
      '2024 IEEE/ACM 46th International Conference on Software Engineering: Companion Proceedings (ICSE-Companion ’24)',
    year: 2024
  },
  {
    url: 'https://publikationen.bibliothek.kit.edu/1000167588/152076500',
    title: 'Detecting Automatic Software Plagiarism via Token Sequence Normalization',
    authors: ['Timur Sağlam', 'Moritz Brödel', 'Larissa Schmid', 'Sebastian Hahner'],
    venue: '2024 IEEE/ACM 46th International Conference on Software Engineering (ICSE ’24)',
    year: 2024
  },
  {
    url: 'https://publikationen.bibliothek.kit.edu/1000167587/152076406',
    title: 'Automated Detection of AI-Obfuscated Plagiarism in Modeling Assignments',
    authors: ['Timur Sağlam', 'Sebastian Hahner', 'Larissa Schmid', 'Erik Burger'],
    venue:
      '46th International Conference on Software Engineering: Software Engineering Education and Training (ICSE-SEET ’24)',
    year: 2024
  },
  {
    url: 'https://doi.org/10.1109/MODELS-C59198.2023.00032',
    title: 'How Students Plagiarize Modeling Assignments',
    authors: ['Timur Sağlam', 'Larissa Schmid', 'Sebastian Hahner', 'Erik Burger'],
    venue:
      '2023 ACM/IEEE International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C)',
    year: 2023
  },
  {
    url: 'https://doi.org/10.1145/3550356.3556508',
    title: 'Token-based plagiarism detection for metamodels',
    authors: ['Timur Sağlam', 'Sebastian Hahner', 'Jan Willem Wittler', 'Thomas Kühn'],
    venue:
      '25th International Conference on Model Driven Engineering Languages and Systems: Companion Proceedings',
    year: 2022
  }
]
</script>

<template>
  <section>
    <h2 class="text-2xl pb-2">Have you used JPlag before?</h2>
    <hr class="pb-2 md:mx-[-1rem]">
    <p>
      Then please consider taking the <a :href="link" class="text-link hover:text-link-hover visited:text-link-visited active:text-link-clicked underline">survey</a>. <br class="md:hidden" />
      It takes less than 5 minutes. <br class="md:hidden" />
      Your help is very appreciated and can help make JPlag a better tool. <br />
      <a :href="link" class="text-link hover:text-link-hover visited:text-link-visited active:text-link-clicked underline">Click here to get to the survey.</a>
    </p>
  </section>
  
</template>

<script setup lang="ts">
const link = "https://docs.google.com/forms/d/e/1FAIpQLSckqUlXhIlJ-H2jtu2VmGf_mJt4hcnHXaDlwhpUL3XG1I8UYw/viewform"
</script>
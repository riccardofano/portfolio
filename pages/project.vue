<template>
  <fragment>
    <project-hero
      first-line="Piante"
      second-line="e-commerce"
      repo-url="#"
      demo-url="#"
      image-url="https://via.placeholder.com/400x300"
    ></project-hero>
    <project-vision></project-vision>
  </fragment>
</template>

<script>
import ProjectHero from '@/components/ProjectHero.vue'
import ProjectVision from '@/components/ProjectVision.vue'

export default {
  components: { ProjectHero, ProjectVision },
}
</script>

<style></style>

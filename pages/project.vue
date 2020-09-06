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
    <project-tech></project-tech>
  </fragment>
</template>

<script>
import ProjectHero from '@/components/ProjectHero.vue'
import ProjectVision from '@/components/ProjectVision.vue'
import ProjectTech from '@/components/ProjectTech.vue'

export default {
  components: { ProjectHero, ProjectVision, ProjectTech },
}
</script>

<style></style>

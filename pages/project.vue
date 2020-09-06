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
    <project-gallery></project-gallery>
  </fragment>
</template>

<script>
import ProjectHero from '@/components/ProjectHero.vue'
import ProjectVision from '@/components/ProjectVision.vue'
import ProjectTech from '@/components/ProjectTech.vue'
import ProjectGallery from '@/components/ProjectGallery.vue'

export default {
  components: { ProjectHero, ProjectVision, ProjectTech, ProjectGallery },
}
</script>

<style></style>

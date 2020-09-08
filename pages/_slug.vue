<template>
  <fragment>
    <project-hero
      :first-line="project.lineFirst"
      :second-line="project.lineSecond"
      :repo-url="project.urlRepo"
      :demo-url="project.urlDemo"
      image-url="https://via.placeholder.com/400x300"
    ></project-hero>
    <project-vision :description="project.descriptionVision"></project-vision>
    <project-tech
      :tech-description="project.descriptionTech"
      :challenges-description="project.descriptionTechChallenges"
    ></project-tech>
    <project-gallery></project-gallery>
  </fragment>
</template>

<script>
import ProjectHero from '@/components/ProjectHero.vue'
import ProjectVision from '@/components/ProjectVision.vue'
import ProjectTech from '@/components/ProjectTech.vue'
import ProjectGallery from '@/components/ProjectGallery.vue'

import { request } from '~/lib/datocms'
import { singleProject } from '~/lib/queries'

export default {
  components: { ProjectHero, ProjectVision, ProjectTech, ProjectGallery },
  async asyncData({ app, params, payload }) {
    if (payload) return { project: payload }

    const data = await request(singleProject(app.i18n.locale, params.slug))
    return { ...data }
  },
}
</script>

<style></style>

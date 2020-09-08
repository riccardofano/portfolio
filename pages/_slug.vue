<template>
  <fragment>
    <project-hero
      :line-first="lineFirst"
      :line-second="lineSecond"
      :url-repo="urlRepo"
      :url-demo="urlDemo"
      url-image="https://via.placeholder.com/400x300"
    ></project-hero>
    <project-vision :description="descriptionVision"></project-vision>
    <project-tech
      :description-tech="descriptionTech"
      :description-challenges="descriptionChallenges"
    ></project-tech>
    <project-gallery></project-gallery>
  </fragment>
</template>

<script>
import ProjectHero from '@/components/ProjectHero.vue'
import ProjectVision from '@/components/ProjectVision.vue'
import ProjectTech from '@/components/ProjectTech.vue'
import ProjectGallery from '@/components/ProjectGallery.vue'

import MarkdownIt from 'markdown-it'
import { request } from '~/lib/datocms'
import { singleProject } from '~/lib/queries'

const md = new MarkdownIt()

export default {
  components: { ProjectHero, ProjectVision, ProjectTech, ProjectGallery },
  async asyncData({ app, params, payload }) {
    if (payload) return { ...payload }

    const { project } = await request(
      singleProject(app.i18n.locale, params.slug)
    )

    return {
      ...project,
      descriptionVision: md.render(project.descriptionVision),
      descriptionTech: md.render(project.descriptionTech),
      descriptionChallenges: md.render(project.descriptionChallenges),
    }
  },
}
</script>

<style></style>

<template>
  <div class="grid grid--outer">
    <project-hero
      :line-first="lineFirst"
      :line-second="lineSecond"
      :url-repo="urlRepo"
      :url-demo="urlDemo"
      :image="imageHero"
    ></project-hero>
    <project-vision :description="descriptionVision"></project-vision>
    <project-tech
      :description-tech="descriptionTech"
      :description-challenges="descriptionChallenges"
      :image="imageTech"
    ></project-tech>
    <project-gallery :images="imageGallery"></project-gallery>
    <the-footer></the-footer>
  </div>
</template>

<script>
import ProjectHero from '@/components/ProjectHero.vue'
import ProjectVision from '@/components/ProjectVision.vue'
import ProjectTech from '@/components/ProjectTech.vue'
import ProjectGallery from '@/components/ProjectGallery.vue'
import TheFooter from '@/components/TheFooter.vue'

import MarkdownIt from 'markdown-it'
import { request } from '~/lib/datocms'
import { singleProject } from '~/lib/queries'

const md = new MarkdownIt()

export default {
  components: {
    ProjectHero,
    ProjectVision,
    ProjectTech,
    ProjectGallery,
    TheFooter,
  },
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

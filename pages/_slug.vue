<template>
  <div class="grid grid--outer">
    <project-hero
      :line-first="lineFirst"
      :line-second="lineSecond"
      :url-repo="urlRepo"
      :url-demo="urlDemo"
      :image="imageHero"
    ></project-hero>
    <project-tech
      :description-tech="descriptionTech"
      :description-vision="descriptionVision"
      :image="imageTech"
    ></project-tech>
    <project-gallery :images="imageGallery"></project-gallery>
    <the-footer></the-footer>
  </div>
</template>

<script>
import ProjectHero from '@/components/ProjectHero.vue'
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
  transition(to, from) {
    if (!from) return 'page'
    // Only play the transition if the page is from the same locale,
    // don't play it if the user is just switching languages
    // because it it just flashes white and looks bad
    return to.name.slice(-2) === from.name.slice(-2) ? 'page' : 'none'
  },
  head() {
    return {
      title: `Portfolio | ${this.title}`,
    }
  },
}
</script>

<style></style>

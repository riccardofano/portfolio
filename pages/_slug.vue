<template>
  <fragment>
    <project-hero
      :first-line="project.firstline"
      :second-line="project.secondline"
      repo-url="#"
      demo-url="#"
      image-url="https://via.placeholder.com/400x300"
    ></project-hero>
    <project-vision :description="project.visiondescription"></project-vision>
    <project-tech></project-tech>
    <project-gallery></project-gallery>
  </fragment>
</template>

<script>
import ProjectHero from '@/components/ProjectHero.vue'
import ProjectVision from '@/components/ProjectVision.vue'
import ProjectTech from '@/components/ProjectTech.vue'
import ProjectGallery from '@/components/ProjectGallery.vue'

import { request, gql } from '~/lib/datocms'

export default {
  components: { ProjectHero, ProjectVision, ProjectTech, ProjectGallery },
  async asyncData({ app, params, payload }) {
    if (payload) return { project: payload }

    const data = await request({
      query: gql`
        query SingleProject($lang: SiteLocale, $slug: String!) {
          project(locale: $lang, filter: { slug: { eq: $slug } }) {
            firstline
            secondline
            visiondescription
            techdescription
            challengesdescription
          }
        }
      `,
      variables: {
        lang: app.i18n.locale,
        slug: params.slug,
      },
    })
    return { ...data }
  },
}
</script>

<style></style>

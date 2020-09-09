<template>
  <div class="grid grid--outer">
    <section-hero></section-hero>
    <section-recent-projects :projects="projects"></section-recent-projects>
    <section-about></section-about>
    <the-footer></the-footer>
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionRecentProjects from '@/components/SectionRecentProjects.vue'
import SectionAbout from '@/components/SectionAbout.vue'
import TheFooter from '@/components/TheFooter.vue'

import { request } from '~/lib/datocms'
import { recentProjects } from '~/lib/queries'

export default {
  components: { SectionHero, SectionRecentProjects, SectionAbout, TheFooter },
  async asyncData({ app }) {
    const { allProjects: projects } = await request(
      recentProjects(app.i18n.locale)
    )

    return {
      projects,
    }
  },
}
</script>

<style></style>

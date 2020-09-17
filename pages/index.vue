<template>
  <div class="grid grid--outer">
    <section-hero></section-hero>
    <section-recent-projects :projects="projects"></section-recent-projects>
    <section-about :image="upload"></section-about>
    <the-footer></the-footer>
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionRecentProjects from '@/components/SectionRecentProjects.vue'
import SectionAbout from '@/components/SectionAbout.vue'

import TheFooter from '@/components/TheFooter.vue'

import { request } from '~/lib/datocms'
import { homeQuery } from '~/lib/queries'

export default {
  components: {
    SectionHero,
    SectionRecentProjects,
    SectionAbout,
    TheFooter,
  },
  async asyncData({ app }) {
    const { allProjects: projects, upload } = await request(
      homeQuery(app.i18n.locale)
    )

    return {
      projects,
      upload,
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
      title: 'Riccardo Fano',
    }
  },
}
</script>

<style></style>

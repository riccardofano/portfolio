<template>
  <fragment>
    <section-hero></section-hero>
    <section-recent-projects></section-recent-projects>
    <section-about></section-about>
  </fragment>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionRecentProjects from '@/components/SectionRecentProjects.vue'
import SectionAbout from '@/components/SectionAbout.vue'

export default {
  components: { SectionHero, SectionRecentProjects, SectionAbout },
}
</script>

<style></style>

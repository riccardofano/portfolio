<template>
  <div class="grid grid--outer">
    <section-hero></section-hero>
    <section-recent-projects></section-recent-projects>
    <section-about></section-about>
    <the-footer></the-footer>
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionRecentProjects from '@/components/SectionRecentProjects.vue'
import SectionAbout from '@/components/SectionAbout.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: { SectionHero, SectionRecentProjects, SectionAbout, TheFooter },
}
</script>

<style></style>

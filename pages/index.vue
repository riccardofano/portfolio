<template>
  <fragment>
    <the-hero></the-hero>
    <the-recent-projects></the-recent-projects>
    <the-about></the-about>
  </fragment>
</template>

<script>
import TheHero from '@/components/TheHero.vue'
import TheRecentProjects from '@/components/TheRecentProjects.vue'
import TheAbout from '@/components/TheAbout.vue'

export default {
  components: { TheHero, TheRecentProjects, TheAbout },
}
</script>

<style></style>

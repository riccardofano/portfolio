<template>
  <fragment>
    <the-hero></the-hero>
    <the-recent-projects></the-recent-projects>
  </fragment>
</template>

<script>
import TheHero from '@/components/TheHero.vue'
import TheRecentProjects from '@/components/TheRecentProjects.vue'

export default {
  components: { TheHero, TheRecentProjects },
}
</script>

<style></style>

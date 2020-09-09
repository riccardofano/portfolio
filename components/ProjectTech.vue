<template>
  <section-wrapper background>
    <div class="wrapper grid grid--inner column--middle">
      <div class="tech__image">
        <datocms-image :data="image.responsiveImage"></datocms-image>
      </div>
      <div class="tech-wrapper">
        <div class="tech">
          <h2 class="header underline">Tecnologie usate</h2>
          <div
            class="tech__description paragraph"
            v-html="descriptionTech"
          ></div>
        </div>
        <div class="challenges">
          <h2 class="header underline clallenges__header">Sfide</h2>
          <div
            class="challenges__description paragraph"
            v-html="descriptionChallenges"
          ></div>
        </div>
      </div>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper.vue'

export default {
  name: 'ProjectTech',
  components: { SectionWrapper },
  props: {
    descriptionTech: {
      type: String,
      required: true,
    },
    descriptionChallenges: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.tech__image img {
  width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>

<style lang="scss" scoped>
.tech {
  margin-bottom: 1.5rem;
}

@include for-desktop-up {
  .tech__image {
    grid-column: 2;
    grid-row: 1;
    justify-self: center;
    align-self: center;
  }

  .tech-wrapper {
    grid-column: 1;
    grid-row: 1;
    align-self: start;
  }
}
</style>

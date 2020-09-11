<template>
  <section-wrapper>
    <h2 class="header underline">Galleria Immagini</h2>
    <div class="gallery grid grid--inner">
      <div
        v-for="(image, i) in images"
        :key="i"
        class="picture picture--shadow"
      >
        <datocms-image :data="image.responsiveImage"></datocms-image>
      </div>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper.vue'

export default {
  name: 'ProjectGallery',
  components: { SectionWrapper },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  grid-row-gap: 1rem;

  @include for-desktop-up {
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
  }
}
</style>

<template>
  <section-wrapper>
    <h2 class="header underline">Galleria Immagini</h2>
    <div class="gallery-wrapper grid grid--inner">
      <picture class="gallery__picture picture">
        <img src="https://via.placeholder.com/1600x900" alt="" />
      </picture>
      <picture class="gallery__picture picture">
        <img src="https://via.placeholder.com/1600x900" alt="" />
      </picture>
      <picture class="gallery__picture picture">
        <img src="https://via.placeholder.com/1600x900" alt="" />
      </picture>
      <picture class="gallery__picture picture">
        <img src="https://via.placeholder.com/1600x900" alt="" />
      </picture>
      <picture class="gallery__picture picture">
        <img src="https://via.placeholder.com/1600x900" alt="" />
      </picture>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper.vue'

export default {
  name: 'ProjectGallery',
  components: { SectionWrapper },
}
</script>

<style lang="scss" scoped>
.gallery-wrapper {
  grid-row-gap: 1rem;

  @include for-desktop-up {
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
  }
}
</style>

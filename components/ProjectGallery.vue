<template>
  <section-wrapper>
    <h2 class="header underline">Galleria Immagini</h2>
    <picture class="gallery__picture picture">
      <img src="https://via.placeholder.com/400x300" alt="" />
    </picture>
    <picture class="gallery__picture picture">
      <img src="https://via.placeholder.com/400x300" alt="" />
    </picture>
    <picture class="gallery__picture picture">
      <img src="https://via.placeholder.com/400x300" alt="" />
    </picture>
    <picture class="gallery__picture picture">
      <img src="https://via.placeholder.com/400x300" alt="" />
    </picture>
    <picture class="gallery__picture picture">
      <img src="https://via.placeholder.com/400x300" alt="" />
    </picture>
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
.gallery__picture + .gallery__picture img {
  margin-top: 1rem;
}
</style>

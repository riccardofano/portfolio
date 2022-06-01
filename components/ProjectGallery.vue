<template>
  <section-wrapper>
    <div>
      <h2 class="header underline">Galleria Immagini</h2>
      <div class="gallery">
        <a
          v-for="(image, i) in images"
          :key="i"
          class="picture picture--shadow"
          :href="image.responsiveImage.src"
          target="_blank"
        >
          <datocms-image :data="image.responsiveImage"></datocms-image>
        </a>
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
  columns: 1;
  column-gap: 2rem;

  & .picture {
    cursor: zoom-in;
    margin-bottom: 2rem;
  }

  @include for-tablet-up {
    columns: 2;
  }

  @include for-big-desktop-up {
    columns: 3;
  }
}
</style>

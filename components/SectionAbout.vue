<template>
  <section-wrapper>
    <div class="about grid grid--inner">
      <div class="about__info">
        <h2 class="header underline">{{ $t('about.title') }}</h2>
        <p class="about__description">{{ $t('about.shortDesc') }}</p>
        <h3 class="about__header">{{ $t('about.subtitle') }}</h3>
        <p class="about__description">{{ $t('about.devDesc') }}</p>
        <p class="about__description">{{ $t('about.desDesc') }}</p>
      </div>
      <div class="about__picture picture">
        <datocms-image :data="image.responsiveImage"></datocms-image>
      </div>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper.vue'

export default {
  name: 'SectionAbout',
  components: { SectionWrapper },
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  &__picture {
    justify-self: center;
  }
  &__picture img {
    margin-top: 1.5rem;
    box-shadow: none;

    @include for-desktop-up {
      margin-top: 0;
    }
  }

  &__header {
    margin: 1rem 0 0.75rem;
    font-size: 1.1rem;

    @include for-tablet-up {
      font-size: 1.25rem;
    }
  }

  &__description + &__description {
    margin-top: 1rem;
  }
}
</style>

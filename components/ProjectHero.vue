<template>
  <div class="hero column--all">
    <div class="grid grid--outer">
      <the-navbar class="column--middle"></the-navbar>
    </div>
    <div class="hero__image">
      <datocms-image :data="image.responsiveImage"></datocms-image>
    </div>
    <h1 class="hero__title">
      <span class="underline">{{ lineFirst }}</span>
      <span class="underline">{{ lineSecond }}</span>
    </h1>
    <div class="hero__links">
      <a class="btn" :href="urlRepo">Github</a>
      <a class="btn btn--highlight" :href="urlDemo">{{ $t('project.demo') }}</a>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'ProjectHero',
  components: { TheNavbar },
  props: {
    lineFirst: { type: String, required: true },
    lineSecond: { type: String, required: true },
    urlRepo: { type: String, required: true },
    urlDemo: { type: String, required: true },
    image: { type: Object, required: true },
  },
  data: () => ({}),
}
</script>

<style lang="scss">
.hero__image div {
  & svg,
  & div {
    width: 100% !important;
    height: 100% !important;
  }

  & picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding: 2rem 0 3rem;
  text-align: center;

  &__image,
  &__image div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  &__image div picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__title {
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__links a {
    text-decoration: none;
    color: var(--clr-text);
  }
}

@include for-tablet-up {
  .hero__title {
    font-size: 3rem;
  }

  .hero__subtitle {
    font-size: 1.5rem;
  }
}

@include for-desktop-up {
  .hero {
    padding: 3rem 0 5rem;

    &__title {
      font-size: 4rem;
    }

    &__subtitle {
      font-size: 2rem;
    }
  }
}
</style>

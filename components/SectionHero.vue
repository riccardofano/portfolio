<template>
  <div class="hero column--middle">
    <the-navbar></the-navbar>
    <div class="hero__heading">
      <p class="hero__subtitle">{{ $t('hero.subtitle') }}</p>
      <h1 class="hero__title">
        <span class="underline">{{ $t('hero.firstLine') }}</span>
        <span class="underline">{{ $t('hero.secondLine') }}</span>
      </h1>
    </div>
    <div class="hero__links">
      <a class="btn">{{ $t('hero.btn') }}</a>
      <a :href="`mailto:${emailAddress}`" class="btn btn--highlight">
        {{ $t('hero.btnHighlight') }}
      </a>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'

export default {
  name: 'SectionHero',
  components: { TheNavbar },
  data: () => ({
    emailAddress: process.env.EMAIL_ADDRESS,
  }),
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 2rem 0 3rem;
  text-align: center;

  &__heading {
    margin-bottom: 3rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__subtitle {
    font-size: 1.25rem;
    display: block;
    font-weight: 400;
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

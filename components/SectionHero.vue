<template>
  <div class="hero">
    <div class="hero__heading">
      <p class="hero__subtitle">Sono Riccardo Fano</p>
      <h1 class="hero__title">
        <span class="underline">Web Developer e</span>
        <span class="underline">Designer</span>
      </h1>
    </div>
    <div class="hero__links">
      <a class="btn">Scarica CV</a>
      <a class="btn btn--highlight">Contattami</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionHero',
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 3rem 0;
  text-align: center;
  grid-column: 2;

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
    padding: 5rem 0;

    &__title {
      font-size: 4rem;
    }

    &__subtitle {
      font-size: 2rem;
    }
  }
}
</style>

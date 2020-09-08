<template>
  <div class="hero">
    <img class="hero__image" :src="urlImage" alt="" />
    <h1 class="hero__title">
      <span class="underline">{{ lineFirst }}</span>
      <span class="underline">{{ lineSecond }}</span>
    </h1>
    <div class="hero__links">
      <a class="btn" :href="urlRepo">Github</a>
      <a class="btn btn--highlight" :href="urlDemo">Versione live</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectHero',
  props: {
    lineFirst: { type: String, required: true },
    lineSecond: { type: String, required: true },
    urlRepo: { type: String, required: true },
    urlDemo: { type: String, required: true },
    urlImage: { type: String, required: true },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding: 3rem 0;
  text-align: center;
  grid-column: 1 / -1;

  &__image {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
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

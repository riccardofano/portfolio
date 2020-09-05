<template>
  <div class="hero grid grid--outer">
    <style>
      :root {
        --hero-image: url('{{imageUrl}}');
      }
    </style>
    <h1 class="hero__title">
      <span class="underline">{{ firstLine }}</span>
      <span class="underline">{{ secondLine }}</span>
    </h1>
    <div class="hero__links">
      <a class="btn" :href="repoUrl">Github</a>
      <a class="btn btn--highlight" :href="demoUrl">Versione live</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectHero',
  props: {
    firstLine: {
      type: String,
      required: true,
    },
    secondLine: {
      type: String,
      required: true,
    },
    repoUrl: {
      type: String,
      required: true,
    },
    demoUrl: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;
  grid-column: 1 / -1;
  background-image: var(--hero-image);
  z-index: -2;

  &__title {
    margin: 3rem 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
  }

  &__links {
    margin-bottom: 4rem;

    & a {
      text-decoration: none;
      color: var(--clr-text);
    }
  }
}
</style>

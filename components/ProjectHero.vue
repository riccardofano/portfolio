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
  padding: 3rem 0;
  text-align: center;
  grid-column: 1 / -1;
  background-image: var(--hero-image);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;

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
    padding: 4rem;

    &__title {
      font-size: 4rem;
    }

    &__subtitle {
      font-size: 2rem;
    }
  }
}
</style>

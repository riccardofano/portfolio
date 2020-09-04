<template>
  <div class="hero">
    <h1 class="hero__title">
      <span class="hero__subtitle">Sono Riccardo Fano</span>
      Web Developer e Designer
    </h1>
    <div class="hero__links">
      <a class="btn">Scarica CV</a>
      <a class="btn btn--highlight">Contattami</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;

  &__title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
    margin: 3rem 0;
  }

  &__subtitle {
    font-size: 1.25rem;
    display: block;
    font-weight: 400;
  }

  &__links {
    margin-bottom: 4rem;
  }
}
</style>

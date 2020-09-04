<template>
  <div class="hero">
    <div class="hero__heading">
      <h2 class="hero__subtitle">Sono Riccardo Fano</h2>
      <h1 class="hero__title">
        <span class="underline"> Web Developer e</span>
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
export default {}
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;

  &__heading {
    margin: 3rem 0;
  }

  &__title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
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

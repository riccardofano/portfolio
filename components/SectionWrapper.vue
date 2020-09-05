<template>
  <section v-if="background" class="section section--background">
    <div class="grid grid--outer">
      <h2 class="section__header underline">{{ header }}</h2>
      <slot></slot>
    </div>
  </section>
  <section v-else class="section">
    <h2 class="section__header underline">{{ header }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'SectionWrapper',
  props: {
    background: { type: Boolean, required: false },
    header: { type: String, required: true },
  },
}
</script>

<style lang="scss" scoped>
.section {
  padding: 3rem 0;
  grid-column: 2;

  &--background {
    grid-column: 1 / -1;
    background-color: rgba(0, 0, 0, 0.05);
  }

  &__header {
    display: inline;
    font-size: 1.5rem;
  }
}
</style>

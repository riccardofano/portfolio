<template>
  <section
    class="section"
    :class="{
      'section--background grid grid--outer': background,
      'section--inverted': inverted,
    }"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'SectionWrapper',
  props: {
    background: { type: Boolean, required: false },
    inverted: { type: Boolean, required: false },
  },
}
</script>

<style lang="scss" scoped>
.section {
  padding: 3rem 0;
  grid-column: 2;

  &--background {
    grid-column: 1 / -1;
    background-color: var(--bg-secondary);
    width: 100vw;
  }

  &--inverted {
    background-color: var(--clr-primary);

    & .underline::after {
      background-color: var(--bg-primary);
    }
  }
}
</style>

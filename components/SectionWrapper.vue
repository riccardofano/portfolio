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
  }

  &--inverted {
    background-color: var(--clr-primary);
    // The z-index here makes it so you can't select
    // the inverted section's elements using the dev tools
    // directly which is a bit of a pain
    // but otherwise the underline won't show up
    z-index: -2;

    & .underline::after {
      background-color: var(--bg-primary);
    }
  }

  @include for-tablet-up {
    padding: 5rem 0;
  }
}
</style>

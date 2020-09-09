<template>
  <section
    class="section"
    :class="{
      'section--background grid grid--outer column--all': background,
      'column--middle': !background,
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

  &--background {
    position: relative;

    &::before {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--bg-secondary);
      z-index: -2;
    }
  }

  &--inverted {
    // The z-index here makes it so you can't select
    // the inverted section's elements using the dev tools
    // directly which is a bit of a pain
    // but otherwise the underline won't show up
    &::before {
      background-color: var(--clr-primary);
    }

    & .underline::after {
      background-color: var(--bg-primary);
    }
  }

  @include for-tablet-up {
    padding: 5rem 0;
  }
}
</style>

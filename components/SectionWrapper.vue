<template>
  <section
    v-if="background"
    class="section section--background"
    :class="{ inverted }"
  >
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
    inverted: { type: Boolean, required: false },
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
    background-color: var(--bg-secondary);
    width: 100vw;
    z-index: -2;

    &.inverted {
      background: var(--clr-primary);

      & .underline::after {
        background: var(--bg-primary);
      }
    }
  }

  &__header {
    font-size: 1.5rem;
    justify-self: start;
    display: inline-block;
    margin-bottom: 1rem;
  }
}
</style>

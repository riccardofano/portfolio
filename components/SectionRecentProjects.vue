<template>
  <section-wrapper background>
    <h2 class="header underline">Progetti recenti</h2>

    <div class="project grid grid--inner">
      <picture class="picture">
        <img src="https://via.placeholder.com/1600x900" alt="" />
      </picture>
      <div class="project__info">
        <h3 class="project__title">Piante e-commerce</h3>
        <div class="project__tags">
          <span class="project__tag underline">Reactjs</span>
          <span class="project__tag underline">Nextjs</span>
          <span class="project__tag underline">Stripe</span>
        </div>
        <p class="project__description paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odio
          nemo atque alias voluptatum unde asperiores, ipsum error rerum sunt!
        </p>
      </div>
    </div>
    <div class="project grid grid--inner">
      <picture class="picture">
        <img src="https://via.placeholder.com/1600x900" alt="" />
      </picture>
      <div class="project__info">
        <h3 class="project__title">Piante e-commerce</h3>
        <div class="project__tags">
          <span class="project__tag underline">Reactjs</span>
          <span class="project__tag underline">Nextjs</span>
          <span class="project__tag underline">Stripe</span>
        </div>
        <p class="project__description paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odio
          nemo atque alias voluptatum unde asperiores, ipsum error rerum sunt!
        </p>
      </div>
    </div>
    <div class="project grid grid--inner">
      <picture class="picture">
        <img src="https://via.placeholder.com/1600x900" alt="" />
      </picture>
      <div class="project__info">
        <h3 class="project__title">Piante e-commerce</h3>
        <div class="project__tags">
          <span class="project__tag underline">Reactjs</span>
          <span class="project__tag underline">Nextjs</span>
          <span class="project__tag underline">Stripe</span>
        </div>
        <p class="project__description paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odio
          nemo atque alias voluptatum unde asperiores, ipsum error rerum sunt!
        </p>
      </div>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper.vue'

export default {
  name: 'SectionRecentProjects',
  components: { SectionWrapper },
}
</script>

<style lang="scss" scoped>
.project {
  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0.75rem 0;
  }

  &__tags {
    margin-bottom: 0.5rem;
  }

  &__tag {
    font-size: 0.9rem;

    & + & {
      margin-left: 0.75rem;
    }
  }

  &__description {
    line-height: 1.4;
  }

  & + & {
    margin-top: 1.5rem;
  }

  @include for-tablet-up {
    &__title {
      font-size: 1.5rem;
    }

    &__tag {
      font-size: 1rem;
    }
  }
}
</style>

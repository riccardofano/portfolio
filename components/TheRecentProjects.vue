<template>
  <section-wrapper background header="Progetti recenti">
    <div class="project">
      <picture class="picture">
        <img src="https://via.placeholder.com/400x300" alt="" />
      </picture>
      <div class="project__info">
        <h3 class="project__title">Piante e-commerce</h3>
        <div class="project__tags">
          <span class="project__tag underline">Reactjs</span>
          <span class="project__tag underline">Nextjs</span>
          <span class="project__tag underline">Stripe</span>
        </div>
        <p class="project__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odio
          nemo atque alias voluptatum unde asperiores, ipsum error rerum sunt!
        </p>
      </div>
    </div>
    <div class="project">
      <picture class="picture">
        <img src="https://via.placeholder.com/400x300" alt="" />
      </picture>
      <div class="project__info">
        <h3 class="project__title">Piante e-commerce</h3>
        <div class="project__tags">
          <span class="project__tag underline">Reactjs</span>
          <span class="project__tag underline">Nextjs</span>
          <span class="project__tag underline">Stripe</span>
        </div>
        <p class="project__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odio
          nemo atque alias voluptatum unde asperiores, ipsum error rerum sunt!
        </p>
      </div>
    </div>
    <div class="project">
      <picture class="picture">
        <img src="https://via.placeholder.com/400x300" alt="" />
      </picture>
      <div class="project__info">
        <h3 class="project__title">Piante e-commerce</h3>
        <div class="project__tags">
          <span class="project__tag underline">Reactjs</span>
          <span class="project__tag underline">Nextjs</span>
          <span class="project__tag underline">Stripe</span>
        </div>
        <p class="project__description">
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
  name: 'TheRecentProjects',
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
}
</style>

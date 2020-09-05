<template>
  <section-wrapper header="Più su di me">
    <div class="about">
      <p class="about__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laborum
        expedita quam! Veritatis blanditiis ex ipsa vel delectus, officia magni?
      </p>
      <picture class="about__picture picture">
        <img src="https://via.placeholder.com/400x300" alt="" />
      </picture>
      <h3 class="about__header">Strumenti e abilità</h3>
      <p class="about__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa,
        ullam unde fugiat quam corrupti maiores fugit iure illum dignissimos
        architecto repudiandae. Fugit culpa alias, id adipisci quisquam
        expedita! Amet.
      </p>
      <p class="about__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, neque
        sequi enim, quaerat est veniam tempore dolore et ad eum quas provident
        repellat dolorem eveniet?
      </p>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper.vue'

export default {
  components: { SectionWrapper },
}
</script>

<style lang="scss" scoped>
.about {
  &__picture img {
    margin: 1.5rem 0;
  }

  &__header {
    margin-bottom: 0.75rem;
  }

  &__description + &__description {
    margin-top: 1rem;
  }
}
</style>

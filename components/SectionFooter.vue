<template>
  <section-wrapper background inverted>
    <h2 class="header underline">Contattami</h2>
    <p class="contact__description">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore
      error temporibus expedita esse sed placeat eligendi. Ipsum, facilis ullam.
    </p>
    <div class="contact__info">
      <h3 class="contact__category">Email:</h3>
      <p class="contact__text">Lorem, ipsum dolor.</p>
    </div>
    <div class="contact__info">
      <h3 class="contact__category">Telefono:</h3>
      <p class="contact__text">Lorem, ipsum dolor.</p>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper.vue'

export default {
  name: 'SectionFooter',
  components: { SectionWrapper },
}
</script>

<style lang="scss" scoped>
.contact {
  &__info {
    margin-top: 1rem;
    & + & {
      margin-top: 0.25rem;
    }
  }

  &__category,
  &__text {
    display: inline;
  }

  &__category {
    font-size: 1rem;
    font-weight: 600;
    margin-right: 1rem;
  }
}
</style>

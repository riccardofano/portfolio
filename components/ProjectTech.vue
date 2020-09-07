<template>
  <section-wrapper background>
    <div class="grid grid--inner">
      <picture class="tech__picture picture">
        <img src="https://via.placeholder.com/1600x900" alt="" />
      </picture>
      <div class="tech-wrapper">
        <div class="tech">
          <h2 class="header underline">Tecnologie usate</h2>
          <p class="tech__description paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            ipsa totam laboriosam beatae eius! At eligendi dolorem vitae quam
            aperiam, eaque expedita maxime cumque, similique quasi ab iste earum
            laboriosam.
          </p>
        </div>
        <div class="challenges">
          <h2 class="header underline clallenges__header">Sfide</h2>
          <ul class="challenges__list paragraph">
            <li class="challenges__list-item">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </li>
            <li class="challenges__list-item">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </li>
            <li class="challenges__list-item">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </li>
            <li class="challenges__list-item">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper.vue'

export default {
  name: 'ProjectTech',
  components: { SectionWrapper },
}
</script>

<style lang="scss" scoped>
.tech {
  margin-bottom: 1.5rem;

  &__picture img {
    box-shadow: none;
    justify-self: center;
  }
}

.challenges__list {
  list-style: circle;
  font-weight: 600;
  padding: 0 1rem 0;

  &-item {
    font-weight: 400;
  }
}

@include for-desktop-up {
  .tech__picture {
    grid-column: 2;
    grid-row: 1;
  }

  .tech-wrapper {
    grid-column: 1;
    grid-row: 1;
  }
}
</style>

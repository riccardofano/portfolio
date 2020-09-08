<template>
  <section-wrapper background>
    <div class="grid grid--inner">
      <picture class="tech__picture picture">
        <img src="https://via.placeholder.com/1600x900" alt="" />
      </picture>
      <div class="tech-wrapper">
        <div class="tech">
          <h2 class="header underline">Tecnologie usate</h2>
          <div
            class="tech__description paragraph"
            v-html="descriptionTech"
          ></div>
        </div>
        <div class="challenges">
          <h2 class="header underline clallenges__header">Sfide</h2>
          <div
            class="challenges__description paragraph"
            v-html="descriptionChallenges"
          ></div>
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
  props: {
    descriptionTech: {
      type: String,
      required: true,
    },
    descriptionChallenges: {
      type: String,
      required: true,
    },
  },
  mounted() {},
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

.challenges__description {
  & ul {
    list-style: circle;
    padding: 0 1rem 0;
  }

  & li {
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

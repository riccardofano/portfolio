<template>
  <section-wrapper>
    <h2 class="header underline">{{ $t('project.vision') }}</h2>
    <div class="vision__description paragraph" v-html="description"></div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper.vue'

export default {
  name: 'ProjectVision',
  components: { SectionWrapper },
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  data: () => ({}),
}
</script>

<style lang="scss" scoped></style>

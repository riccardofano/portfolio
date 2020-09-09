<template>
  <section-wrapper background inverted>
    <div class="column--middle">
      <h2 class="header underline">{{ $t('contact.title') }}</h2>
      <div class="grid grid--inner">
        <p class="contact__description paragraph">
          {{ $t('contact.shortDesc') }}
        </p>
        <div class="contact__info paragraph">
          <p class="contact__details">
            Email: <span>Lorem, ipsum dolor.</span>
          </p>
          <p class="contact__details">
            {{ $t('contact.phone') }} <span>Lorem, ipsum dolor.</span>
          </p>
        </div>
      </div>
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

    @include for-desktop-up {
      margin-top: 0;
      justify-self: center;
      align-self: start;
    }

    & + & {
      margin-top: 0.25rem;
    }
  }

  &__details {
    font-weight: 600;
    margin-right: 1rem;

    & span {
      font-weight: 400;
    }
  }
}
</style>

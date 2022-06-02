<template>
  <section-wrapper id="contact" background inverted>
    <div class="column--middle">
      <h2 class="header underline">{{ $t('contact.title') }}</h2>
      <div class="grid grid--inner">
        <p class="contact__description paragraph">
          {{ $t('contact.shortDesc') }}
        </p>
        <div class="contact__info paragraph">
          <p class="contact__details">
            {{ $t('contact.phone') }} <span>{{ $config.phoneNumber }}</span>
          </p>
          <a
            class="contact__details underline"
            :href="`mailto:${$config.emailAddress}`"
            >Email: <span>{{ $config.emailAddress }}</span>
          </a>
          <a
            class="contact__details underline"
            :href="`https://github.com/${$config.github}`"
            >Github: <span>{{ $config.github }}</span>
          </a>
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
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
.contact {
  &__info {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

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
    text-decoration: none;
    color: var(--clr-text);
    padding: 0.3rem 0;

    & span {
      font-weight: 400;
    }
  }
}
</style>

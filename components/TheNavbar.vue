<template>
  <nav class="navbar column--middle">
    <!-- Placeholder for a logo -->
    <nuxt-link class="navbar__item navbar__text" :to="localePath('/')">
      Home
    </nuxt-link>
    <nuxt-link
      class="navbar__item navbar__item--icon"
      :to="switchLocalePath(oppositeLanguage)"
    >
      <IconifyIcon :icon="languageIcon" class="navbar__icon" />
      <div class="navbar__text">{{ $t('navbar.language') }}</div>
    </nuxt-link>
  </nav>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import languageIcon from '@iconify/icons-ion/language'

export default {
  components: {
    IconifyIcon,
  },
  data() {
    return { languageIcon }
  },
  computed: {
    oppositeLanguage() {
      return this.$i18n.locale === 'en' ? 'it' : 'en'
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  &__item {
    text-decoration: none;
    padding: 0.3rem 0.8rem;
    border-radius: 5px;
    color: var(--clr-text);
    // Always have a border so it doesn't shift around on hover
    border: 1px solid transparent;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      border-color: var(--clr-primary);
    }

    &--icon {
      display: flex;
      align-items: center;
    }

    + .navbar__item {
      margin-left: 2rem;
    }
  }

  &__icon {
    margin-right: 0.5rem;
  }

  @include for-tablet-up {
    font-size: 1.125rem;
    margin-bottom: 3rem;
  }
}
</style>

<template>
  <section-wrapper background>
    <div class="column--middle">
      <h2 class="header underline">{{ $t('recent.title') }}</h2>
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="project grid grid--inner"
      >
        <nuxt-link :to="localePath(`/${project.slug}`)">
          <div class="project__picture picture picture--shadow">
            <datocms-image :data="project.imageThumbnail.responsiveImage">
            </datocms-image>
            <div class="project__btn btn">
              {{ $t('recent.btn') }}
            </div>
          </div>
        </nuxt-link>
        <div class="project__info">
          <h3 class="project__title">
            <nuxt-link :to="localePath(`/${project.slug}`)">
              {{ project.title }}
            </nuxt-link>
          </h3>
          <div class="project__tags">
            <span
              v-for="tag in project.tags"
              :key="tag.text"
              class="project__tag underline"
              >{{ tag.text }}</span
            >
          </div>
          <div
            class="project__description paragraph"
            v-html="mdDescription(project.descriptionVision)"
          ></div>
        </div>
      </div>
    </div>
  </section-wrapper>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper.vue'

import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'SectionRecentProjects',
  components: { SectionWrapper },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  methods: {
    mdDescription(description) {
      return md.render(description)
    },
  },
}
</script>

<style lang="scss">
.project__picture {
  & img {
    transition: blur 500ms ease-in, transform 200ms ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
    filter: blur(5px);
  }
}
</style>

<style lang="scss" scoped>
.project {
  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0.75rem 0;

    & a {
      text-decoration: none;
      color: var(--clr-text);
    }
  }

  &__btn {
    position: absolute;
    z-index: 1;
    align-self: center;
    opacity: 0;
    background-color: transparent;
    color: var(--bg-primary);
  }

  &__picture {
    position: relative;
    justify-content: center;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.1);
      transition: opacity 200ms ease-in-out;
    }

    &:hover {
      &::after,
      .project__btn {
        opacity: 1;
      }
    }
  }

  &__tags {
    margin-bottom: 0.5rem;
    display: flex;
    flex-wrap: wrap;
  }

  &__tag {
    font-size: 0.9rem;
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
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

    &__btn {
      transform: scale(1.2);
    }

    &__tag {
      font-size: 1rem;
    }
  }
}
</style>

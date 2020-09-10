<template>
  <section-wrapper background>
    <div class="column--middle">
      <h2 class="header underline">{{ $t('recent.title') }}</h2>
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="project grid grid--inner"
      >
        <div class="project__picture picture">
          <datocms-image :data="project.imageThumbnail.responsiveImage">
          </datocms-image>
          <a href="#" class="project__btn btn btn--highlight">
            {{ $t('recent.btn') }}
          </a>
        </div>
        <div class="project__info">
          <h3 class="project__title">{{ project.title }}</h3>
          <div class="project__tags">
            <span
              v-for="tag in project.tags"
              :key="tag.text"
              class="project__tag underline"
              >{{ tag.text }}
            </span>
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

<style lang="scss" scoped>
.project {
  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0.75rem 0;
  }

  &__picture {
    position: relative;
  }

  &__btn {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__picture {
    // Using the `::after` pseudo element because the background
    // doesn't seem to show up on a datocms-image div
    > div::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgb(0, 0, 0);
      opacity: 0;
      transition: opacity 200ms ease-in-out;
    }

    &:hover {
      > div::after {
        opacity: 0.5;
      }

      .project__btn {
        opacity: 1;
      }
    }
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

  @include for-tablet-up {
    &__title {
      font-size: 1.5rem;
    }

    &__tag {
      font-size: 1rem;
    }
  }
}
</style>

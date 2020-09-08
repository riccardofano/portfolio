import { gql } from './datocms'

export const allProjects = (locale) => ({
  query: gql`
    query AllProjects($lang: SiteLocale) {
      allProjects(locale: $lang) {
        slug
        lineFirst
        lineSecond
        descriptionVision
        descriptionTech
        descriptionChallenges
        urlRepo
        urlDemo
      }
    }
  `,
  variables: {
    lang: locale,
  },
})

export const singleProject = (locale, slug) => ({
  query: gql`
    query SingleProject($lang: SiteLocale, $slug: String!) {
      project(locale: $lang, filter: { slug: { eq: $slug } }) {
        slug
        lineFirst
        lineSecond
        descriptionVision
        descriptionTech
        descriptionChallenges
        urlRepo
        urlDemo
      }
    }
  `,
  variables: {
    lang: locale,
    slug,
  },
})

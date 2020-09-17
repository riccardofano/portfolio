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
        imageHero {
          responsiveImage {
            ...imageFields
          }
        }
        imageTech {
          responsiveImage {
            ...imageFields
          }
        }
        imageGallery {
          responsiveImage {
            ...imageFields
          }
        }
      }
    }
    ${imageFields}
  `,
  variables: {
    lang: locale,
  },
})

export const homeQuery = (locale) => ({
  query: gql`
    query HomeQuery($lang: SiteLocale) {
      allProjects(locale: $lang, first: 3, orderBy: _createdAt_ASC) {
        slug
        title
        descriptionVision
        tags {
          text
        }
        imageThumbnail {
          responsiveImage {
            ...imageFields
          }
        }
      }
      upload(filter: { title: { eq: "AboutMe" } }) {
        responsiveImage {
          ...imageFields
        }
      }
    }
    ${imageFields}
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
        title
        lineFirst
        lineSecond
        descriptionVision
        descriptionTech
        descriptionChallenges
        urlRepo
        urlDemo
        imageHero {
          responsiveImage {
            ...imageFields
          }
        }
        imageTech {
          responsiveImage {
            ...imageFields
          }
        }
        imageGallery {
          responsiveImage {
            ...imageFields
          }
        }
      }
    }
    ${imageFields}
  `,
  variables: {
    lang: locale,
    slug,
  },
})

const imageFields = gql`
  fragment imageFields on ResponsiveImage {
    alt
    aspectRatio
    base64
    bgColor
    height
    sizes
    src
    srcSet
    title
    webpSrcSet
    width
  }
`

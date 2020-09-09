import MarkdownIt from 'markdown-it'
import { request } from './lib/datocms.js'
import { allProjects } from './lib/queries.js'

const md = new MarkdownIt()

const defaultLocale = 'en'
const locales = [
  { code: 'en', file: 'en.js' },
  { code: 'it', file: 'it.js' },
]

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Generate the dynamic pages from DatoCMS
   */
  generate: {
    routes: async () => {
      let routes = []
      for (const locale of locales) {
        const data = await request(allProjects(locale.code))
        routes = routes.concat(
          data.allProjects.map((project) => ({
            payload: {
              ...project,
              descriptionVision: md.render(project.descriptionVision),
              descriptionTech: md.render(project.descriptionTech),
              descriptionChallenges: md.render(project.descriptionChallenges),
            },
            route: `${locale.code === defaultLocale ? '' : '/' + locale.code}/${
              project.slug
            }`,
          }))
        )
      }
      return routes
    },
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/vue-fragment.js', '@/plugins/datocms-image.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', 'nuxt-i18n'],
  /*
   ** Global scss resources
   */
  styleResources: {
    scss: ['~/assets/css/mixins.scss'],
  },
  /*
   ** Nuxt internationalization settings
   ** Doc: https://i18n.nuxtjs.org
   */
  i18n: {
    locales,
    defaultLocale,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirect',
    },
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}

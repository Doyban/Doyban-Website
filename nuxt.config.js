import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - doyban',
    title: 'doyban',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/agastya.js', ssr: false }], // "ssr: false" fixes "window is not defined".

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/recaptcha-module
    '@nuxtjs/recaptcha',
  ],

  recaptcha: {
    hideBadge: true,
    siteKey: process.env.RECAPTCHA_API_KEY,
    version: 2, // TODO: Change this to version 3 (and activate associated key to reCAPTCHA v3 - example https://github.com/nuxt-community/recaptcha-module/blob/master/example/v3/pages/index.vue)
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  // TODO: Use variables for SCSS.
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}

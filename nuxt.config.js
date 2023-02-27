import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Doyban | The World of Digital Gameplay.',
    title: 'Doyban',
    meta: [
      // Basic HTML meta tags.
      { charset: 'utf-8' },
      { hid: 'author', name: 'author', content: 'Doyban, contact@doyban.com' },
      { hid: 'copyright', name: 'copyright', content: 'Doyban' },
      {
        hid: 'description',
        name: 'description',
        content:
          '🚀 Mobile Games without Installation are Mini Games on popular apps and chats like Facebook Gaming, iMessage, Messenger, Snapchat, Telegram, or WeChat.',
      },
      { hid: 'language', name: 'language', content: 'en_US' },
      { hid: 'robots', name: 'robots', content: 'index,follow' },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },

      // Apple meta tags.
      {
        hid: 'apple-mobile-web-app-capable',
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
      {
        hid: 'format-detection',
        name: 'format-detection',
        content: 'telephone=true',
      },

      // Open Graph / Facebook meta tags.
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '🚀 Mobile Games without Installation are Mini Games on popular apps and chats like Facebook Gaming, iMessage, Messenger, Snapchat, Telegram, or WeChat.',
      },
      { hid: 'og:image', property: 'og:image', content: '/logo.webp' },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'This is logo of Doyban',
      },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ar',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'be_BY',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'bg_BG',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'cs_CZ',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'da_DK',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'de_DE',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'el_GR',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'es_ES',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'et_EE',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'fi_FI',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'fr_FR',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'he_IL',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'hi_IN',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'hr_HR',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'hu_HU',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'id_ID',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'is_IS',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'it_IT',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ja_JP',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ko_KR',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'nb_NO',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'nl_NL',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'pl_PL',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'pt_PT',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ro_RO',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ru_RU',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'sk_SK',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'sr_SR',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'sv_SE',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ta',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'te',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'th_TH',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'tr_TR',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'uk_UA',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ur',
      },
      {
        hid: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'zh_TW',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Doyban' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Doyban | The World of Digital Gameplay.',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://doyban.com' },

      // Twitter meta tags.
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        content: '@ddanielecki',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          '🚀 Mobile Games without Installation are Mini Games on popular apps and chats like Facebook Gaming, iMessage, Messenger, Snapchat, Telegram, or WeChat.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: '/logo.webp',
      },
      {
        hid: 'twitter:image:alt',
        property: 'twitter:image:alt',
        content: 'This is logo of Doyban',
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@doybangames',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Doyban | The World of Digital Gameplay.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/ico', href: '/favicon.ico' },
    ],
    htmlAttrs: {
      lang: 'en',
      amp: true,
    },
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
    // https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://github.com/nuxt-community/recaptcha-module
    '@nuxtjs/recaptcha',
  ],

  recaptcha: {
    hideBadge: true,
    siteKey: process.env.RECAPTCHA_API_KEY,
    version: 2, // TODO: Change this to version 3 (and activate associated key to reCAPTCHA v3 - example https://github.com/nuxt-community/recaptcha-module/blob/master/example/v3/pages/index.vue)
  },

  googleFonts: {
    base64: true,
    display: 'swap',
    download: true,
    families: {
      'IM+Fell+English+SC': true,
      Cormorant: [300, 400, 500, 600, 700],
    },
    fontsDir: 'fonts',
    fontsPath: '~assets/fonts',
    inject: true,
    overwriting: true,
    preconnect: true,
    prefetch: true,
    preload: true,
    subsets: [],
    stylePath: 'css/fonts.css',
    text: null,
    useStylesheet: false,
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

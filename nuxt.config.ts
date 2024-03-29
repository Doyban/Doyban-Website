import vuetify from 'vite-plugin-vuetify'

// PWA Config
const description: string =
  '🚀 Mobile Games without Installation are Mini Games on popular apps and chats like Facebook Gaming, iMessage, Messenger, Snapchat, Telegram, or WeChat.'
const title: string = 'Doyban | The World of Digital Gameplay.'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Global SEO and Meta config (https://nuxt.com/docs/getting-started/seo-meta)
  app: {
    head: {
      titleTemplate: '%s - ' + title,
    },
    htmlAttrs: {
      lang: 'en',
      amp: true,
    },
    link: [
      { href: '/favicon.ico', rel: 'icon', sizes: 'any', type: 'image/x-icon' },
      {
        href: '/favicon.ico',
        rel: 'shortcut icon',
        sizes: 'any',
        type: 'image/ico',
      },
      { href: '/favicon.svg', rel: 'icon', type: 'image/svg+xml', },
      { href: '/apple-touch-icon-180x180.png', rel: 'apple-touch-icon' },
    ],
    meta: [
      // Basic HTML meta tags.
      { charset: 'utf-8' },
      { hid: 'author', name: 'author', content: 'Doyban, contact@doyban.com' },
      { hid: 'copyright', name: 'copyright', content: 'Doyban' },
      {
        hid: 'description',
        name: 'description',
        content: description,
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
        content: description,
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
        content: title,
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
        content: description,
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
        content: title,
      },
    ],

    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Build Configuration (https://nuxt.com/docs/api/configuration/nuxt-config#build)
  build: { transpile: ['vuetify'] },

  client: {
    installPrompt: true,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['vuetify/styles', '~/assets/main.scss'],

  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallbackAllowlist: [/^\/$/],
    type: 'module',
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins: [{ src: '~/plugins/agastya.js', ssr: false }], // "ssr: false" fixes "window is not defined".

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    },
    // https://github.com/harlan-zw/nuxt-simple-robots
    'nuxt-simple-robots',
    // https://github.com/harlan-zw/nuxt-simple-sitemap
    'nuxt-simple-sitemap',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/google-fonts',
      {
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
    ],
    // https://github.com/dword-design/nuxt-mail
    [
      'nuxt-mail',
      {
        message: {
          to: 'contact@doyban.com',
        },
        smtp: {
          host: process.env.MAIL_HOST,
          port: process.env.MAIL_PORT,
          auth: {
            user: process.env.MAIL_ACCOUNT,
            pass: process.env.MAIL_PASSWORD,
          },
        },
      },
    ],
    // https://github.com/vite-pwa/nuxt
    '@vite-pwa/nuxt',
    // https://github.com/zadigetvoltaire/nuxt-gtm
    // '@zadigetvoltaire/nuxt-gtm',
  ],

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    firebase: {
      gen: 2,
      nodeVersion: '18',
    },
    preset: 'firebase',
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt'],
    },
    replace: {
      [`functions.https.onRequest`]: `functions.region('europe-west1').https.onRequest`,
    },
  },

  pwa: {
    manifest: {
      background_color: '#fafafa',
      description,
      display: 'standalone',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
      name: title,
      scope: '.',
      start_url: './',
      short_name: title,
      theme_color: '#4A148C',
    },
    strategies: 'injectManifest',
  },

  runtimeConfig: {
    public: {
      // TODO: When https://github.com/zadigetvoltaire/nuxt-gtm/issues/15 will be fixed we install the plugin and add the AW-* tag here.
      // gtm: {
      //   id: process.env.GTM_ID,
      // },
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    },
  },

  workbox: {
    navigateFallback: '/',
    globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
  },
})

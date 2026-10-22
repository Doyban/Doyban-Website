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
      htmlAttrs: {
        lang: 'en',
        amp: true,
      } as { lang: string },
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
      { key: 'author', name: 'author', content: 'Doyban, contact@doyban.com' },
      { key: 'copyright', name: 'copyright', content: 'Doyban' },
      {
        key: 'description',
        name: 'description',
        content: description,
      },
      { key: 'language', name: 'language', content: 'en_US' },
      { key: 'robots', name: 'robots', content: 'index,follow' },
      {
        key: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },

      // Apple meta tags.
      {
        key: 'apple-mobile-web-app-capable',
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        key: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
      {
        key: 'format-detection',
        name: 'format-detection',
        content: 'telephone=true',
      },

      // Open Graph / Facebook meta tags.
      {
        key: 'og:description',
        property: 'og:description',
        content: description,
      },
      { key: 'og:image', property: 'og:image', content: '/logo.webp' },
      {
        key: 'og:image:alt',
        property: 'og:image:alt',
        content: 'This is logo of Doyban',
      },
      { key: 'og:locale', property: 'og:locale', content: 'en_US' },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ar',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'be_BY',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'bg_BG',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'cs_CZ',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'da_DK',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'de_DE',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'el_GR',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'es_ES',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'et_EE',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'fi_FI',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'fr_FR',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'he_IL',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'hi_IN',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'hr_HR',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'hu_HU',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'id_ID',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'is_IS',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'it_IT',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ja_JP',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ko_KR',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'nb_NO',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'nl_NL',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'pl_PL',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'pt_PT',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ro_RO',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ru_RU',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'sk_SK',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'sr_SR',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'sv_SE',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ta',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'te',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'th_TH',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'tr_TR',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'uk_UA',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'ur',
      },
      {
        key: 'og:locale:alternate',
        property: 'og:locale:alternate',
        content: 'zh_TW',
      },
      { key: 'og:site_name', property: 'og:site_name', content: 'Doyban' },
      {
        key: 'og:title',
        property: 'og:title',
        content: title,
      },
      { key: 'og:type', property: 'og:type', content: 'website' },
      { key: 'og:url', property: 'og:url', content: 'https://doyban.com' },

      // Twitter meta tags.
      {
        key: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        key: 'twitter:creator',
        property: 'twitter:creator',
        content: '@ddanielecki',
      },
      {
        key: 'twitter:description',
        property: 'twitter:description',
        content: description,
      },
      {
        key: 'twitter:image',
        property: 'twitter:image',
        content: '/logo.webp',
      },
      {
        key: 'twitter:image:alt',
        property: 'twitter:image:alt',
        content: 'This is logo of Doyban',
      },
      {
        key: 'twitter:site',
        property: 'twitter:site',
        content: '@doybangames',
      },
      {
        key: 'twitter:title',
        property: 'twitter:title',
        content: title,
      },
    ],
    },

    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Build Configuration (https://nuxt.com/docs/api/configuration/nuxt-config#build)
  build: { transpile: ['vuetify'] },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['vuetify/styles', '~/assets/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins: [{ src: '~/plugins/agastya.js', ssr: false }], // "ssr: false" fixes "window is not defined".

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        const viteConfig = config as { plugins?: unknown[] }
        viteConfig.plugins ??= []
        viteConfig.plugins.push(vuetify())
      })
    },
    // https://github.com/nuxt-modules/robots
    '@nuxtjs/robots',
    // https://github.com/nuxt-modules/sitemap
    '@nuxtjs/sitemap',
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
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
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

})

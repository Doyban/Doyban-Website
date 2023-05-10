import "@mdi/font/css/materialdesignicons.css";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})

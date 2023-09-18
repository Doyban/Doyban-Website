import "@mdi/font/css/materialdesignicons.min.css";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    // theme: {
    //   defaultTheme: 'dark' // TODO: Create toggle to switch between light/dark theme and it's easy to do it from here.
    // }
  })

  nuxtApp.vueApp.use(vuetify)
})

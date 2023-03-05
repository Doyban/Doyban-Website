const { Nuxt } = require('nuxt-start')
const functions = require('firebase-functions')
// const nuxtConfig = require('./../nuxt.config.js')

const config = {
  // TODO: There's a problem with deploying to Firebase while including nuxtConfig, looks like compatibility issue. Topics to followup: https://stackoverflow.com/questions/75634743/nuxt-js-problematic-nuxt-config-js-ts-with-firebase-cloud-functions-while-deploy?noredirect=1 & https://stackoverflow.com/questions/73756329/deployment-error-with-nuxt-v2-and-firebase-functions.
  // ...nuxtConfig,
  dev: false,
  debug: false,
}

const nuxt = new Nuxt(config)

exports.ssrapp = functions.https.onRequest(async (req: any, res: any) => {
  await nuxt.ready()
  nuxt.render(req, res)
})

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    html.head.push(
      `<script async src='https://www.googletagmanager.com/gtag/js?id=AW-924524631'></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-924524631');</script>`,
    )
  })
})

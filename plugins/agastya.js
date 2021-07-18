// Required setup for Agastya, because it does access "window" object directly.
import Agastya from 'agastya'
// eslint-disable-next-line no-new
new Agastya(process.env.AGASTYA_API_KEY)

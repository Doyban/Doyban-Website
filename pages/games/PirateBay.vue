<script lang="ts" setup>
import GalleryPicture from '~/interfaces/GalleryPicture'
import SingleGame from '~/components/SingleGame.vue'

const description: string = 'Take a challenge and access legendary PirateBay!'
const galleryPictures: GalleryPicture[] = [
  { id: 1, src: 'gallery/PirateBay/1.webp' },
  { id: 2, src: 'gallery/PirateBay/2.webp' },
  { id: 3, src: 'gallery/PirateBay/3.webp' },
  { id: 4, src: 'gallery/PirateBay/4.webp' },
  { id: 5, src: 'gallery/PirateBay/5.webp' },
]
const storeUrls = {
  appleAppStore: 'https://apps.apple.com/app/piratebay/id1450304848',
  googlePlayStore:
    'https://play.google.com/store/apps/details?id=com.doyban.piratebay',
  messenger: 'https://m.me/GamePirateBay?game=piratebay-instant',
  facebookWeb: 'https://apps.facebook.com/doyban-piratebay',
  itchIo: 'https://doyban.itch.io/piratebay',
}
const title: string = 'PirateBay'
const url: string = '/games/icons/PirateBay.webp'
</script>

<template>
  <SingleGame
    :description="description"
    :gallery-pictures="galleryPictures"
    :store-urls="storeUrls"
    :title="title"
    :url="url"
  />
</template>

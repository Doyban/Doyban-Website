<script lang="ts" setup>
import GalleryPicture from '~/interfaces/GalleryPicture'
import SingleGame from '~/components/SingleGame.vue'
import StoreUrls from '~/interfaces/StoreUrls'

const description: string =
  'CashNinja is a free and fun game where you get get a lot of cash!'
const galleryPictures: GalleryPicture[] = [
  { id: 1, src: 'games/gallery/CashNinja/1.webp' },
  { id: 2, src: 'games/gallery/CashNinja/2.webp' },
  { id: 3, src: 'games/gallery/CashNinja/3.webp' },
  { id: 4, src: 'games/gallery/CashNinja/4.webp' },
  { id: 5, src: 'games/gallery/CashNinja/5.webp' },
]
const storeUrls: StoreUrls = {
  appleAppStore: 'https://apps.apple.com/app/cashninja/id1450304980',
  googlePlayStore:
    'https://play.google.com/store/apps/details?id=com.doyban.cashninja',
  messenger: 'https://m.me/320930938515454?game=cashninja-instant',
  facebookWeb: 'https://apps.facebook.com/cash-ninja',
  itchIo: 'https://doyban.itch.io/cashninja',
}
const title: string = 'CashNinja'
const url: string = '/games/icons/CashNinja.webp'
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

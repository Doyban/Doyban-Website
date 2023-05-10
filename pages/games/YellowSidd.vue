<script lang="ts" setup>
import GalleryPicture from '~/interfaces/GalleryPicture'
import SingleGame from '~/components/SingleGame.vue'
import StoreUrls from '~/interfaces/StoreUrls'

const description: string = 'Old School Platformer for new Ages.'
const galleryPictures: GalleryPicture[] = [
  { id: 1, src: 'gallery/YellowSidd/1.webp' },
  { id: 2, src: 'gallery/YellowSidd/2.webp' },
  { id: 3, src: 'gallery/YellowSidd/3.webp' },
  { id: 4, src: 'gallery/YellowSidd/4.webp' },
  { id: 5, src: 'gallery/YellowSidd/5.webp' },
]
const storeUrls: StoreUrls = {
  appleAppStore: 'https://apps.apple.com/app/yellowsidd/id1381229545',
  googlePlayStore:
    'https://play.google.com/store/apps/details?id=com.doyban.yellowsidd',
  messenger: 'https://m.me/2267679480167572?game=yellowsidd-instant',
  facebookWeb: 'https://apps.facebook.com/yellowsidd',
  itchIo: 'https://doyban.itch.io/yellowsidd',
  chromeWebStore:
    'https://chrome.google.com/webstore/detail/yellowsidd/iphohbgpbedhejglcfcgkgbobjipmgkb',
}
const title: string = 'YellowSidd'
const url: string = '/games/icons/YellowSidd.webp'
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

<script lang="ts" setup>
import GalleryPicture from '~/interfaces/GalleryPicture'
import SingleGame from '~/components/SingleGame.vue'
import StoreUrls from '~/interfaces/StoreUrls'

const description: string =
  'Never-ending mobile game that will keep you on the edge of your seat!'
const galleryPictures: GalleryPicture[] = [
  { id: 1, src: 'games/gallery/FlyingPlane/1.webp' },
  { id: 2, src: 'games/gallery/FlyingPlane/2.webp' },
  { id: 3, src: 'games/gallery/FlyingPlane/3.webp' },
  { id: 4, src: 'games/gallery/FlyingPlane/4.webp' },
  { id: 5, src: 'games/gallery/FlyingPlane/5.webp' },
]
const storeUrls: StoreUrls = {
  appleAppStore: 'https://apps.apple.com/app/flyyingplane/id6470124867',
  googlePlayStore:
    'https://play.google.com/store/apps/details?id=com.doyban.flyingplane',
  itchIo: 'https://doyban.itch.io/flyingplane',
}
const title: string = 'FlyingPlane'
const url: string = '/games/icons/FlyingPlane.webp'
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

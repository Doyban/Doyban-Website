<script lang="ts" setup>
import GalleryPicture from '~/interfaces/GalleryPicture'
import SingleGame from '~/components/SingleGame.vue'
import StoreUrls from '~/interfaces/StoreUrls'

const description: string = 'Move up all the way to infinity.'
const galleryPictures: GalleryPicture[] = [
  { id: 1, src: 'gallery/MoveUp/1.webp' },
  { id: 2, src: 'gallery/MoveUp/2.webp' },
  { id: 3, src: 'gallery/MoveUp/3.webp' },
  { id: 4, src: 'gallery/MoveUp/4.webp' },
  { id: 5, src: 'gallery/MoveUp/5.webp' },
]
const storeUrls: StoreUrls = {
  appleAppStore: 'https://apps.apple.com/app/moveup/id6444214445',
  googlePlayStore:
    'https://play.google.com/store/apps/details?id=com.doyban.moveup',
  itchIo: 'https://doyban.itch.io/moveup',
}
const title: string = 'MoveUp'
const url: string = '/games/icons/MoveUp.webp'
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

<script lang="ts" setup>
import GalleryPicture from '~/interfaces/GalleryPicture'
import SingleGame from '~/components/SingleGame.vue'
import StoreUrls from '~/interfaces/StoreUrls'

const description: string =
  'Action-packed shooter game set in the vast expanse of space.'
const galleryPictures: GalleryPicture[] = [
  { id: 1, src: 'games/gallery/GalacticShooter/1.webp' },
  { id: 2, src: 'games/gallery/GalacticShooter/2.webp' },
  { id: 3, src: 'games/gallery/GalacticShooter/3.webp' },
  { id: 4, src: 'games/gallery/GalacticShooter/4.webp' },
  { id: 5, src: 'games/gallery/GalacticShooter/5.webp' },
]
const storeUrls: StoreUrls = {
  appleAppStore: 'https://apps.apple.com/app/flyyingplane/id6470124867', // TODO: Replace when published.
  googlePlayStore:
    'https://play.google.com/store/apps/details?id=com.doyban.galacticshooter',
  itchIo: 'https://doyban.itch.io/galacticshooter',
}
const title: string = 'GalacticShooter'
const url: string = '/games/icons/GalacticShooter.webp'
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

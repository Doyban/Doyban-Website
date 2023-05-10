<script lang="ts" setup>
import GalleryPicture from '~/interfaces/GalleryPicture'
import SingleGame from '~/components/SingleGame.vue'
import StoreUrls from '~/interfaces/StoreUrls'

const description: string = 'InfiniteHell is a neverending hell!'
const galleryPictures: GalleryPicture[] = [
  { id: 1, src: 'gallery/InfiniteHell/1.webp' },
  { id: 2, src: 'gallery/InfiniteHell/2.webp' },
  { id: 3, src: 'gallery/InfiniteHell/3.webp' },
  { id: 4, src: 'gallery/InfiniteHell/4.webp' },
  { id: 5, src: 'gallery/InfiniteHell/5.webp' },
]
const storeUrls: StoreUrls = {
  appleAppStore: 'https://apps.apple.com/app/infinitehell/id1450304986',
  googlePlayStore:
    'https://play.google.com/store/apps/details?id=com.doyban.infinitehell',
  messenger: 'https://m.me/2211491489066459?game=infinitehell-instant',
  facebookWeb: 'https://apps.facebook.com/infinitehell',
  itchIo: 'https://doyban.itch.io/infinitehell',
}
const title: string = 'InfiniteHell'
const url: string = '/games/icons/InfiniteHell.webp'
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

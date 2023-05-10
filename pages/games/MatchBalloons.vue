<script lang="ts" setup>
import GalleryPicture from '~/interfaces/GalleryPicture'
import SingleGame from '~/components/SingleGame.vue'
import StoreUrls from '~/interfaces/StoreUrls'

const description: string = 'MatchBalloons is a friendly match 3 game!'
const galleryPictures: GalleryPicture[] = [
  { id: 1, src: 'gallery/MatchBalloons/1.webp' },
  { id: 2, src: 'gallery/MatchBalloons/2.webp' },
  { id: 3, src: 'gallery/MatchBalloons/3.webp' },
  { id: 4, src: 'gallery/MatchBalloons/4.webp' },
  { id: 5, src: 'gallery/MatchBalloons/5.webp' },
]
const storeUrls: StoreUrls = {
  appleAppStore: 'https://www.apple.com/app-store',
  googlePlayStore:
    'https://play.google.com/store/apps/details?id=com.doyban.matchballoons',
  messenger: 'https://m.me/608428436252601?game=mballoons-instant',
  facebookWeb: 'https://apps.facebook.com/matchballoons',
  itchIo: 'https://doyban.itch.io/matchballoons',
  chromeWebStore:
    'https://chrome.google.com/webstore/detail/matchballoons/pngjfjiicdgbphmjclejldaaiffofobm',
}
const title: string = 'MatchBalloons'
const url: string = '/games/icons/MatchBalloons.webp'
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

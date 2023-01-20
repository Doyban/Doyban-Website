<template>
  <SingleGame
    :description="description"
    :items="items"
    :store-urls="storeUrls"
    :title="title"
    :url="url"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import SingleGame from '~/components/SingleGame.vue'

export default Vue.extend({
  components: { SingleGame },
  data() {
    return {
      description: 'MatchBalloons description',
      selectedItem: null,
      items: [
        { id: 1, src: require('@/static/games/gallery/MatchBalloons/1.webp') },
        { id: 2, src: require('@/static/games/gallery/MatchBalloons/2.webp') },
        { id: 3, src: require('@/static/games/gallery/MatchBalloons/3.webp') },
        { id: 4, src: require('@/static/games/gallery/MatchBalloons/4.webp') },
        { id: 5, src: require('@/static/games/gallery/MatchBalloons/5.webp') },
      ],
      storeUrls: {
        appleAppStore: 'https://www.apple.com/app-store',
        googlePlayStore:
          'https://play.google.com/store/apps/details?id=com.doyban.matchballoons',
        messenger: 'https://m.me/608428436252601?game=mballoons-instant',
        facebookWeb: 'https://apps.facebook.com/matchballoons',
        itchIo: 'https://doyban.itch.io/matchballoons',
        chromeWebStore:
          'https://chrome.google.com/webstore/detail/matchballoons/pngjfjiicdgbphmjclejldaaiffofobm',
      },
      title: 'MatchBalloons',
      url: '/games/icons/MatchBalloons.webp',
    }
  },
})
</script>

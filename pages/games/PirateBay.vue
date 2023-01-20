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
      description: 'PirateBay description',
      selectedItem: null,
      items: [
        { id: 1, src: require('@/static/games/gallery/PirateBay/1.webp') },
        { id: 2, src: require('@/static/games/gallery/PirateBay/2.webp') },
        { id: 3, src: require('@/static/games/gallery/PirateBay/3.webp') },
        { id: 4, src: require('@/static/games/gallery/PirateBay/4.webp') },
        { id: 5, src: require('@/static/games/gallery/PirateBay/5.webp') },
      ],
      storeUrls: {
        appleAppStore: 'https://apps.apple.com/app/piratebay/id1450304848',
        googlePlayStore:
          'https://play.google.com/store/apps/details?id=com.doyban.piratebay',
        messenger: 'https://m.me/GamePirateBay?game=piratebay-instant',
        facebookWeb: 'https://apps.facebook.com/doyban-piratebay',
        itchIo: 'https://doyban.itch.io/piratebay',
      },
      title: 'PirateBay',
      url: '/v.png',
    }
  },
})
</script>

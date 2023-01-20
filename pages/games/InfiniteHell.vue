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
      description: 'InfiniteHell description',
      selectedItem: null,
      items: [
        { id: 1, src: require('@/static/games/gallery/InfiniteHell/1.webp') },
        { id: 2, src: require('@/static/games/gallery/InfiniteHell/2.webp') },
        { id: 3, src: require('@/static/games/gallery/InfiniteHell/3.webp') },
        { id: 4, src: require('@/static/games/gallery/InfiniteHell/4.webp') },
        { id: 5, src: require('@/static/games/gallery/InfiniteHell/5.webp') },
      ],
      storeUrls: {
        appleAppStore: 'https://apps.apple.com/app/infinitehell/id1450304986',
        googlePlayStore:
          'https://play.google.com/store/apps/details?id=com.doyban.infinitehell',
        messenger: 'https://m.me/2211491489066459?game=infinitehell-instant',
        facebookWeb: 'https://apps.facebook.com/infinitehell',
        itchIo: 'https://doyban.itch.io/infinitehell',
      },
      title: 'InfiniteHell',
      url: '/v.png',
    }
  },
})
</script>

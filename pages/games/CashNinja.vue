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
      description: 'CashNinja description',
      selectedItem: null,
      items: [
        { id: 1, src: require('@/static/games/gallery/CashNinja/1.webp') },
        { id: 2, src: require('@/static/games/gallery/CashNinja/2.webp') },
        { id: 3, src: require('@/static/games/gallery/CashNinja/3.webp') },
        { id: 4, src: require('@/static/games/gallery/CashNinja/4.webp') },
        { id: 5, src: require('@/static/games/gallery/CashNinja/5.webp') },
      ],
      storeUrls: {
        appleAppStore: 'https://apps.apple.com/app/cashninja/id1450304980',
        googlePlayStore:
          'https://play.google.com/store/apps/details?id=com.doyban.cashninja',
        messenger: 'https://m.me/320930938515454?game=cashninja-instant',
        facebookWeb: 'https://apps.facebook.com/cash-ninja',
        itchIo: 'https://doyban.itch.io/cashninja',
      },
      title: 'CashNinja',
      url: '/games/icons/CashNinja.webp',
    }
  },
})
</script>

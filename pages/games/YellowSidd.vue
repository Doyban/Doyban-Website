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
      description: 'Old School Platformer for new Ages.',
      selectedItem: null,
      items: [
        { id: 1, src: require('@/static/games/gallery/YellowSidd/1.webp') },
        { id: 2, src: require('@/static/games/gallery/YellowSidd/2.webp') },
        { id: 3, src: require('@/static/games/gallery/YellowSidd/3.webp') },
        { id: 4, src: require('@/static/games/gallery/YellowSidd/4.webp') },
        { id: 5, src: require('@/static/games/gallery/YellowSidd/5.webp') },
      ],
      storeUrls: {
        appleAppStore: 'https://apps.apple.com/app/yellowsidd/id1381229545',
        googlePlayStore:
          'https://play.google.com/store/apps/details?id=com.doyban.yellowsidd',
        messenger: 'https://m.me/2267679480167572?game=yellowsidd-instant',
        facebookWeb: 'https://apps.facebook.com/yellowsidd',
        itchIo: 'https://doyban.itch.io/yellowsidd',
        chromeWebStore:
          'https://chrome.google.com/webstore/detail/yellowsidd/iphohbgpbedhejglcfcgkgbobjipmgkb',
      },
      title: 'YellowSidd',
      url: '/games/icons/YellowSidd.webp',
    }
  },
})
</script>

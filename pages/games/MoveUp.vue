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
      description: 'MoveUp description',
      selectedItem: null,
      items: [
        { id: 1, src: require('@/static/games/gallery/MoveUp/1.webp') },
        { id: 2, src: require('@/static/games/gallery/MoveUp/2.webp') },
        { id: 3, src: require('@/static/games/gallery/MoveUp/3.webp') },
        { id: 4, src: require('@/static/games/gallery/MoveUp/4.webp') },
        { id: 5, src: require('@/static/games/gallery/MoveUp/5.webp') },
      ],
      storeUrls: {
        appleAppStore: 'https://apps.apple.com/app/moveup/id6444214445',
        googlePlayStore:
          'https://play.google.com/store/apps/details?id=com.doyban.moveup',
        itchIo: 'https://doyban.itch.io/moveup',
      },
      title: 'MoveUp',
      url: '/v.png',
    }
  },
})
</script>

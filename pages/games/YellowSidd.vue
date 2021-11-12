<template>
  <SingleGame
    :description="description"
    :items="items"
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
      description: 'YellowSidd description',
      selectedItem: null,
      items: [
        { id: 1, src: require('@/static/games/gallery/YellowSidd/1.webp') },
        { id: 2, src: require('@/static/games/gallery/YellowSidd/2.webp') },
        { id: 3, src: require('@/static/games/gallery/YellowSidd/3.webp') },
        { id: 4, src: require('@/static/games/gallery/YellowSidd/4.webp') },
        { id: 5, src: require('@/static/games/gallery/YellowSidd/5.webp') },
      ],
      title: 'YellowSidd',
      url: '/v.png',
    }
  },
})
</script>

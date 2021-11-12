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
      description: 'InfiniteHell description',
      selectedItem: null,
      items: [
        { id: 1, src: require('@/static/games/gallery/InfiniteHell/1.webp') },
        { id: 2, src: require('@/static/games/gallery/InfiniteHell/2.webp') },
        { id: 3, src: require('@/static/games/gallery/InfiniteHell/3.webp') },
        { id: 4, src: require('@/static/games/gallery/InfiniteHell/4.webp') },
        { id: 5, src: require('@/static/games/gallery/InfiniteHell/5.webp') },
      ],
      title: 'InfiniteHell',
      url: '/v.png',
    }
  },
})
</script>

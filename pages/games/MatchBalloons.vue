<template>
  <section>
    <v-row>
      <v-col class="text-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
        <blockquote class="blockquote">
          &#8220;First,12312solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;MatchBalloons</em>
            </small>
          </footer>
        </blockquote>
        <v-overlay v-if="selectedItem">
          <v-img
            :src="selectedItem ? selectedItem.src : ''"
            contain
            @click="selectedItem = null"
          ></v-img>
        </v-overlay>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="item.src"
          contain
          class="grey lighten-2"
          @click="selectedItem = item"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      selectedItem: null,
      items: [
        { id: 1, src: require('@/static/games/gallery/MatchBalloons/1.webp') },
        { id: 1, src: require('@/static/games/gallery/MatchBalloons/2.webp') },
        { id: 1, src: require('@/static/games/gallery/MatchBalloons/3.webp') },
        { id: 1, src: require('@/static/games/gallery/MatchBalloons/4.webp') },
        { id: 1, src: require('@/static/games/gallery/MatchBalloons/5.webp') },
      ],
    }
  },
})
</script>

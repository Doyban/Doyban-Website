<template>
  <section>
    <v-row>
      <v-col class="text-center mt-12 pt-12">
        <img :alt="title" :src="url" class="mb-5" />
        <blockquote class="blockquote">
          &#8220;{{ description }}&#8221;
          <footer>
            <small>
              <em>&mdash;{{ title }}</em>
            </small>
          </footer>
        </blockquote>
        <a
          v-for="(storeButton, index) in storeButtons"
          :href="storeButton.url"
          :key="index"
          :title="storeButton.title"
          rel="noreferrer noopener"
        >
          <img
            v-if="storeButton.url"
            :alt="storeButton.title"
            :src="
              require(`@/static/buttons_stores/` +
                `${storeButton.filename}` +
                `.webp`)
            "
            :title="storeButton.title"
            class="storeButtons"
        /></a>
        <v-overlay v-if="selectedItem">
          <v-img
            :src="selectedItem ? selectedItem.src : ''"
            contain
            @click="selectedItem = null"
          ></v-img>
        </v-overlay>
      </v-col>
    </v-row>
    <v-row class="mb-8">
      <v-col
        v-for="item in items"
        :key="item.id"
        xs="12"
        md="4"
        class="px-6 mt-6"
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
  props: {
    description: String,
    items: Object,
    selectedItem: Boolean,
    storeUrls: Object,
    title: String,
    url: String,
  },
  data() {
    return {
      storeButtons: [
        {
          filename: 'AppleAppStoreButton',
          title: 'Apple App Store',
          url: this.$props.storeUrls.appleAppStore,
        },
        {
          filename: 'GooglePlayStoreButton',
          title: 'Google Play Store',
          url: this.storeUrls.googlePlayStore,
        },
        {
          filename: 'MessengerButton',
          title: 'Messenger',
          url: this.storeUrls.messenger,
        },
        {
          filename: 'FacebookWebButton',
          title: 'Facebook Web',
          url: this.storeUrls.facebookWeb,
        },
        {
          filename: 'ItchIoButton',
          title: 'itch.io',
          url: this.storeUrls.itchIo,
        },
        {
          filename: 'ChromeWebStoreButton',
          title: 'Chrome Web Store',
          url: this.storeUrls.chromeWebStore,
        },
      ],
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
})
</script>

<style lang="scss" scoped>
a img {
  margin: 1.5rem;
}

blockquote {
  font-family: 'Cormorant', serif;
}

blockquote > footer > small {
  font-family: 'IM Fell English SC', serif;
}

.storeButtons {
  animation: turn 3.5s ease-out forwards 1s;
  height: 60px;
  transform: rotateY(560deg);
  width: 160px;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>

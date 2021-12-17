<template>
  <section>
    <v-row>
      <v-col class="text-center">
        <img :src="url" alt="Vuetify.js" class="mb-5" />
        <blockquote class="blockquote">
          &#8220;{{ description }}&#8221;
          <footer>
            <small>
              <em>&mdash;{{ title }}</em>
            </small>
          </footer>
        </blockquote>
        <img
          v-for="(storeButton, index) in storeButtons"
          :key="index"
          class="VuetifyLogo"
          alt="Vuetify Logo"
          :src="
            require(`@/static/buttons_stores/` +
              `${storeButton.filename}` +
              `.png`)
          "
        />
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
      storeButtons: [
        {
          filename: 'AppleAppStoreButton',
        },
        {
          filename: 'GooglePlayStoreButton',
        },
        {
          filename: 'MessengerButton',
        },
        {
          filename: 'FacebookWebButton',
        },
        {
          filename: 'ItchIoButton',
        },
        {
          filename: 'ChromeWebStoreButton',
        },
      ],
    }
  },
  props: {
    description: String,
    items: Object,
    selectedItem: Boolean,
    title: String,
    url: String,
  },
})
</script>

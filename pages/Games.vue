<template>
  <!-- TODO: Polish this component, add real content and add interface/subtitles to reach game. -->
  <!-- TODO: Add images only in modern standards (AVIF/WEBP). -->
  <section>
    <v-row>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/static/pages/games.jpeg')" height="100%" />
      </v-col>
      <v-col md="6" xs="12">
        <v-row class="my-12" justify="center">
          <v-col md="8" xs="12">
            <h1 class="mb-6">Games</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              itaque accusantium tenetur iste dolorum maxime similique sapiente
              libero veritatis necessitatibus esse adipisci culpa ipsum
              molestiae sunt, magnam dignissimos suscipit inventore!
            </p></v-col
          >
        </v-row>
        <v-row wrap>
          <v-col
            v-for="(feature, index) in features"
            :key="index"
            class="ma-12"
            lg="4"
            md="6"
            xs="12"
          >
            <v-row justify="center">
              <v-avatar
                class="elevation-24 mb-2 text-center"
                color="purple darken-4"
                size="64"
                ><v-icon dark x-large v-text="feature.icon"
              /></v-avatar>
            </v-row>
            <h2 class="mb-2" v-text="feature.title" />
            <p v-text="feature.description"></p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="4">
        <h1>Our Games</h1>
        <p class="text-center">Some dummy description.</p>
        <v-divider />
      </v-col>
    </v-row>

    <v-row v-for="(game, index) in games" :key="index">
      <v-col
        md="6"
        xs="12"
        :order-md="index % 2 === 0 ? '2' : '1'"
        order-sm="2"
      >
        <h2 class="font-weight-black my-12" v-text="game.title" />
        <p v-text="game.description" />
        <h3 class="font-weight-black mb-6 mt-12">About</h3>
        <p v-text="game.description" />
        <h3 class="font-weight-black mb-6 mt-12">Where to play?</h3>
        <p v-text="game.description" />
      </v-col>
      <v-col
        md="6"
        xs="12"
        :order-md="index % 2 === 0 ? '1' : '2'"
        order-sm="1"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            :class="{ 'on-hover': hover }"
            color="purple lighten-5"
            :elevation="hover ? 24 : 12"
            loading
            outlined
            ripple
            shaped
          >
            <!-- Slots for "v-progress-linear". -->
            <template slot="progress">
              <v-progress-linear
                buffer-value="50"
                color="purple darken-4"
                indeterminate
              ></v-progress-linear>
            </template>
            <!--/ Slots for "v-progress-linear". -->
            <v-img
              :src="require(`@/static/games/` + `${game.title}` + `.jpeg`)"
            />
            <v-card-title class="justify-center" v-text="game.title" />
            <v-card-subtitle><p v-text="game.description" /></v-card-subtitle>
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
            <v-card-actions>
              <v-spacer />
              <v-btn icon @click="showGame1Details = !showGame1Details"
                ><v-icon>{{
                  showGame1Details ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon></v-btn
              >
            </v-card-actions>
            <v-expand-transition>
              <div v-show="showGame1Details">
                <v-divider />
                <v-card-text><p v-text="game.description" /></v-card-text>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attributes }">
                    <v-btn
                      class="mt-12"
                      light
                      exact
                      nuxt
                      :to="'/games/' + `${game.title.toLowerCase()}`"
                      x-large
                      v-bind="attributes"
                      v-on="on"
                      >Button
                    </v-btn> </template
                  ><span>Read More</span>
                </v-tooltip>
              </div>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import { Feature } from './interfaces/Feature'

export default Vue.extend({
  data() {
    return {
      games: [
        {
          description: 'Lorem',
          title: 'PirateBay',
        },
        {
          description: 'Lorem',
          title: 'YellowSidd',
        },
        {
          description: 'Lorem',
          title: 'MatchBalloons',
        },
        {
          description: 'Lorem',
          title: 'CashNinja',
        },
        {
          description: 'Lorem',
          title: 'InfiniteHell',
        },
      ],
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
      features: [] as Feature[],
      showGame1Details: false, // TODO: Each game should have it separated.
    }
  },
  created() {
    this.features = [
      {
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium harum distinctio nisi iure enim corrupti consequatur perferendis dignissimos sapiente voluptate obcaecati quibusdam excepturi exercitationem aut unde recusandae, non debitis.',
        icon: 'mdi-home',
        title: 'Name',
      },
      {
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium harum distinctio nisi iure enim corrupti consequatur perferendis dignissimos sapiente voluptate obcaecati quibusdam excepturi exercitationem aut unde recusandae, non debitis.',
        icon: 'mdi-home',
        title: 'Name',
      },
      {
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium harum distinctio nisi iure enim corrupti consequatur perferendis dignissimos sapiente voluptate obcaecati quibusdam excepturi exercitationem aut unde recusandae, non debitis.',
        icon: 'mdi-home',
        title: 'Name',
      },
      {
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium harum distinctio nisi iure enim corrupti consequatur perferendis dignissimos sapiente voluptate obcaecati quibusdam excepturi exercitationem aut unde recusandae, non debitis.',
        icon: 'mdi-home',
        title: 'Name',
      },
    ]
  },
})
</script>

<style lang="scss" scoped>
h1,
h2,
h3 {
  text-align: center;
}
</style>

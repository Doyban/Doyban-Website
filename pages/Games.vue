<template>
  <!-- TODO: Polish this component, add real content and add interface/subtitles to reach game. -->
  <!-- TODO: Add images only in modern standards (AVIF/WEBP). -->
  <section>
    <v-row>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/static/pages/games.jpeg')" height="100%" />
      </v-flex>
      <v-col class="mx-sm-3 mx-md-0" md="6" xs="12">
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
    <v-container>
      <v-row justify="center">
        <v-col sm="4">
          <h1>Our Games</h1>
          <p class="text-center">Here you can find what we have done so far.</p>
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
          <p class="text-center" v-text="game.headline" />
          <h3 class="font-weight-black mb-6 mt-12">About</h3>
          <p class="text-center" v-text="game.description" />
          <h3 class="font-weight-black mb-6 mt-12">Where to play?</h3>
          <a
            v-for="(storeButton, indexGameStoreButton) in game.storeButtons"
            :href="storeButton.url"
            :key="indexGameStoreButton"
            :title="storeButton.title"
            rel="noreferrer noopener"
          >
            <img
              :alt="storeButton.title"
              :src="
                require(`@/static/buttons_stores/` +
                  `${storeButton.filename}` +
                  `.png`)
              "
              :title="storeButton.title"
              class="storeButtons"
          /></a>
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
              <v-card-subtitle
                ><p class="text-center" v-text="game.headline"
              /></v-card-subtitle>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  icon
                  @click="game.showGameDetails = !game.showGameDetails"
                  ><v-icon>{{
                    game.showGameDetails ? 'mdi-chevron-up' : 'mdi-chevron-down'
                  }}</v-icon></v-btn
                >
              </v-card-actions>
              <v-expand-transition>
                <div v-show="game.showGameDetails">
                  <v-divider />
                  <v-card-text><p v-text="game.description" /></v-card-text>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attributes }">
                      <v-btn
                        class="mb-12"
                        light
                        exact
                        nuxt
                        :to="'/games/' + `${game.title.toLowerCase()}`"
                        x-large
                        v-bind="attributes"
                        v-on="on"
                        >Read More
                      </v-btn> </template
                    ><span>Read More</span>
                  </v-tooltip>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
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
          headline: 'MoveUp description...',
          showGameDetails: false,
          storeButtons: [
            {
              filename: 'AppleAppStoreButton',
              title: 'Apple App Store',
              url: 'https://apps.apple.com/app/moveup/id6444214445',
            },
            {
              filename: 'GooglePlayStoreButton',
              title: 'Google Play Store',
              url: 'https://play.google.com/store/apps/details?id=com.doyban.moveup',
            },
            {
              filename: 'ItchIoButton',
              title: 'itch.io',
              url: 'https://doyban.itch.io/moveup',
            },
          ],
          title: 'MoveUp',
        },
        {
          description: 'Lorem',
          headline:
            'PirateBay let you to discover world as a Pirate and fight with different enemies.',
          showGameDetails: false,
          storeButtons: [
            {
              filename: 'AppleAppStoreButton',
              title: 'Apple App Store',
              url: 'https://apps.apple.com/app/piratebay/id1450304848',
            },
            {
              filename: 'GooglePlayStoreButton',
              title: 'Google Play Store',
              // Strange Prettier error to insert: https://github.com/prettier/eslint-plugin-prettier/issues/116
              // eslint-disable-next-line
              url: 'https://play.google.com/store/apps/details?id=com.doyban.piratebay',
            },
            {
              filename: 'MessengerButton',
              title: 'Messenger',
              url: 'https://m.me/GamePirateBay?game=piratebay-instant',
            },
            {
              filename: 'FacebookWebButton',
              title: 'Facebook Web',
              url: 'https://apps.facebook.com/doyban-piratebay',
            },
            {
              filename: 'ItchIoButton',
              title: 'itch.io',
              url: 'https://doyban.itch.io/piratebay',
            },
            {
              filename: 'ChromeWebStoreButton',
              title: 'Chrome Web Store',
              url: 'https://chrome.google.com/webstore',
            },
          ],
          title: 'PirateBay',
        },
        {
          description: 'Lorem',
          headline:
            'YellowSidd gives you ability to play good old style platformer type game.',
          showGameDetails: false,
          storeButtons: [
            {
              filename: 'AppleAppStoreButton',
              title: 'Apple App Store',
              url: 'https://apps.apple.com/app/yellowsidd/id1381229545',
            },
            {
              filename: 'GooglePlayStoreButton',
              title: 'Google Play Store',
              // Strange Prettier error to insert: https://github.com/prettier/eslint-plugin-prettier/issues/116
              // eslint-disable-next-line
              url: 'https://play.google.com/store/apps/details?id=com.doyban.yellowsidd',
            },
            {
              filename: 'MessengerButton',
              title: 'Messenger',
              url: 'https://m.me/2267679480167572?game=yellowsidd-instant',
            },
            {
              filename: 'FacebookWebButton',
              title: 'Facebook Web',
              url: 'https://apps.facebook.com/yellowsidd',
            },
            {
              filename: 'ItchIoButton',
              title: 'itch.io',
              url: 'https://doyban.itch.io/yellowsidd',
            },
            {
              filename: 'ChromeWebStoreButton',
              title: 'Chrome Web Store',
              // Strange Prettier error to insert: https://github.com/prettier/eslint-plugin-prettier/issues/116
              // eslint-disable-next-line
              url: 'https://chrome.google.com/webstore/detail/yellowsidd/iphohbgpbedhejglcfcgkgbobjipmgkb',
            },
          ],
          title: 'YellowSidd',
        },
        {
          description: 'Lorem',
          headline: 'MatchBalloons is a friendly match 3 game!',
          showGameDetails: false,
          storeButtons: [
            {
              filename: 'AppleAppStoreButton',
              title: 'Apple App Store',
              url: 'https://www.apple.com/app-store',
            },
            {
              filename: 'GooglePlayStoreButton',
              title: 'Google Play Store',
              // Strange Prettier error to insert: https://github.com/prettier/eslint-plugin-prettier/issues/116
              // eslint-disable-next-line
              url: 'https://play.google.com/store/apps/details?id=com.doyban.matchballoons',
            },
            {
              filename: 'MessengerButton',
              title: 'Messenger',
              url: 'https://m.me/608428436252601?game=mballoons-instant',
            },
            {
              filename: 'FacebookWebButton',
              title: 'Facebook Web',
              url: 'https://apps.facebook.com/matchballoons',
            },
            {
              filename: 'ItchIoButton',
              title: 'itch.io',
              url: 'https://doyban.itch.io/matchballoons',
            },
            {
              filename: 'ChromeWebStoreButton',
              title: 'Chrome Web Store',
              // Strange Prettier error to insert: https://github.com/prettier/eslint-plugin-prettier/issues/116
              // eslint-disable-next-line
              url: 'https://chrome.google.com/webstore/detail/matchballoons/pngjfjiicdgbphmjclejldaaiffofobm',
            },
          ],
          title: 'MatchBalloons',
        },
        {
          description: 'Lorem',
          headline:
            'CashNinja is a free and fun game where you get get a lot of cash!',
          showGameDetails: false,
          storeButtons: [
            {
              filename: 'AppleAppStoreButton',
              title: 'Apple App Store',
              url: 'https://apps.apple.com/app/cashninja/id1450304980',
            },
            {
              filename: 'GooglePlayStoreButton',
              title: 'Google Play Store',
              // Strange Prettier error to insert: https://github.com/prettier/eslint-plugin-prettier/issues/116
              // eslint-disable-next-line
              url: 'https://play.google.com/store/apps/details?id=com.doyban.cashninja',
            },
            {
              filename: 'MessengerButton',
              title: 'Messenger',
              url: 'https://m.me/320930938515454?game=cashninja-instant',
            },
            {
              filename: 'FacebookWebButton',
              title: 'Facebook Web',
              url: 'https://apps.facebook.com/cash-ninja',
            },
            {
              filename: 'ItchIoButton',
              title: 'itch.io',
              url: 'https://doyban.itch.io/cashninja',
            },
            {
              filename: 'ChromeWebStoreButton',
              title: 'Chrome Web Store',
              url: 'https://chrome.google.com/webstore',
            },
          ],
          title: 'CashNinja',
        },
        {
          description: 'Lorem',
          headline: 'InfiniteHell is a neverending hell!',
          showGameDetails: false,
          storeButtons: [
            {
              filename: 'AppleAppStoreButton',
              title: 'Apple App Store',
              url: 'https://apps.apple.com/app/infinitehell/id1450304986',
            },
            {
              filename: 'GooglePlayStoreButton',
              title: 'Google Play Store',
              // Strange Prettier error to insert: https://github.com/prettier/eslint-plugin-prettier/issues/116
              // eslint-disable-next-line
              url: 'https://play.google.com/store/apps/details?id=com.doyban.infinitehell',
            },
            {
              filename: 'MessengerButton',
              title: 'Messenger',
              url: 'https://m.me/2211491489066459?game=infinitehell-instant',
            },
            {
              filename: 'FacebookWebButton',
              title: 'Facebook Web',
              url: 'https://apps.facebook.com/infinitehell',
            },
            {
              filename: 'ItchIoButton',
              title: 'itch.io',
              url: 'https://doyban.itch.io/infinitehell',
            },
            {
              filename: 'ChromeWebStoreButton',
              title: 'Chrome Web Store',
              url: 'https://chrome.google.com/webstore',
            },
          ],
          title: 'InfiniteHell',
        },
      ],
      features: [] as Feature[],
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

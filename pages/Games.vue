<script lang="ts" setup>
import Feature from '../interfaces/Feature'

const features: Feature[] = [
  {
    description:
      "Mini Games work without Installation. Discover 5G ready Mobile Games. Traditional App Stores will not be needed anymore for Games due to 5G's low latency and speed. Games inside the most popular apps and chats without the need to install or update anything.",
    icon: 'mdi-cloud',
    title: 'Cloud',
  },
  {
    description:
      '5G will create new gaming platforms in popular apps and chats. We can be ready enough to leverage the upcoming change with the games by performing our research and development on the topic of Games without Installation compared to other platforms.',
    icon: 'mdi-access-point-network',
    title: '5G',
  },
  {
    description:
      'Creating games is about more than design and development. Hobbyists heavily occupy this sector, where is no space for companies without being crazy even though we are currently heavily prototyping, but still, with the games we create; we also give away part of our soul.',
    icon: 'mdi-hand-heart',
    title: 'Passion',
  },
  {
    description:
      'We are proud of everyone enjoying our simple, fun games. There are over 200,000 enthusiasts who played at least one of our games on any platform. The 5G is supposed to accelerate the development of these gaming channels we focus on to have you more soon.',
    icon: 'mdi-account-group',
    title: 'Players',
  },
]
const games = [
  {
    description:
      "<ul class='pl-0' style='list-style: none;'><li>Simple.</li><li>Minimalistic.</li><li>Platformer game moving up till infinity.</li><li>Available on 3 platforms.</li></ul>",
    headline: 'Move up all the way to infinity.',
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
    description:
      "<ul class='pl-0' style='list-style: none;'><li>Many different enemies.</li><li>Infinite levels to play.</li><li>Fabulous gameplay.</li><li>Available on 5 platforms.</li></ul>",
    headline: 'Take a challenge and access legendary PirateBay!',
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
    ],
    title: 'PirateBay',
  },
  {
    description:
      "<ul class='pl-0' style='list-style: none;'><li>User friendly graphics.</li><li>Wide spectrum of enemies.</li><li>Huge amount of coins to grab.</li><li>Available on 6 platforms.</li></ul>",
    headline: 'Old School Platformer for new Ages.',
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
        url: 'https://chrome.google.com/webstore/detail/yellowsidd/iphohbgpbedhejglcfcgkgbobjipmgkb',
      },
    ],
    title: 'YellowSidd',
  },
  {
    description:
      "<ul class='pl-0' style='list-style: none;'><li>Go through infinite levels.</li><li>Match 3 or more balloons to get points.</li><li>Every level you need more points having less time.</li><li>Available on 5 platforms.</li></ul>",
    headline: 'MatchBalloons is a friendly match 3 game!',
    showGameDetails: false,
    storeButtons: [
      {
        filename: 'GooglePlayStoreButton',
        title: 'Google Play Store',
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
        url: 'https://chrome.google.com/webstore/detail/matchballoons/pngjfjiicdgbphmjclejldaaiffofobm',
      },
    ],
    title: 'MatchBalloons',
  },
  {
    description:
      "<ul class='pl-0' style='list-style: none;'><li>For money lovers.</li><li>Never ending rain of cash.</li><li>10 different types of coins to grab.</li><li>Available on 5 platforms.</li></ul>",
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
    ],
    title: 'CashNinja',
  },
  {
    description:
      "<ul class='pl-0' style='list-style: none;'><li>Many things to do.</li><li>Many chests to open.</li><li>Take a hero, just fly above them all.</li><li>Available on 5 platforms.</li></ul>",
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
    ],
    title: 'InfiniteHell',
  },
]

useHead({
  title: 'Games',
})
</script>

<template>
  <!-- TODO: Polish this component, and add interface to game object. -->
  <section>
    <v-row>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img alt="" src="/pages/games.webp" height="100%" />
      </v-col>
      <v-col class="mx-sm-3 mx-md-0" cols="12" md="6">
        <v-row class="mt-12" justify="center">
          <v-col cols="12" md="8">
            <h1 class="mb-6">Games</h1>
            <p class="text-center">
              Four pillars on which our vision is based.
            </p>
          </v-col>
        </v-row>
        <v-row justify="center" wrap>
          <v-col
            v-for="(feature, index) in features"
            :key="index"
            class="ma-12"
            cols="12"
            lg="4"
            md="6"
          >
            <v-row justify="center">
              <v-avatar
                class="elevation-24 mb-2 text-center"
                color="purple-darken-4"
                size="64"
                ><v-icon :icon="feature.icon" aria-hidden="true" size="x-large"
              /></v-avatar>
            </v-row>
            <h2 class="my-4" v-text="feature.title" />
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
          cols="12"
          md="6"
          :order-md="index % 2 === 0 ? '2' : '1'"
          order-sm="2"
        >
          <h2 class="font-weight-black my-12" v-text="game.title" />
          <p class="text-center" v-text="game.headline" />
          <h3 class="font-weight-black mb-6 mt-12">About</h3>
          <p class="text-center" v-html="game.description" />
          <h3 class="font-weight-black mb-6 mt-12">Where to play?</h3>
          <NuxtLink
            v-for="(storeButton, indexGameStoreButton) in game.storeButtons"
            :href="storeButton.url"
            :key="indexGameStoreButton"
            :title="storeButton.title"
            rel
          >
            <img
              :alt="storeButton.title"
              :src="`/buttons_stores/${storeButton.filename}.webp`"
              :title="storeButton.title"
              class="storeButtons"
          /></NuxtLink>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :order-md="index % 2 === 0 ? '1' : '2'"
          order-sm="1"
        >
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                :class="{ 'on-hover': isHovering }"
                color="purple-lighten-5"
                :elevation="isHovering ? 24 : 12"
                loading
                outlined
                ripple
                shaped
                v-bind="props"
              >
                <!-- Slots for "v-progress-linear". -->
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    color="purple-darken-4"
                    indeterminate
                  ></v-progress-linear>
                </template>
                <!--/ Slots for "v-progress-linear". -->
                <v-img alt="" :src="`/games/` + `${game.title}` + `.webp`" />
                <v-card-title class="text-center" v-text="game.title" />
                <v-card-subtitle>
                  <p class="text-center" v-text="game.headline" />
                </v-card-subtitle>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    @click="game.showGameDetails = !game.showGameDetails"
                    block
                    icon
                    ripple
                    size="x-large"
                    variant="plain"
                    ><v-icon
                      :icon="
                        game.showGameDetails
                          ? 'mdi-chevron-up'
                          : 'mdi-chevron-down'
                      "
                      aria-hidden="true"
                      size="x-large"
                  /></v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="game.showGameDetails">
                    <v-divider />
                    <v-card-text>
                      <p>
                        There is more information about the game on the
                        dedicated page. You will be redirected to the dedicated
                        page for that game after clicking the
                        <b>Read More</b> button below.
                      </p>
                    </v-card-text>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-btn
                          block
                          elevation="24"
                          exact
                          light
                          ripple
                          size="x-large"
                          :to="'/games/' + `${game.title.toLowerCase()}`"
                          v-bind="props"
                          variant="plain"
                          >Read More
                        </v-btn> </template
                      ><span>Read More</span>
                    </v-tooltip>
                  </div>
                </v-expand-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
a img {
  margin: 1.5rem;

  @media only screen and (max-width: 767px) {
    display: block;
    margin: 1rem auto;
  }
}

h1,
h2,
h3 {
  text-align: center;
}

.v-btn {
  width: 100%;
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

<template>
  <section>
    <v-layout>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/static/pages/about.png')" height="100%" />
      </v-flex>
      <v-layout justify-center my-12>
        <v-flex md6 xs12 mx-3>
          <h1 class="mb-6 text-center">About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque
            accusantium tenetur iste dolorum maxime similique sapiente libero
            veritatis necessitatibus esse adipisci culpa ipsum molestiae sunt,
            magnam dignissimos suscipit inventore!
          </p>
          <h2 class="mb-4 text-center">Mission</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque
            accusantium tenetur iste dolorum maxime similique sapiente libero
            veritatis necessitatibus esse adipisci culpa ipsum molestiae sunt,
            magnam dignissimos suscipit inventore!
          </p>
          <h2 class="mb-4 text-center">Team &amp; Community</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque
            accusantium tenetur iste dolorum maxime similique sapiente libero
            veritatis necessitatibus esse adipisci culpa ipsum molestiae sunt,
            magnam dignissimos suscipit inventore!
          </p>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-container>
      <h1 class="my-12 text-center">Our Story</h1>
      <v-timeline
        :dense="$vuetify.breakpoint.smAndDown"
        :reverse="$vuetify.breakpoint.mdAndUp"
      >
        <v-timeline-item
          v-for="(event, index) in events"
          :key="index"
          :color="event.color"
          class="ma-6"
          fill-dot
          large
        >
          <!-- Slots for "v-timeline-item". -->
          <template v-slot:icon>
            <v-icon dark size="32" v-text="event.icon" />
          </template>
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${event.color}--text`"
              v-text="event.year"
            ></span>
          </template>
          <v-hover v-slot:default="{ hover }">
            <v-card
              :class="{ 'on-hover': hover }"
              :color="`${event.color} lighten-5`"
              :elevation="hover ? 24 : 12"
              loading
              outlined
              ripple
              shaped
            >
              <!-- Slots for "v-progress-linear". -->
              <template slot="progress">
                <v-progress-linear
                  buffer-value="0"
                  :color="`${event.color} darken-4`"
                  stream
                ></v-progress-linear>
              </template>
              <!--/ Slots for "v-progress-linear". -->
              <v-card-title
                :class="`headline pt-6 font-weight-light mb-6 text-center
            ${event.color}--text`"
                v-text="event.title"
              />
              <v-card-text
                ><p>{{ event.description }}</p></v-card-text
              >
            </v-card>
          </v-hover>
          <!--/ Slots for "v-timeline-item". -->
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import { Event } from './interfaces/Event'

export default Vue.extend({
  data() {
    return {
      events: [] as Event[], // TODO: Check if migration to namespace/types wouldn't make a sense (https://medium.com/swlh/adopting-typescript-in-your-vue-js-application-in-a-sane-way-d6bd31757fe5)
    }
  },
  created() {
    this.events = [
      {
        color: 'green',
        description:
          "Daniel Danielecki founds Doyban back in 2016 as a hobby project for his HTML5 games. After creating the first game within the scope of his Engineer's Thesis, 'The game application in HTML 5 technology designed for mobile devices'. The thesis' project and the first game were based on Quintus, but all the next games have been shifted to Phaser.",
        icon: 'mdi-rocket-launch-outline',
        title: 'Doyban has been founded',
        year: 2016,
      },
      {
        color: 'orange',
        description:
          "In 2015, Daniel read in a book (Luke Stevens, RJ Owen: 'The Truth About HTML5, Apress', 2012) about futuristic use cases for HTML5 technology while preparing for his thesis. In 2019, Facebook came up with Messenger Instant Games, a breakthrough for Doyban, quickly increasing the number of players above 100.000, making this hobby project more aspiring.",
        icon: 'mdi-lightbulb-on-outline',
        title: 'Instant Games',
        year: 2019,
      },
      {
        color: 'deep-purple',
        description:
          'We have launched a crowdfunding campaign on the world-famous Kickstarter platform on May 12, 2021. The campaign was about Mobile Games without Installation, Mini Games on popular apps and chats like Facebook Gaming, iMessage, Messenger, Snapchat, Telegram, or WeChat. It was featured widely in Australia, Belgium, Ecuador, Germany, India, Japan, Poland, United Kingdom (UK), United States (USA) by many blogs, gaming portals, technological news, websites, etc., such as Gamasutra. Unfortunately, we have not been successfully funded. There might be several reasons: the audience did not what we wanted to achieve, mobiles gamers do not follow Kickstarter, too early product stage, or just a bad idea.',
        icon: 'mdi-kickstarter',
        title: 'Kickstarter: #5G Ready, Mobile Games.',
        year: 2021,
      },
      {
        color: 'brown',
        description:
          'We believe Mobile Games without Installation on platforms such as Facebook Gaming, iMessage, Messenger, Snapchat, or Telegram will evolve. However, in the meantime, from 2022, we continue publishing our games as native mobile applications on Android and iOS. All our games are installation less ready once our desired ecosystem evolves.',
        icon: 'mdi-cellphone-arrow-down',
        title: 'Mobile Games',
        year: 2022,
      },
    ]
  },
})
</script>

<style lang="scss" scoped>
.v-card {
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}
</style>

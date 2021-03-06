<template>
  <section>
    <v-layout>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/static/random.jpg')" height="100%" />
      </v-flex>
      <v-layout justify-center my-12>
        <v-flex md8 xs12>
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
        color: 'orange',
        description:
          'Exercitation cupidatat magna consequat ea cupidatat non enim consectetur consectetur incididunt elit sint do proident. Laborum consectetur in laborum nostrud exercitation laborum laborum magna ut. Commodo occaecat duis aute tempor elit minim elit non excepteur.',
        icon: 'mdi-phone-in-talk',
        title: 'Enim nulla nulla nostrud irure velit.',
        year: 2000,
      },
      {
        color: 'red',
        description:
          'Aute proident ut nisi ea velit nisi veniam proident ullamco esse excepteur ad. Aliqua magna aute eiusmod elit. Pariatur magna fugiat aliquip fugiat aliqua Lorem. Laboris officia nostrud occaecat mollit eu esse est incididunt. Fugiat qui sit mollit ipsum magna minim est adipisicing quis magna.',
        icon: 'mdi-phone-in-talk',
        title:
          'Cillum sit est quis cupidatat aliquip proident id cillum cupidatat ullamco fugiat ipsum.',
        year: 2010,
      },
      {
        color: 'purple',
        description:
          'Quis enim enim fugiat anim aute nulla ea anim nulla elit ullamco nostrud nulla. Eiusmod ipsum aliqua dolore mollit ad aliquip eu cillum Lorem ex quis officia. Veniam irure veniam exercitation ullamco adipisicing sint sit. Laboris nostrud nulla irure dolor irure consectetur pariatur reprehenderit nisi veniam id eiusmod. Deserunt commodo irure in nostrud dolor ex eiusmod. Eu deserunt cillum laboris fugiat ullamco ipsum id exercitation ex id. Elit consequat deserunt nisi id id.',
        icon: 'mdi-phone-in-talk',
        title: 'Deserunt ipsum amet enim eu nisi sunt pariatur ut.',
        year: 2020,
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

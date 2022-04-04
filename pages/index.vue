<template>
  <section>
    <!-- TODO: Play with Typography (https://vuetifyjs.com/en/styles/text-and-typography/#typography) -->
    <!-- TODO: Improve almost everything on this page. -->
    <v-carousel height="95vh" progress progress-color="purple darken-4">
      <v-carousel-item
        v-for="(sliderItem, index) in sliderItems"
        :key="index"
        :src="sliderItem.src"
        reverse-transition="fade-transition"
        ripple
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-parallax :src="require('@/static/pages/parallax.jpeg')" height="200">
      <h2 class="display-2 text-center">Random text bla bla</h2>
      <em class="text-center">Super super text goes here.</em>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attributes }">
          <v-btn
            class="mt-12"
            light
            exact
            nuxt
            to="/contact"
            x-large
            v-bind="attributes"
            v-on="on"
            >Button
          </v-btn> </template
        ><span>Contact</span>
      </v-tooltip>
    </v-parallax>
    <v-row justify="center">
      <v-col sm="4" xs="12">
        <h2 class="text-center">Our Games</h2>
        <p class="text-center">1, 2, 3 &mdash; that's all. Simple.</p>
        <v-divider />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(point, index) in points" :key="index" md="4" xs="12">
        <v-card class="transparent" flat>
          <v-card-text class="text-center">
            <v-icon color="purple darken-4" x-large>{{ point.icon }}</v-icon>
          </v-card-text>
          <v-card-title class="justify-center">
            <h3>{{ point.title }}</h3>
          </v-card-title>
          <v-card-text>
            <p class="text-center">{{ point.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-img :src="require('@/static/pages/home_bottom.jpeg')" />
    </v-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      points: [
        {
          description:
            'Our games do not need a tutorial to play them from A to Z.',
          icon: 'mdi-refresh-auto',
          title: 'Easy',
        },
        {
          description: 'Simplicity creates out of them so much fun.',
          icon: 'mdi-magic-staff',
          title: 'Fun',
        },
        {
          description:
            'We develop mobile-first games, rarely deploying on different platforms.',
          icon: 'mdi-cellphone',
          title: 'Mobile',
        },
      ],
      sliderItems: [
        {
          src: require('@/static/pages/slide1.png'),
        },
        {
          src: require('@/static/pages/slide2.png'),
        },
        {
          src: require('@/static/pages/slide3.png'),
        },
      ],
    }
  },
})
</script>

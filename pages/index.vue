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
    <div id="clouds">
      <div class="cloud cloud1"></div>
      <div class="cloud cloud2"></div>
      <div class="cloud cloud3"></div>
      <div class="cloud cloud4"></div>
      <div class="cloud cloud5"></div>
      <div class="cloud cloud6"></div>
      <div class="cloud cloud7"></div>
      <div class="cloud cloud8"></div>
    </div>
    <v-row class="my-12" justify="center">
      <v-col sm="4" xs="12">
        <h2 class="text-center">Our Games</h2>
        <p class="text-center">1, 2, 3 &mdash; that's all. Simple.</p>
        <v-divider />
      </v-col>
    </v-row>
    <v-row class="my-12">
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
    <v-parallax :src="require('@/static/pages/parallax.jpeg')" height="400">
      <h2 class="display-2 text-center">Random text bla bla</h2>
      <em class="text-center">Super super text goes here.</em>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attributes }">
          <v-btn
            class="mt-12"
            light
            exact
            nuxt
            to="/games"
            x-large
            v-bind="attributes"
            v-on="on"
            >Button
          </v-btn> </template
        ><span>Games</span>
      </v-tooltip>
    </v-parallax>
    <v-row class="my-12" justify="center">
      <v-col sm="4" xs="12">
        <h2 class="text-center">About us</h2>
        <p class="text-center">Doyban &mdash; we.</p>
        <v-divider />
      </v-col>
    </v-row>
    <v-row class="my-12">
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
    <v-parallax :src="require('@/static/pages/parallax.jpeg')" height="400">
      <h2 class="display-2 text-center">Random text bla bla</h2>
      <em class="text-center">Super super text goes here.</em>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attributes }">
          <v-btn
            class="mt-12"
            light
            exact
            nuxt
            to="/about"
            x-large
            v-bind="attributes"
            v-on="on"
            >Button
          </v-btn> </template
        ><span>About</span>
      </v-tooltip>
    </v-parallax>
    <v-row class="my-12" justify="center">
      <v-col sm="4" xs="12">
        <h2 class="text-center">Finds us online</h2>
        <p class="text-center">1, 2, 3 &mdash; that's all. Simple.</p>
        <v-divider />
      </v-col>
    </v-row>
    <v-row class="my-12">
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
    <v-parallax :src="require('@/static/pages/parallax.jpeg')" height="400">
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

<style lang="scss" scoped>
#clouds {
  height: 0;
  position: absolute;
  top: 150px;

  @media only screen and (max-width: 767px) {
    top: 90px;
  }
}

.cloud {
  background: #fff;
  border-radius: 150px;
  height: 60px;
  position: relative;
  width: 200px;

  &.cloud1 {
    animation: moveclouds 60s linear infinite;
  }

  &.cloud2 {
    animation: moveclouds 55s linear infinite;
    left: 600px;
    opacity: 0.7;
    top: -100px;
    transform: scale(0.7);
  }

  &.cloud3 {
    animation: moveclouds 60s linear infinite;
    left: -180px;
    opacity: 0.8;
    top: -180px;
    transform: scale(0.8);
  }

  &.cloud4 {
    animation: moveclouds 65s linear infinite;
    left: 200px;
    opacity: 0.85;
    top: -200px;
    transform: scale(0.85);
  }

  &.cloud5 {
    animation: moveclouds 60s linear infinite;
    left: 400px;
    opacity: 0.8;
    top: -150px;
    transform: scale(0.8);
  }

  &.cloud6 {
    animation: moveclouds 70s linear infinite;
    left: 700px;
    opacity: 0.7;
    top: -350px;
    transform: scale(0.7);
  }

  &.cloud7 {
    animation: moveclouds 60s linear infinite;
    left: 800px;
    opacity: 0.8;
    top: -250px;
    transform: scale(0.8);
  }

  &.cloud8 {
    animation: moveclouds 80s linear infinite;
    left: 1000px;
    opacity: 0.9;
    top: -450px;
    transform: scale(0.9);
  }

  &::after,
  &::before {
    background: #fff;
    border-radius: 150px;
    content: '';
    position: absolute;
    width: 120px;
    transform: rotate(45deg);
  }

  &::after {
    height: 120px;
    left: auto;
    right: 15px;
    top: -55px;
  }

  &::before {
    height: 70px;
    left: 5px;
    top: -5px;
  }
}

@keyframes moveclouds {
  0% {
    margin-left: 2000px;
  }
  100% {
    margin-left: -2000px;
  }
}
</style>

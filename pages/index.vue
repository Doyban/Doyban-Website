<template>
  <section>
    <!-- TODO: Play with Typography (https://vuetifyjs.com/en/styles/text-and-typography/#typography) -->
    <!-- TODO: Improve almost everything on this page. -->
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center">
          <logo />
          <vuetify-logo />
        </div>
      </v-col>
    </v-row>
    <v-parallax :src="require('@/static/imported/footer.jpeg')" height="200">
      <h1 class="display-3 text-center white--text">Hello</h1>
      <h2 class="text-center">Random text bla bla</h2>
    </v-parallax>
    <v-row justify="center">
      <v-col sm="4" xs="12">
        <h2 class="text-center">Some slogan</h2>
        <p class="text-center">Paragraph goes here</p>
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
            <p>{{ point.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-parallax
      :src="require('@/static/imported/background.jpeg')"
      height="200"
    >
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
        <h2 class="text-center">Some slogan</h2>
        <p class="text-center">Paragraph goes here</p>
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
            <p>{{ point.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default Vue.extend({
  components: {
    Logo,
    VuetifyLogo,
  },
  data() {
    return {
      points: [
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          icon: 'mdi-home',
          title: 'Title',
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          icon: 'mdi-home',
          title: 'Title',
        },
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          icon: 'mdi-home',
          title: 'Title',
        },
      ],
    }
  },
})
</script>

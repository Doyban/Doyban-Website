<template>
  <header>
    <!-- TODO: Improve ARIA across the whole app. -->
    <v-app-bar
      aria-label="This is a toolbar with menu elements for large screen devices."
      app
      elevation="24"
    >
      <v-toolbar-title
        ><v-img :src="require('@/static/logo.webp')" max-width="100"
      /></v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.path"
          color="purple darken-4"
          exact
          small
          nuxt
          text
          v-text="menuItem.name"
        />
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      aria-label="This is a sidenav with menu elements for mobile devices."
      fixed
      right
    >
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="menuItem.path"
            color="purple darken-4"
            exact
            nuxt
            two-line
          >
            <v-list-item-action>
              <v-icon v-text="menuItem.icon" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="menuItem.name" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

import { MenuItem } from './MenuItem'

export default Vue.extend({
  data() {
    return {
      drawer: false,
      menuItems: [] as MenuItem[],
    }
  },
  created() {
    this.menuItems = [
      {
        icon: 'mdi-home',
        name: 'Home',
        path: '/',
      },
      {
        icon: 'mdi-controller',
        name: 'Games',
        path: '/games',
      },
      // {
      //   icon: 'mdi-newspaper-variant-outline',
      //   name: 'News',
      //   path: '/news',
      // },
      // {
      //   icon: 'mdi-devices',
      //   name: 'Platforms',
      //   path: '/platforms',
      // },
      // {
      //   icon: 'mdi-motion-play',
      //   name: 'PlayTesting',
      //   path: '/playtesting',
      // },
      //   icon: 'mdi-motion-play', // TODO: Change the icon.
      //   name: 'UX Research',
      //   path: '/ux-research',
      // },
      // {
      //   icon: 'mdi-account-group',
      //   name: 'Community',
      //   path: '/community',
      // },
      {
        icon: 'mdi-fingerprint',
        name: 'About',
        path: '/about',
      },
      {
        icon: 'mdi-at',
        name: 'Contact',
        path: '/contact',
      },
    ]
  },
})
</script>

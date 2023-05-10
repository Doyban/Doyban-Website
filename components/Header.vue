<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { MenuItem } from '../interfaces/MenuItem'

const drawer: Ref<boolean> = ref(false)
const menuItems: MenuItem[] = [
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
  //   path: '/news', // TODO: should redirect to blog.doyban.com as per https://github.com/Doyban/Doyban-Website/issues/9.
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
  //   path: '/ux-research', // TODO: should redirect to /ux-research as per https://github.com/Doyban/Doyban-Website/issues/10.
  // },
  // {
  //   icon: 'mdi-account-group',
  //   name: 'Community',
  //   path: '/community', // TODO: should redirect to forum.doyban.com as per https://github.com/Doyban/Doyban-Website/issues/7.
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
</script>

<template>
  <header>
    <!-- TODO: Improve ARIA across the whole app. -->
    <v-app-bar
      aria-label="This is a toolbar with menu elements for large screen devices."
      app
      elevation="24"
    >
      <v-toolbar-title
        ><v-img src="logo.webp" max-width="100"
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
          ripple
          small
          v-text="menuItem.name"
          variant="tonal"
        />
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      :value="drawer"
      aria-label="This is a sidenav with menu elements for mobile devices."
      fixed
      right
    >
      <v-list>
        <!-- <v-list-item-group> -->
        <v-list-item
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.path"
          color="purple darken-4"
          exact
          two-line
        >
          <v-list-item-action>
            <v-icon v-text="menuItem.icon" />
          </v-list-item-action>
          <!-- <v-list-item-content> -->
          <v-list-item-title v-text="menuItem.name" />
          <!-- </v-list-item-content> -->
        </v-list-item>
        <!-- </v-list-item-group> -->
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

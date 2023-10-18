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
  //   path: '/playtesting', // TODO: should redirect to /playtesting as per https://github.com/Doyban/Doyban-Website/issues/18.
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
    <v-toolbar
      aria-label="This is a toolbar with menu elements for large screen devices."
      elevation="24"
    >
      <v-toolbar-title
        ><router-link to="/"
          ><v-img
            alt="Logo image"
            max-height="60"
            src="logo.svg" /></router-link
      ></v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
      <v-toolbar-items class="hidden-sm-and-down" variant="plain">
        <v-list-item
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.path"
          color="purple-darken-4"
        >
          <v-btn size="small"> {{ menuItem.name }}</v-btn>
        </v-list-item>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      aria-label="This is a sidenav with menu elements for mobile devices."
      elevation="24"
      location="right"
      temporary
    >
      <!-- TODO: Use floating or temporary after figuring out working routes in that config. -->
      <v-list-item
        v-for="(menuItem, index) in menuItems"
        :key="index"
        :prepend-icon="menuItem.icon"
        :to="menuItem.path"
        lines="two"
      >
        <v-btn color="purple-darken-4" size="x-large" variant="plain">
          {{ menuItem.name }}
        </v-btn>
      </v-list-item>
    </v-navigation-drawer>
  </header>
</template>

<style lang="scss" scoped>
.v-toolbar-title {
  flex: 5rem 0 0;
}
</style>

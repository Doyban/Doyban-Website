<template>
  <!-- TODO: Make many of the items "v-for" -->
  <v-footer dark>
    <v-layout wrap>
      <v-flex sm4 xs12>
        <v-hover v-slot:default="{ hover }">
          <v-card
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 24 : 12"
            class="transparent"
          >
            <v-card-title class="justify-center">Doyban</v-card-title>
            <v-card-text
              ><p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia inventore labore illum saepe vero quia vitae error,
                suscipit, consectetur repellendus nulla impedit numquam quis
                ipsam dolor veritatis facere. Omnis, exercitationem.
              </p></v-card-text
            >
            <v-list class="transparent">
              <v-list-item
                ><p>
                  <v-icon>mdi-home</v-icon>
                  Address
                </p></v-list-item
              >
              <v-list-item
                ><p>
                  <v-icon>mdi-phone</v-icon>
                  Phone
                </p></v-list-item
              >
              <v-list-item
                ><p>
                  <v-icon>mdi-at</v-icon>
                  Email
                </p></v-list-item
              >
              <v-list-item
                ><p>
                  <v-icon>mdi-information-outline</v-icon>
                  Tax ID
                </p></v-list-item
              >
            </v-list>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex sm4 xs12>
        <v-hover v-slot:default="{ hover }">
          <v-card
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 24 : 12"
            class="transparent"
          >
            <v-card-title class="justify-center">Stay informed</v-card-title>
            <v-card-subtitle class="text-center">Subscribe</v-card-subtitle>
            <v-card-text>
              <v-btn>Opt in</v-btn>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex sm4 xs12>
        <v-hover v-slot:default="{ hover }">
          <v-card
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 24 : 12"
            class="transparent"
          >
            <v-card-title class="justify-center">Information</v-card-title>
            <v-list class="transparent">
              <v-list-item class="justify-center"
                ><NuxtLink to="/faq">FAQ</NuxtLink></v-list-item
              >
              <v-list-item class="justify-center"
                ><NuxtLink to="/glossary">Glossary</NuxtLink></v-list-item
              >
              <v-list-item class="justify-center"
                ><NuxtLink to="/partnerships"
                  >Partnerships</NuxtLink
                ></v-list-item
              >
            </v-list>
          </v-card>
        </v-hover>
      </v-flex>
      <v-hover v-slot:default="{ hover }">
        <v-card
          :class="{ 'on-hover': hover }"
          :elevation="hover ? 24 : 12"
          class="transparent"
          style="width: 100%"
        >
          <v-card-title>Resources</v-card-title>
          <v-list class="transparent">
            <v-list-item class="d-inline"
              ><NuxtLink to="/copyrights">Copyrights</NuxtLink></v-list-item
            >
            <v-list-item class="d-inline"
              ><NuxtLink to="/cookies">Cookies</NuxtLink></v-list-item
            >
            <v-list-item class="d-inline"
              ><NuxtLink to="/legal">Legal</NuxtLink></v-list-item
            >
            <v-list-item class="d-inline"
              ><NuxtLink to="/privacy">Privacy</NuxtLink></v-list-item
            >
            <v-list-item class="d-inline"
              ><NuxtLink to="/rss">RSS</NuxtLink></v-list-item
            >
            <v-list-item class="d-inline"
              ><NuxtLink to="/security">Security</NuxtLink></v-list-item
            >
            <v-list-item class="d-inline"
              ><NuxtLink to="/sitemap">Sitemap</NuxtLink></v-list-item
            >
            <v-list-item class="d-inline">
              <NuxtLink to="/terms">Terms</NuxtLink></v-list-item
            >
          </v-list>
        </v-card></v-hover
      >
    </v-layout>
    <v-container>
      <v-row><v-divider /></v-row>
    </v-container>
    <v-container
      ><p class="text-center">&copy; {{ currentYear }} Doyban</p></v-container
    >
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
})
</script>

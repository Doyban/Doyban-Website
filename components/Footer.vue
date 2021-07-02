<template>
  <!-- TODO: Make many of the items "v-for" -->
  <v-footer dark>
    <v-layout wrap>
      <v-flex sm6 xs12>
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
                  <i>Irysowa 18, 55-220 Jelcz-Laskowice, Poland</i>
                </p></v-list-item
              >
              <v-list-item
                ><p>
                  <v-icon>mdi-phone</v-icon>
                  <i
                    ><a
                      aria-label="+48 732 280 741. Click here give us a phone call."
                      href="tel:+48 732 280 741"
                      title="+48 732 280 741"
                      >+48 732 280 741</a
                    ></i
                  >
                </p></v-list-item
              >
              <v-list-item
                ><p>
                  <v-icon>mdi-at</v-icon>
                  <i
                    ><a
                      aria-label="contact@doyban.com. Click here to send us an e-mail."
                      href="mailto:contact@doyban.com?subject=Mail from doyban.com&body=Hi Doyban!%0D%0A%0D%0AMy mail is about:%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0ABest regards,%0D%0A"
                      title="contact@doyban.com"
                      >contact@doyban.com</a
                    ></i
                  >
                </p></v-list-item
              >
              <v-list-item
                ><p>
                  <v-icon>mdi-information-outline</v-icon>
                  <i>Tax ID: PL9121899240</i>
                </p></v-list-item
              >
            </v-list>
          </v-card>
        </v-hover>
      </v-flex>
      <!-- <v-flex sm4 xs12>
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
      </v-flex> -->
      <v-flex sm6 xs12>
        <v-hover v-slot:default="{ hover }">
          <v-card
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 24 : 12"
            class="transparent"
          >
            <v-card-title class="justify-center">Information</v-card-title>
            <v-list class="transparent">
              <!-- <v-list-item class="justify-center"
                ><NuxtLink to="/faq">FAQ</NuxtLink></v-list-item
              >
              <v-list-item class="justify-center"
                ><NuxtLink to="/glossary">Glossary</NuxtLink></v-list-item
              > -->
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
            <!-- <v-list-item class="d-inline"
              ><NuxtLink to="/copyrights">Copyrights</NuxtLink></v-list-item
            >
            <v-list-item class="d-inline"
              ><NuxtLink to="/cookies">Cookies</NuxtLink></v-list-item
            >
            <v-list-item class="d-inline"
              ><NuxtLink to="/legal">Legal</NuxtLink></v-list-item
            > -->
            <v-list-item class="d-inline"
              ><NuxtLink to="/privacy">Privacy</NuxtLink></v-list-item
            >
            <!-- <v-list-item class="d-inline"
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
            > -->
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

<style lang="scss" scoped>
i > a {
  color: white;
  text-decoration: none;
}
</style>

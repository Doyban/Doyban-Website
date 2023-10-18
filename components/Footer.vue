<script lang="ts" setup>
const currentYear: number = new Date().getFullYear()
</script>

<template>
  <!-- TODO: Make many of the items "v-for" -->
  <v-footer theme="dark">
    <v-row>
      <v-col cols="12" sm="6">
        <v-card color="transparent" elevation="0">
          <v-card-title class="text-center">Doyban</v-card-title>
          <v-card-text
            ><p>
              We are a small mobile gaming studio developing simple yet fun
              games on multiple platforms. Our future-proof focus is Mini Games
              on popular apps and chats like Facebook Gaming, iMessage,
              Messenger, Paytm, Snapchat, Telegram, WeChat, or WhatsApp. We
              believe that blazing-fast 5G will accelerate the gaming industry's
              change and move towards Games without Installation through Open
              Web Standards, such as HTML5. The simple games and community
              build-around will give us a competitive advantage once the market
              is mature enough to develop serious games. Nowadays, in practice,
              we (almost) cannot make money out of these kinds of games.
            </p></v-card-text
          >
          <v-list class="bg-transparent">
            <v-list-item
              ><p>
                <v-icon aria-hidden="true" icon="mdi-home" />
                <i>Irysowa 18, 55-220 Jelcz-Laskowice, Poland</i>
              </p></v-list-item
            >
            <v-list-item
              ><p>
                <v-icon aria-hidden="true" icon="mdi-phone" />
                <i
                  ><NuxtLink
                    aria-label="+48 732 280 741. Click here give us a phone call."
                    href="tel:+48 732 280 741"
                    title="+48 732 280 741"
                    >+48 732 280 741</NuxtLink
                  ></i
                >
              </p></v-list-item
            >
            <v-list-item
              ><p>
                <v-icon aria-hidden="true" icon="mdi-at" />
                <i
                  ><NuxtLink
                    aria-label="contact@doyban.com. Click here to send us an e-mail."
                    href="mailto:contact@doyban.com?subject=Mail from doyban.com&body=Hi Doyban!%0D%0A%0D%0AMy mail is about:%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0ABest regards,%0D%0A"
                    title="contact@doyban.com"
                    >contact@doyban.com</NuxtLink
                  ></i
                >
              </p></v-list-item
            >
            <v-list-item
              ><p>
                <v-icon aria-hidden="true" icon="mdi-information-outline" />
                <i>Tax ID: PL9121899240</i>
              </p></v-list-item
            >
          </v-list>
        </v-card>
      </v-col>
      <!-- TODO: When we'll introduce newsletter uncomment it and adjust v-col's. -->
      <!-- <v-col cols="12" sm="4">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 24 : 0"
              align="center"
              color="transparent"
              v-bind="props"
            >
              <v-card-title>Stay informed</v-card-title>
              <v-card-subtitle>Subscribe</v-card-subtitle>
              <v-card-text>
                <v-btn variant="outlined">Opt in</v-btn>
              </v-card-text>
            </v-card>
          </template>
        </v-hover>
      </v-col> -->
      <v-col cols="12" sm="6">
        <v-card align="center" color="transparent" elevation="0">
          <v-card-title>Information</v-card-title>
          <v-list class="bg-transparent">
            <!--
            TODO: should redirect to /faq as per
            https://github.com/Doyban/Doyban-Website/issues/15.
            <v-list-item>
              <NuxtLink to="/faq">FAQ</NuxtLink>
            </v-list-item>
            TODO: should redirect to /glossary as per
            https://github.com/Doyban/Doyban-Website/issues/8.
            <v-list-item>
              <NuxtLink to="/glossary">Glossary</NuxtLink>
            </v-list-item> -->
            <v-list-item>
              <NuxtLink to="/partnerships">Partnerships</NuxtLink>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="transparent" elevation="0">
          <v-card-title>Resources</v-card-title>
          <!-- TODO: Make it v-for. -->
          <v-list class="bg-transparent d-flex">
            <v-list-item
              ><NuxtLink to="/copyrights">Copyrights</NuxtLink></v-list-item
            >
            <v-list-item
              ><NuxtLink to="/cookies">Cookies</NuxtLink></v-list-item
            >
            <!--
            <v-list-item
              ><NuxtLink to="/legal">Legal</NuxtLink></v-list-item
            > -->
            <v-list-item
              ><NuxtLink to="/privacy">Privacy</NuxtLink></v-list-item
            >
            <!-- <v-list-item
              ><NuxtLink to="/rss">RSS</NuxtLink></v-list-item
            >
            TODO: should redirect to /security as per
            https://github.com/Doyban/Doyban-Website/issues/16.
            <v-list-item
              ><NuxtLink to="/security">Security</NuxtLink></v-list-item
            >
            TODO: should redirect to /sitemap as per
            https://github.com/Doyban/Doyban-Website/issues/17.
            <v-list-item
              ><NuxtLink to="/sitemap">Sitemap</NuxtLink></v-list-item
            >
            -->
            <v-list-item> <NuxtLink to="/terms">Terms</NuxtLink></v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12">
        <p class="text-center">&copy; {{ currentYear }} Doyban</p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style lang="scss" scoped>
i > a {
  color: white;
  text-decoration: none;
}

.v-footer {
  background: linear-gradient(
    0deg,
    rgba(156, 39, 176, 1) 0%,
    rgba(74, 20, 140, 1) 18%
  );
}
</style>

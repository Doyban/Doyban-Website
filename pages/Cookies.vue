<script lang="ts" setup>
// TODO: Add Animate on Scroll (AOL).
import Policy from '../interfaces/Policy'

const policies: Policy[] = [
  {
    description:
      "This website is using cookies and other identifiers such as local and session storage, but not limited to. Our Assets also may do so.<br><br>Cookies are small text files which are being transferred from a site or service provider to hard drive of your computer, smartphone, tablet or other device via web browser if certain permission was granted. These files recognize some information and are further processed by site owner, here &ndash; by us, in an anonymous way.<br><br>We use cookies to understand behavior of our users and to provide you better experience based on your preferences.<br><br><ul><li>Strictly Necessary Cookies &ndash; essential for lots of functionalities to work properly.</li><li>Performance Cookies &ndash; collects information about how users use websites.</li><li>Functionality Cookies &ndash; remembers user's interface personalization.</li><li>Targeting or Advertising Cookies &ndash; delivers advertisements relevant to your interest.</li><li>Third Party Cookies &ndash; others, provided by some third party software integrations we may use.</li></ul><br>You can always block, delete, disable or restrict some of all of cookies and similar technologies in the settings of your web browser, however it may limit functionality of our Assets.",
    title: 'Cookies',
  },
]

useHead({
  title: 'Cookies Policy',
})
</script>

<template>
  <section class="mx-3">
    <h1 class="mt-12 text-center">Cookies Policy</h1>
    <v-row justify="center">
      <v-col cols="6" sm="3">
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="ma-8" cols="12" md="6">
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-card
              :class="{
                'on-hover': isHovering,
              }"
              :elevation="isHovering ? 24 : 12"
              class="pb-6"
              v-bind="props"
            >
              <v-list-item v-for="(policy, index) in policies" :key="index">
                <v-list-item-title class="mb-3 text-center"
                  ><strong>{{ policy.title }}</strong></v-list-item-title
                >
                <!-- TODO: v-html isn't working, issue: https://github.com/nuxt/nuxt/issues/10333. That's why ul/li tags aren't rendered. -->
                <!-- eslint-disable-next-line vue/no-v-html -->
                <p class="text-wrap" v-html="policy.description" />
              </v-list-item>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </section>
</template>

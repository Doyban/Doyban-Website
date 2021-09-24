<template>
  <section>
    <h1 class="mt-12 text-center">Privacy Policy</h1>
    <v-row class="justify-center">
      <v-col sm="3" xs="6">
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="ma-8" md="6" xs="12">
        <v-hover v-slot:default="{ hover }">
          <v-card
            :class="{
              'on-hover': hover,
            }"
            :elevation="hover ? 24 : 12"
            class="pb-6"
          >
            <v-list-item
              v-for="(policy, index) in policies"
              :key="index"
              two-line
            >
              <v-list-item-content>
                <v-list-item-title class="mb-3 text-center"
                  ><strong>{{ policy.title }}</strong></v-list-item-title
                >
                <v-list-item-subtitle
                  class="text-justify text-wrap"
                  v-html="policy.description"
                />
              </v-list-item-content>
            </v-list-item> </v-card></v-hover></v-col
    ></v-row>
  </section>
</template>

<script lang="ts">
// It has to stay as "/privacy" due to compatibility with old Privacy Policy links.
// TODO: Add Animate on Scroll (AOL).
import Vue from 'vue'
import { Policy } from './interfaces/Policy'

export default Vue.extend({
  data() {
    return {
      policies: [] as Policy[],
    }
  },
  created() {
    this.policies = [
      {
        description:
          "By accessing the website at <a aria-label='https://doyban.com. Click here to get redirected into our home page.' href='/' onclick='event.preventDefault(); app._router.push('/');' target='_self' title='https://doyban.com'>https://doyban.com</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.",
        title: 'Terms',
      },
      {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis, ligula sit amet commodo tristique, nibh felis tempus nisi, in molestie neque enim ut ligula. Quisque sed ante eu nisl fermentum mattis. Duis maximus eleifend urna, vel ultrices risus pretium vel. Morbi ut sem sit amet velit sagittis porta eget eu <a href="https://ata.com">ASA</a> leo. Vestibulum vulputate nec augue id tempor. Pellentesque ut lorem non lectus tincidunt congue sed vitae lectus. Morbi eu libero vehicula, feugiat velit non, luctus dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus gravida id turpis rhoncus fringilla. Mauris in nisl risus. Nulla tincidunt nisi eu cursus vulputate. Pellentesque eros metus, accumsan vel venenatis non, venenatis vitae lacus. Donec molestie aliquet massa vitae eleifend.',
        title: 'Lorem Ipsum',
      },
    ]
  },
})
</script>

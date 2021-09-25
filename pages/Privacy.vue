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
          'Permission is granted to temporarily download one copy of the materials (information or software) on Doyban’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:<ul><li>modify or copy the materials;</li><li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li><li>attempt to decompile or reverse engineer any software contained on Doyban’s website;</li><li>remove any copyright or other proprietary notations from the materials; or</li><li>transfer the materials to another person or “mirror” the materials on any other server.</li></ul>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Doyban at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.',
        title: 'Use License',
      },
    ]
  },
})
</script>

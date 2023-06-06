<script lang="ts" setup>
// TODO: Add Animate on Scroll (AOL).
import Policy from '../interfaces/Policy'

const policies: Policy[] = [
  {
    description:
      "Content &ndash; all of part of is forbidden for these actions: adapting, altering, broadcasting, changing, copying, data extraction/mining/scraping, decompiling, disassembling, distributing, downloading, editing, framing, hacking, lending, making a derivative work from, making available to the public, penetration testing, posting, rebranding, renting, repositioning, reproducing, republishing, reverse engineering, sublicensing, transmitting or anything which might cause our loss if not stated otherwise. The Content includes: blogs we post, copyrights, courses we do, data, design rights, editorial Content, feel and look (UX), fonts, graphics, images, intellectual property rights and patents (registered and unregistered), music, photographs, products we deliver, services we do, software, sounds, source code, text, UI and UX mockups, video recordings we publish and any content which you can find in our Assets (including this Website) or elsewhere we performed some job belongs to the company IBStructure Daniel Danielecki and its affiliates, contributors or third parties (which may include you or other client and/or users), except to the extent permitted at law. The company reserves all of its rights. The only exceptions are explicitly provided in the <a aria-label='Terms. Click here to read more about Terms.' href='/terms' onclick='event.preventDefault(); app._router.push('/terms');' target='_self' title='Terms'>Terms</a>. In all other cases, nothing grants you a license or rights to use any copyright, design right, trademark, or a product/service or its part we deliver, which IBStructure Daniel Danielecki controls. You cannot use it without the written permission of the owner of any of the Content. These copyrights are for manual actions and any automated tools, e.g., robot, spider, or other automatic device and/or software.",
    title: 'Content',
  },
  {
    description:
      'In some scenarios, we might publish this under any permissive license, e.g., BSD, ISC, or MIT. Other options include Apache or any GPL-related permits, all of that has to be consulted with us.',
    title: 'Licensing',
  },
  {
    description:
      'For cases when you believe that the Content infringes you and/or any third party, kindly do not hesitate to contact us with sufficient information about the entity whose intellectual property could have broken property rights. We will conduct a thorough investigation to remove it eventually. You might be subject to liability when you knowingly make any misrepresentations when providing us with this information.',
    title: 'Content Infringes',
  },
  {
    description:
      'Material from the Website may be re-used without written permission where any of the exceptions detailed in Chapter III of the Copyright Designs and Patents Act 1988 apply.',
    title: 'Material from the Website',
  },
]
useHead({
  title: 'Copyrights',
})
</script>

<template>
  <section class="mx-3">
    <h1 class="mt-12 text-center">Copyrights</h1>
    <v-row justify="center">
      <v-col cols="6" sm="3">
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="ma-8" cols="12" md="6">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card
              :class="{
                'on-hover': isHovering,
              }"
              :elevation="isHovering ? 24 : 12"
              class="pb-6"
              v-bind="props"
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
              </v-list-item>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </section>
</template>

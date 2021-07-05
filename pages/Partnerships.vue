<template>
  <section>
    <h1 class="mt-12 text-center">Partnerships</h1>
    <v-row class="justify-center">
      <v-col sm="3" xs="6">
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="(partnership, index) in partnerships"
        :key="index"
        :class="index === 2 ? 'third-box' : ''"
        class="custom-box ma-8"
        md="3"
        sm="12"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            :class="{
              'on-hover': hover,
            }"
            :dark="checkIfCenter(index)"
            :elevation="hover ? 24 : 12"
            class="pb-6"
          >
            <v-card-title class="justify-center">
              <h2 class="mt-6 price" v-text="partnership.title" />
            </v-card-title>
            <v-card-text>
              <h2 class="my-12 text-center">Perks</h2>
              <v-row
                v-for="(perk, indexPerk) in partnership.perks"
                :key="indexPerk"
              >
                <v-col xs="8"
                  ><span class="feature-label" v-text="perk.label"
                /></v-col>
                <v-col xs="4"
                  ><strong :class="perk.class" v-text="perk.value"
                /></v-col>
              </v-row>
            </v-card-text>
            <div style="text-align: center">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attributes }">
                  <v-btn
                    :class="[checkIfCenter(index) ? 'custom-btn' : '']"
                    class="mt-12"
                    exact
                    nuxt
                    rounded
                    to="/contact"
                    x-large
                    v-bind="attributes"
                    v-on="on"
                    >Contact
                  </v-btn></template
                ><span>Contact us</span></v-tooltip
              >
            </div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </section>
</template>

<style lang="scss" scoped>
.price,
.no {
  color: red;
}

.yes {
  color: green;
}

.v-card.theme--dark {
  background-color: purple;
}

.custom-btn {
  background-color: red !important;
  color: white;
  font-weight: bold;
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      partnerships: [
        {
          perks: [
            {
              class: 'yes',
              label: 'Freedom',
              value: 'YES',
            },
            {
              class: 'no',
              label: 'Boringness',
              value: 'NO',
            },
            {
              class: 'yes',
              label: 'Flexibility',
              value: 'YES',
            },
            {
              class: 'no',
              label: 'Fight with Developers',
              value: 'NO',
            },
          ],
          title: 'Designers',
        },
        {
          perks: [
            {
              class: 'yes',
              label: 'Freedom',
              value: 'YES',
            },
            {
              class: 'no',
              label: 'Boringness',
              value: 'NO',
            },
            {
              class: 'yes',
              label: 'Flexibility',
              value: 'YES',
            },
            {
              class: 'no',
              label: 'Fight with Designers',
              value: 'NO',
            },
          ],
          title: 'Developers',
        },
        {
          perks: [
            {
              class: 'yes',
              label: 'Freedom',
              value: 'YES',
            },
            {
              class: 'no',
              label: 'Boringness',
              value: 'NO',
            },
            {
              class: 'yes',
              label: 'Flexibility',
              value: 'YES',
            },
            {
              class: 'yes',
              label: 'Support',
              value: 'YES',
            },
          ],
          title: 'Playtesting & Interns',
        },
      ],
    }
  },
  methods: {
    checkIfCenter(index: number) {
      return index === 1
    },
  },
})
</script>

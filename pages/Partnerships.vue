<script lang="ts" setup>
const partnerships = [
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
    title: 'PlayTesting & Interns',
  },
]

function checkIfCenter(index: number) {
  return index === 1
}

useHead({
  title: 'Partnerships',
})
</script>

<template>
  <section class="mx-3">
    <h1 class="mt-12 text-center">Partnerships</h1>
    <v-row justify="center">
      <v-col cols="6" sm="3">
        <v-divider />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="(partnership, index) in partnerships"
        :key="index"
        :class="index === 2 ? 'third-box' : ''"
        class="custom-box ma-8"
        cols="12"
        md="3"
      >
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-card
              :class="{
                'on-hover': isHovering,
              }"
              :color="checkIfCenter(index) ? 'purple-darken-4' : ''"
              :elevation="isHovering ? 24 : 12"
              :theme="checkIfCenter(index) ? 'dark' : ''"
              class="pb-6"
              v-bind="props"
            >
              <v-card-title class="text-center text-h4 mt-6">
                {{ partnership.title }}
              </v-card-title>
              <v-card-text>
                <h3 class="my-12 text-center">Perks</h3>
                <v-row
                  v-for="(perk, indexPerk) in partnership.perks"
                  :key="indexPerk"
                  class="px-12"
                >
                  <v-col cols="6">
                    <span>{{ perk.label }}</span>
                  </v-col>
                  <v-col class="text-right" cols="6">
                    <strong :class="perk.class">{{ perk.value }}</strong>
                  </v-col>
                </v-row>
              </v-card-text>
              <div style="text-align: center">
                <v-tooltip location="bottom">
                  <template #activator="{ props2 }">
                    <v-btn
                      :class="[checkIfCenter(index) ? 'custom-btn' : '']"
                      :color="checkIfCenter(index) ? '#7c0690' : ''"
                      class="mt-12"
                      elevation="24"
                      exact
                      rounded
                      size="x-large"
                      to="/contact"
                      v-bind="props2"
                      variant="elevated"
                      >Contact
                    </v-btn>
                  </template>
                  <span>Contact us</span>
                </v-tooltip>
              </div>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </section>
</template>

<style lang="scss" scoped>
h3 {
  font-size: 1.75rem;
}
.no {
  color: #7c0690;
}

.yes {
  color: green;
}

.v-card-text {
  span,
  strong {
    font-size: 1.5rem;
  }
}

.v-card-title {
  font-family: 'IM Fell English SC', serif !important;
}

.custom-btn {
  color: white;
  font-weight: bold;
}
</style>

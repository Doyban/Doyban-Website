<script lang="ts" setup>
import Event from '../interfaces/Event'

const events: Event[] = [
  {
    color: 'green',
    description:
      "Daniel Danielecki founds Doyban back in 2016 as a hobby project for his HTML5 games. After creating the first game within the scope of his Engineer's Thesis, 'The game application in HTML 5 technology designed for mobile devices'. The thesis' project and the first game were based on Quintus, but all the next games have been shifted to Phaser.",
    icon: 'mdi-rocket-launch-outline',
    title: 'Doyban has been founded',
    year: 2016,
  },
  {
    color: 'orange',
    description:
      "In 2015, Daniel read in a book (Luke Stevens, RJ Owen: 'The Truth About HTML5, Apress', 2012) about futuristic use cases for HTML5 technology while preparing for his thesis. In 2019, Facebook came up with Messenger Instant Games, a breakthrough for Doyban, quickly increasing the number of players above 100.000, making this hobby project more aspiring.",
    icon: 'mdi-lightbulb-on-outline',
    title: 'Instant Games',
    year: 2019,
  },
  {
    color: 'deep-purple',
    description:
      'We have launched a crowdfunding campaign on the world-famous Kickstarter platform on May 12, 2021. The campaign was about Mobile Games without Installation, Mini Games on popular apps and chats like Facebook Gaming, iMessage, Messenger, Snapchat, Telegram, or WeChat. It was featured widely in Australia, Belgium, Ecuador, Germany, India, Japan, Poland, United Kingdom (UK), United States (USA) by many blogs, gaming portals, technological news, websites, etc., such as Gamasutra. Unfortunately, we have not been successfully funded. There might be several reasons: the audience did not what we wanted to achieve, mobiles gamers do not follow Kickstarter, too early product stage, or just a bad idea.',
    icon: 'mdi-kickstarter',
    title: 'Kickstarter: #5G Ready, Mobile Games.',
    year: 2021,
  },
  {
    color: 'brown',
    description:
      'We believe Mobile Games without Installation on platforms such as Facebook Gaming, iMessage, Messenger, Snapchat, or Telegram will evolve. However, in the meantime, from 2022, we continue publishing our games as native mobile applications on Android and iOS. All our games are installation less ready once our desired ecosystem evolves.',
    icon: 'mdi-cellphone-arrow-down',
    title: 'Mobile Games',
    year: 2022,
  },
]

useHead({
  title: 'About',
})
</script>

<template>
  <section>
    <v-row>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img src="pages/about.webp" height="100%" />
      </v-col>
      <v-row class="my-12" justify="center" md="6">
        <v-col cols="12" class="mx-3" md="6">
          <h1 class="mb-6 text-center">About</h1>
          <p>
            We believe that the 5G will accelerate the transition towards cloud
            gaming within our daily used applications. We are here to research
            Mobile Games, and eventually develop only installation-free Mini
            Games.
          </p>
          <h2 class="mb-4 text-center">Mission</h2>
          <p>
            The technology goes fast, we do not want to be the last. Mini Games
            have the ambition to bypass traditional app stores, the social
            gameplay mechanics is one of its cores. Only together can we make
            something great, which can be an opening gate.
          </p>
          <h2 class="mb-4 text-center">Team &amp; Community</h2>
          <p>
            Here is Doyban from Remote lands. Games without Installation are an
            ample opportunity, but first, we need to make #call4community. The
            main goal is to build a community around our mission and vision,
            even though our team is currently super small.
          </p>
        </v-col>
      </v-row>
    </v-row>
    <v-container>
      <h1 class="my-12 text-center">Our Story</h1>
      <v-timeline
        :density="$vuetify.display.smAndDown ? 'comfortable' : 'default'"
        line-inset="15"
        truncate-line="start"
      >
        <v-timeline-item
          v-for="(event, index) in events"
          :key="index"
          :dot-color="event.color"
          :icon="event.icon"
          class="ma-6"
          fill-dot
          icon-color="white"
          size="large"
        >
          <!-- Slots for "v-timeline-item". -->
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold text-${event.color}`"
              v-text="event.year"
            ></span>
          </template>
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                :class="{ 'on-hover': isHovering }"
                :color="`${event.color}-lighten-5`"
                :elevation="isHovering ? 24 : 12"
                loading
                outlined
                ripple
                shaped
                v-bind="props"
              >
                <!-- Slots for "v-progress-linear". -->
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    :color="`${event.color}-darken-4`"
                    stream
                  ></v-progress-linear>
                </template>
                <!--/ Slots for "v-progress-linear". -->
                <v-card-title
                  :class="`headline pt-6 font-weight-light mb-6 text-center
            text-${event.color}`"
                  v-text="event.title"
                />
                <v-card-text
                  ><p>{{ event.description }}</p></v-card-text
                >
              </v-card></template
            >
          </v-hover>
          <!--/ Slots for "v-timeline-item". -->
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
span.headline,
.v-card__title {
  font-family: 'IM Fell English SC', serif !important;
}

span.headline {
  font-size: 2rem !important;
}

.v-card {
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}
</style>

<script lang="ts" setup>
const pointsAbout = [
  {
    description:
      'There is nothing to hide about our being a genuinely micro-scale gaming company.',
    icon: 'mdi-account-arrow-down-outline',
    title: 'Small',
  },
  {
    description: 'That is what keep us on the competitive market. Passion.',
    icon: 'mdi-fire',
    title: 'Dedicated',
  },
  {
    description:
      'Only together we can make something fun, and entertaining for our Players.',
    icon: 'mdi-account-group-outline',
    title: 'Team',
  },
]
const pointsContact = [
  {
    description:
      "Conveniently reach out to us using this <a aria-label='Contact. Click here to get redirected to our Contact page.' href='/contact' onclick='event.preventDefault(); app._router.push('/contact');' target='_self' title='Contact'>Contact Form</a>.",
    icon: 'mdi-form-select',
    title: 'Contact Form',
  },
  {
    description:
      "<a aria-label='contact@doyban.com. Click here to send us an e-mail.' href='mailto:contact@doyban.com?subject=Mail from doyban.com&body=Hi Doyban!%0D%0A%0D%0AMy mail is about:%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0ABest regards,%0D%0A' title='contact@doyban.com'>contact@doyban.com</a>",
    icon: 'mdi-at',
    title: 'Email',
  },
  {
    description:
      "<a aria-label='Apple App Store. Click here to check our Apple App Store.' href='https://apps.apple.com/us/developer/daniel-danielecki/id1381229544' rel='noopener' target='_blank' title='Apple App Store'>Apple App Store</a>, <a aria-label='Facebook. Click here to check our Facebook.' href='https://www.facebook.com/doybangames' rel='noopener' target='_blank' title='Facebook'>Facebook</a>, <a aria-label='GitHub. Click here to check our GitHub.' href='https://github.com/doyban' rel='noopener' target='_blank' title='GitHub'>GitHub</a>, <a aria-label='Google Play Store. Click here to check our Google Play Store.' href='https://play.google.com/store/apps/developer?id=Doyban' rel='noopener' target='_blank' title='Google Play Store'>Google Play Store</a>, <a aria-label='Instagram. Click here to check our Instagram.' href='https://www.instagram.com/doybangames/' rel='noopener' target='_blank' title='Instagram'>Instagram</a>, <a aria-label='itch.io. Click here to check our itch.io.' href='https://doyban.itch.io' rel='noopener' target='_blank' title='itch.io'>itch.io</a>, <a aria-label='Twitter. Click here to check our Twitter.' href='https://twitter.com/doybangames' rel='noopener' target='_blank' title='Twitter'>Twitter</a>, <a aria-label='YouTube. Click here to check our YouTube.' href='https://www.youtube.com/@doyban' rel='noopener' target='_blank' title='YouTube'>YouTube</a>.",
    icon: 'mdi-thumb-up-outline',
    title: 'Social Media',
  },
]
const pointsGames = [
  {
    description: 'Our games do not need a tutorial to play them from A to Z.',
    icon: 'mdi-refresh-auto',
    title: 'Easy',
  },
  {
    description: 'Simplicity creates out of them so much fun.',
    icon: 'mdi-magic-staff',
    title: 'Fun',
  },
  {
    description:
      'We develop mobile-first games, rarely deploying on different platforms.',
    icon: 'mdi-cellphone',
    title: 'Mobile',
  },
]
const sliderItems = [
  {
    src: './pages/slide1.webp',
  },
  {
    src: './pages/slide2.webp',
  },
  {
    src: './pages/slide3.webp',
  },
]

useHead({
  title: 'Home',
})
</script>

<template>
  <section>
    <!-- TODO: Play with Typography (https://vuetifyjs.com/en/styles/text-and-typography/#typography) -->
    <v-carousel
      color="white"
      height="95vh"
      progress="purple-darken-4"
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="(sliderItem, index) in sliderItems"
        :key="index"
        v-ripple
        :src="sliderItem.src"
        alt=""
        cover
        reverse-transition="slide-y-reverse-transition"
        transition="slide-y-transition"
      ></v-carousel-item>
    </v-carousel>
    <div id="clouds">
      <div class="cloud cloud1"></div>
      <div class="cloud cloud2"></div>
      <div class="cloud cloud3"></div>
      <div class="cloud cloud4"></div>
      <div class="cloud cloud5"></div>
      <div class="cloud cloud6"></div>
      <div class="cloud cloud7"></div>
      <div class="cloud cloud8"></div>
    </div>
    <v-row class="my-12" justify="center">
      <v-col cols="12" sm="4">
        <h2 class="text-center">Our Games</h2>
        <p class="text-center">1, 2, 3 &mdash; that's all. Simple.</p>
        <v-divider />
      </v-col>
    </v-row>
    <v-row class="my-12">
      <v-col
        v-for="(point, index) in pointsGames"
        :key="index"
        cols="12"
        md="4"
      >
        <v-card color="transparent" flat>
          <v-card-text class="text-center">
            <v-icon
              :icon="point.icon"
              aria-hidden="true"
              color="purple-darken-4"
              size="x-large"
            />
          </v-card-text>
          <v-card-title class="text-center">
            <h3>{{ point.title }}</h3>
          </v-card-title>
          <v-card-text>
            <p class="text-center">{{ point.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-parallax height="400" src="/pages/parallax.webp">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <h2 class="text-h3 text-center">Play</h2>
        <em class="text-center"
          >Take a look into our collection of games across different
          platforms.</em
        >
        <v-tooltip location="bottom">
          <template #activator="{ props }">
            <v-btn
              class="mt-12"
              elevation="24"
              exact
              size="x-large"
              to="/games"
              v-bind="props"
              variant="elevated"
              >Games
            </v-btn> </template
          ><span>Games</span>
        </v-tooltip>
      </div>
    </v-parallax>
    <v-row class="my-12" justify="center">
      <v-col cols="12" sm="4">
        <h2 class="text-center">About us</h2>
        <p class="text-center">Doyban &mdash; we.</p>
        <v-divider />
      </v-col>
    </v-row>
    <v-row class="my-12">
      <v-col
        v-for="(point, index) in pointsAbout"
        :key="index"
        cols="12"
        md="4"
      >
        <v-card color="transparent" flat>
          <v-card-text class="text-center">
            <v-icon
              :icon="point.icon"
              aria-hidden="true"
              color="purple-darken-4"
              size="x-large"
            />
          </v-card-text>
          <v-card-title class="text-center">
            <h3>{{ point.title }}</h3>
          </v-card-title>
          <v-card-text>
            <p class="text-center">{{ point.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-parallax height="400" src="/pages/parallax2.webp">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <h2 class="text-h3 text-center">Doyban</h2>
        <em class="text-center"
          >Read our story; who we are &amp; what we do.</em
        >
        <v-tooltip location="bottom">
          <template #activator="{ props }">
            <v-btn
              class="mt-12"
              elevation="24"
              exact
              size="x-large"
              to="/about"
              v-bind="props"
              variant="elevated"
              >About
            </v-btn> </template
          ><span>About</span>
        </v-tooltip>
      </div>
    </v-parallax>
    <v-row class="my-12" justify="center">
      <v-col cols="12" sm="4">
        <h2 class="text-center">Find us online</h2>
        <p class="text-center">There are many ways to chat with us.</p>
        <v-divider />
      </v-col>
    </v-row>
    <v-row class="my-12">
      <v-col
        v-for="(point, index) in pointsContact"
        :key="index"
        cols="12"
        md="4"
      >
        <v-card color="transparent" flat>
          <v-card-text class="text-center">
            <v-icon
              :icon="point.icon"
              aria-hidden="true"
              color="purple-darken-4"
              size="x-large"
            />
          </v-card-text>
          <v-card-title class="text-center">
            <h3>{{ point.title }}</h3>
          </v-card-title>
          <v-card-text class="text-center" v-html="point.description" />
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style lang="scss" scoped>
h2.text-h3 {
  font-family: 'IM Fell English SC', serif !important;
}

#clouds {
  height: 0;
  position: absolute;
  top: 150px;

  @media only screen and (max-width: 767px) {
    top: 90px;
  }
}

.cloud {
  background: #fff;
  border-radius: 150px;
  height: 60px;
  position: relative;
  width: 200px;

  &.cloud1 {
    animation: moveclouds 60s linear infinite;
  }

  &.cloud2 {
    animation: moveclouds 55s linear infinite;
    left: 600px;
    opacity: 0.7;
    top: -100px;
    transform: scale(0.7);
  }

  &.cloud3 {
    animation: moveclouds 60s linear infinite;
    left: -180px;
    opacity: 0.8;
    top: -180px;
    transform: scale(0.8);
  }

  &.cloud4 {
    animation: moveclouds 65s linear infinite;
    left: 200px;
    opacity: 0.85;
    top: -200px;
    transform: scale(0.85);
  }

  &.cloud5 {
    animation: moveclouds 60s linear infinite;
    left: 400px;
    opacity: 0.8;
    top: -150px;
    transform: scale(0.8);
  }

  &.cloud6 {
    animation: moveclouds 70s linear infinite;
    left: 700px;
    opacity: 0.7;
    top: -350px;
    transform: scale(0.7);
  }

  &.cloud7 {
    animation: moveclouds 60s linear infinite;
    left: 800px;
    opacity: 0.8;
    top: -250px;
    transform: scale(0.8);
  }

  &.cloud8 {
    animation: moveclouds 80s linear infinite;
    left: 1000px;
    opacity: 0.9;
    top: -450px;
    transform: scale(0.9);
  }

  &::after,
  &::before {
    background: #fff;
    border-radius: 150px;
    content: '';
    position: absolute;
    width: 120px;
    transform: rotate(45deg);
  }

  &::after {
    height: 120px;
    left: auto;
    right: 15px;
    top: -55px;
  }

  &::before {
    height: 70px;
    left: 5px;
    top: -5px;
  }
}

@media only screen and (min-width: 992px) {
  @keyframes moveclouds {
    0% {
      margin-left: 2000px;
    }

    100% {
      margin-left: -2000px;
    }
  }
}

@media only screen and (max-width: 991px) and (min-width: 768px) {
  @keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }

    100% {
      margin-left: -1000px;
    }
  }
}

@media only screen and (max-width: 767px) {
  @keyframes moveclouds {
    0% {
      margin-left: 600px;
    }

    100% {
      margin-left: -600px;
    }
  }
}
</style>

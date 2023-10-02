<script lang="ts" setup>
import GalleryPicture from '~/interfaces/GalleryPicture'
import StoreButton from '~/interfaces/StoreButton'
import StoreUrls from '~/interfaces/StoreUrls'

interface Props {
  description: string
  galleryPictures: GalleryPicture
  selectedItem: boolean
  storeUrls: StoreUrls
  title: string
  url: string | undefined
}
const props = defineProps<Props>()

const storeButtons: StoreButton[] = [
  {
    filename: 'AppleAppStoreButton',
    title: 'Apple App Store',
    url: props.storeUrls.appleAppStore,
  },
  {
    filename: 'GooglePlayStoreButton',
    title: 'Google Play Store',
    url: props.storeUrls.googlePlayStore,
  },
  {
    filename: 'MessengerButton',
    title: 'Messenger',
    url: props.storeUrls.messenger,
  },
  {
    filename: 'FacebookWebButton',
    title: 'Facebook Web',
    url: props.storeUrls.facebookWeb,
  },
  {
    filename: 'ItchIoButton',
    title: 'itch.io',
    url: props.storeUrls.itchIo,
  },
  {
    filename: 'ChromeWebStoreButton',
    title: 'Chrome Web Store',
    url: props.storeUrls.chromeWebStore,
  },
]

useHead({
  title: props.title,
})
</script>

<template>
  <section>
    <v-row>
      <v-col class="text-center mt-12 pt-12">
        <img :alt="title" :src="url" class="mb-5" />
        <blockquote class="blockquote">
          &#8220;{{ description }}&#8221;
          <footer>
            <small>
              <em>&mdash;{{ title }}</em>
            </small>
          </footer>
        </blockquote>
        <NuxtLink
          v-for="(storeButton, index) in storeButtons"
          :href="storeButton.url"
          :key="index"
          :title="storeButton.title"
          rel
        >
          <img
            v-if="storeButton.url"
            :alt="storeButton.title"
            :src="`/buttons_stores/${storeButton.filename}.webp`"
            :title="storeButton.title"
            class="storeButtons"
        /></NuxtLink>
        <v-overlay v-if="selectedItem">
          <v-img
            :src="selectedItem ? selectedItem.src : ''"
            alt="Full size image"
            cover
            @click="selectedItem = null"
          ></v-img>
        </v-overlay>
      </v-col>
    </v-row>
    <v-row class="mb-8">
      <v-col
        v-for="galleryPicture in galleryPictures"
        :key="galleryPicture.id"
        md="4"
        class="px-6 mt-6"
        cols="12"
      >
        <v-img
          :alt="`Picture number ${galleryPicture.id}.`"
          :src="galleryPicture.src"
          class="grey-lighten-2"
          cover
          @click="selectedItem = galleryPicture"
        >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="purple-darken-4"
                indeterminate
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </section>
</template>

<style lang="scss" scoped>
a img {
  margin: 1.5rem;
}

blockquote {
  font-family: 'Cormorant', serif;
}

blockquote > footer > small {
  font-family: 'IM Fell English SC', serif;
}

.storeButtons {
  animation: turn 3.5s ease-out forwards 1s;
  height: 60px;
  transform: rotateY(560deg);
  width: 160px;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>

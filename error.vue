<script lang="ts" setup>
import Error from './interfaces/Error'
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

interface Props {
  error: Error
}
const props = defineProps<Props>()

const otherError: string = 'An error occurred'
const pageNotFound: string = 'Page Not Found - 404'

useHead({
  title: props.error.statusCode === 404 ? pageNotFound : otherError,
})
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <h2>May the force be with you.</h2>
      <NuxtLink to="/">Return to Home page</NuxtLink>
      <v-img alt="Error image" cover src="pages/404.gif" />
    </v-main>
    <Footer />
  </v-app>
</template>

<style lang="scss" scoped>
a,
h1,
h2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  padding-top: 20rem;
  position: absolute;
  top: 64px; // Height of v-toolbar.
  width: 100%;
  z-index: 1;
}

a {
  color: #4a148c;
  font-size: 2rem;
  padding-top: 29rem;
  transition: 5s;

  &:hover {
    color: white;
  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    padding-top: 20rem;
  }

  @media only screen and (max-width: 767px) {
    font-size: 1rem;
    padding-top: 11rem;
  }
}

h1 {
  color: #4a148c;
  font-size: 5rem;
  padding-top: 15rem;

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    font-size: 5rem;
    padding-top: 8rem;
  }

  @media only screen and (max-width: 767px) {
    font-size: 2.25rem;
    padding-top: 5rem;
  }
}

h2 {
  color: #9c27b0;
  font-size: 3rem;
  padding-top: 22rem;

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    padding-top: 14rem;
  }

  @media only screen and (max-width: 767px) {
    font-size: 1.25rem;
    padding-top: 8rem;
  }
}
</style>

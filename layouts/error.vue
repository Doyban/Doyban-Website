<template>
  <v-row>
    <v-col cols="12">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <h2>May the force be with you.</h2>
      <NuxtLink to="/">Return to Home page.</NuxtLink>
      <v-img src="pages/404.gif" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Page Not Found - 404',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style lang="scss" scoped>
a,
h1,
h2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

a {
  color: #4a148c;
  font-size: 2rem;
  padding-bottom: 5rem;
  transition: 5s;

  &:hover {
    color: white;
  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    height: 160%;
    padding-bottom: 15rem;
  }

  @media only screen and (max-width: 767px) {
    font-size: 1rem;
    height: 160%;
  }
}

h1 {
  color: #4a148c;
  font-size: 5rem;
  padding-bottom: 25rem;

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    font-size: 5rem;
    padding-bottom: 15rem;
  }

  @media only screen and (max-width: 767px) {
    font-size: 2.25rem;
    padding-bottom: 5rem;
  }
}

h2 {
  color: #9c27b0;
  font-size: 3rem;
  padding-bottom: 15rem;

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    padding-bottom: 5rem;
  }

  @media only screen and (max-width: 767px) {
    font-size: 1.25rem;
    padding-bottom: 0;
  }
}
</style>

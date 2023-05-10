<template>
  <v-app>
    <Header />
    <v-main class="mt-4 pt-4">
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<style lang="scss">
p {
  text-align: justify;
}
</style>

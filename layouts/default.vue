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
.page-enter-active,
.page-leave-active {
  transition: all 4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

p {
  text-align: justify;
}
</style>

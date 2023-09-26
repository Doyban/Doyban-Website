<template>
  <v-app>
    <Header />
    <v-main class="mt-4 pt-4">
      <slot />
    </v-main>
    {{ $pwa }}
    <Footer />
  </v-app>
</template>

<style lang="scss"></style>

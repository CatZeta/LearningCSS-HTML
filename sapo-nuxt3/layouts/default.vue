<script setup lang="ts">
import Footer from '~/components/layoutDefault/Footer.vue'
import Header from '~/components/layoutDefault/Header.vue'
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped></style>

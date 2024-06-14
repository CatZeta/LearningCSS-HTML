<template>
  <NavBar />
  <main>
    <Carousel :articles="articles.slice(0,3)" />
    <div class="main-overlay">
      <Inlinegrid :cardOrder="['x4', 'x4_bg', 'x4', 'topDeal']" />

      <Inlinegrid :cardOrder="['x3', 'x4_bg', 'x4_bg', 'x1']" />

      <Slider />
    </div>
  </main>

  <!--TODO passar o Footer para a App-->
  <Footer />
</template>

<script setup>
  import Inlinegrid from './Inlinegrid.vue';
  import NavBar from './NavBar.vue';
  import Carousel from '../components/Carousel.vue';
  import Slider from '../components/Slider.vue';
  import Footer from './Footer.vue';
  import { useFetch } from '@/composables/useFetch';
  import { watch } from 'vue';
  

  const { articles, error, loading } = useFetch()

  

  watch(articles, (newVal) => {
    console.log('Home Page prop result:', newVal);
  }); 
</script>

<style>

  .main-overlay {
    position: absolute;
    top: 75%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
  }


</style>

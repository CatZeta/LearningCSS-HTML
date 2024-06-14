<template>
  <!--NavBar fora gera problema-->
  <main>
    <NavBar />
    <CarouselView :articles="articles.slice(0, 4)" />
    <div class="main-overlay">
      <Inlinegrid :articles="articles.slice(4, 20)" :cardOrder="['x4', 'x4_bg', 'x4', 'topDeal']" />

      <Inlinegrid :articles="articles.slice(21, 40)" :cardOrder="['x3', 'x4_bg', 'x4_bg', 'x1']" />

      <Slider :articles="articles.slice(41, 60)" />

      <Slider :articles="articles.slice(61, 80)" />

      <Inlinegrid :articles="articles.slice(81, 100)" :cardOrder="['x1', 'x4_bg', 'x3', 'x4']" />

      <Slider :articles="articles.slice(61, 80)" />

      <Inlinegrid :articles="articles.slice(0, 20)" :cardOrder="['x1', 'x4_bg', 'x4', 'x1']" />

      <Slider :articles="articles.slice(21, 40)" />

      <Recommendations /> 
      
      <Footer />  
    </div>
  
  </main>
  
  <!--TODO passar o Footer para a App-->
</template>

<script setup>
  import Inlinegrid from './Inlinegrid.vue'
  import CarouselView from '../components/CarouselView.vue'
  import Slider from '../components/Slider.vue'
  import Footer from './Footer.vue'
  import { useFetch } from '@/composables/useFetch'
  import { watch } from 'vue'
  import NavBar from './NavBar.vue'
  import Recommendations from './Recommendations.vue'

  const { articles } = useFetch()

  watch(articles, (newVal) => {
    console.log('Home Page prop result:', newVal)
  })
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: rgba(226, 225, 225, 0.753);
  }

  .main-overlay {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 100;
  }
</style>

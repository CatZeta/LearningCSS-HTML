<template>
  <section class="slider-box">
    <div class="slider-header">
      <h3>Popular products in Wireless internationally</h3>
    </div>
    <div class="slider">
      <button class="nav-btn prev-btn" @click="scroll(-300)">&#10094;</button>
      <div class="content" ref="content">
        <div class="slider-item" v-for="art in filteredArticles" :key="art.id">
          <img :src="art.urlToImage" :alt="art.title" />
        </div>
      </div>
      <button class="nav-btn next-btn" @click="scroll(300)">&#10095;</button>
    </div>
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps(['articles']);
  const content = ref(null);

  const scroll = (distance) => {
    content.value.scrollBy({ left: distance, behavior: 'smooth' });
  };

  // Filtrar artigos que têm uma imagem válida
  const filteredArticles = computed(() => {
    return props.articles ? props.articles.filter(art => art.urlToImage) : [];
  });

  console.log('Filtered Articles:', filteredArticles.value);
</script>

<style scoped>
  .slider-box {
    display: flex;
    flex-direction: column;
    width: 94%;
    height: 300px;
    /* Aumentar a altura para acomodar o título */
    margin: 2%;
    overflow: hidden;
    background-color: white;
  }

  .slider-header {
    margin-bottom: 10px;
    /* Espaço entre o título e o slider */
  }

  .slider-header h3 {
    margin: 0;
    padding: 10px 40px;
    text-align: left;
  }

  .slider {
    display: flex;
    align-items: center;
    position: relative;
  }

  .nav-btn {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1;
  }

  .content {
    display: flex;
    overflow-x: auto;
    scrollbar-width: thin;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    flex: 1;
    margin: 0 10px;
    /* Ajustar a margem para espaço entre o conteúdo e os botões */
  }

  .slider-item {
    flex: none;
    scroll-snap-align: center;
  }

  .slider-item img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-right: 10px;
  }
</style>

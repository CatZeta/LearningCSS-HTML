<template>
  <!--TODO:Criar solução para adicionar quando necessario o footer e as tags, ect-->
  <div>
    <Header />
    <!-- Error Message -->
    <div v-if="error">{{ error }}</div>

    <!-- Cover Article -->
    <Cover v-if="articles && articles.length" :article="articles[1]" />

    <!-- Stock Bar -->
    <StockBar />

    <!-- Live Box -->
    <LiveBox :article="stockMarket" />

    <!-- Main Grid -->
    <MainGrid :article="articles.slice(1, 40)" />

    <!-- Cover Article -->
    <Cover v-if="articles && articles.length" :article="articles[40]" />

    <!-- Article Grid x6 -->
    <InlineGrid :article="articles.slice(41, 55)" condition="both" />

    <!-- Cover Article -->
    <Cover v-if="articles && articles.length" :article="articles[51]" />

    <!--x3 Grid -->
    <InlineGrid :article="articles.slice(52, 60)" condition="secondary" />

    <!-- Cover Article -->
    <Cover v-if="articles && articles.length" :article="articles[62]" />

    <!--x2 Grid -->
    <InlineGrid :article="articles.slice(56, 61)" condition="main" />

    <!-- Cover Article -->
    <Cover v-if="articles && articles.length" :article="articles[63]" />

    <!-- Loading Message -->
    <div v-if="loading">Loading...</div>
  </div>
  <Footer />
</template>



<script setup>
  import Header from '@/components/Header.vue'
  import Cover from '@/components/Cover.vue'
  import StockBar from '@/components/StockBar.vue'
  import MainGrid from '@/components/MainGrid.vue'
  import Footer from '@/components/Footer.vue'
  import InlineGrid from '@/components/InlineGrid.vue'
  import LiveBox from '@/components/LiveBox.vue'
  import { useFetch } from '@/composables/useFetch';
  import { watch, computed } from 'vue';

  //TODO:Colocar a chave no sitio certo, partir logica para implementar querys dependendo do componente
  //Especificado para economia em portugues (q, language)
  const url = `https://newsapi.org/v2/everything?q=economy&apiKey=f7aa8d11c597482e828eabd5f4f1f7b3`;

  const { articles, error, loading } = useFetch(url);

  const stockMarket = computed(() => articles.value.slice(55, 60))

  watch(articles, (newVal) => {
    console.log('Home Page prop result:', newVal);
  }); 
</script>
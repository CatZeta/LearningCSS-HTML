<script setup>
import { ref, onMounted } from 'vue'
import { useGetArticles } from '~/composables/useGetArticles'
import { useFetchArticles } from '~/composables/useFetchArticles'

const articles = ref([])

onMounted(async () => {
  // fetch e insere novos artigos (Apenas 1 execução para popular a tabela)
 // await useFetchArticles()

  // Em seguida, recupera todos os artigos da tabela
  articles.value = await useGetArticles()
})
</script>

<template>
  <div>
    <h1>Artigos importados da API</h1>
    <div v-if="articles.length === 0">Carregando artigos...</div>
    <ul v-else>
      <li v-for="article in articles" :key="article.id">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <a :href="article.url" target="_blank">Ler mais</a>
      </li>
    </ul>
  </div>
</template>





<!--<script setup>-->

<!--// instantiate supabase client from plugins/supabase (global instance)-->
<!--const { $supabase } = useNuxtApp()-->

<!--const countries = ref([])-->

<!--async function getCountries() {-->
<!--  const { data } = await $supabase.from('countries').select()-->
<!--  countries.value = data-->
<!--}-->

<!--onMounted(() => {-->
<!--  getCountries()-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--  <ul>-->
<!--    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>-->
<!--  </ul>-->
<!--</template>-->
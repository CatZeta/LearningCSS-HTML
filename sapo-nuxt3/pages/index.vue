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
  console.info('Articles', articles)
})
</script>

<template>
  <div >
    <Cover v-if="articles && articles.length" :article="articles[0]" />
   <StockBar />
  </div>
</template>
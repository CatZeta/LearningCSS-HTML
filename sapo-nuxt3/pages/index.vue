<template>
  <div >
    <Cover v-if="articles && articles.length" :article="articles[0]" />

    <StockBar />

    <LiveBox :article="stockMarket" />

    <MainGrid v-if="articles && articles.length" :article="articles.slice(1,20)" />

    <Cover v-if="articles && articles.length" :article="articles[11]" />

    <InlineGrid v-if="articles && articles.length"  :article="articles.slice(20,32)" condition="both" />

    <Cover v-if="articles && articles.length" :article="articles[33]" />

    <InlineGrid v-if="articles && articles.length" :article="articles.slice(33,50)" condition="secondary" />

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useGetArticles } from '~/composables/useGetArticles'
import { useFetchArticles } from '~/composables/useFetchArticles'



const stockMarket = computed(() => articles.value.slice(55, 60))
const articles = ref([])
onMounted(async () => {
  // fetch e insere novos artigos (Apenas 1 execução para popular a tabela)
 // await useFetchArticles()

  // Em seguida, recupera todos os artigos da tabela
  articles.value = await useGetArticles()
  console.info('Articles', articles)
})
</script>


<template>
  <div>

    <Cover v-if="articles && articles.length" :article="articles[0]"/>

    <StockBar/>

    <LiveBox />

    <MainGrid :article="mainGrid"/>

    <Cover v-if="articles && articles.length" :article="articles[1]"/>

    <InlineGrid  :article="getInlineGrid('both')" condition="both"/>

    <Cover v-if="articles && articles.length" :article="articles[2]"/>

    <InlineGrid v-if="headlines && headlines.length" :article="getInlineGrid('secondary')" condition="secondary"/>

    <Cover v-if="articles && articles.length" :article="articles[3]"/>

    <InlineGrid v-if="headlines && headlines.length" :article="getInlineGrid('main')" condition="main"/>

  </div>
</template>

<script setup>
//TODO: optimize props passing

//fetch supabase tables with news
const {data: articles} = await useFetch('/api/articles?table=articles')
const {data: headlines} = await useFetch('/api/articles?table=headlines')



const mainGrid = computed(() => {
    if (headlines.value && headlines.value.length) {
        return headlines.value.slice(21, 31)
    }
})

//organize articles prop for InlineGrid depending on its render condition
const getInlineGrid = (condition) => {
  if (headlines.value && headlines.value.length) {
    if (condition === 'both') {
      return headlines.value.slice(0, 30)
    } else if (condition === 'secondary') {
      return headlines.value.slice(31, 36)
    } else {
      return headlines.value.slice(37, 45)
    }
  }
  return []
}

//Update database through real time api
/*onMounted(async () =>
    await useSetArticles('stocks')

)*/


</script>
<template>

  <div>

    <Cover v-if="articles && articles.length" :article="articles[0]"/>

    <StockBar/>

    <LiveBox :article="articles.slice(40, 45)"/>

    <MainGrid v-if="articles && articles.length" :article="articles.slice(1,20)"/>

    <Cover v-if="articles && articles.length" :article="articles[21]"/>

    <InlineGrid v-if="articles && articles.length" :article="articles.slice(20,32)" condition="both"/>

    <Cover v-if="articles && articles.length" :article="articles[33]"/>

    <InlineGrid v-if="articles && articles.length" :article="articles.slice(33,40)" condition="secondary"/>

  </div>
</template>

<script setup>

const {data: articles} = await useFetch('/api/articles')
// console.log('articles', articles.value)

//Update database through real time api
// onMounted(async () => await useSetArticles())


</script>
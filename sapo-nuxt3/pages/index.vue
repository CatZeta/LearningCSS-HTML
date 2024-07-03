<template>

  <div>

    <Cover v-if="articles && articles.length" :article="articles[0]"/>

    <StockBar/>

    <LiveBox :article="liveBox"/>

    <MainGrid :article="mainGrid"/>

    <Cover v-if="articles && articles.length" :article="articles[1]"/>

    <InlineGrid  :article="inlineGrid" condition="both"/>

    <Cover v-if="articles && articles.length" :article="articles[2]"/>

    <InlineGrid v-if="headlines && headlines.length" :article="headlines.slice(52,65)" condition="secondary"/>

  </div>
</template>

<script setup>

const {data: articles} = await useFetch('/api/articles?table=stocks')
const {data: headlines} = await useFetch('/api/articles?table=headlines')


const liveBox = computed(() => {
    if (headlines.value && headlines.value.length) {
        return headlines.value.slice(0, 20)
    }
})
const mainGrid = computed(() => {
    if (headlines.value && headlines.value.length) {
        return headlines.value.slice(21, 31)
    }
})

const inlineGrid = computed(() => {
    if (headlines.value && headlines.value.length) {
        return headlines.value.slice(31, 52)
    }
})

//Update database through real time api
/*onMounted(async () =>
    await useSetArticles('stocks')

)*/


</script>
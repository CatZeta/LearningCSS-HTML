<template>
  <div>
    <Cover v-if="articles" :article="articles[0]" />
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
const articles = ref(null)
onMounted(
    async () => {
      articles.value = await $fetch('/api/articles')

    }
)

const stockMarket = computed(() => articles.value?.slice(55, 60) ?? [])
//
// if (error.value) {
//   console.error('Error fetching articles:', error.value)
// } else {
//   console.log('Fetched articles:', articles.value)
// }
</script>

<template>
  <NuxtLayout>
<!--    <NuxtPage />-->

    <Button label="Check" icon="pi pi-check" />

  </NuxtLayout>
</template>

<script setup>

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
    }
  ]
})

</script>



















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
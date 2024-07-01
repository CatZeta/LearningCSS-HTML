<script setup>

// instantiate supabase client from plugins/supabase (global instance)
const { $supabase } = useNuxtApp()

const countries = ref([])

async function getCountries() {
  const { data } = await $supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>
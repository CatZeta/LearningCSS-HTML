// server/api/articles.js

import { useNuxtApp } from 'nuxt/app'

export default defineEventHandler(async (event) => {
    const { $supabase } = useNuxtApp()

    const { data, error } = await $supabase
        .from('articles')
        .select('*')

    if (error) {
        console.error('Supabase error:', error.message)
        throw createError({ statusCode: 500, statusMessage: error.message })
    }

    console.log('Supabase data:', data)
    return data
})

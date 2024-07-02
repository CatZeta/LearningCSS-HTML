// composables/useGetArticles.js
export const useGetArticles = async () => {
    const { $supabase } = useNuxtApp()

    const { data: articles, error } = await $supabase
        .from('articles')
        .select('*')

    if (error) {
        console.error('Error fetching articles:', error)
        return []
    }

    return articles
}

// composables/useGetArticles.js
export const useGetArticles = async () => {
    const {$supabase} = useNuxtApp()

    const {data: articles, error} = await $supabase
        .from('articles')
        .select(`
      id,
      publishedAt,
      source_id,
      source_name,
      author,
      title,
      description,
      url,
      urlToImage,
      content
    `)


    if (error) {
        console.error('Error fetching articles:', error)
        return []
    }

    return articles
}

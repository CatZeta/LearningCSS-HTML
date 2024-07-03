// server/api/articles.js
import { createClient } from '@supabase/supabase-js'


export default defineEventHandler(async (event) => {
    //Initialize Supabase on the server-side
    const config = useRuntimeConfig()
    const supabaseUrl = config.public.supabaseUrl
    const supabaseKey = config.public.supabaseKey
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data: articles, error } = await supabase
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
})
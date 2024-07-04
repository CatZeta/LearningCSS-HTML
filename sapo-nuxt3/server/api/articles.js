// server/api/articles.js
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
    // Initialize Supabase on the server-side
    const config = useRuntimeConfig()
    const supabaseUrl = config.public.supabaseUrl
    const supabaseKey = config.public.supabaseKey
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Extract table name from query parameters
    const query = getQuery(event)
    const tableName = query.table || 'articles' // Default to 'headlines' if no table parameter is provided

    if (!tableName) {
        return { error: 'Table name is required' }
    }

    const { data, error } = await supabase
        .from(tableName)
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
        return { error: 'Error fetching articles' }
    }

    return data
})

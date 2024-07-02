// composables/useFetchArticles.js
//Used to populate the database with articles from the API

export const useFetchArticles = async () => {
    const {$supabase} = useNuxtApp()
    const response = await fetch('https://newsapi.org/v2/everything?q=economy&apiKey=f7aa8d11c597482e828eabd5f4f1f7b3') // Substitua com sua URL da API
    const data = await response.json()

    const articles = []

    for (const article of data.articles) {
        //Verifica se todos os campos do artigo existem (para evitar null/Removed articles)
        if (
            article.source.id &&
            article.source.name &&
            article.author &&
            article.title &&
            article.description &&
            article.url &&
            article.urlToImage &&
            article.publishedAt &&
            article.content
        ) {
            // Verificar se o artigo já existe na tabela
            const {data: existingArticles, error: fetchError} = await $supabase
                .from('articles')
                .select('id')
                .eq('url', article.url) //Condicional eq (igual a) compara o url do artigo com o dos artigos existentes

            if (fetchError) {
                console.error('Error fetching existing article:', fetchError)
                continue
            }

            if (existingArticles.length === 0) {
                const {data: insertedArticle, error} = await $supabase
                    .from('articles')
                    .insert([
                        {
                            source_id: article.source.id,
                            source_name: article.source.name,
                            author: article.author,
                            title: article.title,
                            description: article.description,
                            url: article.url,
                            urlToImage: article.urlToImage,
                            publishedAt: new Date(article.publishedAt),
                            content: article.content,
                        }
                    ])
                    .select()

                if (insertedArticle) {
                    articles.push(insertedArticle[0])
                }
                if (error) {
                    console.error('Error inserting article:', error)
                }
            } else {
                console.log('Article already exists:', article.title)
            }
        } else {
            console.warn('Skipping article with missing fields:', article)
        }
    }

    return articles
}

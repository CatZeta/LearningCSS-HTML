// composables/useSetArticles.js
//Used to populate the database with articles from the API

export const useSetArticles = async (table) => {
    const { $supabase } = useNuxtApp();
    const apiKey = 'f7aa8d11c597482e828eabd5f4f1f7b3';
    const endpoint = `https://newsapi.org/v2/everything?q=${table}&apiKey=${apiKey}`;
    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        if (!data.articles) {
            console.error('No articles found in the response.');
            return [];
        }

        const records = [];

        for (const article of data.articles) {
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
                const { data: existingRecords, error: fetchError } = await $supabase
                    .from(table)
                    .select('id')
                    .eq('url', article.url);

                if (fetchError) {
                    console.error('Error fetching existing record:', fetchError);
                    continue;
                }

                if (existingRecords.length === 0) {
                    const { data: insertedRecord, error } = await $supabase
                        .from(table)
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
                        .select();

                    if (error) {
                        console.error('Error inserting record:', error);
                        continue;
                    }

                    if (insertedRecord) {
                        records.push(insertedRecord[0]);
                        console.log('Inserted record:', insertedRecord[0]);
                    }
                } else {
                    console.log('Record already exists:', article.title);
                }
            } else {
                console.warn('Skipping article with missing fields:', article);
            }
        }

        return records;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};






















// export const useSetArticles = async () => {
//     const {$supabase} = useNuxtApp()
//     const response = await fetch('https://newsapi.org/v2/everything?q=economy&apiKey=f7aa8d11c597482e828eabd5f4f1f7b3') // articles
//
//     const data = await response.json()
//
//     const articles = []
//
//     for (const article of data.articles) {
//         //Verifica se todos os campos do artigo existem (para evitar null/Removed articles)
//         if (
//             article.source.id &&
//             article.source.name &&
//             article.author &&
//             article.title &&
//             article.description &&
//             article.url &&
//             article.urlToImage &&
//             article.publishedAt &&
//             article.content
//         ) {
//             // Verificar se o artigo já existe na tabela
//             const {data: existingArticles, error: fetchError} = await $supabase
//                 .from('articles')
//                 .select('id')
//                 .eq('url', article.url) //Condicional eq (igual a) compara o url do artigo com o dos artigos existentes
//
//             if (fetchError) {
//                 console.error('Error fetching existing article:', fetchError)
//                 continue
//             }
//
//             if (existingArticles.length === 0) {
//                 const {data: insertedArticle, error} = await $supabase
//                     .from('articles')
//                     .insert([
//                         {
//                             source_id: article.source.id,
//                             source_name: article.source.name,
//                             author: article.author,
//                             title: article.title,
//                             description: article.description,
//                             url: article.url,
//                             urlToImage: article.urlToImage,
//                             publishedAt: new Date(article.publishedAt),
//                             content: article.content,
//                         }
//                     ])
//                     .select()
//
//                 if (insertedArticle) {
//                     articles.push(insertedArticle[0])
//                 }
//                 if (error) {
//                     console.error('Error inserting article:', error)
//                 }
//             } else {
//                 console.log('Article already exists:', article.title)
//             }
//         } else {
//             console.warn('Skipping article with missing fields:', article)
//         }
//     }
//
//     return articles
// }

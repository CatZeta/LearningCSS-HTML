// server/api/articles.js

import {useGetArticles} from '~/composables/useGetArticles'

export default defineEventHandler(async (event) => {
    return {message: `Hello World`}
})
import { ref, computed } from 'vue';
import { useFetchArticles } from '@/composables/useFetchArticles.js';

const useNews = () => {

    const { articles, error, loading } = useFetchArticles();

    const coverArticles = computed(() => {
        return articles.value.filter((article, index) => [1, 2, 3, 4, 5].includes(index));
    });

    const mainGridArticles = computed(() => {
        return articles.value.slice(5, 40);
    });

    const inlineGridArticles = (start, end) => {
        return computed(() => articles.value.slice(start, end));
    };

    const stockMarketArticles = computed(() => articles.value.slice(41, 60));

    return {
        articles,
        error,
        loading,
        coverArticles,
        mainGridArticles,
        inlineGridArticles,
        stockMarketArticles,
    };
};

export default useNews;

import { ref } from 'vue';

export function useFetch(url) {
  const articles = ref([]);
  const loading = ref(true);
  const error = ref(null);

  /**
   * Fetches data from the specified URL and updates the articles, loading, and error state.
   *
   * @return {Promise<void>} - A promise that resolves when the data is fetched and the state is updated.
   */
  const fetchData = async () => {

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      articles.value = [...data.articles];
      loading.value = false;

      console.log('useFetch result', articles.value);
    } catch (error) {
      error.value = error;
      loading.value = false;
      console.error('Fetch error:', error);
    }
  };

  fetchData();

  return {
    articles,
    loading,
    error
  };
}
import { ref } from 'vue'

export function useFetch() {
  const articles = ref([])
  const loading = ref(true)
  const error = ref(null)
  const url = `https://newsapi.org/v2/everything?q=kids&apiKey=f7aa8d11c597482e828eabd5f4f1f7b3`

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      articles.value = data.articles
      loading.value = false
      console.log('useFetch result', articles.value)
    } catch (err) {
      error.value = err
      loading.value = false
      console.error('Fetch error:', err)
    }
  }

  fetchData()

  return {
    articles,
    loading,
    error
  }
}

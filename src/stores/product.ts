import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import axios from 'axios'


export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const types = ref([])
  const loading = ref(false)
  const error = ref(null)


  async function fetchs() {
    loading.value = true
    error.value = null
    try {
      const responseProducts = await axios.get('https://6837d3fa2c55e01d184af2e3.mockapi.io/api/intern/products')
      console.log(responseProducts);
      products.value = responseProducts?.data || []
      const responseTypes = await axios.get('https://6837d3fa2c55e01d184af2e3.mockapi.io/api/intern/categories')
      console.log(responseTypes);
      types.value = responseTypes?.data || []
    } catch (err) {
      error.value = err
      console.error('Error fetching banks:', err)
    } finally {
      loading.value = false
    }
  }


  return {
    fetchs,
    products: computed(() => products.value),
    types: computed(() => types.value),
    loading,
    error,
  }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}






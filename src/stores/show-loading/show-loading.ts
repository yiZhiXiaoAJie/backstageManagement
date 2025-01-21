import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// 控制loading的显示
export const useShowLoadingStore = defineStore('showLoading', () => {
  const show = ref(false)
  const showLoader = () => {
    show.value = true
  }
  const hideLoader = () => {
    show.value = false
  }

  return { show, showLoader, hideLoader }
})

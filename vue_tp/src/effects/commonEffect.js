import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
// import { get } from '../utils/request'

// 路由相关逻辑
export const useCommonRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => { router.back() }
  return { handleBackClick }
}
// store计算属性相关逻辑
export const useCommonStoreEffect = () => {
  const store = useStore()
  const vueTp = store.state.vueTp
  const username = computed(() => {
    const username = vueTp.username
    return username
  })
  return { username }
}

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { get } from '../utils/request'

// 路由相关逻辑
export const useCommonRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => { router.back() }
  return { handleBackClick }
}

// 获取单词信息相关逻辑
export const useGetDataEffect = () => {
  const store = useStore()
  const { newAndOld } = useCommonWordEffect()
  const getNearbyData = async () => {
    const result = await get('/newAndOld')
    if (result?.data) {
      store.commit('changeNewAndOld', { newAndOld: result?.data })
    }
  }
  return { newAndOld, getNearbyData }
}

// 单词数据相关逻辑
export const useCommonWordEffect = () => {
  const store = useStore()
  const wordList = store.state.wordList
  const totalList = computed(() => {
    const totalList = wordList.totalList || []
    return totalList
  })
  const oldList = computed(() => {
    const oldList = wordList.oldList || []
    return oldList
  })
  const newList = computed(() => {
    const newList = wordList.newList || []
    return newList
  })
  const newAndOld = computed(() => {
    const newAndOld = wordList.newAndOld || {}
    return newAndOld
  })
  const currentId = computed(() => {
    const currentId = wordList.currentId || 0
    return currentId
  })
  const learnTime = computed(() => {
    const learnTime = wordList.learnTime || 0
    return learnTime
  })
  const lastTime = computed(() => {
    const lastTime = wordList.lastTime || 0
    return lastTime
  })
  const totalListLen = computed(() => {
    const totalListLen = wordList.totalListLen || 0
    return totalListLen
  })
  return { totalListLen, totalList, oldList, newList, currentId, newAndOld, learnTime, lastTime }
}

// 处理购物车商品总数和总价相关逻辑
export const useCartTotalEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const caculations = computed(() => {
    const result = { total: 0, price: 0, allCheck: true, allNull: true }
    const productList = cartList?.[shopId]?.productList
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        result.total += product.count
        if (product.check === true) {
          result.price += (product.count * product.price)
        }

        if (product.check === false) {
          result.allCheck = false
        }
        if (product.count > 0) {
          result.allNull = false
        }
      }
    }
    result.price = result.price.toFixed(2)

    return result
  })
  return { caculations }
}

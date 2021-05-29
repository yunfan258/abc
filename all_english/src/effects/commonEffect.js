import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

// 路由相关逻辑
export const useCommonRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => { router.back() }
  return { handleBackClick }
}

// 购物车相关逻辑
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCommonCartInfo = (shopId, productId, productInfo, num, shopName) => {
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
    store.commit('changeShopName', { shopId, shopName })
  }
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {}
    const notEmptyProductList = {}
    for (const i in productList) {
      if (productList[i].count > 0) {
        notEmptyProductList[i] = productList[i]
      }
    }
    return notEmptyProductList
  })
  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })

  return { shopName, cartList, productList, changeCommonCartInfo }
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

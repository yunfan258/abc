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
  const pamphlet = computed(() => {
    const pamphlet = wordList.pamphlet || []
    return pamphlet
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
  const dayPlan = computed(() => {
    const dayPlan = wordList.dayPlan || 1
    return dayPlan
  })
  return { dayPlan, totalListLen, totalList, pamphlet, oldList, newList, currentId, newAndOld, learnTime, lastTime }
}

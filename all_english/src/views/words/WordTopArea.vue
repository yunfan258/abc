<template>
<div class="header">
  <div class="icons">
    <span class="iconfont icons__back" @click="()=>{ goHome(); changeTime(lastTime) }">&#xe677;</span>
    <router-link :to="{name: 'Search'}">
    <span class="iconfont icons__search">&#xe650;</span>
    </router-link>
  </div>
  <div class="imformation">
    <div class="imformation__item">
      <div class="imformation__item__detail">今日复习</div>
      <div class="imformation__item__old">{{150-newAndOld?.old}}/150</div>
    </div>
    <div class="imformation__item">
      <div class="imformation__item__detail">今日新词</div>
      <div class="imformation__item__new">{{50-newAndOld?.fresh}}/50</div>
    </div>
    <div class="imformation__item">
      <div class="imformation__item__detail">学习时间</div>
      <div class="imformation__item__time">{{Math.ceil(learnTime/1000/60)}}/min</div>
    </div>
  </div>
</div>

</template>

<script>
import { useStore } from 'vuex'
import { useCommonWordEffect } from '../../effects/commonEffect'
import { post } from '../../utils/request'
import { useRouter } from 'vue-router'
const useGetWordsEffect = () => {
  const store = useStore()
  const getWords = async (dayPlan) => {
    const result = await post(`/words/${dayPlan}`)
    if (result?.data) {
      store.commit('changeTotalListLen', { totalListLen: result?.data.wordList.length })
      store.commit('changeTotalList', { totalList: result?.data.wordList })
    }
  }
  return { getWords }
}
const useGetTimeEffect = () => {
  const store = useStore()
  const changeTime = (lastTime) => {
    const learnTime = (new Date()) - (lastTime || 0)
    store.commit('changeLearnTime', { learnTime })
  }
  return { changeTime }
}
const useGoHomeEffect = () => {
  const router = useRouter()
  const goHome = (lastTime) => {
    router.push({ name: 'Home' })
  }
  return { goHome }
}

export default {
  name: 'WordTopArea',
  setup () {
    const { newAndOld, learnTime, lastTime, totalListLen, dayPlan } = useCommonWordEffect()
    const { getWords } = useGetWordsEffect()
    if (localStorage.wordList) {
      if (!JSON.parse(localStorage.wordList)?.totalList?.length) { getWords(dayPlan.value) }
    } else {
      getWords(dayPlan.value)
    }
    const { goHome } = useGoHomeEffect()
    const { changeTime } = useGetTimeEffect()
    return { newAndOld, learnTime, lastTime, totalListLen, changeTime, goHome }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.icons{
  &__back{
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.2rem;
    position: absolute;
    top: 0;
    left: 0;
  }
  &__search{
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.2rem;
    position: absolute;
    top: 0;
    right: 0;
  }
}

.imformation {
  margin: 0.6rem auto;
  display: flex;
  justify-content: space-between;
  font-size: 0.16rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  &__item{
    text-align: center;
    padding: 0.1rem 0.2rem;
    color: $medium-fontColor;
    &__detail{
      font-size: 0.14rem;
      color: #ccc;
    }
  }
}
</style>

<template>
  <div class="words">
    <div class="header">
      <div class="icons">
        <span class="iconfont icons__back" @click="()=>{ handleBackClick(); changeTime(lastTime) }">&#xe677;</span>
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
    <div class="main">
      <div class="main__area">
        <div class="main__area__english">{{ totalList[currentId]?.english }}</div>
        <div class="main__area__chinese" v-if="showChinese">
          {{ totalList[currentId]?.wordSex }}{{ totalList[currentId]?.chinese }}
        </div>
        <div class="main__area__loading" v-if="!showChinese" @click="show"></div>
      </div>
    </div>
    <div class="btns">
      <button class="btns__pre" @click="changeWord('up',currentId,totalListLen)">上一个</button>
      <button class="btns__show" @click="show" v-if="!showChinese">查看意思</button>
      <button class="btns__next" @click="()=>{changeWord('down',currentId,totalListLen)}" v-if="showChinese">下一个</button>
    </div>
  </div>
  <WordCart />
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useCommonRouterEffect, useCommonWordEffect } from '../../effects/commonEffect'
import { post } from '../../utils/request'
import WordCart from './WordCart'
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
const useHandleClickEffect = () => {
  const router = useRouter()
  const store = useStore()
  const infoList = reactive({
    showChinese: false
  })
  const changeWord = (choice, currentId, len) => {
    infoList.showChinese = false
    if (choice === 'up') {
      if (currentId-- > 0) {
        store.commit('changecurrentId', { currentId })
        store.commit('addCurrentItem', { currentId: currentId + 1 })
      }
    } else {
      if ((currentId + 1) % 7 === 0) {
        router.push({ name: 'NewAndOld' })
        store.commit('addCurrentItem', { currentId })
        currentId++
        store.commit('changecurrentId', { currentId })
      } else {
        if (currentId < len - 1) {
          store.commit('addCurrentItem', { currentId })
          currentId++
          store.commit('changecurrentId', { currentId })
        } else if (currentId === len - 1) {
          store.commit('addCurrentItem', { currentId })
          currentId++
          router.push({ name: 'NewAndOld' })
        } else {
        }
      }
    }
  }
  const show = () => {
    infoList.showChinese = true
  }
  const { showChinese } = toRefs(infoList)
  return { showChinese, changeWord, show }
}

export default {
  name: 'Words.vue',
  props: [],
  components: { WordCart },
  setup () {
    const { totalList, currentId, newAndOld, learnTime, lastTime, totalListLen, dayPlan } = useCommonWordEffect()
    const { getWords } = useGetWordsEffect()
    if (localStorage.wordList) {
      if (!JSON.parse(localStorage.wordList)?.totalList?.length) { getWords(dayPlan.value) }
    } else {
      getWords(dayPlan.value)
    }
    const { changeTime } = useGetTimeEffect()
    const { handleBackClick } = useCommonRouterEffect()
    const { showChinese, changeWord, show } = useHandleClickEffect()
    return { totalList, currentId, newAndOld, learnTime, lastTime, totalListLen, dayPlan, showChinese, changeWord, show, handleBackClick, changeTime }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes downAndScale {
  0% {
    /*transform: translateY(-3rem) scale(0.8);*/
    transform: translateY(0) scale(0.5);
  }
  80% {
    /*transform: translateY(0) scale(0.8);*/
  }
  100% {
    transform: scale(1);
  }
}
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

.main {
  font-size: 0.16rem;
  &__area{
    &__english{
      text-align: center;
      font-size: 0.3rem;
      margin: 0.2rem;
      padding: 0.2rem 0 0.5rem 0;
      border-bottom: 1px solid #41e4c9;
    }
    &__chinese{
      text-align: center;
      font-size: 0.2rem;
      padding: 0.2rem 0.2rem;
      margin: 0 0.2rem;
      background-color: #eee;
      animation: downAndScale 0.1s ease-in;
    }
    &__loading{
      position: relative;
      width: 0.16rem;
      height: 0.16rem;
      margin: 0 auto;
      border: 0.06rem solid #ccc;
      border-radius: 50%;
      border-top: 0.06rem solid #41e4c9;
      margin: 0.4rem auto;
      animation: spin 5s linear infinite;
    }
  }
}
%button-basic{
  display: block;
  width: 84%;
  padding: 0.1rem;
  margin: 0.1rem auto;
  border-radius: 0.14rem;
  border: none;
  background: none;
  outline: none;
  color: $bgColor;
}

.btns {
  position: absolute;
  bottom: 0.14rem;
  width: 95%;
  margin: auto;
  &__pre{
    @extend %button-basic;
    background-color: #41e4c9;
  }
  &__show{
    @extend %button-basic;
    background-color: #fcb35f;
  }
  &__next{
    @extend %button-basic;
    background-color: #fcb35f;
  }
}

</style>

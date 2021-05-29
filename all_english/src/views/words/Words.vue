<template>
  <div class="words">
    <div class="header">
      <div class="icons">
        <span class="iconfont icons__back" @click="()=>handleBackClick()">&#xe677;</span>
        <router-link :to="{name: 'Search'}">
        <span class="iconfont icons__search">&#xe650;</span>
        </router-link>
      </div>
      <div class="imformation">
        <div class="imformation__item">
          <div class="imformation__item__detail">今日复习</div>
          <div class="imformation__item__old">0/150</div>
        </div>
        <div class="imformation__item">
          <div class="imformation__item__detail">今日新词</div>
          <div class="imformation__item__new">0/50</div>
        </div>
        <div class="imformation__item">
          <div class="imformation__item__detail">学习时间</div>
          <div class="imformation__item__time">0/min</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main__area">
        <div class="main__area__english">{{ english }}</div>
        <div class="main__area__chinese" v-if="showChinese">
          {{ wordSex }}{{ chinese }}
        </div>
        <div class="main__area__loading" v-if="!showChinese"></div>
      </div>
    </div>
    <div class="btns">
      <button class="btns__pre" @click="changeWord('up')">上一个</button>
      <button class="btns__show" @click="show" v-if="!showChinese">查看意思</button>
      <button class="btns__next" @click="changeWord('down')" v-if="showChinese">下一个</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useCommonRouterEffect } from '../../effects/commonEffect'
const useHandleClickEffect = () => {
  const store = useStore()
  const wordList = store.state.wordList
  const infoList = reactive({
    english: wordList[0].english,
    wordSex: wordList[0].wordSex,
    chinese: wordList[0].chinese,
    showChinese: false,
    showId: 0
  })
  const changeWord = (choice) => {
    infoList.showChinese = false
    let { showId } = infoList
    if (choice === 'up') {
      showId > 0 ? showId-- : showId = 0
    } else {
      const len = wordList.length
      showId < len - 1 ? showId++ : showId = len - 1
    }
    const { english, wordSex, chinese } = wordList[showId]
    infoList.english = english
    infoList.wordSex = wordSex
    infoList.chinese = chinese
    infoList.showId = showId
    infoList.showId = showId
  }
  const show = () => {
    infoList.showChinese = true
  }
  const { english, wordSex, chinese, showChinese } = toRefs(infoList)
  return { english, wordSex, chinese, showChinese, changeWord, show }
}

export default {
  name: 'Words.vue',
  props: [],
  setup () {
    const { handleBackClick } = useCommonRouterEffect()
    const { english, wordSex, chinese, showChinese, changeWord, show } = useHandleClickEffect()
    return { english, wordSex, chinese, showChinese, changeWord, show, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
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
    transform: translateY(-4rem) scale(0.8);
  }
  80% {
    transform: translateY(0) scale(0.8);
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
    color: #666;
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
      animation: downAndScale 0.6s ease-in;
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
  color: #ffffff;
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

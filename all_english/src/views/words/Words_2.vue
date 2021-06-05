<template>
  <div class="words">
    <WordTopArea />
    <div class="main">
      <div class="main__area">
        <div class="main__area__english"  v-if="showChinese">{{ totalList[currentId]?.english }}</div>
        <div class="main__area__loading" v-if="!showChinese" @click="showChineseFn()"></div>
        <div class="line"></div>

        <div class="main__area__chinese">
          {{ totalList[currentId]?.wordSex }}{{ totalList[currentId]?.chinese }}
        </div>
      </div>
    </div>
    <Alinks />
    <div class="playCardSuccess" v-show="currentId===totalList.length">打卡成功
    <div class="playCardSuccess__detail">可截图分享哦</div>
    </div>
    <div class="btns">
      <button class="btns__pre" @click="changeWord('up',currentId,totalListLen)">上一个</button>
      <button class="btns__show" @click="showChineseFn()" v-if="!showChinese" v-show="currentId!==totalList.length">查看英文</button>
      <button class="btns__next" @click="()=>{changeWord('down',currentId,totalListLen)}" v-if="showChinese" v-show="currentId!==totalList.length">下一个</button>
    </div>
  </div>
  <WordCart />
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useCommonWordEffect } from '../../effects/commonEffect'
import WordCart from './WordCart'
import WordTopArea from './WordTopArea'
import Alinks from './Alinks.vue'

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
          store.commit('changecurrentId', { currentId })
        } else {
          router.push({ name: 'NewAndOld' })
        }
      }
    }
  }
  const showChineseFn = () => {
    infoList.showChinese = true
  }
  const { showChinese } = toRefs(infoList)
  return { showChinese, changeWord, showChineseFn }
}

export default {
  name: 'Words_2.vue',
  props: [],
  components: { WordCart, WordTopArea, Alinks },
  setup () {
    const { totalList, currentId, totalListLen, dayPlan } = useCommonWordEffect()
    const { showChinese, changeWord, showChineseFn } = useHandleClickEffect()
    return { totalList, currentId, totalListLen, dayPlan, showChinese, changeWord, showChineseFn }
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
    transform: translateY(0) scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

.main {
  font-size: 0.16rem;
  &__area{
    &__english{
      text-align: center;
      font-size: 0.3rem;
      margin: 0.2rem;
      padding: 0 0 0.5rem 0;
    }
    .line{
      margin: 0.2rem;
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
      border: 0.06rem solid #ccc;
      border-radius: 50%;
      border-top: 0.06rem solid #41e4c9;
      margin: 0.71rem auto;
      animation: spin 5s linear infinite;
    }
  }
}
.playCardSuccess{
  position: absolute;
  top: .4rem;
  left: 0rem;
  right: 0rem;
  bottom: 1rem;
  background-color: #fff;
  z-index: 3;
  text-align: center;
  font-size: .3rem;
  color: #41e4c9;
  padding-top: 1.6rem;
  z-index: 13;
  &__detail{
    font-size: .14rem;
    margin-top: .1rem;
    color: #999;
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
  left: 50%;
  transform: translate(-50%,0);
  width: 95%;
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

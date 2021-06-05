<template>
  <div class="words">
    <WordTopArea />
    <div class="main">
      <div class="main__area">
        <div class="main__area__english"  v-if="showChinese">{{ totalList[currentId]?.english }}</div>
        <input class="main__area__loading" :class="{'red': cue===-1,'green':cue===1}" v-model="spellValue" placeholder="请拼写单词"/>
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
      <button class="btns__pre" @click="()=>{changeWord('up',currentId,totalListLen);changeCueFn()}">上一个</button>
      <button class="btns__show" @click="()=>{showChineseFn();checkIsRightFn(totalList[currentId]?.english)}" v-if="!showChinese" v-show="currentId!==totalList.length">确定</button>
      <button class="btns__next" @click="()=>{changeWord('down',currentId,totalListLen);changeCueFn()}" v-if="showChinese" v-show="currentId!==totalList.length">下一个</button>
    </div>
  </div>
  <WordCart />
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
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
const useCheckEffect = () => {
  const cue = ref(0)
  const spellValue = ref('')
  const checkIsRightFn = (val) => {
    if (spellValue.value === val) {
      cue.value = 1
    } else {
      cue.value = -1
    }
  }
  const changeCueFn = () => {
    spellValue.value = ''
    cue.value = 0
  }
  return { cue, spellValue, checkIsRightFn, changeCueFn }
}
export default {
  name: 'Words_2.vue',
  props: [],
  components: { WordCart, WordTopArea, Alinks },
  setup () {
    const spellInput = ref(null)
    watchEffect(() => {
      console.log(spellInput.value)
    })
    const { totalList, currentId, totalListLen, dayPlan } = useCommonWordEffect()
    const { showChinese, changeWord, showChineseFn } = useHandleClickEffect()
    const { cue, spellValue, checkIsRightFn, changeCueFn } = useCheckEffect()
    return { cue, spellValue, checkIsRightFn, changeCueFn, totalList, currentId, totalListLen, dayPlan, showChinese, changeWord, showChineseFn }
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
      position: absolute;
      left:50%;
      transform: translate(-50%,0);
      text-align: center;
      font-size: 0.3rem;
      padding: 0.5rem 0 0rem 0;
      z-index: -1;
    }
    &__loading{
      display: block;
      font-size: .3rem;
      text-align: center;
      border: none;
      outline: none;
      width: 2.6rem;
      margin: .5rem auto .72rem auto;
      border-bottom: .01rem solid #bbb;
    }
    &__loading::placeholder{
      font-size: .2rem;
      letter-spacing: .04rem;
      color: #ccc;
    }
    .red{
      color: #ff0000;
    }
    .green{
      color: #41e4c9;
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
  }
}
.playCardSuccess{
  position: absolute;
  top: .4rem;
  left: 0rem;
  right: 0rem;
  height: 4rem;
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
  padding: 0.06rem;
  border-radius: 0.14rem;
  border: none;
  background: none;
  outline: none;
  color: #666;
  width: .76rem;
  border: .01rem solid #333;
  opacity: .8;
}

.btns {
  position: absolute;
  width: 100%;
  height: .3rem;
  bottom: .28rem;
  /*left: 50%;
  transform: translate(-50%,0);*/
  &__pre{
    @extend %button-basic;
    position: absolute;
    left:.22rem;
  }
  &__show{
    position: absolute;
    right:.22rem;
    @extend %button-basic;
  }
  &__next{
    position: absolute;
    @extend %button-basic;
    right:.22rem;
  }
}

</style>

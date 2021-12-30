<template>
  <div class="playCardSuccess"
    v-show="currentId!==0 && currentId===totalList.length">打卡成功
    <div class="time">完成第{{dayPlan}}天计划</div>
    <div class="time">{{time}}</div>
    <!--<div class="playCardSuccess__detail">可截图分享哦</div>-->
  </div>
  <div class="openPamphlet" @click="handleCheck">打开生词本</div>
  <div class="addPamphlet" @click="()=>{changePamphletFn(currentId);showToast('加入成功')}">加入生词本</div>
  <div class="opacity__mask" v-if="showCart" @click="handleCheck"></div>
  <div class="wordList" v-if="showCart">
    <div class="wordList__header" v-show="pamphlet.length!==0">
      <span class="wordList__header__item">
        <span class="iconfont" @click="handleChangePage(-1)" v-show="!(page==1)">&#xe615;</span>
      </span>
      <span class="wordList__header__item">生词本</span>

      <span class="wordList__header__item">
        <span class="iconfont" @click="handleChangePage(1)" v-show="!(page*7>=pamphlet.length)">&#xe636;</span>
      </span>
    </div>
    <div class="wordList__itemList">
      <div class="wordList__itemList__item" v-for="item in pamphlet.slice((page-1)*7,page*7)" :key="item">
        <span class="wordList__item__english">{{totalList[item]?.english}}</span>
        <span class="wordList__item__chinese">{{totalList[item]?.wordSex}} {{totalList[item]?.chinese}}</span>
      </div>
    </div>
  </div>
  <Toast v-show="isShowToast" :message="toastMessage"/>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import { useCommonWordEffect } from '../../effects/commonEffect'
import Toast, { useToastEffect } from '../../components/Toast'
import { useStore } from 'vuex'
const useClickEffect = () => {
  const store = useStore()
  const shows = reactive({ showCart: false })
  const page = ref(1)
  const myDate = new Date()
  const timeData = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate()
  const time = ref(timeData)
  const handleCheck = () => {
    shows.showCart = !shows.showCart
  }
  const handleChangePage = (num) => {
    page.value += num
  }
  const changePamphletFn = (currentId) => {
    store.commit('changePamphlet', { currentId })
  }
  const { showCart } = toRefs(shows)
  return { time, page, showCart, handleCheck, handleChangePage, changePamphletFn }
}
export default {
  name: 'WordCart',
  props: ['showWord'],
  components: { Toast },
  setup () {
    const { toastMessage, isShowToast, showToast } = useToastEffect()
    const { time, page, showCart, handleCheck, handleChangePage, changePamphletFn } = useClickEffect()
    const { currentId, pamphlet, totalList, dayPlan } = useCommonWordEffect()
    return { toastMessage, isShowToast, showToast, dayPlan, currentId, time, page, pamphlet, totalList, showCart, handleCheck, handleChangePage, changePamphletFn }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.opacity__mask{
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
%center{
  position: absolute;
  left: 50%;
  transform: translate(-50%,0);
}
%pamphlet{
  width: .7rem;
  padding: .04rem .1rem;
  text-align: center;
  border-radius: .2rem;
  border:1px solid #ccc;
}
.openPamphlet{
  position: absolute;
  top: 1.58rem;
  right: .14rem;
  @extend %pamphlet;
}
.addPamphlet{
  @extend %pamphlet;
  @extend %center;
  bottom: 1.3rem;
}
.wordList {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 4.4rem;
  overflow-y: scroll;
  z-index: 2;
  background-color: $bgColor;
  &__header{
    padding: .1rem .18rem 0.1rem .18rem;
    text-align: center;
    display: flex;
    background-color: #f1f1f1;
    line-height: .2rem;

    &>span{
      flex: 1;
    }
    &__item:first-of-type{
      text-align: left;
    }
    &__item{
      font-size: .2rem;
      // color: $mostColor;
      color: #aaa;

      & span{
        font-size: .2rem;
        line-height: .2rem;
        // padding: 0 .16rem 0 0;
      }
    }
    &__item:last-of-type{
      text-align: right;
    }
  }
  &__itemList{
    &__item{
      display: flex;
      padding: .14rem 0;
      margin: 0 .18rem;
      border-bottom: .01rem solid $mostColor;
      & span:first-of-type{
        flex: 1;
      }
      & span:last-of-type{
        flex: 2;
      }
    }
    &__item:last-of-type{
      border: none;
      margin-bottom: .1rem;
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
    margin: 1rem 0;
    color: #999;
  }
  .time{
    font-size: .14rem;
    margin: .1rem 0;
    color: #999;
  }
}
</style>

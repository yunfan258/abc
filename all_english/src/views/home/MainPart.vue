<template>
<div class="top">
  <div class="search">
      <span class="iconfont search__icon">&#xe650;</span>
      <router-link :to="{name: 'Search'}">
        <input type="text" class="search__text" placeholder="search">
      </router-link>
      <router-link :to="{name: 'Notices'}">
      <span class="iconfont search__notice">&#xe60b;</span>
      <span class="search__num">9</span>
      </router-link>
  </div>
</div>
<div class="banner">
    <img class="banner__img" src="../../assets/home/banner.png" alt="">
</div>
<div class="info">
  <div class="info__days">
    <router-link :to="{name:'DayPlan'}">
    <span class="info__days__num">{{dayPlan}}</span><span> 天</span>
    </router-link>
  </div>
  <div class="info__details">
    <router-link :to="{name: 'StudyData'}">
    <div class="info__details__data">
      <span class="details__data__icon iconfont">&#xe608;</span>
      <span class="details__data__text">学习数据</span>
    </div>
    </router-link>

    <router-link :to="{name: 'Calender'}">
    <div class="info__details__time">
      <span class="details__time__icon iconfont">&#xe621;</span>
      <span class="details__time__text">打卡日历</span>
    </div>
    </router-link>
  </div>
  <div class="line" @click="()=>{handleShowMask(true)}">
    <span class="line__left-icon iconfont">&#xe60b;</span>
    <span class="line__texts">
      <span class="line__texts__text"> 距离 </span>
      <span class="line__texts__text">考研考试 </span>
      <span class="line__texts__text">还有 {{Math.floor((new Date('2022-12-25')-new Date())/1000/3600/24)}} 天 </span>
    </span>
    <span class="line__right-icon iconfont">&#xe622;</span>
  </div>
  <div class="center">
  <router-link :to="{name: 'NewAndOld'}">
    <img class="center__img" src="../../assets/home/wordBg.png" alt="">
  </router-link>
  </div>
</div>
<div class="works">
  <div class="works__title">--今日任务--</div>
  <div class="works__data">
    <div class="works__data__item">
      <div class="data__item__num">{{newAndOld?.fresh}}</div>
      <div class="data__item__text">新词数</div>
    </div>
    <div class="works__data__item">
      <div class="data__item__num">{{newAndOld?.old}}</div>
      <div class="data__item__text">复习单词</div>
    </div>
    <div class="works__data__item">
      <div class="data__item__num">{{newAndOld?.notLearn}}</div>
      <div class="data__item__text">未学单词</div>
    </div>
  </div>
  <router-link :to="{name:'Words'}">
  <button class="works__btn" @click="()=>changeLastTime()">开始学习</button>
  </router-link>
</div>
<Toast v-if="isShowToast" :message="toastMessage"/>
<Mask :showMask="showMask"  @click="()=>handleShowMask(false)" :showContent1="true"/>

</template>

<script>
import { useStore } from 'vuex'
import Mask, { useShowMaskEffect } from '../../components/Mask'
import Toast, { useToastEffect } from '../../components/Toast'
import { useCommonWordEffect } from '../../effects/commonEffect'
import { get } from '../../utils/request'
const useGetTimeEffect = () => {
  const store = useStore()
  const changeLastTime = () => {
    const lastTime = new Date()
    store.commit('changeLastTime', { lastTime })
  }
  return { changeLastTime }
}
const useGetDataEffect = () => {
  const store = useStore()
  const { newAndOld, dayPlan } = useCommonWordEffect()
  const getNearbyData = async () => {
    const result = await get('/newAndOld')
    if (result?.data) {
      store.commit('changeNewAndOld', { newAndOld: result?.data })
    }
  }
  return { newAndOld, dayPlan, getNearbyData }
}
export default {
  components: { Toast, Mask },
  name: 'StaticPart',
  setup () {
    const { isShowToast, toastMessage, showToast } = useToastEffect()
    const { newAndOld, dayPlan, getNearbyData } = useGetDataEffect()
    if (localStorage.wordList) {
      if (JSON.stringify(JSON.parse(localStorage.wordList)?.newAndOld) === '{}') { getNearbyData() }
    } else {
      getNearbyData()
    }
    const { changeLastTime } = useGetTimeEffect()
    const { showMask, handleShowMask } = useShowMaskEffect()
    return { showToast, isShowToast, toastMessage, newAndOld, dayPlan, showMask, handleShowMask, changeLastTime }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
  a,a:visited{
    color: #666;
  }
.top{
  position: fixed;
  top: 0;
  left: 0;
  height: .5rem;
  box-shadow: 0 .02rem .2rem .01rem #d2d2d2;
  width: 100%;
  z-index: 2;
  background-color: $bgColor;
}
.search{
  @include ellipsis;
  font-size: .16rem;
  border-radius: .16rem;
  background-color: $search-bgColor;
  height: .32rem;
  line-height: .32rem;
  width: 3rem;
  margin: .12rem .18rem .12rem .18rem;
  &__icon{
    display: inline-block;
    margin: 0 .12rem 0 .16rem;
  }
  &__text{
    border: none;
    background: none;
    outline: none;
    width: 2rem;
    color: $search-fontColor;
    &::placeholder{
      color: #ccc;
    }
  }
  &__notice{
    position: absolute;
    top: .12rem;
    right: .18rem;
    font-size: .2rem;
    margin: 0 .02rem 0 0;
  }
  &__num{
      position:absolute;
      right: 0.1rem;
      top: 0.1rem;
      font-size: .12rem;
      width: .16rem;
      height: .16rem;
      line-height: .16rem;
      text-align: center;
      border-radius: 50%;
      background-color: #99ddff;
    }
}
.banner{
    height: 0;
    overflow: hidden;
    padding-bottom: 15.5%;
    margin: .5rem -.18rem 0 -.18rem;
    &__img{
      width: 100%;
    }
}
.info{
  position: relative;
  margin: .2rem auto;

  &__days{
    &__num{
      font-size: .4rem;
      font-weight: bold;
    }
  }
  &__details{
    position: absolute;
    top: .26rem;
    right: 0;
    display: flex;
    &__data{
      .details__data__icon{
        color: $mostColor;
        display: inline-block;
        margin-right: .06rem;
      }
      .details__data__text{
        display: inline-block;
        margin-right: .2rem;
      }
    }
    &__time{
      .details__time__icon{
        color: $mostColor;
        display: inline-block;
        margin-right: .06rem;
      }
    }
  }
  .line{
    position: relative;
    border-radius: .1rem;
    background-color: rgba( 99,220,244, .2);
    padding: .04rem 0;
    margin: .18rem auto;
    font-size: .12rem;
    &__left-icon{
      display: inline-block;
      margin: 0 .1rem 0 .2rem;
      font-size: .12rem;
      border-radius: 50%;
      background-color: $mostColor;
    }
    &__right-icon{
      position: absolute;
      top: .05rem;
      right: .0rem;
      display: inline-block;
      margin: 0 .2rem 0 1.2rem;
      font-size: .12rem;

    }
  }
  .center{
    height: 0;
    overflow: hidden;
    padding-bottom: 27.2%;
    &__img{
      width: 100%;
    }
  }
}
.works{
  &__title{
    text-align: center;
    color: #ccc;
    margin: .16rem 0;
  }
  &__data{
    display: flex;
    text-align: center;
    &__item{
      width: 33.3%;
      .data__item__num{
        font-size: .3rem;
      }
    }
  }
  &__btn{
    display: block;
    background: none;
    outline: none;
    border: none;
    width: 2rem;
    margin: .24rem auto;
    padding: .1rem .2rem;
    border-radius: .2rem;
    background-color: $mostColor;
  }
}
</style>

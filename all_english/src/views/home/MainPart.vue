<template>
<div class="top">
  <div class="search">
      <span class="iconfont search__icon">&#xe650;</span>
      <router-link :to="{name: 'Search'}">
        <input type="text" class="search__text" placeholder="search">
      </router-link>
      <span class="iconfont search__notice">&#xe60b;</span>
  </div>
</div>
<div class="banner">
    <img class="banner__img" src="../../assets/home/banner.png" alt="">
</div>
<div class="info">
  <div class="info__days">
    <span class="info__days__num">6 </span><span> 天</span>
  </div>
  <div class="info__details">
    <div class="info__details__data">
      <span class="details__data__icon iconfont">&#xe608;</span>
      <span class="details__data__text">学习数据</span>
    </div>
    <div class="info__details__time">
      <span class="details__time__icon iconfont">&#xe621;</span>
      <span class="details__time__text">打卡日历</span>
    </div>
  </div>
  <div class="line">
    <span class="line__left-icon iconfont">&#xe60b;</span>
    <span class="line__texts">
      <span class="line__texts__text"> 距离 </span>
      <span class="line__texts__text">考研考试 </span>
      <span class="line__texts__text">还有211天 </span>
    </span>
    <span class="line__right-icon iconfont">&#xe622;</span>
  </div>
  <div class="center">
    <img class="center__img" src="../../assets/home/wordBg.png" alt="">
  </div>
</div>
<div class="works">
  <div class="works__title">--今日任务--</div>
  <div class="works__data">
    <div class="works__data__item">
      <div class="data__item__num">50</div>
      <div class="data__item__text">新词数</div>
    </div>
    <div class="works__data__item">
      <div class="data__item__num">150</div>
      <div class="data__item__text">复习单词</div>
    </div>
    <div class="works__data__item">
      <div class="data__item__num">200</div>
      <div class="data__item__text">未学单词</div>
    </div>
  </div>
  <router-link :to="{name:'Words'}">
  <button class="works__btn" @click="handle">开始学习</button>
  </router-link>
</div>
<Toast v-if="isShowToast" :message="toastMessage"/>
</template>

<script>
import Toast, { useToastEffect } from '../../components/Toast'

export default {
  components: { Toast },
  name: 'StaticPart',
  setup () {
    const { isShowToast, toastMessage, showToast } = useToastEffect()
    return { showToast, isShowToast, toastMessage }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.top{
  position: fixed;
  top: 0;
  left: 0;
  height: .5rem;
  width: 100%;
  z-index: 2;
  background-color: #ffffff;
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
        color: #99ddff;
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
        color: #99ddff;
        display: inline-block;
        margin-right: .06rem;
      }

    }
  }
  .line{
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
      background-color: #99ddff;
    }
    &__right-icon{
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
    background-color: #99ddff;
  }
}
</style>

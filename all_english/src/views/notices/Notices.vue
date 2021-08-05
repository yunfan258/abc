<template>
<div class="wrapper">
  <div class="title">
    <span class="title__icon iconfont" @click="()=>handleBackClick()">&#xe677;</span>
    <span class="title__content">消息中心</span>
    <span class="title__event" @click="()=>handleShowMask(true)">
      <span class="title__event__item"></span>
      <span class="title__event__item"></span>
      <span class="title__event__item"></span>
    </span>
  </div>
  <div class="address">
    <!--<div class="address__title">我的收货地址</div>-->
    <div class="address__list">
      <div class="address__list__item" v-for="(item,index) in noticeList" :key="index">
        <div class="address__info">
          <span class="address__info__username">{{item.title}}</span>
          <!--<span class="address__info__mobile">18911023261</span>-->
        </div>
        <div class="address__detail">{{item.text}}</div>
        <router-link :to="{name:'Notices'}">
          <div class="address__icon iconfont">&#xe622;</div>
        </router-link>
      </div>
    </div>
  </div>
</div>
<Mask :showMask="showMask" @click="()=>handleShowMask(false)" :showContent="true">
</Mask>

</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { useCommonRouterEffect } from '../../effects/commonEffect'
import Mask from '../../components/Mask'
import { get } from '../../utils/request'

const useGetNoticesEffect = () => {
  const list = reactive({ noticeList: [] })
  const getNotices = async () => {
    const result = await get('/notices')
    if (result?.data) {
      list.noticeList = result?.data.noticeList
    }
  }
  getNotices()
  const { noticeList } = toRefs(list)
  return { noticeList }
}

// 蒙层展示相关的逻辑
const useShowMaskEffect = () => {
  const showMask = ref(false)
  const showConfirmResult = ref(false)
  const handleShowMask = (status) => {
    showMask.value = status
  }
  const handleShowConfirmResult = (status) => {
    showConfirmResult.value = status
  }
  return { showMask, showConfirmResult, handleShowMask, handleShowConfirmResult }
}
export default {
  name: 'Address',
  components: { Mask },
  setup () {
    const { noticeList } = useGetNoticesEffect()
    const { showMask, handleShowMask } = useShowMaskEffect()
    const { handleBackClick } = useCommonRouterEffect()
    return { noticeList, showMask, handleShowMask, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.wrapper{
  @include wrapperStyle;
  bottom: 0;
}
.title {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: 0 .02rem .2rem .01rem #d2d2d2;
  display: flex;
  padding: .12rem .18rem;
  line-height: .22rem;
  background: $bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
  &__icon{
    width: .2rem;
    font-size: .16rem;
    color: #B6B6B6;
  }
  &__content{
    display: inline-block;
    // width: 2.8rem;
    margin: 0 auto;
    text-align: center;
  }
  &__event{
    position: relative;
    top: -.04rem;
    right: .18rem;
    width: .3rem;

    &__item{
      display: inline-block;
      width: .06rem;
      height: .06rem;
      margin-left: .02rem;
      border-radius: .03rem;
      background-color: #000;
    }
  }
}
.address{
  margin-top: .3rem;
  padding: .2rem;
  &__title{
    font-size: .14rem;
    color: $content-fontcolor;
  }
  &__list{
    &__item{
      position: relative;
      background-color: $bgColor;
      padding: .18rem .16rem;
      margin-top: .12rem;
      border-radius: .04rem;
    }
  }
  &__info{
    &__username{
      display: inline-block;
      margin-bottom: .08rem;
      width: .94rem;
      color: $mostColor;
    }
    &__mobile{
      color: $light-fontColor;
    }
  }
  &__detail{
    width: 2.6rem;
  }
  &__icon{
    position: absolute;
    font-size: .16rem;
    right: .2rem;
    top: .35rem;
    color: $light-fontColor;
  }
}
</style>

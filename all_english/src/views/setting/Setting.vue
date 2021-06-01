<template>
<div class="wrapper">
  <div class="title">
    <span class="title__icon iconfont" @click="()=>handleBackClick()">&#xe677;</span>
    <span class="title__content">设置</span>
  </div>
  <div class="setting">
    <div class="setting__item" v-for="item in setList" :key="item">
      <span class="setting__item__icon iconfont" v-html="item.left" />
      <span class="setting__item__span">{{item.name}}</span>
      <div class="setting__item__right iconfont">&#xe622;</div>
    </div>
  </div>
</div>
</template>

<script>
import { useCommonRouterEffect } from '../../effects/commonEffect'
const setList = [
  { left: '', name: '提醒设置' },
  { left: '', name: '账号设置' },
  { left: '', name: '推荐设置' },
  { left: '', name: '其他设置' },
  { left: '', name: '夜间或护眼模式' },
  { left: '', name: '关于我们' },
  { left: '', name: '检测更新' },
  { left: '', name: '退出账号' }
]
export default {
  name: 'Setting',
  setup () {
    const { handleBackClick } = useCommonRouterEffect()
    return { handleBackClick, setList }
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
  display: flex;
  box-shadow: 0 .02rem .2rem .01rem #d2d2d2;
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
    width: 2.8rem;
    text-align: center;
  }
}
.setting{
  margin: .12rem .12rem 0 .12rem;
  &__item{
    position: relative;
    display: flex;
    padding: .12rem .16rem;
    border-bottom: .01rem solid $content-bgColor;
    font-size: .14rem;
    margin: .1rem 0;
    background-color: $bgColor;

    &__icon{
      color: sandybrown;
    }
    &__span{
      color: $medium-fontColor;
      line-height: .2rem;
      margin: 0 0 0 .1rem;
    }
    &__right{
      position: absolute;
      top: .12rem;
      right: .16rem;
      outline: none;
      background: none;
      border: none;
      text-align: right;
      &::placeholder{
        color: #ccc;
      }
    }
  }
  &__item:last-of-type{
    border: none;
  }
}
</style>

<template>
<div class="title">
    <span class="title__icon iconfont" @click="()=>handleBackClick()">&#xe677;</span>
    <span class="title__content">{{whichName}}</span>
    <a href="http://luofan18.gitee.io/abc/english2">
    <span class="title__right">{{text||''}}</span>
    </a>
</div>
</template>

<script>
// import { useCommonRouterEffect } from '../effects/commonEffect'
export default {
  name: 'Course',
  props: ['whichName', 'text'],
  components: { },
  setup () {
    // const { handleBackClick } = useCommonRouterEffect()
    // return { handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.title{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  box-sizing: border-box;
  z-index: 10;
  box-shadow: 0 .02rem .2rem .01rem #d2d2d2;
  display: flex;
  padding: .12rem .18rem;
  line-height: .22rem;
  background: $content-bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
  &__icon{
    width: .4rem;
    font-size: .16rem;
    color: #B6B6B6;
  }
  &__content{
    display: inline-block;
    // width: 2.8rem;
    margin: 0 auto;
    text-align: center;
  }
  &__right{
    width: .4rem;
    font-size: .12rem;

  }
}

</style>

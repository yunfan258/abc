<template>
<div class="title"  @click="()=>handleBackClick()">
    <span class="title__content">{{whichName}}</span>
</div>
</template>

<script>
import { useCommonRouterEffect } from '../../effects/commonEffect'
export default {
  name: 'Course',
  props: ['whichName'],
  components: { },
  setup () {
    const { handleBackClick } = useCommonRouterEffect()
    return { handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.title{
  position: fixed;
  left: .4rem;
  right: .4rem;
  bottom: .2rem;
  border-radius: .3rem;
  box-sizing: border-box;
  z-index: 10;
  box-shadow: 0 .02rem .2rem .01rem #d2d2d2;
  display: flex;
  padding: .08rem .18rem;
  line-height: .22rem;
  background-image: linear-gradient(90deg, rgba(0,145,255,0.00) 0%, $btn-bgColor 50%, rgba(0,145,255,0.00) 100%);
  font-size: .16rem;
  color: #fff;
  text-align: center;
  opacity: .8;
  &__content{
    display: inline-block;
    width: 100%;
    text-align: center;
  }
}

</style>

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
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: .3rem;
  box-sizing: border-box;
  z-index: 10;
  box-shadow: 0 .02rem .2rem .01rem #d2d2d2;
  display: flex;
  padding: .06rem .18rem;
  margin: .06rem .18rem;
  line-height: .22rem;
  background: $mostColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
  &__content{
    display: inline-block;
    width: 100%;
    text-align: center;
  }
}

</style>

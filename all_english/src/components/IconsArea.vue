<template>
  <div class="icons">
    <div class="icons__item" v-for="(item,index) in iconsList" :key="index" @click="()=>showToast('暂未开放，请使用背单词功能')">
        <div class="iconfont icons__item__icon" v-html="item.icon"></div>
        <p class="icons__item__p">{{item.pText}}</p>
    </div>
</div>
<Toast v-if="isShowToast" :message="toastMessage"/>

</template>

<script>
import Toast, { useToastEffect } from './Toast'
export default {
  name: 'IconsArea',
  props: ['iconsList'],
  components: { Toast },
  setup () {
    const { isShowToast, toastMessage, showToast } = useToastEffect()
    return { isShowToast, toastMessage, showToast }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.icons{
  display: flex;
  flex-flow: row wrap;
  &__item{
    width: 20%;
    margin: .1rem 0 .16rem 0;
    &__icon{
      font-size: .2rem;
      color: $mostColor;
      line-height: .4rem;
      text-align: center;
      margin: 0 auto;
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
      background-color: $search-bgColor;
    }
    &__p{
      margin-top: .1rem ;
      text-align: center;
    }
  }
}
</style>

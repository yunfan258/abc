<template>
  <div class="options">
    <div class="options__title">
      <span class="title__text">学习设置</span>
      <!-- <span class="title__icon iconfont">&#xe601;</span> -->
    </div>
    <div class="options__item" v-for="item in optionList" :key="item">
        <!-- <div class="options__item__icon iconfont" v-html="item.icon" /> -->
        <div class="options__item__name">{{item.name}}</div>
        <div class="options__item__btn" >{{item.btn}}</div>
        <div class="options__item__right iconfont" v-html="item.right" />
    </div>
  </div>
</template>
<script>

export default {
  name: 'Options',
  props: ['optionList', 'title'],
  components: { },
  setup () {
    return { }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.options{
  // padding: .1rem 0;
  background: $bgColor;
  box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
  // border-radius: .08rem;
  &__title{
    padding: .16rem;
    background-color: #f1f1f1;
    color: #999;
    display: flex;
    .title__text{
      margin-right: auto;
    }
    .title__icon{
      text-align: center;
      width: .3rem;
    }
  }
  &__item{
    position: relative;
    display: flex;
    padding: .1rem 0;
    margin: 0 .16rem;
    border-bottom: #f1f1f1 solid .01rem;
    &:last-child{
      border: none;
    }
    &__icon{
      border-radius: .08rem;
      width: .22rem;
      height: .22rem;
      line-height: .22rem;
      text-align: center;
      color: $mostColor;
    }
    &__name{
      font-family: PingFangSC-Regular;
      font-size: .14rem;
      color: #262626;
      // margin-left: .12rem;
      line-height: .28rem;
      // width: 2.66rem;
      flex: 5;
    }
    &__btn{
      width: .3rem;
      padding: .06rem 0;
      margin-left: .2rem;
      background-color: $mostColor;
      flex: 2;
      text-align: center;
      color: #fff;
      border-radius: .04rem;
      // outline: none;
      // border: none;
    }
    &__right{
      flex: 1;
      text-align: center;
      line-height: .28rem;
    }
  }
}
</style>

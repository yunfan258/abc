<template>
  <div class="main">
    <div class="content">
      <div class="content__item">
        <div class="content__item__icon ">
          <span class="iconfont">&#xe602;</span>
        </div>
        <span class="content__item__text">全部单词</span>
        <span class="content__item__text"></span>
      </div>
      <div class="content__item">
        <div class="content__item__icon ">
          <span class="iconfont">&#xe602;</span>
        </div>
        <span class="content__item__text">2021硕士研究生英语（2）大纲</span>
        <span class="content__item__text"></span>
      </div>
    </div>
    <div class="title">
      <div class="title__text">Word library</div>
    </div>
    <div class="item" v-for="i in 20" :key="i">
      <div class="item__icon">
        <span class="iconfont">&#xe602;</span>
      </div>
      <span class="item__text">大学英语考研词汇</span>
      <span class="item__text"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainArea'
}
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
@import "../../style/variables.scss";
.main{
  position: absolute;
  top: .4rem;
  left: 0;
  right: 0;
  bottom: .5rem;
  padding: 0 .1rem;
  overflow-y: scroll;
  background-color: #f1f1f1;
  .content{
      &__item{
        display: flex;
        background-color: #fff;
        padding: .1rem;
        margin: .1rem 0;
        border-radius: .06rem;
        &__icon{
          width: .3rem;
          height: .3rem;
          background-color: #f1f1f1;
          border-radius: 50%;
          text-align: center;
          line-height: .3rem;
          margin-right: .1rem;
          color: $mostColor;
        }
        &__text{
          line-height: .3rem;
        }
      }
    }
  .title{
    height: .3rem;
    border-radius: .06rem .06rem 0 0;
    background-color: #fff;
    &__text{
      // background-color: $mostColor;
      // height: .3rem;
      position: relative;
      top: .1rem;
      left: -.02rem;
      background: linear-gradient(-45deg,transparent .16rem,$mostColor 0) bottom right,
                  linear-gradient(-135deg,transparent .16rem,$mostColor 0) top right;
      padding: .04rem 0 .04rem .1rem;
      width: 1.8rem;
      // box-shadow: 0 0 .2rem #ccc;
      color: #fff;
    }
  }
  .item {
    display: flex;
    background-color: #fff;
    padding: 0.1rem;
    border-bottom: .01rem solid #ccc;
    &__icon {
      width: 0.3rem;
      height: 0.3rem;
      background-color: #f1f1f1;
      border-radius: 50%;
      text-align: center;
      line-height: 0.3rem;
      margin-right: 0.1rem;
    }
    &__text {
      line-height: 0.3rem;
    }
  }
}
</style>

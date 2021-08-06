<template>
  <div class="main">
    <div class="main__item" v-for="i in 3" :key="i">
      <div class="main__item__title">
        <span class="title__text">例句</span>
        <span class="title__icon iconfont">&#xe601;</span>
      </div>
      <div class="main__item__content">
        <template v-for="i in 3" :key="i">
          <div class="content__english">
            Is this differential calculus or intergral calculus
          </div>
          <div class="content__chinese">这是积分还是微分?</div>
        </template>
      </div>
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
  height: 4.1rem;
  overflow-y: scroll;
  &__item{
    &__title{
      padding: .1rem;
      background-color: #f1f1f1;
      display: flex;
      .title__text{
        margin-right: auto;
      }
      .title__icon{
        text-align: center;
        width: .3rem;
      }
    }
    &__content{
      margin: .1rem;
      .content__english{
        margin: .1rem;
      }
      .content__chinese{
        margin: .1rem;
      }
    }
  }
}
</style>

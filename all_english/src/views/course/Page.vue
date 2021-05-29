<template>
  <div class="page">
    <div class="page__title">热销TOP</div>
    <div class="page__item">
      <img src="../../assets/home/saleBook1.png" class="page__item__img">
      <div class="page__item__text">
        <div class="item__title">22考研英语训练</div>
        <div class="item__detail">智能定制每日学习计划，还有七斤精美大礼包相送</div>
        <div class="item__price">
          <span class="item__price__new">&yen;599 </span>
          <span class="item__price__old">&yen;1299</span>
        </div>
      </div>
    </div>
    <div class="page__item">
      <img src="../../assets/home/saleBook2.png" class="page__item__img">
      <div class="page__item__text">
        <div class="item__title">22考研英语训练</div>
        <div class="item__detail">智能定制每日学习计划，还有七斤精美大礼包相送</div>
        <div class="item__price">
          <span class="item__price__new">&yen;599 </span>
          <span class="item__price__old">&yen;1299</span>
        </div>
      </div>
    </div>
    <div class="page__item">
      <img src="../../assets/home/saleBook3.png" class="page__item__img">
      <div class="page__item__text">
        <div class="item__title">22考研英语训练</div>
        <div class="item__detail">智能定制每日学习计划，还有七斤精美大礼包相送</div>
        <div class="item__price">
          <span class="item__price__new">&yen;599 </span>
          <span class="item__price__old">&yen;1299</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  setup () {
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.page{
  &__item{
    clear: both;
    margin: .3rem auto;
    font-size: .2rem;
    &__img{
      float: left;
      margin-right: .2rem;
    }
    &__text{
      .item__title{
        font-weight: bold;
      }
      .item__detail{
        color: #aaa;
        margin: .1rem 0;
      }
      .item__price{
        &__new{
          color: #99ddff;
        }
        &__old{
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>

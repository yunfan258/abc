<template>
  <div class="page">
    <div class="page__title">热销TOP</div>
    <router-link class="nearby__item" :to="{name: 'BookDetail'}"
      v-for="i in imgList" :key="i">
    <div class="page__item">
      <img :src="i" class="page__item__img">
      <div class="page__item__text">
        <div class="item__title">22考研英语训练</div>
        <div class="item__detail">智能定制每日学习计划，还有七斤精美大礼包相送。Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est nobis mollitia error dolorum, odit accusamus cum ratione inventore dolore!</div>
        <div class="item__price">
          <span class="item__price__new">&yen;599 </span>
          <span class="item__price__old">&yen;1299</span>
        </div>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
import img1 from '../../assets/home/saleBook1.png'
import img2 from '../../assets/home/saleBook2.png'
import img3 from '../../assets/home/saleBook3.png'

const imgList = [img1, img2, img3]
export default {
  name: 'Page',
  setup () {
    return { imgList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';

.page{
  &__title{
    font-size: .2rem;
    color: #e9603d;
    font-weight: bold;
    margin: .1rem 0;
    clear: both;
  }
  &__item{
    clear: both;
    font-size: .2rem;
    &__img{
      float: right;
      margin: 0 0 .2rem 0.2rem;
    }
    &__text{
      .item__title{
        font-weight: bold;
        line-height: .2rem;

      }
      .item__detail{
        position: relative;
        height: .84rem;
        overflow: hidden;
        color: #aaa;
        font-size: .16rem;
        margin: .1rem 0;
      }
      .item__price{
        &__new{
          color: $mostColor;
        }
        &__old{
          text-decoration: line-through;
          font-size: .14rem;
          margin-left: .04rem;
        }
      }
    }
  }
}
</style>

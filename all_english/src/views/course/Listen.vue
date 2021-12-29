/* eslint-disable vue/no-parsing-error */
<template>
  <div class="comprehension">
    <div class="comprehension__title">Listen to Yourself</div>
    <router-link class="nearby__item" :to="{name: 'BookDetail'}"
      v-for="i in imgList" :key="i">
    <div class="comprehension__item">
      <img :src="i" class="comprehension__item__img">
      <div class="comprehension__item__text">
        <div class="item__title">22考研英语训练</div>
        <div class="item__detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est nobis mollitia error dolorum, odit accusamus cum ratione inventore dolore!</div>
        <div class="item__price">
          <span class="item__price__new">&yen;66 </span>
          <span class="item__price__old">&yen;199</span>
        </div>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
import img1 from '../../assets/home/comprehension1.png'
import img2 from '../../assets/home/comprehension2.png'
import img3 from '../../assets/home/comprehension3.png'
import img4 from '../../assets/home/comprehension4.png'

const imgList = [img1, img2, img3, img4]
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

.comprehension{
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
    margin: .1rem 0;
    &__img{
      width: 100%;
    }
    &__text{
      .item__title{
        font-weight: bold;
        line-height: .2rem;

      }
      .item__detail{
        position: relative;
        height: .8rem;
        overflow: hidden;
        color: #aaa;
        font-size: .16rem;
        margin: .1rem 0;
      }
      .item__price{
        text-align: right;
        &__new{
          color: $mostColor;
          font-size: .22rem;
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

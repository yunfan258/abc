/* eslint-disable vue/no-parsing-error */
<template>
  <div class="title">Read Comprehension</div>
  <div class="comprehension">
    <router-link class="item" :to="{name: 'BookDetail'}" v-for="item in imgList" :key="item">
    <div class="comprehension__item">
      <img :src="item.path" class="comprehension__item__img">
      <div class="comprehension__item__text">
        <div class="item__title">{{item.name}}</div>
        <div class="item__detail">智能定制每日学习计划，还有七斤精美大礼包相送。</div>
        <div class="item__price">
          <span class="item__price__new">&yen;999 </span>
          <span class="item__price__old">&yen;1699</span>
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

const imgList = [{ path: img1, name: '六级阅读真题冲刺计划' },
  { path: img2, name: '《彼得·潘》长难句解读计划' },
  { path: img3, name: '经典英剧原著计划' },
  { path: img4, name: '《小王子》精读计划' }]
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
.title{
    font-size: .2rem;
    color: #e9603d;
    font-weight: bold;
    margin: .1rem 0;
    clear: both;
  }
.comprehension{
  display: flex;
  flex-flow:row wrap;
  justify-content: space-around;
  a.item{
    width: 48%;
  }
  &__item{
    font-size: .2rem;
    &__img{
      width: 100%;
    }
    &__text{
      .item__title{
        color: #333;
        font-weight: bold;
        font-size: .12rem;
        line-height: .2rem;
      }
      .item__detail{
        height: .4rem;
        overflow: clip;
        color: #aaa;
        font-size: .12rem;
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

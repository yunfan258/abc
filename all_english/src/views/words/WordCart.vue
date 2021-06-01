<template>
  <div class="opacity__mask" v-if="shows.showCart" @click="handleCheckIcon"></div>
  <div class="cart">
    <div class="cartList" v-if="shows.showCart">
      <div class="cartList__header">
      111
      </div>
    </div>
  </div>
</template>

<script>
// import { useRoute } from 'vue-router'
// import { useStore } from 'vuex'
import { reactive } from 'vue'

const useClickIconEffect = () => {
  const shows = reactive({ showCart: false })
  const handleCheckIcon = () => {
    shows.showCart = !shows.showCart
  }
  return { shows, handleCheckIcon }
}
export default {
  name: 'WordCart',
  components: { },
  setup () {
    const { shows, handleCheckIcon } = useClickIconEffect()
    return { shows, handleCheckIcon }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.opacity__mask{
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: $bgColor;
  .cartList{
    &__header {
      display: flex;
      line-height: .52rem;
      border-bottom: 1px solid $content-bgColor;
      font-size: .14rem;
      color: $content-fontcolor;
      &__all {
        width: .64rem;
        margin-left: .3rem;
      }
      &__icon {
        display: inline-block;
        margin-right: .1rem;
        vertical-align: top;
        color: $btn-bgColor;
        font-size: .2rem;
      }
      &__clear {
        flex: 1;
        margin-right: .16rem;
        text-align: right;
        &__btn {
          display: inline-block;
        }
      }
    }
    &__product{
      display: flex;
      &__icon{
        margin: .22rem .3rem;
        color: $btn-bgColor;
        font-size: .2rem;
        vertical-align: center;
        text-align: center;
      }
      .product__item{
        flex: 1;
        &__img {
          width: .46rem;
          height: .46rem;
          margin-right: .16rem;
        }
      }
    }
  }
}
.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .49rem;
  &__icon {
    position: relative;
    width: .84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      left: .5rem;
      top: .04rem;
      min-width: .2rem;
      height: .2rem;
      padding: 0 .04rem;
      line-height: .2rem;
      background-color: $hightlight-fontColor;
      border-radius: .1rem;
      font-size: .12rem;
      text-align: center;
      color: $bgColor;
      transform: scale(.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;
    &__price {
      line-height: .49rem;
      color: $hightlight-fontColor;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background-color: #4FB0F9;
    text-align: center;
    color: $bgColor;
    font-size: .14rem;
  }
}
</style>

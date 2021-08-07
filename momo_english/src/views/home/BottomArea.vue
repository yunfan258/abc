<template>
  <div class="bottom">
      <div class="bottom__btn1">认识</div>
      <div class="bottom__btn2">模糊</div>
      <div class="bottom__btn3">忘记</div>
  </div>
</template>

<script>
export default {
  name: 'BottomArea'
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
%btn-basic{
    flex: 1;
    text-align: center;
    color:#fff;
    margin: 0 .1rem;
    padding: .1rem 0;
    border-radius: .06rem;
    font-size: .16rem;
}
.bottom{
    width: 100%;
    display: flex;
    // justify-content: space-around;
    position: absolute;
    bottom: .6rem;
    height: .4rem;
    &__btn1{
        @extend %btn-basic;
        background-color: #76a8a2;
    }
    &__btn2{
        @extend %btn-basic;
        background-color: #d1b82c;
    }
    &__btn3{
        @extend %btn-basic;
        background-color: #d1602c;

    }
}
</style>

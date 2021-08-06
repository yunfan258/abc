<template>
  <div class="top">
    <div class="title">
      <span class="title__text">Books</span>
      <span class="title__icon iconfont">&#xe602;</span>
      <span class="title__icon iconfont">&#xe600;</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TopArea',
  components: {}
}
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
@import "../../style/variables.scss";
.top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: .36rem;
  .title {
    display: flex;
    background-color: #f1f1f1;
    padding: 0.1rem;
    &__text {
      margin-right: auto;
      font-size: 0.16rem;
    }
    &__icon {
      width: 0.3rem;
      text-align: center;
    }
  }
}
</style>

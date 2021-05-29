<template>
<div class="problem">
  <div class="problem__item">
    <div class="problem__item__title">
      <span class="iconfont icon">&#xe679;</span>
      <span> 每日一句 </span>
      <span class="iconfont icon">&#xe622;</span>
    </div>
    <div class="problem__item__sentence">
        Problem are guidelines, not stop signs!
    </div>
  </div>
  <div class="problem__item">
    <div class="problem__item__title">
      <span class="iconfont icon">&#xe679;</span>
      <span> 你问我答 </span>
      <span class="iconfont icon">&#xe622;</span>
    </div>
    <div class="problem__item__sentence">
        arm=手臂，那a shot in the arm=?
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Problem',
  components: { }
}
</script>
<style lang="scss" scoped>
.problem{
  &__item{
    font-size: .16rem;
    &__title{
      margin: .14rem auto;
    }
    &__sentence{
      margin: .14rem auto;
    }
  }
  &__item:first-of-type{
    border-bottom: 1px solid #ccc;
  }
  .icon{
    font-size: .12rem;
    color: #99ddff;
  }
}
</style>

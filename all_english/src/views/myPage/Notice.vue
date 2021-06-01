<template>
<router-link :to="{name:'Notices'}">
<div class="notice">
    <span class="notice__icon-left iconfont">&#xe60b;</span>
    <span class="notice__text">通知</span>
    <span class="notice__icon-right iconfont">&#xe622;</span>
</div>
</router-link>

</template>
<script>
export default {
  name: 'Notice',
  components: { },
  setup () {
    return { }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variables.scss';

.notice{
  position: relative;
  margin: .16rem .18rem;
  padding: .1rem;
  border-radius: .16rem;
  background-color: $bgColor;
  box-shadow: 0 0 2px #ccc;
  &__icon-left{
    margin: 0 .12rem;
  }
  &__icon-right{
    position: absolute;
    top: .10rem;
    right: .16rem;
  }
}
</style>

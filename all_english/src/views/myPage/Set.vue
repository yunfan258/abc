<template>
  <div class="set">
    <router-link :to="{name: 'Setting'}">
    <span class="set__icon iconfont">&#xe643;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Course',
  components: { }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.set{
  position: fixed;
  top: 0;
  left: 0;
  height: .5rem;
  width: 100%;
  z-index: 2;
  background-color: #ffffff;
  &__icon{
    position: absolute;
    right: .18rem;
    top: .12rem;
    font-size: .26rem;
  }
}
</style>

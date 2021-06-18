<template>
  <div class="CourseInfo">
    <div class="left__main">
      <div class="left__main__title">{{myName}}</div>
      <ul class="left__main__content">
        <li
          class="left__main__item"
          v-for="item in itemList1"
          :key="item"
        >{{item?.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseInfo',
  props: ['myName', 'itemList1', 'itemList2'],
  components: { },
  setup () {
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.CourseInfo{
  .left__main{
    padding: 0 .2rem;
    &__title{
      @include titleStyle;
    }
    &__item{
      width: 40%;
      list-style: circle;
      font-size: .14rem;
      padding: .1rem 0;
      border-bottom: .01rem solid $mostColor;
    }
  }
}
</style>

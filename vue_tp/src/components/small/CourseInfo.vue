<template>
  <div class="CourseInfo">
    <div class="left__main">
      <div class="left__main__title">{{myName}}</div>
      <ul class="left__main__content">
        <li
          class="left__main__item"
          v-for="item in list1"
          :key="item"
        >
          <a :href="item?.url">{{item?.text}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseInfo',
  props: ['myName', 'list1'],
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
      width: 80%;
      margin-left: .2rem;
      list-style: circle;
      font-size: .14rem;
      padding: .1rem 0;
      border-bottom: .01rem solid $mostColor;
      &>a:hover{
        color: #5599dd;
      }
    }
  }
}
</style>

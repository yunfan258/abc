<template>
  <div class="item" v-for="item in itemList" :key="item">
    <router-link :to="`/article/${item?.id}`">
      <div class="item__title">#{{item.title}}#</div>
      <div class="item__content">{{item.content}}</div>
      <div class="item__bottom">
        <span class="item__bottom__username">作者：{{item.username}}</span>
        <span class="item__bottom__time">发表时间：{{item.time}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogPart',
  props: ['itemList'],
  components: { },
  setup () {
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.item{
  @include boxShadow;
  padding: .1rem;
  cursor: pointer;
  &__title,&__content,&__time{
    margin: .1rem 0;
  }
  &__title{
    color: $mostColor;
  }
  &__content{
    @include ellipsis;
  }
  &__bottom{
    display: flex;
    align-content: space-around;
    &__username,&__time{
      color: #999;
      font-size: .14rem;
      flex:1;
    }
  }
}
.item:hover{
  padding: .1rem;
  background-color: #fff;
  border-left: .01rem solid $mostColor;
  border-right: .01rem solid $mostColor;
  position: relative;

}
</style>

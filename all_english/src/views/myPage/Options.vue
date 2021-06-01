<template>
<div class="options">
      <div class="options__item" v-for="item in optionList" :key="item">
          <div class="options__item__icon iconfont" v-html="item.icon" />
          <div class="options__item__name">{{item.name}}</div>
          <div class="options__item__right iconfont" v-html="item.right" />
      </div>
    </div>
</template>
<script>

export default {
  name: 'Options',
  props: ['optionList'],
  components: { },
  setup () {
    return { }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.options{
  margin: .18rem;
  padding: .1rem 0;
  background: $bgColor;
  box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
  border-radius: .08rem;
  &__item{
    position: relative;
    display: flex;
    padding: .1rem .16rem 0.1rem .16rem;
    &__icon{
      border-radius: .08rem;
      width: .22rem;
      height: .22rem;
      line-height: .22rem;
      text-align: center;
      color: $mostColor;
    }
    &__name{
      font-family: PingFangSC-Regular;
      font-size: .14rem;
      color: #262626;
      margin-left: .12rem;
      line-height: .22rem;
      width: 2.66rem;
    }
    &__right{
      position:absolute;
      top: .13rem;
      right: .16rem;
    }
  }
}
</style>

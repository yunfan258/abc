<template>
<div class="docker">
  <div
    v-for="(item,index) in dockerList" :key="index"
    :class="{'docker__item': true, 'docker__item--active': item.title===whichPage}"
  >
    <router-link :to="item.to">
      <div class="iconfont" v-html="item.icon" ></div>
      <div class="docker__title">{{item.title}}</div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Docker',
  props: ['whichPage'],
  setup () {
    const dockerList = [
      { icon: '&#xe601;', title: '首页', to: { name: 'Home' } },
      { icon: '&#xe638;', title: '课程', to: { name: 'Course' } },
      { icon: '&#xe6ec;', title: '发现', to: { name: 'Find' } },
      { icon: '&#xe60d;', title: '我的', to: { name: 'MyPage' } }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

.docker{
    background-color: $bgColor;
    color: $content-fontcolor;
    box-sizing: border-box;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 .18rem;
    height: .49rem;
    border-top: 0rem solid $content-bgColor;
    box-shadow: 0 -0.01rem .1rem $content-shodowColor;
    &__item {
      flex: 1;
      text-align: center;
      a {
        color: #aaa;
        text-decoration: none;
      }
      .iconfont{
        margin: .07rem 0 0 0;
        font-size: .2rem;
      }
      &--active{
        transform: scale(1.2,1.2);

        a{
          color: #1FA4FC;
        }

      }
    }
    &__title{
      font-size: .2rem;
      transform: scale(0.5,0.5);
      transform-origin: top center;
    }
}
</style>

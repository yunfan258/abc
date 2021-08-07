<template>
<div class="docker">
  <div
    v-for="(item,index) in dockerList" :key="index"
    :class="{'docker__item': true, 'docker__item--active': item.to.name===whichPage}"
    @click="handleClick(item.to.name)"
  >
    <router-link :to="item.to">
      <div class="iconfont" v-html="item.icon" ></div>
      <div class="docker__title">{{item.title}}</div>
    </router-link>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
const dockerList = [
  { icon: '&#xe604;', title: '首页', to: { name: 'Home' } },
  { icon: '&#xe619;', title: '选词', to: { name: 'Book' } },
  { icon: '&#xe607;', title: '统计', to: { name: 'Count' } },
  { icon: '&#xe60f;', title: '设置', to: { name: 'Setting' } }
]
const useClickEffect = () => {
  const whichPage = ref('Home')
  const handleClick = (name) => {
    whichPage.value = name
  }
  return { whichPage, handleClick }
}
export default {
  name: 'Docker',
  // props: ['whichPage'],
  setup () {
    const { whichPage, handleClick } = useClickEffect()
    return { dockerList, whichPage, handleClick }
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
        // transform: scale(1.2,1.2);

        a{
          color: $mostColor;
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

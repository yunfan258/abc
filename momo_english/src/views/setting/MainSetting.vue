<template>
  <div class="main">
    <Info />
    <Options :optionList="optionList" v-for="i in 4" :key="i"/>
    <Bottom />
    <!-- <div class="main__item" v-for="i in 3" :key="i">
      <div class="main__item__title">
        <span class="title__text">例句</span>
        <span class="title__icon iconfont">&#xe601;</span>
      </div>
      <div class="main__item__content">
        <template v-for="i in 4" :key="i">
          <div class="content__english">
            Is this differential calculus or intergral calculus
          </div>
          <div class="content__chinese">这是积分还是微分?</div>
        </template>
      </div>
    </div> -->
  </div>
</template>

<script>
import Info from './Info.vue'
import Options from './Options.vue'
import Bottom from '../../components/Bottom.vue'

const optionList = [
  { icon: '&#xe6f0;', name: '每日学习量', right: '&#xe622;', btn: '30' },
  { icon: '&#xe694;', name: '记忆模式：看英文回忆中文', right: '&#xe622;', btn: '英中' },
  { icon: '&#xe623;', name: '每日复习提醒时间', right: '&#xe622;', btn: '20:20' },
  { icon: '&#xe60a;', name: '备份与还原', right: '&#xe622;', btn: '20小时前' }
]
const optionList2 = [
  { icon: '&#xe695;', name: '消息中心', right: '&#xe622;' },
  { icon: '&#xe639;', name: '帮助与反馈', right: '&#xe622;' },
  { icon: '&#xe618;', name: '安全与隐私', right: '&#xe622;' },
  { icon: '&#xe632;', name: '分享学习心得', right: '&#xe622;' },
  { icon: '&#xe617;', name: '给个好评', right: '&#xe622;' }
]
export default {
  name: 'MainArea',
  components: { Info, Options, Bottom },
  setup () {
    return { optionList, optionList2 }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
@import "../../style/variables.scss";
.main{
  position: absolute;
  bottom: .5rem;
  top: .5rem;
  left: 0;
  right: 0;
  overflow-y: scroll;
  &__item{
    &__title{
      padding: .1rem;
      background-color: #f1f1f1;
      display: flex;
      .title__text{
        margin-right: auto;
      }
      .title__icon{
        text-align: center;
        width: .3rem;
      }
    }
    &__content{
      margin: .1rem;
      .content__english{
        margin: .1rem;
      }
      .content__chinese{
        margin: .1rem;
      }
    }
  }
}
</style>

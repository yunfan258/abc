<template>
<!-- <div class="imgs">
    <div class="imgs__item" v-for="(item,index) in imgsList" :key="index" @click="()=>showToast('暂未开放，I am sorry')">
        <img :src="`http://www.dell-lee.com/imgs/vue3/${item.name}.png`"
            alt="" class="imgs__item__img"
        >
        <p class="imgs__item__p">{{item.pText}}</p>
    </div>
</div> -->
<IconsArea :iconsList="imgsList" />

<IconsArea :iconsList="iconsList" />
<div class="gap"></div>
<Toast v-if="isShowToast" :message="toastMessage"/>
</template>

<script>
import { ref } from 'vue'
import Toast, { useToastEffect } from '../../components/Toast'
import IconsArea from '../../components/IconsArea'

// 显示搜索记录
const useShowSearchEffect = () => {
  const isShowSearch = ref(false)
  const showSearch = (status) => {
    isShowSearch.value = status
  }
  return { isShowSearch, showSearch }
}
const imgsList = [
  { icon: '&#xe62f;', pText: '0元考研' },
  { icon: '&#xe6d8;', pText: '宝藏同学' },
  { icon: '&#xe66c;', pText: '打卡挑战' },
  { icon: '&#xe61d;', pText: '同桌' },
  { icon: '&#xe62e;', pText: '小组' }
]
const iconsList = [
  { pText: '考研资讯', icon: '&#xe630;' },
  { pText: '经验贴', icon: '&#xe61f;' },
  { pText: '小挑战', icon: '&#xebaa;' },
  { pText: '成长计划', icon: '&#xe730;' },
  { pText: '话题', icon: '&#xe719;' }
]
export default {
  components: { Toast, IconsArea },
  name: 'StaticPart',
  setup () {
    const { isShowSearch, showSearch } = useShowSearchEffect()
    const { isShowToast, toastMessage, showToast } = useToastEffect()
    return { imgsList, iconsList, isShowSearch, showSearch, showToast, isShowToast, toastMessage }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.banner{
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    &__img{
    width: 100%;
    }
}
.imgs{
  display: flex;
  flex-flow: row wrap;
  margin-top: .16rem;
  &__item{
    width: 20%;
    margin: .1rem 0 .16rem 0;
    &__img{
        display: block;
        margin: 0 auto;
        width: .4rem;
        height: .4rem;
    }
    &__p{
      margin-top: .1rem ;
      text-align: center;
    }
  }
}

</style>

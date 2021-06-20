<template>
<div class="searchInfo">
    <div class="searchInfo__item"
      v-for="item in searchInfoList"
      :key="item"
    >
      <div class="searchInfo__item__english" v-html="item.english" />
      <div class="searchInfo__item__chinese">
      <span v-html="item.wordSex" />
      <span v-html="item.chinese" />
      </div>
      <!--
      <div class="searchInfo__item__english">{{item.english}}</div>
      <div class="searchInfo__item__chinese">
      {{item.wordSex}}
      {{item.chinese}}
      </div>
      -->
    </div>
    <div v-if="searchInfoList.length===0">第 {{dayPlan}} 天计划中无相关单词</div>
</div>
</template>

<script>
// import { reactive, toRefs } from 'vue'
import { useCommonWordEffect, useGetWordsEffect } from '../../effects/commonEffect'
// const useInfoListEffect = () => {
//   const itemList = reactive({
//     searchInfoList: [
//       { english: 'bride' },
//       { english: 'prisoner' },
//       { english: 'trim' },
//       { english: 'journal' },
//       { english: 'tune' },
//       { english: 'abstract' },
//       { english: 'within' },
//       { english: 'rim' }
//     ]
//   })

//   const handleClearClick = () => {
//     itemList.searchInfoList = []
//   }
//   const { searchInfoList } = toRefs(itemList)
//   return { searchInfoList, handleClearClick }
// }

export default {
  name: 'Search',
  components: { },
  props: ['searchInfoList'],
  setup (props, context) {
    // const { handleBackClick } = useCommonRouterEffect()
    const { dayPlan } = useCommonWordEffect()
    const { getWords } = useGetWordsEffect()
    getWords(dayPlan.value)
    // const { searchInfoList } = useInfoListEffect()
    // return { totalList, searchInfoList, handleBackClick }
    return { dayPlan }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.searchInfo{
  background-color: #f9f9f9;
  padding: .1rem;
  margin-top: .2rem;
  box-shadow: 0 .08rem .08rem 0 rgb(51 51 51 / 5%), 0 0 .08rem 0 rgb(51 51 51 / 15%);

  &__item{
    display: flex;
    padding: .1rem .1rem;
    border-bottom: .01rem solid #ccc;
    &__english{
      width: 35%;
    }
    &__chinese{
      flex:1;
    }
    ::v-deep .otherColor{
      color: #ff0000;
    }
  }
  &__item:last-of-type{
    border-bottom: none;
  }
}
</style>

<template>
<div class="wrapper">
  <div class="search">
    <span class="iconfont search__icon">&#xe650;</span>
    <input type="text"
      class="search__text"
      placeholder="improve"
      v-model="inputVal"
      @input="showSearchInfo(totalList,inputVal)"
    >
    <span class="search__cancle" @click="()=>{handleBackClick()}" >取消</span>
  </div>
  <div class="history" v-show="!isShowSearch">
    <div class="history__title">
      <span class="history__title__content">搜索历史</span>
      <span class="history__title__clear" @click="()=>handleClearClick()">清除搜索历史</span>
    </div>
    <div class="history__content">
      <span class="history__content__item" v-for="item in historyList" :key="item">{{item?.name}}</span>
    </div>
  </div>
  <div class="hot" v-show="!isShowSearch">
    <div class="hot__title">
      <span class="hot__title__content">热门搜索</span>
    </div>
    <div class="hot__content">
      <span class="hot__content__item" v-for="item in hotItemList" :key="item">{{item?.name}}</span>
    </div>
  </div>
  <SearchInfo v-show="isShowSearch" :searchInfoList="searchInfoList"/>
</div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import { useCommonRouterEffect, useCommonWordEffect } from '../../effects/commonEffect'
import SearchInfo from './SearchInfo'

const inputVal = ref('')
const useInfoListEffect = () => {
  const historyItemList = reactive({
    historyList: {
      item1: { name: 'bride' },
      item2: { name: 'prisoner' },
      item3: { name: 'trim' },
      item4: { name: 'journal' },
      item5: { name: 'tune' },
      item6: { name: 'abstract' },
      item7: { name: 'within' },
      item8: { name: 'rim' }
    }
  })
  const hotItemList = {
    item1: { name: 'nylon' },
    item2: { name: 'suffer' },
    item3: { name: 'mercy' },
    item4: { name: 'riot' },
    item5: { name: 'suffice' },
    item6: { name: 'signal' },
    item7: { name: 'impression' },
    item8: { name: 'nor' }
  }

  const handleClearClick = () => {
    historyItemList.historyList = {}
  }
  const { historyList } = toRefs(historyItemList)
  return { hotItemList, historyList, handleClearClick }
}
const useSerchInfoEffect = () => {
  const isShowSearch = ref(false)
  const itemList = reactive({ searchInfoList: [] })
  const showSearchInfo = (totalList, inputVal) => {
    isShowSearch.value = true
    itemList.searchInfoList = []
    for (const i in totalList) {
      if (totalList[i]?.english.startsWith(inputVal) ||
        totalList[i]?.chinese.match(inputVal) !== null
      ) {
        itemList.searchInfoList.push(totalList[i])
      }
    }
  }
  const { searchInfoList } = toRefs(itemList)
  return { isShowSearch, searchInfoList, showSearchInfo }
}
export default {
  name: 'Search',
  components: { SearchInfo },
  props: [''],
  setup (props, context) {
    const { handleBackClick } = useCommonRouterEffect()
    const { totalList } = useCommonWordEffect()
    const { hotItemList, historyList, handleClearClick } = useInfoListEffect()
    const { isShowSearch, searchInfoList, showSearchInfo } = useSerchInfoEffect()
    return { inputVal, handleBackClick, totalList, hotItemList, historyList, handleClearClick, isShowSearch, searchInfoList, showSearchInfo }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.wrapper {
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: $search-bgColor;
  overflow-y: auto;
  padding: .18rem;
}
.search{
  display: flex;
  font-size: .16rem;
  border-radius: .16rem;
  width: 2.95rem;
  background-color: #eee;
  height: .32rem;
  line-height: .32rem;
  &__icon{
    display: inline-block;
    margin: 0 .12rem 0 .16rem;
  }
  &__text{
    border: none;
    background: none;
    outline: none;
    width: 2.5rem;
  }
  &__cancle{
    position: absolute;
    right: .2rem;
    font-size: .16rem;
  }
}
.history,.hot{
  &__title{
    &__content{
      display: inline-block;
      font-size: .16rem;
      font-weight: bold;
      margin: .24rem 1.8rem .02rem 0;
    }
  }
  &__content{
    display: flex;
    flex-flow: row wrap;
    &__item{
      display: inline-block;
      padding: .08rem .08rem;
      margin: .1rem .1rem 0 0;
      background-color: #eee;
      font-size: .14rem;
    }
  }
}
</style>

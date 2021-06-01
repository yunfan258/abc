<template>
  <TopArea  whichName="单词详情" />
  <div class="padding"></div>
  <div class="title1">复习单词
  <el-switch class="title1__switch" v-model="showAllMask" loading @click="()=>{hideAllMask();hideMask(false)}"> </el-switch>
  </div>
  <div class="item"  v-for="(item, index) in oldList" :key="index">
    <div class="item__english">
    {{totalList[item].english}}
    </div>
    <div class="item__chinese">{{totalList[item].wordSex}}
    {{totalList[item].chinese}}
    <div class="item__chinese__mask" @click="hideMask(index)" v-show="((showAllMask==true)&&(showMask!==index))"></div>
    </div>
  </div>
  <div class="title1" v-show="newList.length">新单词</div>
  <div class="item"  v-for="(item, index) in newList" :key="index">
    <div class="item__english">
    {{totalList[item].english}}
    </div>
    <div class="item__chinese">{{totalList[item].wordSex}}
    {{totalList[item].chinese}}
    <div class="item__chinese__mask"></div>
    </div>
  </div>
</template>

<script>
import TopArea from '../../components/TopArea'
import { useCommonWordEffect } from '../../effects/commonEffect'
import { ref } from 'vue'
const useHandleMaskEffect = () => {
  const showMask = ref(true)
  const showAllMask = ref(true)
  const hideMask = (index) => {
    showMask.value = index
  }
  const hideAllMask = (status) => {
    showAllMask.value = !showAllMask.value
  }
  return { showMask, showAllMask, hideMask, hideAllMask }
}
export default {
  name: 'NewAndOld',
  components: { TopArea },
  setup () {
    const { showMask, hideMask, showAllMask, hideAllMask } = useHandleMaskEffect()
    const { oldList, newList, totalList } = useCommonWordEffect()
    return { showMask, showAllMask, hideMask, hideAllMask, oldList, newList, totalList }
  }
}
</script>

<style lang="scss" scoped>
.padding{
  padding-top: .5rem;
}
.title1{
  font-size: .2rem;
  padding: .2rem 0 0 .2rem;
  position: relative;
  &__switch{
    position: fixed;
    z-index: 30;
    top:.14rem;
    right: .2rem;
  }
}
.item{
  background-color: #f1f1f1;
  padding: .1rem;
  margin: .2rem .2rem;
  font-size: .14rem;
  &__english{
    padding-bottom: .1rem;
  }
  &__chinese{
    position: relative;
    &__mask{
      position: absolute;
      box-sizing: border-box;
      top: 0;
      left: 0;
      background-color: #ccc;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

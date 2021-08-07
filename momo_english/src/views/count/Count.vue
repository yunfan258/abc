<template>
  <div class="home">
    <div class="title">
      <template v-for="(item,index) in titleList" :key="index">
      <span :class="{'title__item':true, 'title__item--active' : option===index}" @click="selectOption(index)">{{item}}</span>
      </template>
      <span class="title__icon iconfont">&#xe6ad;</span>
    </div>
      <ForgetCurve v-if="option===0"/>
      <StudyColumn v-if="option===1" />
      <MemoryCurve v-if="option===2" />
  </div>
</template>

<script>
import { ref } from 'vue'
import ForgetCurve from './ForgetCurve.vue'
import StudyColumn from './StudyColumn.vue'
import MemoryCurve from './MemoryCurve.vue'
const useSelectEffect = () => {
  const titleList = ['遗忘曲线', '学习情况', '记忆持久度']
  const option = ref(0)
  const selectOption = (opt) => {
    option.value = opt
  }
  return { titleList, option, selectOption }
}
export default {
  name: 'Home',
  components: {
    ForgetCurve, StudyColumn, MemoryCurve
  },
  setup () {
    const { titleList, option, selectOption } = useSelectEffect()
    return { titleList, option, selectOption }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.title{
  display: flex;
  background-color: $content-bgColor;
  text-align: center;
  color: #999;
  &__item{
    flex: 1;
    padding: .1rem 0;
    &--active{
      background-color: #fff;
      color: $mostColor;
      border-radius: .06rem .06rem 0 0;
    }
  }
  &__icon{
    flex: 0.5;
    line-height: .36rem;
  }
}
</style>

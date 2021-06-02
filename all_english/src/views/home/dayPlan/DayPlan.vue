<template>
<TopArea whichName="挑选计划天数"/>
<div class="padding"></div>
<div class="dayPlan">
  <el-select v-model="value" filterable placeholder="请选择">
    <el-option
      v-for="item in 28"
      :key="item"
      :label="item.toString()"
      :value="item.toString()">
    </el-option>
  </el-select>
  <el-button round class="submit" @click="()=>{changeDayPlan(value);showToast('修改计划成功，开始背单词吧');goAhead()}">确定</el-button>
  <div class="warn">
  <div>提示信息：</div>
  <div>修改后将默认从新的一天开始，之前数据将清空</div>
  <div>修改后两秒自动跳转回首页</div>
  </div>

</div>
<Toast v-if="isShowToast" :message="toastMessage"/>
</template>

<script>
import { useRouter } from 'vue-router'
import TopArea from '../../../components/TopArea'
import Toast, { useToastEffect } from '../../../components/Toast'

import { ref } from 'vue'
import { useStore } from 'vuex'
const value = ref('1')
const useChangePlanEffect = () => {
  const store = useStore()
  const changeDayPlan = (value) => {
    store.commit('changeDayPlan', { dayPlan: value })
    store.commit('changeTotalList', { totalList: [] })
    store.commit('changeOldList', { oldList: [] })
    store.commit('changeNewList', { newList: [] })
    store.commit('changeNewAndOld', { newAndOld: {} })
    store.commit('changecurrentId', { currentId: 0 })
  }
  return { changeDayPlan }
}
const useGoAheadEffect = () => {
  const router = useRouter()
  const goAhead = () => {
    setTimeout(() => {
      router.push({ name: 'Home' })
    }, 2000)
  }
  return { goAhead }
}
export default {
  name: 'DayPan',
  components: { TopArea, Toast },
  setup () {
    const { isShowToast, toastMessage, showToast } = useToastEffect()
    const { changeDayPlan } = useChangePlanEffect()
    const { goAhead } = useGoAheadEffect()
    return { isShowToast, toastMessage, showToast, value, changeDayPlan, goAhead }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/variables.scss';
.dayPlan{
  margin: .1rem .18rem;
}
.padding{
  padding-top: .5rem;
}
.submit{
    text-align: center;
    margin: .1rem 0rem 0 .2rem;
}
.warn{
  font-size: .14rem;
  color: #aaa;
  margin: .2rem 0;
  & div{
    margin: .2rem;
  }
}
</style>

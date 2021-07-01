<template>
  <div class="main">
    <div class="main__title">学校排名</div>
    <Search />
    <table class="main__schools">
      <tr class="main__schools__item">
        <th v-for="(item,index) in thList" :key="index"
          @click="getItemList(index+1)"
        >{{item}}</th>
      </tr>
      <tr
        class="main__schools__item"
        v-for="(items,index) in schoolList" :key="index"
      >
        <td v-for="(item,key,index) in items" :key="index">{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Search from './Search.vue'

const thList = [
  '排名',
  '学校名称',
  '评分',
  '省份',
  '省排名',
  '类型',
  '类排名',
  '代号',
  '评级'
]

const useIndexEffect = () => {
  const data = reactive({ itemList: [], schoolList: [] })
  const getIndexSchools = async () => {
    const result = await post('/School/schools',
      {})
    // console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      data.schoolList = result?.data?.data
    }
  }
  getIndexSchools()
  const getItemList = async (param) => {
    const result = await post('/School/getitemList',
      { param })
    console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      data.schoolList = result?.data?.data
    }
  }
  const { itemList, schoolList } = toRefs(data)
  return { itemList, schoolList, getItemList }
}
export default {
  name: 'HomeLeft',
  components: { Search },
  setup () {
    const { itemList, schoolList, getItemList } = useIndexEffect()
    return { thList, itemList, schoolList, getItemList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.main{
  width: 68%;
  margin-right: 2%;
  @include boxShadow;
  padding: .1rem;
  &__title{
    text-align: center;
    padding: .1rem;
    border-bottom: .01rem solid $mostColor;
    font-size: .2rem;
    color: $mostColor;
  }
  &__schools{
    width: 90%;
    margin: .1rem auto;
    border-collapse: collapse;
    border: .01rem solid $mostColor;
    &__item{
      &>th{
        cursor: pointer;
        &:hover{
          color: $mostColor;
        }
      }
      &>th,&>td{
        text-align: center;
        border: .01rem solid $mostColor;
        padding: .1rem 0;
      }
    }
  }
}
</style>

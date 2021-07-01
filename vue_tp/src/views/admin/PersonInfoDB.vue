<template>
  <div class="personInfoDB">
    <table>
      <tr class="item">
        <th  v-for="(i,key,index) in (itemList[0]||[])" :key="index"
          @click="getitemList(key)">
        {{key}}
        </th>
      </tr>
      <tr class="item" v-for="(item,index) in itemList" :key="index">
        <td  v-for="(i,key,index) in item" :key="index">
        {{i||' '}}
        </td>
      </tr>
    </table>
  </div>
  <el-backtop></el-backtop>

</template>

<script>
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
const useIndexEffect = () => {
  const data = reactive({ itemList: [] })
  const getitemList = async (param) => {
    const result = await post('/Admin/getitemList',
      { param })
    console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      data.itemList = result?.data?.data
    }
  }
  const { itemList } = toRefs(data)
  return { itemList, getitemList }
}
export default {
  name: 'PersonInfoDB',
  components: { },
  setup () {
    const { itemList, getitemList } = useIndexEffect()
    getitemList('id')
    return { itemList, getitemList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.personInfoDB{
  &>table{
    width: 95%;
    margin: .2rem auto;
    border-collapse: collapse;
    &>tr{
      &>th{
        cursor: pointer;
        &:hover{
          color: $mostColor;
        }
      }
      &>td,&>th{
        border: .01rem solid #ccc;
        padding: .04rem;
        text-align: center;
      }
    }
  }
}
</style>

<template>
  <div class="search">
      <!-- <span class="iconfont search__icon"></span> -->
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <input type="text"
        class="search__text"
        placeholder="查询学校信息"
        v-model="input1"
      />
      <button class="search__btn"
        @click="()=>{
          searchSchool(value,input1);
          handleShowMask(true)
        }">
        <span class="iconfont">&#xe600;</span>
      </button>
  </div>
  <Mask :showMask="showMask"
    :itemList="schoolList"
    @click="handleShowMask(false)"
  />
  <div class="result" v-if="showMask">
    <div class="result__title">查询到的学校信息</div>
    <table class="result__content">
      <tr class="result__content__item" v-for="items in schoolList" :key="items">
        <td v-for="(item,key,index) in items" :key="index">{{item}}</td>
      </tr>
    </table>
    <div class="result__cue" v-if="!schoolList">未找到相关学校信息</div>
  </div>

</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Mask, { useMaskEffect } from '../../components/Mask.vue'
const value = ref('id')
const options = [
  { value: 'id', label: '排名' },
  { value: 'name', label: '学校名称' },
  { value: 'score', label: '评分' },
  { value: 'province', label: '省份' },
  { value: 'province_rank', label: '省排名' },
  { value: 'type', label: '类型' },
  { value: 'type_rank', label: '类排名' },
  { value: 'code', label: '代号' },
  { value: 'grade', label: '评级' }
]
const useSearchEffetc = () => {
  const input1 = ref('')
  const data = reactive({ schoolList: [] })
  const searchSchool = async (key, val) => {
    const result = await post('/School/searchSchool',
      { key, val })
    // console.log(result?.data)
    if (result?.data) {
      data.schoolList = result?.data?.data
    }
  }
  const { schoolList } = toRefs(data)
  return { input1, schoolList, searchSchool }
}
export default {
  name: 'Search',
  components: { Mask },
  setup () {
    const { input1, schoolList, searchSchool } = useSearchEffetc()
    const { showMask, handleShowMask } = useMaskEffect()
    return { value, options, input1, schoolList, searchSchool, showMask, handleShowMask }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';

.search{
  @include ellipsis;
  width: 4rem;
  margin: 0 0 0 auto;
  .el-select{
    width: 1rem;
  }
  &__btn{
    @include btnNone;
    display: inline-block;
    cursor: pointer;
    padding: 0 .16rem;
    height: .32rem;
    line-height: .32rem;
    text-align: center;
    background-color: #ccc;
    &:hover{
      color: #fff;
      background-color: #5599dd;
    }
  }
  &__text{
    border: none;
    background: none;
    outline: none;
    width: 2rem;
    font-size: .16rem;
    background-color: #fff;
    height: .32rem;
    line-height: .32rem;
    margin: .12rem .18rem .12rem .18rem;
    border: .01rem solid #5599dd;
    &::placeholder{
      color: #ccc;
    }
  }
}
.result{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  z-index: 20;
  background: $bgColor;
  overflow:auto;
  &__title{
    text-align: center;
    padding-top: .1rem;
    font-size: .2rem;
    color: #5599dd;
  }
  &__content {
    border: .01rem solid #5599dd;
    border-collapse: collapse;
    width: 90%;
    margin: .2rem auto;
    border-radius: .04rem;
    &__item{
      text-align: center;
      padding: .1rem;
      &>td{
        border: .01rem solid #5599dd;
        padding: .1rem 0;
      }
    }
  }
  &__cue{
    text-align: center;
    color: #e64530;
  }
}
</style>

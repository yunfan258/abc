<template>
  <div class="left">
    <div class="container">
    <router-link to="/school">
      <div class="left__title" title="点击查看详细信息">学校排名</div>
    </router-link>
    <table class="left__schools">
      <tr class="left__schools__item">
        <th>排名</th>
        <th>学校名称</th>
        <th>评级</th>
      </tr>
      <tr
        class="left__schools__item"
        v-for="(item,index) in schoolList" :key="item"
      >
        <td class="left__item__order">{{index+1}}</td>
        <td class="left__item__name">{{item?.name}}</td>
        <td class="left__item__province">{{item.grade}}</td>
      </tr>
    </table>
    </div>
    <router-link to="/school">
      <div class="toSchool">
        <span class="iconfont toSchool__icon">&#xe627;</span>
        <span class="toSchool__details">点击查看详细信息</span>
        <span class="iconfont toSchool__icon">&#xe627;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'

const useIndexEffect = () => {
  const data = reactive({ itemList: [], schoolList: [] })
  const getIndexSchools = async () => {
    const result = await post('/Index/schools',
      {})
    // console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      data.schoolList = result?.data?.data
    }
  }
  getIndexSchools()
  const { itemList, schoolList } = toRefs(data)
  return { itemList, schoolList }
}
export default {
  name: 'HomeLeft',
  components: { },
  setup () {
    const { itemList, schoolList } = useIndexEffect()
    return { itemList, schoolList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.left{
  width: 30%;
  @include boxShadow;
  padding: .1rem;
  overflow: hidden;
  .container{
    max-height: 10rem;
    overflow: hidden;

  }
  &__title{
    text-align: center;
    padding: .1rem;
    border-bottom: .01rem solid $mostColor;
    font-size: .2rem;
    color: $mostColor;
    &:hover{
      color: #5599dd;
    }
  }
  &__schools{
    width: 95%;
    margin: .1rem;
    border-collapse: collapse;
    border: .01rem solid $mostColor;
    overflow: hidden;
    &__item{
      &>th,&>td{
        text-align: center;
        border: .01rem solid $mostColor;
        padding: .1rem 0;
      }
    }
  }
  .toSchool{
    padding: .1rem 0;
    text-align: center;
    background-image: linear-gradient(0deg, #ccc 0%, #fff);
    background-repeat: no-repeat;
    &__details{
      display: inline-block;
      margin: 0 .1rem;
    }
    &__icon{
      font-size: .1rem;
      color: rgb(182, 182, 182);
    }
  }
  .toSchool:hover .toSchool__details{
    color: #5599dd;
  }
}
</style>

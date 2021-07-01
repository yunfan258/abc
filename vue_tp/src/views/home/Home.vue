<template>
  <el-carousel :interval="4000" class="el-carousel" type="card" height="3rem">
    <el-carousel-item v-for="item in 3" :key="item">
      <img :src="require(`../../assets/banner${item}.png`)" alt="">
    </el-carousel-item>
  </el-carousel>
  <div class="home">
    <HomeLeft />
    <div class="center">
      <Tags :itemList="[itemList]" :labelList="['经验贴']"/>
        <ul class="lf-pagination">
          <li class="lf-pagination__item page-prev iconfont"
            @click="()=>{
              changePage(currentPage-1);
              getIndexBlogs(currentPage-1)
            }"
          >&#xe677;</li>
          <li class="lf-pagination__item"
            v-for="i in Math.ceil(total/pageSize)"
            :key="i"
            :class="{ 'lf-pagination__item-active': i==currentPage }"
            @click="()=>{
              changePage(i);
              getIndexBlogs(i-1)
            }"
          >{{i}}</li>
          <li class="lf-pagination__item page-next iconfont"
            @click="()=>{
              changePage(currentPage+1);
              getIndexBlogs(currentPage-1)
            }">&#xe622;</li>
        </ul>
    </div>
  </div>
  <el-backtop></el-backtop>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import { post } from '../../utils/request'
import Tags from '../../components/Tags.vue'
import HomeLeft from './HomeLeft.vue'
const useHomeEffect = () => {
  const data = reactive({ itemList: [] })
  const getIndexBlogs = async (page) => {
    const result = await post('/Index/blogs',
      { page })
    // console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      data.itemList = result?.data?.data
    }
  }
  // getIndexBlogs(page)
  const { itemList } = toRefs(data)
  return { itemList, getIndexBlogs }
}
const usePaginationEffect = () => {
  const currentPage = ref(1)
  const pageSize = ref(10)
  const total = ref(0)
  const changePage = (page) => {
    const pageNum = ref(Math.ceil(total.value / pageSize.value))
    if (page <= pageNum.value && page > 0) {
      currentPage.value = page
    }
  }
  const getBlogsNum = async () => {
    const result = await post('/Index/blogsNum',
      { })
    // console.log(result?.data)
    if (result?.data?.erron === '0') {
      total.value = result?.data?.data
    }
  }
  getBlogsNum()
  return { currentPage, pageSize, total, changePage }
}
export default {
  name: 'Home',
  components: { Tags, HomeLeft },
  setup () {
    const { itemList, getIndexBlogs } = useHomeEffect()
    getIndexBlogs(0)
    const { currentPage, pageSize, total, changePage } = usePaginationEffect()
    return { itemList, getIndexBlogs, currentPage, pageSize, total, changePage }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';

.el-carousel{
  text-align: center;
  width: 85%;
  margin: .2rem auto;
  img{
    height: 100%;
  }
}
.el-carousel__item{
  @include boxShadow;
  background-color: #ccc;
  opacity: .5;
}
.is-active{
  @include boxShadow;
  opacity: 1;
}
.home{
  display: flex;
  width: 90%;
  margin: .2rem auto;
  align-items: flex-start;
  .center{
    width: 68%;
    margin-left: 2%;
  }
}
.lf-pagination{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .1rem 0;
  &__item{
    padding: .04rem .1rem;
    margin: 0 .04rem;
    background-color: #f1f1f1;
    &:hover{
      color: #ff9999;
      cursor: pointer;
    }
    &-active{
      background-color: #ccc;
    }
  }
}
</style>

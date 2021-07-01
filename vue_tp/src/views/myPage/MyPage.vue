<template>
  <div class="myPage">
    <div class="main">
      <Tags
        :itemList="[itemList,itemList1,itemList2,itemList3]"
        :labelList="['经验贴','点赞贴','评论贴','收藏贴']"
      />
      <Upload @addPersonBlogs="addPersonBlogs" />
    </div>
    <MyPageAside />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Tags from '../../components/Tags.vue'
import MyPageAside from './MyPageAside.vue'
import Upload from './Upload.vue'
import { post } from '../../utils/request'
import { useCommonStoreEffect } from '../../effects/commonEffect'
import { ElMessage } from 'element-plus'
const usePersonEffect = () => {
  const data = reactive({ itemList: [] })
  const getPersonBlogs = async (username) => {
    const result = await post('/Person/blogs',
      { username: username })
    // console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      data.itemList = result?.data?.data
    }
  }
  const addPersonBlogs = async (username, title, content) => {
    const result = await post('/Person/addBlog',
      {
        username,
        title: title || '默认标题',
        content: content || '这个内容是空的，用户不知如何表达'
      })
    // console.log(username, title, content)
    ElMessage(result?.data?.msg)
    if (result?.data?.data && result?.data?.erron === '0') {
      getPersonBlogs(username)
    }
  }
  const { itemList } = toRefs(data)
  return { itemList, getPersonBlogs, addPersonBlogs }
}
const useBlogEffect = () => {
  const data = reactive({ itemList1: [], itemList2: [], itemList3: [] })
  const getAdmireBlogs = async (username) => {
    const result = await post('/Person/admireBlogs',
      { username })
    // console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      data.itemList1 = result?.data?.data
    }
  }
  const getDiscussBlogs = async (username) => {
    const result = await post('/Person/discussBlogs',
      { username })
    // console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      data.itemList2 = result?.data?.data
    }
  }
  const getCollectBlogs = async (username) => {
    const result = await post('/Person/collectBlogs',
      { username })
    // console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      data.itemList3 = result?.data?.data
    }
  }
  const { itemList1, itemList2, itemList3 } = toRefs(data)
  return { itemList1, itemList2, itemList3, getAdmireBlogs, getDiscussBlogs, getCollectBlogs }
}
export default {
  name: 'MyPage',
  components: { Tags, MyPageAside, Upload },
  setup () {
    const { username } = useCommonStoreEffect()
    const { itemList, getPersonBlogs, addPersonBlogs } = usePersonEffect()
    getPersonBlogs(username.value)
    const { itemList1, itemList2, itemList3, getAdmireBlogs, getDiscussBlogs, getCollectBlogs } = useBlogEffect()
    getAdmireBlogs(username.value)
    getDiscussBlogs(username.value)
    getCollectBlogs(username.value)
    return { username, itemList, itemList1, itemList2, itemList3, getPersonBlogs, addPersonBlogs }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.myPage{
  display: flex;
  width: 90%;
  margin: .2rem auto;
  .main{
    width: 73%;
    margin-right: 2%;
    .itemList1{
      .item{
        @include boxShadow;
        padding: .1rem;
        cursor: pointer;
        &__title,&__content,&__time{
          margin: .1rem 0;
        }
        &__title{
          color: $mostColor;
        }
        &__content{
          @include ellipsis;
        }
      }
      .item:hover{
        padding: .1rem;
        border: 0.01rem solid $mostColor;
      }
    }
  }
}

</style>

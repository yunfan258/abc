<template>
  <div class="articleInfo">
    <div class="articleInfo__title">文章详情</div>
    <div class="articleInfo__info">
      <span class="articleInfo__info__icon iconfont">#{{blogInfo.title}}#</span>
      <span class="articleInfo__info__name">{{blogInfo.username}}</span>
      <span class="articleInfo__info__time">{{blogInfo.time}}</span>
      <span class="articleInfo__info__other" v-if="username">
        <span @click="deleteBlog(articleId, username)">删除</span>
        <span @click="handleUpdate()" v-if="!isUpdate">编辑</span>
        <span v-else @click="handleUpdate()" >
          <span @click="updateBlog(articleId, username, textarea1)">确定</span>
          <span> 取消</span>
        </span>
      </span>
    </div>
    <div class="articleInfo__content" v-if="!isUpdate">
      {{blogInfo.content}}
    </div>
    <el-input class="articleInfo__content" v-else
      type="textarea"
      autosize
      placeholder="请输入内容"
      v-model="textarea1">
    </el-input>
    <div class="articleInfo__bottom">
      <span class="articleInfo__bottom__item"
        @click="admireBlog(articleId,username)"
      >
        点赞{{blogInfo.admire_ids}}
        <span class="iconfont">&#xe60c;</span>
      </span>
      <span class="articleInfo__bottom__item"
        @click="discussBlog(articleId,username)"
      >
        评论{{blogInfo.discuss_ids}}
        <span class="iconfont">&#xe726;</span>
      </span>
      <span class="articleInfo__bottom__item"
        @click="collectBlog(articleId,username)"
      >
        收藏{{blogInfo.collect_ids}}
        <span class="iconfont">&#xe639;</span>
      </span>
    </div>
  </div>
</template>

<script>
import { post } from '../../utils/request'
import { reactive, toRefs, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCommonStoreEffect } from '../../effects/commonEffect'
import { ElMessage } from 'element-plus'
const useBlogEffect = () => {
  const router = useRouter()
  const data = reactive({ infoObj: {}, blogInfo: {} })
  const getBlogInfo = async (articleId) => {
    const result = await post('/Article/blogInfo',
      { id: articleId })
    // console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      data.blogInfo = result?.data?.data[0]
    }
  }
  const deleteBlog = async (articleId, username) => {
    const result = await post('/Article/deleteBlog',
      { id: articleId, username })
    ElMessage(result?.data?.msg)
    if (result?.data?.erron === '0') {
      router.push({ name: 'Home' })
    }
  }

  const updateBlog = async (articleId, username, content = '空') => {
    const result = await post('/Article/updateBlog',
      { id: articleId, username, content })
    ElMessage(result?.data?.msg)
    if (result?.data?.erron === '0') {
      getBlogInfo(articleId)
    }
  }
  const admireBlog = async (articleId, username) => {
    if (!username) {
      ElMessage('抱歉，请先登录')
      router.push({ name: 'Login' })
      return null
    }
    const result = await post('/Article/admireBlog',
      { id: articleId, username })
    ElMessage(result?.data?.msg)
    if (result?.data?.data && result?.data?.erron === '0') {
      getBlogInfo(articleId)
    }
  }
  const discussBlog = async (articleId, username) => {
    if (!username) {
      ElMessage('抱歉，请先登录')
      router.push({ name: 'Login' })
      return null
    }
    const result = await post('/Article/discussBlog',
      { id: articleId, username })
    ElMessage(result?.data?.msg)
    if (result?.data?.data && result?.data?.erron === '0') {
      getBlogInfo(articleId)
    }
  }
  const collectBlog = async (articleId, username) => {
    if (!username) {
      ElMessage('抱歉，请先登录')
      router.push({ name: 'Login' })
      return null
    }
    const result = await post('/Article/collectBlog',
      { id: articleId, username })
    ElMessage(result?.data?.msg)
    if (result?.data?.data && result?.data?.erron === '0') {
      getBlogInfo(articleId)
    }
  }
  const { blogInfo } = toRefs(data)
  return { blogInfo, getBlogInfo, deleteBlog, updateBlog, admireBlog, discussBlog, collectBlog }
}
const useUpdateEffect = () => {
  const isUpdate = ref(false)
  const textarea1 = ref('')
  const handleUpdate = () => {
    isUpdate.value = !isUpdate.value
  }
  return { textarea1, isUpdate, handleUpdate }
}

// const useChangOptionEffect = () => {
//   const admireBlog = async (articleId, username) => {
//     const result = await post('/Article/admireBlog',
//       { id: articleId, username })
//     console.log(result?.data)
//     if (result?.data?.data && result?.data?.erron === '0') {
//       getBlogInfo(articleId)
//     }
//   }
//   const discussBlog = async (articleId, username) => {
//     const result = await post('/Article/discussBlog',
//       { id: articleId, username })
//     console.log(result?.data)
//     if (result?.data?.data && result?.data?.erron === '0') {
//       getBlogInfo(articleId)
//     }
//   }
//   const collectBlog = async (articleId, username) => {
//     const result = await post('/Article/collectBlog',
//       { id: articleId, username })
//     console.log(result?.data)
//     if (result?.data?.data && result?.data?.erron === '0') {
//       getBlogInfo(articleId)
//     }
//   }
//   return { admireBlog, discussBlog, collectBlog }
// }
export default {
  name: 'ArticleInfo',
  components: { },
  setup () {
    const route = useRoute()
    const articleId = route.params?.id
    const { username } = useCommonStoreEffect()
    const { blogInfo, getBlogInfo, deleteBlog, updateBlog, admireBlog, discussBlog, collectBlog } = useBlogEffect()
    getBlogInfo(articleId)
    const { isUpdate, textarea1, handleUpdate } = useUpdateEffect()
    return { username, articleId, blogInfo, deleteBlog, updateBlog, admireBlog, discussBlog, collectBlog, isUpdate, textarea1, handleUpdate }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.articleInfo{
  @include boxShadow;

  &__title{
    @include titleStyle;
  }
  &__info{
    background-color: #eee;
    color: #666;
    padding: .1rem;
    display: flex;
    &__icon,&__name,&__time{
      margin-right: .1rem;
    }
    &__other{
      flex:1;
      display: flex;
      flex-flow: row-reverse;
      &>span{
        margin-left: .1rem;
        cursor: pointer;
        &>span:hover{
          color: #5599dd;
        }
      }
       &>span:first-of-type{
        color: #dd3333;
      }
    }
  }
  &__content{
    padding: .1rem;
    border: .01rem solid #eee;
    min-height: 2.2rem;
    white-space: pre-wrap;

  }
  &__bottom{
    padding: .1rem;
    background-color: #eee;
    &__item{
      cursor: pointer;
      display: inline-block;
      width: .8rem;
      color: #666;
      .iconfont{
        margin-left: .04rem;
      }
    }
  }
}
</style>

<template>
  <div class="articleInfo">
    <div class="articleInfo__title">文章详情</div>
    <div class="articleInfo__info">
      <span class="articleInfo__info__icon iconfont">图标</span>
      <span class="articleInfo__info__name">{{blogInfo.username}}</span>
      <span class="articleInfo__info__time">{{blogInfo.time}}</span>

    </div>
    <div class="articleInfo__content">
      {{blogInfo.content}}
    </div>
    <div class="articleInfo__bottom">
      <span class="articleInfo__bottom__item">点赞{{blogInfo.admire_ids}}
        <span class="iconfont">&#xe60c;</span>
      </span>
      <span class="articleInfo__bottom__item">评论{{blogInfo.discuss_ids}}
        <span class="iconfont">&#xe726;</span>
      </span>
      <span class="articleInfo__bottom__item">收藏{{blogInfo.collect_ids}}
        <span class="iconfont">&#xe639;</span>
      </span>

    </div>
  </div>
</template>

<script>
import { post } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

const useBlogEffect = () => {
  const data = reactive({ infoObj: {}, blogInfo: {} })
  const getBlogInfo = async (articleId) => {
    const result = await post('/Article/blogInfo',
      { id: articleId })
    console.log(result?.data)

    if (result?.data?.data && result?.data?.erron === '0') {
      data.blogInfo = result?.data?.data[0]
    }
  }
  // const addComment = async (articleId) => {
  //   const result = await post('/Article/addComment',
  //     { article_id: articleId })
  //   console.log(result?.data)

  //   if (result?.data?.data && result?.data?.erron === '0') {
  //     data.infoObj = result?.data?.data[0]
  //   }
  // }
  const { blogInfo } = toRefs(data)
  return { blogInfo, getBlogInfo }
}
export default {
  name: 'ArticleInfo',
  components: { },
  setup () {
    const route = useRoute()
    const articleId = route.params.id
    const { blogInfo, getBlogInfo } = useBlogEffect()
    getBlogInfo(articleId)
    return { blogInfo }
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
    margin-top: .1rem;
    &__icon,&__name,&__time{
      margin-right: .1rem;
    }
  }
  &__content{
    padding: .1rem;
    border: .01rem solid #eee;
    min-height: 2.1rem;
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

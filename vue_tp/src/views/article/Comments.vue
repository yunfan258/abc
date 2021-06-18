<template>
  <div class="comments">
      <div class="upload">
      <div class="upload__input">
        <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="textarea1">
        </el-input>
      </div>
      <div class="upload__btn">
        <el-button type="info" plain
          @click="()=>{
            addComment(calculations.username,articleId);
          }"
        >发表评论</el-button>
      </div>
    </div>
    <div class="commentList">
      <div class="commentList__title">评论信息</div>
      <div class="commentList__item" v-for="item in commentList" :key="item">
        <div class="commentList__item__content">{{item.content}}</div>
        <div class="item__bottom">
            <span class="item__bottom__username">作者：{{item.username}}</span>
            <span class="item__bottom__time">发表时间：{{item.time}}</span>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import { post } from '../../utils/request'
import { ref, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useCommonStoreEffect } from '../../effects/commonEffect'
// import Upload from './common/Upload.vue'
// const commentList = [
//   { content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perferendis doloribus debitis pariatur adipisci nam, commodi, excepturi natus velit nulla inventore, voluptas similique alias mollitia ab optio omnis blanditiis animi?' },
//   { content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perferendis doloribus debitis pariatur adipisci nam, commodi, excepturi natus velit nulla inventore, voluptas similique alias mollitia ab optio omnis blanditiis animi?' },
//   { content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perferendis doloribus debitis pariatur adipisci nam, commodi, excepturi natus velit nulla inventore, voluptas similique alias mollitia ab optio omnis blanditiis animi?' },
//   { content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perferendis doloribus debitis pariatur adipisci nam, commodi, excepturi natus velit nulla inventore, voluptas similique alias mollitia ab optio omnis blanditiis animi?' }
// ]

const useCommentEffect = () => {
  const textarea1 = ref('')

  const data = reactive({ commentList: [], blogInfo: {} })
  const getComment = async (articleId) => {
    const result = await post('/Article/getComment',
      { article_id: articleId })
    console.log(result?.data)

    if (result?.data?.data && result?.data?.erron === '0') {
      data.commentList = result?.data?.data
    }
  }
  const addComment = async (username, articleId) => {
    const result = await post('/Article/addComment',
      { username, article_id: articleId, content: textarea1.value })
    console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      getComment(articleId)
    }
  }
  const { commentList } = toRefs(data)
  return { textarea1, commentList, getComment, addComment }
}
export default {
  name: 'Comments',
  components: { },
  setup () {
    const route = useRoute()
    const articleId = route.params.id
    const { calculations } = useCommonStoreEffect()
    const { textarea1, commentList, getComment, addComment } = useCommentEffect()
    getComment(articleId)
    // addComment(calculations.value.username, articleId)
    return { articleId, calculations, textarea1, commentList, getComment, addComment }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.comments{
  .upload{
    @include boxShadow;
    margin: .1rem auto;
    padding: .1rem;

    &__img{
      @include avatorStyle;
    }
    &__btn{
      text-align: right;
    }
  }
  .commentList{
    @include boxShadow;
    margin: .1rem auto;
    padding: .1rem;
    &__title{
      font-size: .2rem;
      padding: .1rem;
      border-bottom: .01rem solid $mostColor;
      text-align: center;
      color: $mostColor;
    }
    &__item{
      border-bottom: .01rem solid #999;
      padding: .1rem;
      color: #666;
      &__content{
        margin-bottom: .1rem;
        white-space: pre-wrap;
      }
      .item__bottom{
        display: flex;
        align-content: space-around;
        &__username,&__time{
          color: #999;
          font-size: .14rem;
          flex:1;
        }
      }
    }
    &__item:last-of-type{
      border: none;
    }
  }

}
</style>

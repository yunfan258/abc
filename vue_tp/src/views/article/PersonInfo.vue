<template>
  <div class="personInfo">
      <div class="personInfo__info">
        <div class="personInfo__info__title">博主信息</div>
        <div class="personInfo__info__detail">
          <img class="personInfo__detail__img" src="../../assets/logo.png" alt="">
          <span class="personInfo__detail__username">{{infoObj.username}}</span>
        </div>
        <div class="personInfo__info__email">
          <span>联系方式：</span>
          <span>{{infoObj?.contact}}</span>
        </div>
        <div class="personInfo__info__introduction">
          <span>个人简介：</span>
          <span>{{infoObj.introduction}}</span>
        </div>
      </div>
      <div class="personInfo__visits">
        <div class="personInfo__visits__title">访客信息</div>
        <div class="personInfo__visits__item">
        </div>
        <div class="personInfo__visits__item">
          <span>获得{{infoObj.admire_ids}}次点赞</span>
        </div>
        <div class="personInfo__visits__item">
          <span>获得{{infoObj.discuss_ids}}次评论</span>
        </div>
        <div class="personInfo__visits__item">
          <span>获得{{infoObj.collect_ids}}次收藏</span>
        </div>
      </div>
      <div class="personInfo__interest">
        <div class="personInfo__interest__title">兴趣爱好</div>
        <div class="personInfo__interest__item">
        </div>
        <div class="personInfo__interest__item">
          <span>英语：{{infoObj.english}}</span>
        </div>
        <div class="personInfo__interest__item">
          <span>数学：{{infoObj.math}}</span>
        </div>
        <div class="personInfo__interest__item">
          <span>政治：{{infoObj.politics}}</span>
        </div>
        <div class="personInfo__interest__item">
          <span>专业：{{infoObj.major}}</span>
        </div>
        <div class="personInfo__interest__item">
          <span>其他：{{infoObj.interest}}</span>
        </div>
      </div>
  </div>
</template>

<script>
import { post } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

const usePersonEffect = () => {
  const data = reactive({ infoObj: {}, blogInfo: {} })
  const getPersonInfo = async (articleId) => {
    const result = await post('/Article/personInfo',
      { id: articleId })
    // console.log(result?.data)

    if (result?.data?.data && result?.data?.erron === '0') {
      data.infoObj = result?.data?.data[0]
    }
  }
  const getBlogInfo = async (articleId) => {
    const result = await post('/Article/blogInfo',
      { id: articleId })
    // console.log(result?.data)

    if (result?.data?.data && result?.data?.erron === '0') {
      data.blogInfo = result?.data?.data[0]
    }
  }
  const { infoObj, blogInfo } = toRefs(data)
  return { infoObj, blogInfo, getPersonInfo, getBlogInfo }
}
export default {
  name: 'PersonInfo',
  components: { },
  setup () {
    const route = useRoute()
    const articleId = route?.params?.id
    const { infoObj, blogInfo, getPersonInfo, getBlogInfo } = usePersonEffect()
    getPersonInfo(articleId)
    getBlogInfo(articleId)
    return { infoObj, blogInfo }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.personInfo{
  padding: .1rem;
  width: 30%;
  &__info{
    padding: .1rem;
    margin-bottom: .1rem;
    @include boxShadow;
    &__title{
      padding: .1rem 0;
      border-bottom: .01rem solid $mostColor;
    }
    .item{
      margin: .1rem 0;
      font-size: .14rem;
    }
    &__detail{
      @extend .item;
      .personInfo__detail__img{
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
      }
    }
    &__email{
      @extend .item;

    }
    &__introduction{
      @extend .item;

    }
  }
  &__visits,&__interest{
    padding: .1rem;
    margin-bottom: .1rem;
    @include boxShadow;
    &__title{
      padding: .1rem 0;
      border-bottom: .01rem solid $mostColor;
    }
    &__item{
      margin: .1rem 0;
      font-size: .14rem;
    }
  }
}
</style>

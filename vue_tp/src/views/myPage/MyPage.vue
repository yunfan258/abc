<template>
  <div class="myPage">
    <div class="aside">
      <div class="aside__info">
        <div class="aside__info__title">个人信息</div>
        <div class="aside__info__detail">
          <img class="aside__detail__img" src="../../assets/logo.png" alt="">
          <span class="aside__detail__username">{{infoObj.username}}</span>
        </div>
        <div class="aside__info__email">
          <span>联系方式：</span>
          <span>{{infoObj?.contact}}</span>
        </div>
        <div class="aside__info__introduction">
          <span>个人简介：</span>
          <span>{{infoObj.introduction}}</span>
        </div>
      </div>
      <div class="aside__visits">
        <div class="aside__visits__title">访客信息</div>
        <div class="aside__visits__item">
        </div>
        <div class="aside__visits__item">
          <span>获得{{infoObj.admire_ids}}次点赞</span>
        </div>
        <div class="aside__visits__item">
          <span>获得{{infoObj.discuss_ids}}次评论</span>
        </div>
        <div class="aside__visits__item">
          <span>获得{{infoObj.collect_ids}}次收藏</span>
        </div>
      </div>
      <div class="aside__interest">
        <div class="aside__interest__title">兴趣爱好</div>
        <div class="aside__interest__item">
        </div>
        <div class="aside__interest__item">
          <span>英语:{{infoObj.interest}}</span>
        </div>
        <div class="aside__interest__item">
          <span>数学</span>
        </div>
        <div class="aside__interest__item">
          <span>政治</span>
        </div>
        <div class="aside__interest__item">
          <span>专业课408</span>
        </div>
      </div>
    </div>
    <div class="main">
      <Tags :itemList="itemList" name1="点赞贴" name2="评论贴" name3="收藏贴"/>
      <div class="upload">
        <div class="upload__input">
          <span>标题：</span>
          <input class="upload__input__title"
            v-model="title1" placeholder="请输入标题"
          />
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
              addPersonBlogs(calculations.username);
            }"
          >发表博客</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import Tags from '../../components/Tags.vue'
import { post } from '../../utils/request'
// import { useStore } from 'vuex'
import { useCommonStoreEffect } from '../../effects/commonEffect'

const usePersonEffect = () => {
  const textarea1 = ref('')
  const title1 = ref('')
  const data = reactive({ infoObj: [], itemList: [] })
  const getPersonInfo = async (username) => {
    const result = await post('/Person/info',
      { username: username })
    console.log(result?.data)

    if (result?.data?.data && result?.data?.erron === '0') {
      data.infoObj = result?.data?.data[0]
    }
  }
  const getPersonBlogs = async (username) => {
    const result = await post('/Person/blogs',
      { username: username })
    console.log(result?.data)

    if (result?.data?.data && result?.data?.erron === '0') {
      data.itemList = result?.data?.data
    }
  }
  const addPersonBlogs = async (username) => {
    const result = await post('/Person/addBlog',
      { username: username, title: title1.value, content: textarea1.value })
    console.log(result?.data)
    if (result?.data?.data && result?.data?.erron === '0') {
      getPersonBlogs(username)
    }
  }
  const { infoObj, itemList } = toRefs(data)
  return { infoObj, itemList, title1, textarea1, getPersonInfo, getPersonBlogs, addPersonBlogs }
}
const activeName = ref('first')
export default {
  name: 'MyPage',
  components: { Tags },
  setup () {
    const { calculations } = useCommonStoreEffect()
    const { infoObj, itemList, title1, textarea1, getPersonInfo, getPersonBlogs, addPersonBlogs } = usePersonEffect()
    getPersonInfo(calculations.value.username)
    getPersonBlogs(calculations.value.username)
    return { activeName, calculations, infoObj, title1, itemList, textarea1, getPersonInfo, getPersonBlogs, addPersonBlogs }
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
  .aside{
    width: 25%;
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
        .aside__detail__img{
          @include avatorStyle;
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
  .main{
    @include boxShadow;
    width: 74%;
    margin-left: 1%;
    padding: .1rem .2rem;
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
.upload{
  @include boxShadow;
  margin: .1rem auto;
  padding: .1rem;
  &__input{
    &__title{
      outline: none;
      border: none;
      display: inline-block;
      padding: .1rem;
      margin: .1rem;
      &::placeholder{
        color: #ccc;
      }
    }
  }
  &__img{
    @include avatorStyle;
  }
  &__btn{
    text-align: right;
  }
}
</style>

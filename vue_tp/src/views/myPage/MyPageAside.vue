<template>
  <div class="aside">
      <div class="aside__info">
        <div class="aside__info__title">
          个人信息
          <span v-if="!isUpdate" @click="handleUpdate">编辑</span>
          <span v-else @click="()=>{handleUpdate()}">
            <span @click="updatePersonInfo(infoObj.username, input1, input2)">确定</span>
            <span> 取消</span>
          </span>
        </div>
        <div class="aside__info__detail">
          <img class="aside__detail__img" src="../../assets/logo.png" alt="">
          <span class="aside__detail__username">{{infoObj.username}}</span>
        </div>
        <div class="aside__info__email">
          <span>联系方式：</span>
          <span v-if="!isUpdate">{{infoObj?.contact||'无'}}</span>
          <input type="text" v-else v-model="input1" />
        </div>
        <div class="aside__info__introduction">
          <span>个人简介：</span>
          <span v-if="!isUpdate">{{infoObj.introduction||'无'}}</span>
          <input type="text" v-else v-model="input2" />
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
        <div class="aside__interest__title">兴趣爱好
          <span v-if="!isUpdate2" @click="handleUpdate2">编辑</span>
          <span v-else @click="()=>{handleUpdate2()}">
            <span @click="
              updatePersonInfo2(infoObj.username,english,math,politics,major,interest)
            ">确定</span>
            <span> 取消</span>
          </span>
        </div>
        <div class="aside__interest__item">
        </div>
        <div class="aside__interest__item">
          <span>英语：</span>
          <span v-if="!isUpdate2">{{infoObj?.english||'英语小学霸'}}</span>
          <input type="text" v-else v-model="english" />
        </div>
        <div class="aside__interest__item">
          <span>数学：</span>
          <span v-if="!isUpdate2">{{infoObj?.math||'数学小天才'}}</span>
          <input type="text" v-else v-model="math" />
        </div>
        <div class="aside__interest__item">
          <span>政治：</span>
          <span v-if="!isUpdate2">{{infoObj?.politics||'政治小王子'}}</span>
          <input type="text" v-else v-model="politics" />
        </div>
        <div class="aside__interest__item">
          <span>专业：</span>
          <span v-if="!isUpdate2">{{infoObj?.major||'408爱好者'}}</span>
          <input type="text" v-else v-model="major" />
        </div>
        <div class="aside__interest__item">
          <span>其他：</span>
          <span v-if="!isUpdate2">{{infoObj?.interest||'无'}}</span>
          <input type="text" v-else v-model="interest" />
        </div>
      </div>
    </div>
</template>

<script>
import { reactive, toRefs, ref } from '@vue/reactivity'
import { post } from '../../utils/request'
import { useCommonStoreEffect } from '../../effects/commonEffect'
import { ElMessage } from 'element-plus'
const useAsideEffect = () => {
  const data = reactive({ infoObj: {} })
  const getPersonInfo = async (username) => {
    const result = await post('/Person/info',
      { username: username })
    // console.log(result?.data)

    if (result?.data?.data && result?.data?.erron === '0') {
      data.infoObj = result?.data?.data[0]
    }
  }
  const updatePersonInfo = async (username, contact, introduction) => {
    const result = await post('/Person/updatePersonInfo',
      { username, contact, introduction })
    ElMessage(result?.data?.msg)

    if (result?.data?.data && result?.data?.erron === '0') {
      // data.infoObj = result?.data?.data[0]
      getPersonInfo(username)
    }
  }
  const updatePersonInfo2 = async (username, english, math, politics, major, interest) => {
    const result = await post('/Person/updatePersonInfo2',
      { username, english, math, politics, major, interest })
    ElMessage(result?.data?.msg)

    if (result?.data?.data && result?.data?.erron === '0') {
      getPersonInfo(username)
    }
  }
  const { infoObj } = toRefs(data)
  return { infoObj, getPersonInfo, updatePersonInfo, updatePersonInfo2 }
}
const useUpdateEffect = () => {
  const isUpdate = ref(false)
  const input1 = ref('')
  const input2 = ref('')
  const handleUpdate = () => {
    isUpdate.value = !isUpdate.value
  }
  const isUpdate2 = ref(false)
  const english = ref('')
  const math = ref('')
  const politics = ref('')
  const major = ref('')
  const interest = ref('')
  const handleUpdate2 = () => {
    isUpdate2.value = !isUpdate2.value
  }
  return { input1, input2, isUpdate, handleUpdate, isUpdate2, english, math, politics, major, interest, handleUpdate2 }
}
export default {
  name: 'MyPageAside',
  components: { },
  setup () {
    const { username } = useCommonStoreEffect()
    const { infoObj, getPersonInfo, updatePersonInfo, updatePersonInfo2 } = useAsideEffect()
    getPersonInfo(username.value)
    const { input1, input2, isUpdate, handleUpdate, isUpdate2, english, math, politics, major, interest, handleUpdate2 } = useUpdateEffect()
    return { infoObj, input1, input2, isUpdate, handleUpdate, isUpdate2, interest, english, math, politics, major, handleUpdate2, updatePersonInfo, updatePersonInfo2 }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.aside{
  width: 25%;
  &__info{
    padding: .1rem;
    margin-bottom: .1rem;
    @include boxShadow;
    &__title{
      padding: .1rem 0;
      border-bottom: .01rem solid $mostColor;
      display: flex;
      &>span{
        flex:1;
        text-align: right;
        color: #5599dd;
        cursor: pointer;
      }
      &>span:hover{
        color: $mostColor;
      }
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
    &__email,&__introduction{
      @extend .item;
      &>input{
        border: .01rem solid #5599dd;
        padding: .02rem;
        outline: none;
      }
    }
  }
  &__visits,&__interest{
    padding: .1rem;
    margin-bottom: .1rem;
    @include boxShadow;
    &__title{
      padding: .1rem 0;
      border-bottom: .01rem solid $mostColor;
      display: flex;
      &>span{
        flex:1;
        text-align: right;
        color: #5599dd;
        cursor: pointer;
      }
      &>span:hover{
        color: $mostColor;
      }
    }
    &__item{
      margin: .1rem 0;
      font-size: .14rem;
      &>input{
        border: .01rem solid #5599dd;
        outline: none;
      }
    }
  }
}

</style>

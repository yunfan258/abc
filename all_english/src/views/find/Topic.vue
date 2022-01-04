<template>
  <div class="submit">
    <span class="iconfont submit__icon">&#xe602;</span>
    <input type="text"
    class="submit__input"
    placeholder="请输入你想发布的话题"
    v-model="inputVal"
    @keyup.enter="addItem(myList, '方方',inputVal)"
    >
    <span class="submit__btn" @click="addItem(myList, '方方',inputVal)">发布</span>
  </div>
  <Toast :message="toastMessage" v-show="isShowToast"/>
  <div class="topic">
    <div class="topic__item" v-for="(item, index) in myList" :key="index">
      <div class="topic__item__user">
        <span class="topic__item__user-icon iconfont">&#xe634;</span>
        <span class="topic__item__user-name">{{item.userName}}</span>
        <span class="topic__item__user-delete" @click="()=>{handleShowMask(true);showIt(index);}">删除</span>
      </div>
      <div class="topic__item__text">{{item.text}}</div>
    </div>
  </div>
  <Mask :showMask="showMask"  @click="()=>{handleShowMask(false);confirm(false)}"/>
  <div class="message" v-show="isShow">
    <div class="message__content">是否确定要删除？</div>
    <div class="message__btns">
      <span @click="confirm(myList, true)">确定</span>
      <span @click="confirm(myList, false)">取消</span>
    </div>
  </div>
  <Gap />
  <div class="topic">

    <div class="topic__title">
      <span class="topic__title__icon iconfont">&#xe719;</span>
      <span class="topic__title__text"> 精选话题 </span>
    </div>
    <div class="topic__item" v-for="item in topicList" :key="item">
      <div class="topic__item__title">{{item.title}}</div>
      <div class="topic__item__user">
        <span class="topic__item__user-icon iconfont" v-html="item.userIcon"></span>
        <span class="topic__item__user-name">{{item.userName}}</span>
      </div>
      <div class="topic__item__text">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
import Gap from '../../components/Gap.vue'
import Toast, { useToastEffect } from '../../components/Toast.vue'
import { ref, reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import Mask, { useShowMaskEffect } from '../../components/Mask.vue'
import { useMyListEffect } from '../../effects/commonEffect.js'
import { useStore } from 'vuex'

const useConfirmEffect = (showMask, delItem) => {
  const isShow = ref(false)
  const index = ref()

  const showIt = (val) => {
    isShow.value = true
    index.value = val
  }
  const confirm = (myList, bool) => {
    if (bool === true) delItem(myList, index.value)
    isShow.value = false
    showMask.value = false
  }
  return { confirm, isShow, showIt }
}
const useSubmitEffect = (showToast) => {
  const store = useStore()
  const inputVal = ref('')
  const addItem = (myList, nameVal, textVal) => {
    if (textVal !== '') {
      myList.unshift({ userName: nameVal, text: textVal })
      store.commit('changeMyList', { myList })
      showToast('发表成功')
    } else showToast('内容不能为空，发表失败！')
  }
  const delItem = (myList, index) => {
    myList.splice(index, 1)
    store.commit('changeMyList', { myList })
    showToast('删除成功')
  }

  return { inputVal, addItem, delItem }
}
const useGetTopicEffect = () => {
  const list = reactive({ topicList: [] })
  const getTopic = async () => {
    const result = await get('/find/topic')
    if (result?.data) {
      list.topicList = result.data?.topicList
    }
  }
  const { topicList } = toRefs(list)
  return { topicList, getTopic }
}

export default {
  name: 'Topic',
  components: { Toast, Gap, Mask },
  setup () {
    const { toastMessage, isShowToast, showToast } = useToastEffect()
    const { showMask, handleShowMask } = useShowMaskEffect()
    const { inputVal, addItem, delItem } = useSubmitEffect(showToast)
    const { confirm, isShow, showIt } = useConfirmEffect(showMask, delItem)
    const { topicList, getTopic } = useGetTopicEffect()
    getTopic()
    const { myList } = useMyListEffect()

    return { inputVal, myList, addItem, delItem, isShow, showIt, confirm, topicList, showMask, handleShowMask, toastMessage, isShowToast, showToast }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';

.message {
  z-index: 11;
  position: fixed;
  width: 2rem;
  height: 1rem;
  background-color: #f9f9f9;
  padding: .1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  &__content{
    padding: .1rem 0;
    font-size: .2rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
  }
  &__btns{
    display: flex;
    & span{
      flex: 1;
      font-size: .16rem;
      height: .2rem;
      line-height: .2rem;
      padding: .02rem 0;
      margin: 0 .04rem;
      text-align: center;
      background-color: rgb(238, 205, 162);

    }
  }
}
.submit{
  position: sticky;
  top:0;
  display: flex;
  align-items: center;
  // line-height: .4rem;
  margin: 0 -.18rem;
  padding: .1rem .18rem;
  background-color: #fff;
  &__icon{
    flex: 1;
    text-align: center;
    color: rgb(243, 152, 4);
    font-size: .2rem;
    height: .3rem;
    line-height: .3rem;
    background-color: $content-bgColor;
  }
  &__input{
    flex: 7;
    outline: none;
    border: none;
    background-color: $content-bgColor;
    height: .3rem;
    line-height: .3rem;
    border-right: .04rem solid #fff;
    border-radius: .04rem;
    ::placeholder{
      color: #fff;
    }
  }
  &__btn{
    flex: 1;
    text-align: center;
    color: rgb(0, 119, 255);
    height: .3rem;
    line-height: .3rem;
    background-color: $content-bgColor;
  }
}

.topic{
  margin: .1rem auto .1rem auto;

  &__title{
    font-size: .2rem;
    margin-bottom: .1rem;
  }
  &__item{
    font-size: .16rem;
    padding: .1rem 0 .2rem 0;
    border-bottom: 1px solid #ccc;
    &__user{
      margin: .1rem 0;
      &-icon{
        margin-right: .1rem;
        color: rgb(55, 109, 226);
      }
      &-delete{
        float: right;
        color: rgba(252, 4, 4, 0.521);
      }
    }
    &__title{
      color: $mostColor;
    }
  }
}
</style>

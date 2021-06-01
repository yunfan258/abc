<template>
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
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
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
  setup () {
    const { topicList, getTopic } = useGetTopicEffect()
    getTopic()
    return { topicList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';

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
    }
    &__title{
      color: $mostColor;
    }
  }
}
</style>

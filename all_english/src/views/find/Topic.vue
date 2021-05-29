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
const topicList = [
  { title: '#英语问题互助社#', userIcon: '&#xe62d;', userName: ' 小姐姐', text: '求助一下，想让各位看看我这样写有没有什么错误。' },
  { title: '#每日手写挑战#', userIcon: '&#xe634;', userName: ' 小哥哥', text: '这个手写体好好看' },
  { title: '#考研秘籍#', userIcon: '&#xe635;', userName: ' hxj', text: '坚持背单词7天了' },
  { title: '#四六级秘籍#', userIcon: '&#xe605;', userName: ' luofan', text: '上帝保佑四六级过过过' }
]
export default {
  name: 'Topic',
  setup () {
    return { topicList }
  }
}
</script>

<style lang="scss" scoped>
.topic{
  margin: .1rem auto .1rem auto;
  &__title{
    font-size: .2rem;
    margin-bottom: .1rem;
    &__text{
    }
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
      color: #99ddff;
    }
  }
}
</style>

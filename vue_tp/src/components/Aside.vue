<template>
  <div class="aside">
    <div class="aside__exams">
      <div class="aside__exams__title">{{asideTitle}}</div>
      <table class="aside__exams__table">
        <tr class="aside__exams__item">
          <th>年份</th>
          <th>英语一</th>
          <th>英语二</th>
        </tr>
        <tr class="aside__exams__item" v-for="item in asideList" :key="item">
          <td>{{item.title}}</td>
          <td>{{item.content1}}</td>
          <td>{{item.content2}}</td>
        </tr>
      </table>
    </div>
    <div class="aside__platform">
        <div class="aside__platform__title">英语学习网站</div>
        <div class="aside__platform__item" v-for="item in platformList" :key="item">
          <div class="aside__item__title">{{item.title}}</div>
          <div class="aside__item__content">{{item.content}}</div>
        </div>
      </div>
  </div>
</template>

<script>
const asideTitle = '历年真题'
const asideList = [
  { title: '2020年', content1: '真题试卷', content2: '真题试卷' },
  { title: '2020年', content1: '真题试卷', content2: '真题试卷' },
  { title: '2020年', content1: '真题试卷', content2: '真题试卷' },
  { title: '2020年', content1: '真题试卷', content2: '真题试卷' },
  { title: '2020年', content1: '真题试卷', content2: '真题试卷' }

]
const platformList = [
  { title: '中国教育在线', content: 'www.baidu.com' },
  { title: '中国研究生信息招生网', content: 'www.baidu.com' },
  { title: '中国教育在线', content: 'www.baidu.com' },
  { title: '中国教育在线', content: 'www.baidu.com' },
  { title: '中国教育在线', content: 'www.baidu.com' },
  { title: '中国教育在线', content: 'www.baidu.com' }
]
export default {
  name: 'Aside',
  components: {},
  setup () {
    return { asideTitle, asideList, platformList }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/mixins.scss';
@import '../style/variables.scss';
.aside{
  width: 30%;
  padding: .1rem;
  margin-bottom: .1rem;
  &__exams{
    @include boxShadow;
    margin-bottom: .1rem;
    padding: .1rem;
    &__table{
      display: block;
      margin: .1rem;
      border: .01rem solid $mostColor;
      border-collapse: collapse;
      &>tr{
        display: flex;
        text-align: center;
        &>th,&>td{
          flex:1;
          padding: .1rem 0;
          border: .01rem solid $mostColor;
        }
      }
    }
    &__title{
      text-align: center;
      padding: .1rem;
      border-bottom: .01rem solid $mostColor;
      font-size: .2rem;
      color: $mostColor;
    }
  }
  &__platform{
    @include boxShadow;
    padding: .1rem;
    margin-bottom: .1rem;
    &__title{
      text-align: center;
      padding: .1rem;
      border-bottom: .01rem solid $mostColor;
      font-size: .2rem;
      color: $mostColor;
    }
    &__item{
      .aside__item__title{
        padding: .1rem 0;
      }
      .aside__item__content{
        padding: 0 .1rem;
      }
    }
  }
}
</style>

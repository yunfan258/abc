<template>
  <div class="english">
    <Main
      :subject="subject"
      :itemList="itemList"
      :list1="list1" :list2="list2" :list3="list3"
    />
    <Aside :platformList="platformList" />
  </div>
</template>

<script>
import Main from '../../components/Main.vue'
import Aside from '../../components/Aside.vue'
const subject = '英语'
const itemList = [
  {
    text: '22考研|寒假各科备考规划来啦！',
    url: 'http://www.kaoyan.com/yingyu/jingyan/5fec4f3f63dad.html'
  },
  {
    text: '22考研|点击查看考研英语各题型复习技巧！',
    url: 'http://www.kaoyan.com/yingyu/jingyan/5fec4d6360a0e.html'
  },
  {
    text: '今年考研英语好难！22届这样做才不怕',
    url: 'http://www.kaoyan.com/yingyu/jingyan/5fec48b183717.html'
  },
  {
    text: '最全整理，你必须了解得英语一、二的区别',
    url: 'http://www.kaoyan.com/yingyu/jingyan/5fe86a6b4582d.html'
  },
  {
    text: '有方法！英语阅读如何快速找答案？',
    url: 'http://www.kaoyan.com/yingyu/jingyan/5fd9d4c106942.html'
  },
  {
    text: '21考研| 最后二十天，英语新题型也要准备起来！',
    url: 'http://www.kaoyan.com/yingyu/jingyan/5fc9e667e490a.html'
  },
  {
    text: '21考研英语|最后二十几天，完型还能冲一冲！',
    url: 'http://www.kaoyan.com/yingyu/jingyan/5fc89fd1204c2.html'
  },
  {
    text: '21考研|英语阅读越做错的越多，怎么办？',
    url: 'http://www.kaoyan.com/yingyu/jingyan/5fbf822b19ac3.html'
  }
]
const list1 = [
  {
    text: '四六级对于考研、找工作有何影响？谁说不过四级就上不了岸？',
    url: 'https://www.kaoyan.com/yingyu/jingyan/60c0706c0b7af.html'
  },
  {
    text: '建议收藏~ 千字干货，教你英语阅读怎么做！',
    url: 'https://www.kaoyan.com/yingyu/jingyan/60bdb73360719.html'
  },
  {
    text: '考研英语如何考到 80 分？ 我做到了，你也可以！',
    url: 'https://www.kaoyan.com/yingyu/jingyan/60b75fd8acb63.html'
  },
  {
    text: '考研英语怎样刷题才有效？这样才不浪费真题！',
    url: 'https://www.kaoyan.com/yingyu/jingyan/60b4bf0ecedd2.html'
  },
  {
    text: '还在每天花2h记单词？这几个方法教你事半功倍！',
    url: 'https://www.kaoyan.com/yingyu/jingyan/60b0b67bd7f6b.html'
  },
  {
    text: '英二70 英一就只能考50？二者差别这么大吗？',
    url: 'https://www.kaoyan.com/yingyu/jingyan/60af7318bd134.html'
  },
  {
    text: '四六级VS考研英语，能同时复习吗？',
    url: 'https://www.kaoyan.com/yingyu/jingyan/60a387cc1a083.html'
  },
  {
    text: '考研英语首轮复习之重：单词、语法怎么学更高效？',
    url: 'https://www.kaoyan.com/yingyu/jingyan/60a24551b0617.html'
  },
  {
    text: '偷偷告诉你5个背单词的小妙招，操作性极强！',
    url: 'https://www.kaoyan.com/yingyu/jingyan/609cef0bd1878.html'
  },
  {
    text: '22考研|点击查看考研英语各题型复习技巧！',
    url: 'https://www.kaoyan.com/yingyu/jingyan/5fec4d6360a0e.html'
  },
  {
    text: '今年考研英语好难！22届这样做才不怕',
    url: 'https://www.kaoyan.com/yingyu/jingyan/5fec48b183717.html'
  },
  {
    text: '最全整理，你必须了解得英语一、二的区别',
    url: 'https://www.kaoyan.com/yingyu/jingyan/5fe86a6b4582d.html'
  },
  {
    text: '最后看一眼英语！这些做阅读的方法考场上肯定用得到！',
    url: 'https://www.kaoyan.com/beikao/jingyan/5fe6a5c6d1efa.html'
  },
  {
    text: '有方法！英语阅读如何快速找答案？',
    url: 'https://www.kaoyan.com/yingyu/jingyan/5fd9d4c106942.html'
  },
  {
    text: '21考研| 最后二十天，英语新题型也要准备起来！',
    url: 'https://www.kaoyan.com/yingyu/jingyan/5fc9e667e490a.html'
  },
  {
    text: '21考研英语|最后二十几天，完型还能冲一冲！',
    url: 'https://www.kaoyan.com/yingyu/jingyan/5fc89fd1204c2.html'
  },
  {
    text: '21考研|英语阅读越做错的越多，怎么办？',
    url: 'https://www.kaoyan.com/yingyu/jingyan/5fbf822b19ac3.html'
  },
  {
    text: '考研英语要想80+，阅读最多错几个？',
    url: 'https://www.kaoyan.com/yingyu/jingyan/5fbf771b56e8b.html'
  },
  {
    text: '拒绝模板！这些英语作文句式变化技巧，值得收藏',
    url: 'https://www.kaoyan.com/yingyu/jingyan/5fbb80cbd584e.html'
  },
  {
    text: '21考研|最后阶段英语作文该如何准备？',
    url: 'https://www.kaoyan.com/yingyu/jingyan/5fb79fc1c4460.html'
  }
]
const list2 = [
  {
    text: '2020年考研英语一真题阅读理解text1原文',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5e006d7a4e66c.html'
  },
  {
    text: '2020年考研英语一真题阅读理解text2原文',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5e006d5bc0e7d.html'
  },
  {
    text: '2020年考研英语一真题阅读理解text3原文',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5e006d34ccd9e.html'
  },
  {
    text: '2020年考研英语一真题阅读理解text4原文',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5e006cc88d00d.html'
  },
  {
    text: '2020年考研英语一真题阅读理解text1原文及答案解析（跨考版）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5e006ca60de46.html'
  },
  {
    text: '2020年考研英语一真题阅读理解text2原文及答案解析（跨考版）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5e006c7350ef2.html'
  },
  {
    text: '2020年考研英语一真题阅读理解text3原文及答案解析（跨考版）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5e006c4444cdb.html'
  },
  {
    text: '2020年考研英语一真题阅读理解text4原文及答案解析（跨考版）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5e006bf7697b5.html'
  },
  {
    text: '2020年考研英语二翻译答案解析（厦门新东方）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff1938e3612.html'
  },
  {
    text: '2020年考研英语二作文解析（呼和浩特新东方）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff19344f799.html'
  },
  {
    text: '2020年考研英语二翻译解析（兰州新东方）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff18538e06a.html'
  },
  {
    text: '2020年考研英语二小作文解析（杭州新东方）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff18288d16e.html'
  },
  {
    text: '2020年考研英语二翻译答案解析（南京新东方）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff181343d5b.html'
  },
  {
    text: '2020年考研英语二翻译答案解析（上海新东方）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff17f3028d1.html'
  },
  {
    text: '2020年考研英语二翻译答案解析（长春新东方）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff17f009182.html'
  },
  {
    text: '2020年考研英语二小作文范文（郑州新东方）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff17b9d41b5.html'
  },
  {
    text: '2020年考研英语二真题及解析完整版（文都版）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff1516429c9.html'
  },
  {
    text: '2020年考研英语一阅读分析',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff13400ca1d.html'
  },
  {
    text: '2020年考研英语一试卷评述（石家庄新东方）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff116818214.html'
  },
  {
    text: '2020年考研英语试卷评述（沈阳新东方）',
    url: 'http://www.kaoyan.com/yingyu/zhenti/5dff1135617ff.html'
  }
]
const list3 = [
  {
    text: '2021考研英语大纲原文及解析汇总',
    url: 'http://www.kaoyan.com/yingyu/dagang/5f5072a99ac9f.html'
  },
  {
    text: '2020考研英语大纲发布：如何高效备考新题型？',
    url: 'http://www.kaoyan.com/yingyu/dagang/5d245c6a106c2.html'
  },
  {
    text: '2020考研英语大纲来了：如何调整复习规划?',
    url: 'http://www.kaoyan.com/yingyu/dagang/5d245bb3221b7.html'
  },
  {
    text: '2020考研英语大纲发布：如何高效备考完形填空',
    url: 'http://www.kaoyan.com/yingyu/dagang/5d245ab316172.html'
  },
  {
    text: '2020考研英语大纲：写作部分无变化，“模板”就能应付考研?',
    url: 'http://www.kaoyan.com/yingyu/dagang/5d24585a99a6d.html'
  },
  {
    text: '2020考研英语大纲来了：阅读如何拿高分?',
    url: 'http://www.kaoyan.com/yingyu/dagang/5d2456cabe794.html'
  },
  {
    text: '2020考研英语(二)大纲解析深入解读',
    url: 'http://www.kaoyan.com/yingyu/dagang/5d24558266c7c.html'
  },
  {
    text: '2020考研英语(一)大纲解析深入解读',
    url: 'http://www.kaoyan.com/yingyu/dagang/5d2454c7e68d1.html'
  },
  {
    text: '20考研英语新大纲变动：听听名师怎么说！',
    url: 'http://www.kaoyan.com/yingyu/dagang/5d245177d54bd.html'
  },
  {
    text: '2020年考研英语大纲解析',
    url: 'http://www.kaoyan.com/dagang/5d2350a5ad69e.html'
  },
  {
    text: '2020考研英语二考研大纲原文',
    url: 'http://www.kaoyan.com/yingyu/jingyan/5d22e118cdd08.html'
  },
  {
    text: '2020考研英语一考研大纲原文',
    url: 'http://www.kaoyan.com/yingyu/jingyan/5d22df3205682.html'
  },
  {
    text: '2019年英语二考研大纲（文字版）',
    url: 'http://www.kaoyan.com/yingyu/dagang/5b9cc4ab5904f.html'
  },
  {
    text: '2019年英语一考研大纲（文字版）',
    url: 'http://www.kaoyan.com/yingyu/dagang/5b9cc4125414f.html'
  },
  {
    text: '2019年英语一大纲解析之新题型',
    url: 'http://www.kaoyan.com/yingyu/dagang/5b9c7f59e431f.html'
  },
  {
    text: '2019年英语一大纲解析之阅读理解',
    url: 'http://www.kaoyan.com/yingyu/dagang/5b9c7ebc50b28.html'
  },
  {
    text: '2019年考研英语大纲解析之阅读篇',
    url: 'http://www.kaoyan.com/yingyu/dagang/5b9c7a530fb20.html'
  },
  {
    text: '2019年考研英语大纲全面解读',
    url: 'http://www.kaoyan.com/yingyu/dagang/5b9c7905d0d68.html'
  },
  {
    text: '2019考研英语大纲之新题型重磅技巧',
    url: 'http://www.kaoyan.com/yingyu/dagang/5b9c783bd9bab.html'
  },
  {
    text: '19考研大纲发布后，英语阅读复习策略',
    url: 'http://www.kaoyan.com/yingyu/dagang/5b9c77933624c.html'
  }
]
const platformList = [
  { title: '1、多邻国：', content: 'http://www.duolingo.cn/' },
  { title: '2、TED：', content: 'https://www.ted.com/' },
  { title: '3、词根字典：', content: 'http://www.cgdict.com/' },
  { title: '4、美国之音：', content: 'http://www.51voa.com/ ' },
  { title: '5、英语有声朗读', content: 'http://esl-bits.net/' },
  { title: '作者的gitee', content: 'https://gitee.com/luofan18' },
  { title: '作者的小游戏', content: 'https://luofan18.gitee.io/games' }
]
export default {
  name: 'English',
  components: { Main, Aside },
  setup () {
    return { subject, itemList, list1, list2, list3, platformList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.english{
  margin: .1rem;
  display: flex;
}
.left{
  &__main{
    padding: 0 .2rem;
    &__title{
      font-size: .2rem;
      padding: .1rem;
      text-align: center;
      background-color: $mostColor;
      color: #fff;
      opacity: 0.5;
    }
    &__tag{
      margin: .2rem 0;
    }
    &__item{
      width: 40%;
      font-size: .14rem;
      margin: .1rem;
    }
  }
}
</style>

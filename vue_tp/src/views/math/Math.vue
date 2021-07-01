<template>
  <div class="math">
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
const subject = '数学'
const itemList = [
  {
    text: '没空伤心！赶紧看初试数学答题注意事项',
    url: 'http://www.kaoyan.com/shuxue/jingyan/5fe7095fec8be.html'
  },
  {
    text: '最后二十几天，数学如何冲刺复习？',
    url: 'http://www.kaoyan.com/shuxue/jingyan/5fc0b14a29f81.html'
  },
  {
    text: '网上确认的标准出了，大家注意不要犯错！',
    url: 'http://www.kaoyan.com/shuxue/jingyan/5fa2614c50242.html'
  },
  {
    text: '考研要不要考数学，数学到底有多难？',
    url: 'http://www.kaoyan.com/shuxue/jingyan/5f9bce7929f2b.html'
  },
  {
    text: '21考研数学，如何高效利用错题拿高分？',
    url: 'http://www.kaoyan.com/shuxue/jingyan/5f8ea8ba48835.html'
  },
  {
    text: '数学基础差，考研数学怎么办？',
    url: 'http://www.kaoyan.com/shuxue/jingyan/5f8e8e5c1ea77.html'
  },
  {
    text: '考研倒计时80多天，你的规划做好了没有？',
    url: 'http://www.kaoyan.com/shuxue/jingyan/5f745198915d4.html'
  },
  {
    text: '考研数学最强提分技能，你get了吗？',
    url: 'http://www.kaoyan.com/shuxue/jingyan/5f730d9d0cce3.html'
  }
]
const list1 = [
  {
    text: '[考研数学]听课一时爽，做题火葬场？来看看真正的题海“战术”！',
    url: 'https://www.kaoyan.com/shuxue/jingyan/60bf1857d85c7.html'
  },
  {
    text: '“看、练、思”三大法——让你成为考研数学的高分之王！',
    url: 'https://www.kaoyan.com/shuxue/jingyan/60a4de46d2502.html'
  },
  {
    text: '检查你的数学复习有没有“脱轨”的四大绝招！',
    url: 'https://www.kaoyan.com/shuxue/jingyan/609cf05a648bc.html'
  },
  {
    text: '22考研|考研数学难？那是你没掌握正确的解题思路',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5fe9b29cc2576.html'
  },
  {
    text: '没空伤心！赶紧看初试数学答题注意事项',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5fe7095fec8be.html'
  },
  {
    text: '21考研|数学考场答题顺序及技巧',
    url: 'https://www.kaoyan.com/beikao/jingyan/5fc88d6499b38.html'
  },
  {
    text: '21考研|数学要想130+，客观题上也要下功夫！',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5fc5fee3bfe65.html'
  },
  {
    text: '最后二十几天，数学如何冲刺复习？',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5fc0b14a29f81.html'
  },
  {
    text: '考研要不要考数学，数学到底有多难？',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f9bce7929f2b.html'
  },
  {
    text: '21考研数学，如何高效利用错题拿高分？',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f8ea8ba48835.html'
  },
  {
    text: '数学基础差，考研数学怎么办？',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f8e8e5c1ea77.html'
  },
  {
    text: '考研倒计时80多天，你的规划做好了没有？',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f745198915d4.html'
  },
  {
    text: '考研数学最强提分技能，你get了吗？',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f730d9d0cce3.html'
  },
  {
    text: '2021考研数学倒计时100天复习计划',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f61d2482b4ff.html'
  },
  {
    text: '六个月冲刺数三147分，成功上岸双一流名校，按我的方法来，你也可以！',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f48786c1b7c5.html'
  },
  {
    text: '干货：2021考研数学复习：常微分方程',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f48665874eb1.html'
  },
  {
    text: '干货：2021考研数学线代复习:特征值、特征向量',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f48650f0e888.html'
  },
  {
    text: '干货：2021考研数学概率与统计复习： 假设检验(一)',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f4864853ea9c.html'
  },
  {
    text: '干货：2021考研数学高数复习:中值定理与导数的应用',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f470d03baae6.html'
  },
  {
    text: '干货：2021考研数学线性代数各章复习要点及命题特点(六)',
    url: 'https://www.kaoyan.com/shuxue/jingyan/5f470c84b7054.html'
  }
]
const list2 = [
  {
    text: '2020年考研数学真题数一线代之两大题解析',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e006b1de6f9a.html'
  },
  {
    text: '2020年考研数学二真题试卷考情分析',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e006b00121fa.html'
  },
  {
    text: '2020年考研数学一、三21题数二23题真题解析',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e006acd8a663.html'
  },
  {
    text: '2020年考研数学真题数二之考查知识点分析',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e006a93ca88e.html'
  },
  {
    text: '2020年考研数学真题线代部分题型分析',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e00695a1589b.html'
  },
  {
    text: '2020年考研数学二真题解析（文都版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e0068f317659.html'
  },
  {
    text: '2020年考研数学三真题解析（文都版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e0068d60ab18.html'
  },
  {
    text: '2020年考研数学真题数三试题考点解读',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e0068a449b1d.html'
  },
  {
    text: '2020年考研数学一真题解析（文都版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e00676df2ce2.html'
  },
  {
    text: '2020年考研数学二试题及答案解析（新东方版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e0065ea1b228.html'
  },
  {
    text: '2020年考研数学一真题答案解析完整版（新东方版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e006591b5016.html'
  },
  {
    text: '2020年考研数学二真题及答案解析完整版（新东方版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e00647bad0a8.html'
  },
  {
    text: '2020年考研数学二真题及答案解析（新东方版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e00637048492.html'
  },
  {
    text: '2020年考研数学三真题及答案解析（新东方版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e0062efdad9c.html'
  },
  {
    text: '2020年考研数学高等数学点评(杭州新东方)',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e00605ab008d.html'
  },
  {
    text: '2020年考研数学整体评述（兰州新东方）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e006025020f1.html'
  },
  {
    text: '2020年考研数学二试题（新东方版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e005f9230ce7.html'
  },
  {
    text: '2020年考研数学二高数真题及答案（新东方版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e005e664a345.html'
  },
  {
    text: '2020年考研数学二线性代数第23题真题答案解析（新东方版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e005c191e6c0.html'
  },
  {
    text: '2020年考研数学二第22题试题答案解析（新东方版）',
    url: 'http://www.kaoyan.com/shuxue/zhenti/5e005bdac1d51.html'
  }
]
const list3 = [
  {
    text: '2021考研数学大纲原文及解析汇总',
    url: 'http://www.kaoyan.com/shuxue/dagang/5f50730f57671.html'
  },
  {
    text: '精析2020考研数学新大纲，指导2020考生积极备考',
    url: 'http://www.kaoyan.com/shuxue/dagang/5d2c3e50d3f71.html'
  },
  {
    text: '2020考研数学大纲：最后五个月要怎么复习？',
    url: 'http://www.kaoyan.com/shuxue/dagang/5d2c3c5dd8f97.html'
  },
  {
    text: '2020考研数学大纲备考注意事项',
    url: 'http://www.kaoyan.com/yingyu/jingyan/5d288dc14f598.html'
  },
  {
    text: '2020考研数学大纲解析及后期备考指南',
    url: 'http://www.kaoyan.com/shuxue/dagang/5d25599ad5fba.html'
  },
  {
    text: '2020考研数一数二数三大纲区别解析',
    url: 'http://www.kaoyan.com/shuxue/dagang/5d246ba616c95.html'
  },
  {
    text: '2020考研数学三考研大纲原文',
    url: 'http://www.kaoyan.com/shuxue/jingyan/5d22b283d280c.html'
  },
  {
    text: '2020考研数学二考研大纲原文',
    url: 'http://www.kaoyan.com/shuxue/jingyan/5d22ae42934a7.html'
  },
  {
    text: '2020考研数学一考研大纲原文',
    url: 'http://www.kaoyan.com/shuxue/jingyan/5d22aafee821c.html'
  },
  {
    text: '2019考研数学大纲（文字版）',
    url: 'http://www.kaoyan.com/shuxue/dagang/5b9cc5c40f735.html'
  },
  {
    text: '2019考研大纲预测 ——考研数学命题特点分析',
    url: 'http://www.kaoyan.com/shuxue/dagang/5b9cbe527f9cc.html'
  },
  {
    text: '2019考研数学大纲解析之线性代数命题点',
    url: 'http://www.kaoyan.com/shuxue/dagang/5b9cbe0329f22.html'
  },
  {
    text: '2019考研数学考试大纲内容解析',
    url: 'http://www.kaoyan.com/shuxue/dagang/5b9cbdb10c06e.html'
  },
  {
    text: '透过近5年平均分吃透2019考研数学',
    url: 'http://www.kaoyan.com/shuxue/dagang/5b9c8422e2d67.html'
  },
  {
    text: '2019年考研数学大纲解析之物理学习方法',
    url: 'http://www.kaoyan.com/shuxue/dagang/5b9c7fb578617.html'
  },
  {
    text: '2019考研数学一考试大纲(高数部分)考试内容和要求变化分析',
    url: 'http://www.kaoyan.com/shuxue/dagang/5b9c7eef16ed0.html'
  },
  {
    text: '2019考研数学大纲原文与对比变化',
    url: 'http://www.kaoyan.com/shuxue/dagang/5b9c7e30e06a9.html'
  },
  {
    text: '2019考研数学大纲解析及下一步复习规划建议',
    url: 'http://www.kaoyan.com/shuxue/dagang/5b9c7b9d1accf.html'
  },
  {
    text: '2019考研数学大纲变化情况分析',
    url: 'http://www.kaoyan.com/shuxue/dagang/5b9c7a954a74e.html'
  },
  {
    text: '2019考研数学大纲解析及复习建议',
    url: 'http://www.kaoyan.com/shuxue/dagang/5b9c79892a673.html'
  }
]
const platformList = [
  { title: '1、数学乐：', content: 'https://www.shuxuele.com/' },
  { title: '2、张宇考研数学：', content: 'https://space.bilibili.com/679237565/' },
  { title: '3、武忠祥高等数学：', content: 'https://www.bilibili.com/video/BV1gA411j7Ta' },
  { title: '4、李永乐线性代数：', content: 'https://www.bilibili.com/video/BV1oK4y1u7t1?from=search&seid=397030390389350614' },
  { title: '5、王式安概率统计', content: 'https://www.bilibili.com/video/BV1u7411c7ih/' },
  { title: '作者的gitee', content: 'https://gitee.com/luofan18' },
  { title: '作者的小游戏', content: 'https://luofan18.gitee.io/games' }
]
export default {
  name: 'Math',
  components: { Main, Aside },
  setup () {
    return { subject, itemList, list1, list2, list3, platformList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.math{
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

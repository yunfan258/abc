<template>
  <div class="major">
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
const subject = '专业课'
const itemList = [
  {
    text: '2021考研|教育学考前答题技巧',
    url: 'http://www.kaoyan.com/zhuanyeke/jingyan/5fb373c208c00.html'
  },
  {
    text: '2021考研|新传5大题型答题技巧',
    url: 'http://www.kaoyan.com/zhuanyeke/jingyan/5fb37002b26b7.html'
  },
  {
    text: '2021考研|心理学考前答题技巧',
    url: 'http://www.kaoyan.com/zhuanyeke/jingyan/5fb34b5516337.html'
  },
  {
    text: '最后60天，如何实现专业课120+？',
    url: 'http://www.kaoyan.com/zhuanyeke/jingyan/5f9bec578e243.html'
  },
  {
    text: '背书阶段！别再问专业课怎么背，方法都在这里了',
    url: 'http://www.kaoyan.com/zhuanyeke/jingyan/5f8428a2c205d.html'
  },
  {
    text: '专业课真题哪里找？这几个途径少不了！',
    url: 'http://www.kaoyan.com/zhuanyeke/jingyan/5f83fc89ee424.html'
  },
  {
    text: '考研人也能做rapper？！',
    url: 'http://www.kaoyan.com/zhuanyeke/jingyan/5f818cb7056f0.html'
  },
  {
    text: '如何拿下专业课？光靠死记硬背可不行！',
    url: 'http://www.kaoyan.com/zhuanyeke/jingyan/5f7447d5b181d.html'
  }
]
const list1 = [
  {
    text: '专业课怎么复习？正确的看书、背书方法都在这儿了',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/60ae0eea13bd2.html'
  },
  {
    text: '适用于文科类专业备考的三大原则＋六大记忆方法，先掌握了再说！',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/609baf21a56e6.html'
  },
  {
    text: '2021浙大外应初试420+（二外德语）初试复试经验帖',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/60990c1b882b3.html'
  },
  {
    text: '2021武汉理工大学资产评估（436）经验贴',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/60990661c2f33.html'
  },
  {
    text: '2021双非三跨中国人民大学社工考研第二名经验分享',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/60951ca6e84ee.html'
  },
  {
    text: '华东理工大学社会保障上岸经验贴（626与828）',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/60951bbb2fe15.html'
  },
  {
    text: '暨大金融431学姐的最强经验帖来了，快来码！',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/608bdd183b468.html'
  },
  {
    text: '四川师范大学-文学院-语言学及应用语言学  备考经验分享',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/608bdc09d405b.html'
  },
  {
    text: '专业课密封试卷启封步骤：简单7步教你拆考试信封',
    url: 'https://www.kaoyan.com/beikao/jingyan/5fe45ddcc6c8d.html'
  },
  {
    text: '2021考研|汉硕考前答题技巧',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/5fb380263f4de.html'
  },
  {
    text: '2021考研|教育学考前答题技巧',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/5fb373c208c00.html'
  },
  {
    text: '2021考研|新传5大题型答题技巧',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/5fb37002b26b7.html'
  },
  {
    text: '2021考研|心理学考前答题技巧',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/5fb34b5516337.html'
  },
  {
    text: '2021考研|翻硕考前答题技巧！',
    url: 'https://www.kaoyan.com/beikao/jingyan/5fb347e28ff64.html'
  },
  {
    text: '最后60天，如何实现专业课120+？',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/5f9bec578e243.html'
  },
  {
    text: '背书阶段！别再问专业课怎么背，方法都在这里了',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/5f8428a2c205d.html'
  },
  {
    text: '专业课真题哪里找？这几个途径少不了！',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/5f83fc89ee424.html'
  },
  {
    text: '这碗毒鸡汤，我干了，你随意！',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/5f818cb7056f0.html'
  },
  {
    text: '如何拿下专业课？光靠死记硬背可不行！',
    url: 'https://www.kaoyan.com/zhuanyeke/jingyan/5f7447d5b181d.html'
  },
  {
    text: '最后三个月，如何攻克专业课“三座大山”？',
    url: 'https://www.kaoyan.com/beikao/jingyan/5f703e7ebb839.html'
  }
]
const list2 = [
  {
    text: '2019年法硕专业基础考研真题',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5ea7de6193942.html'
  },
  {
    text: '2018年部分院校汉语国际教育硕士考研真题汇总',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e621a154cbe4.html'
  },
  {
    text: '2018北京大学汉语国际教育硕士考研真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e6219208b354.html'
  },
  {
    text: '2018年北京语言大学汉语国际教育硕士考研真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e6218d0d11e9.html'
  },
  {
    text: '2018上海大学汉语国际教育硕士考研真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e62186749ee7.html'
  },
  {
    text: '2018年中国人民大学汉语国际教育硕士考研真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e62181408841.html'
  },
  {
    text: '2018年中央民族大学汉语国际教育硕士考研真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e6217794b73b.html'
  },
  {
    text: '2019年部分院校汉语国际教育硕士考研真题汇总',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e6214daf059f.html'
  },
  {
    text: '2019西南大学汉语国际教育硕士真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e62131f640cd.html'
  },
  {
    text: '2019中国人民大学汉语国际教育硕士真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e6212dca1cfe.html'
  },
  {
    text: '2019湖南师范大学汉语国际教育硕士真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e62125f9d21a.html'
  },
  {
    text: '2019中国传媒大学汉语国际教育硕士真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e6211e94f05a.html'
  },
  {
    text: '2019北京语言大学汉语国际教育硕士真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e620e0022df9.html'
  },
  {
    text: '2020年汉语国际教育硕士部分院校考研真题汇总',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e620d40bb65b.html'
  },
  {
    text: '2020年中国人民大学汉语国际教育硕士考研真题解析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e620aa1acfc5.html'
  },
  {
    text: '2020年北京外国语大学汉语国际教育硕士考研真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e6209fdeca8a.html'
  },
  {
    text: '2020年广东外语外贸大学汉语国际教育硕士考研真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e620980a2853.html'
  },
  {
    text: '2020年兰州大学汉语国际教育硕士考研真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e620900a6fa2.html'
  },
  {
    text: '2020年南京大学(文学院)汉语国际教育硕士考研真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e62077b66693.html'
  },
  {
    text: '2020年天津大学汉语国际教育硕士考研真题分析',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e6206e27f35f.html'
  }
]
const list3 = [
  {
    text: '2021考研专业课大纲原文及解析汇总',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5f5073adf3a2f.html'
  },
  {
    text: '2020年中医临综考研大纲变动对比解析',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d2c502193a7d.html'
  },
  {
    text: '2020历史学313考研大纲有哪些变化？',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d2c4d5c67ad1.html'
  },
  {
    text: '2020考研公共日语大纲对比',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d2c4a98895a6.html'
  },
  {
    text: '2020管综数学大纲解析',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d271fd18b808.html'
  },
  {
    text: '2020届199初数大纲精析',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d271e87da2b8.html'
  },
  {
    text: '2020管综中文写作大纲解读与命题预测',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d271d52498d3.html'
  },
  {
    text: '2020管综数学三大阶段复习重点与方法对比',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d2708c1376a0.html'
  },
  {
    text: '2020考研管理类联考逻辑大纲解析及考点解读',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d2705e920a71.html'
  },
  {
    text: '2020考研管理类联考中文写作大纲解析',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d270546563fa.html'
  },
  {
    text: '2020管理类联考中文写作大纲及写作误区',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d2704407c5e1.html'
  },
  {
    text: '2020管综中文写作大纲详细解析',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d2703658a27d.html'
  },
  {
    text: '2020考研翻译硕士（MTI）大纲原文',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d26f5876e1b7.html'
  },
  {
    text: '2020考研汉语国际教育大纲原文',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d26f22061bbb.html'
  },
  {
    text: '2020考研农学大纲原文',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d26a99eb2c05.html'
  },
  {
    text: '2020考研计算机新大纲考情分析',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d25b9375abac.html'
  },
  {
    text: '2020考研法律硕士大纲解析',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d25b88b8f75f.html'
  },
  {
    text: '2020考研西医大纲解析及复习指导',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d25b7b9bed5b.html'
  },
  {
    text: '2020考研计算机大纲原文',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d25b5ba3dbdc.html'
  },
  {
    text: '2020历史学考研大纲原文（文字版）',
    url: 'http://www.kaoyan.com/zhuanyeke/dagang/5d25992d5d032.html'
  }
]
const platformList = [
  { title: '1、王道四件套：', content: 'https://zhuanlan.zhihu.com/p/365833636' },
  { title: '2、严蔚敏的《数据结构》：', content: 'https://zhuanlan.zhihu.com/p/365833636' },
  { title: '3、黑皮书《计算机组成与设计 硬件/软件接口》：', content: 'https://zhuanlan.zhihu.com/p/365833636' },
  { title: '4、谢希仁的《计算机网络》：', content: 'https://zhuanlan.zhihu.com/p/365833636' },
  { title: '5、王道《操作系统》', content: 'https://zhuanlan.zhihu.com/p/365833636' },
  { title: '作者的gitee', content: 'https://gitee.com/luofan18' },
  { title: '作者的小游戏', content: 'https://luofan18.gitee.io/games' }
]
export default {
  name: 'Major',
  components: { Main, Aside },
  setup () {
    return { subject, itemList, list1, list2, list3, platformList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.major{
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

<template>
  <div class="politics">
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
const subject = '政治'
const itemList = [
  {
    text: '2021考研|政治各题型答题技巧',
    url: 'http://www.kaoyan.com/zhengzhi/jingyan/5fb3859132fdf.html'
  },
  {
    text: '21考研：不想做炮灰？你必须得这么做才行！',
    url: 'http://www.kaoyan.com/zhengzhi/jingyan/5f8d3c46af5f1.html'
  },
  {
    text: '10月份才开始准备考研政治，如何把握重点复习？',
    url: 'http://www.kaoyan.com/zhengzhi/jingyan/5f8d3b31a7ca5.html'
  },
  {
    text: '考研冲刺阶段，复习规划及背诵技巧！',
    url: 'http://www.kaoyan.com/zhengzhi/jingyan/5f894cf77f1e1.html'
  },
  {
    text: '22考研看过来，你想知道的考研政治都在这里！',
    url: 'http://www.kaoyan.com/zhengzhi/jingyan/5f857af38602f.html'
  },
  {
    text: '22考研，现在就开始准备政治？看完再学也不迟',
    url: 'http://www.kaoyan.com/zhengzhi/jingyan/5f84377042c71.html'
  },
  {
    text: '政治多选老是错，该怎么办？',
    url: 'http://www.kaoyan.com/zhengzhi/jingyan/5f7b103d9fbde.html'
  },
  {
    text: '2021考研政治倒计时100天复习计划',
    url: 'http://www.kaoyan.com/zhengzhi/jingyan/5f61e99f5bc2c.html'
  }
]
const list1 = [
  {
    text: '政治什么时候开始复习？怎么学能拿高分？',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/60a627f0e607c.html'
  },
  {
    text: '2021考研|政治各科考前做题技巧',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5fb387c16279f.html'
  },
  {
    text: '2021考研|政治各题型答题技巧',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5fb3859132fdf.html'
  },
  {
    text: '21考研：不想做炮灰？你必须得这么做才行！',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f8d3c46af5f1.html'
  },
  {
    text: '10月份才开始准备考研政治，如何把握重点复习？',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f8d3b31a7ca5.html'
  },
  {
    text: '考研冲刺阶段，复习规划及背诵技巧！',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f894cf77f1e1.html'
  },
  {
    text: '22考研看过来，你想知道的考研政治都在这里！',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f857af38602f.html'
  },
  {
    text: '22考研，现在就开始准备政治？看完再学也不迟',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f84377042c71.html'
  },
  {
    text: '22考研，上岸学姐告诉你，政治要这样学！',
    url: 'https://www.kaoyan.com/yingyu/jingyan/5f7b23458315e.html'
  },
  {
    text: '政治多选老是错，该怎么办？',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f7b103d9fbde.html'
  },
  {
    text: '2021考研政治倒计时100天复习计划',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f61e99f5bc2c.html'
  },
  {
    text: '考研政治多选题怎么拿高分？解题诀窍了解下！',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f50920e9d565.html'
  },
  {
    text: '3分钟攻克考研政治&amp;英语！每日一讲一练day7！',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f4868dd9c89f.html'
  },
  {
    text: '干货：2021考研政治毛中特知识点梳理（第八章）',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f486803b5a69.html'
  },
  {
    text: '干货：2020年国内外时政考点（8.27）',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f486756b8de1.html'
  },
  {
    text: '3分钟攻克考研政治&amp;英语！每日一讲一练day6！',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f470f1cc3702.html'
  },
  {
    text: '干货：2020年国内外时政考点（8.26）',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f470e2eeb526.html'
  },
  {
    text: '干货：2021考研政治毛中特知识点梳理（第七章）',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f470da8d9e8b.html'
  },
  {
    text: '考研政治史纲土地政策的发展变化，建议收藏！',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f4613e775c78.html'
  },
  {
    text: '3分钟攻克考研政治&amp;英语！每日一讲一练day5！',
    url: 'https://www.kaoyan.com/zhengzhi/jingyan/5f45c0302ff2b.html'
  }
]
const list2 = [
  {
    text: '2020年考研政治真题答案及解析(郑州新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5e005766940c9.html'
  },
  {
    text: '2020年考研政治试卷解析(长春新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5e0055ea31205.html'
  },
  {
    text: '2020年考研政治试卷整体评述(厦门新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5e0053f24f45a.html'
  },
  {
    text: '2020年考研政治真题选择题答案及解析(呼和浩特新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5e0053aed5bb1.html'
  },
  {
    text: '2020年考研政治马原版块答案及解析(杭州新东方)',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e0052e5573ed.html'
  },
  {
    text: '2020年考研政治试卷答案及解析参考(南宁新东方)',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e0052bbaa18f.html'
  },
  {
    text: '2020年考研政治试卷答案及解析(沈阳新东方)',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e00528b9bfdc.html'
  },
  {
    text: '2020年考研政治分析题参考答案(呼和浩特新东方)',
    url: 'http://www.kaoyan.com/zhuanyeke/zhenti/5e005230d723f.html'
  },
  {
    text: '2020年考研政治试卷整体评述(吉林新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfed81449077.html'
  },
  {
    text: '2020年考研政治试卷整体评述(天津新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfed7c3188e9.html'
  },
  {
    text: '2020年考研政治真题的命题倾向与探析(武汉新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfed72cb71d6.html'
  },
  {
    text: '解读2020考研政治试题:“热点、基础、细节”(济南新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfed6f448f81.html'
  },
  {
    text: '2020年考研政治试题答案解析全套完整版(广州新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfed6ac5f4a1.html'
  },
  {
    text: '2020年考研政治真题答案解析:分析题答案(广州新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfed5c4b7ea8.html'
  },
  {
    text: '2020年考研政治考试综述(上海新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfed53939a54.html'
  },
  {
    text: '2020年全国硕士研究生招生考试思想政治理论试题参考答案及解析(哈尔滨新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfed50a787ce.html'
  },
  {
    text: '2020年考研政治总体评述(云南新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfed434054d0.html'
  },
  {
    text: '2020年考研政治主观题题答案及解析(兰州新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfed3e761f9a.html'
  },
  {
    text: '2020年考研政治真题试题答案及解析(南京新东方)',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfed39279628.html'
  },
  {
    text: '2020年考研政治真题及答案解析（文都版）',
    url: 'http://www.kaoyan.com/zhengzhi/zhenti/5dfeccae71179.html'
  }
]
const list3 = [
  {
    text: '2021考研政治大纲原文及解析汇总',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5f5062e30b2bb.html'
  },
  {
    text: '2020考研政治大纲解析：思想道德修养与法律基础',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d24515ba0991.html'
  },
  {
    text: '2020考研政治大纲史纲学科变动情况解析　',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d244ab50ef9d.html'
  },
  {
    text: '2020考研政治大纲变动解析：毛中特',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d24493bb1a5e.html'
  },
  {
    text: '2020考研政治大纲马原变动解析及备考指南',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d244891c2997.html'
  },
  {
    text: '20考研政治新大纲变动：听听名师怎么说！',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d2442372d916.html'
  },
  {
    text: '2020考研政治新大纲考试形式和试卷结构',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d243f2dec445.html'
  },
  {
    text: '2020考研政治大纲形势与政策变动对比表',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d243e00cbfbb.html'
  },
  {
    text: '2020考研政治大纲思修变动对比表',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d243d94231d0.html'
  },
  {
    text: '2020考研政治大纲史纲变动对比表',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d243d30205eb.html'
  },
  {
    text: '2020考研政治大纲毛中特变动对比表',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d243c4e99394.html'
  },
  {
    text: '2020考研政治大纲马原变动对比表',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d243b87241a4.html'
  },
  {
    text: '2020考研政治大纲变化对比汇总表',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5d243af22f3db.html'
  },
  {
    text: '3分钟读懂政治大纲实质变化！',
    url: 'http://www.kaoyan.com/dagang/5d234d4577ff5.html'
  },
  {
    text: '2020考研政治考研大纲原文',
    url: 'http://www.kaoyan.com/zhengzhi/jingyan/5d22e3e66c468.html'
  },
  {
    text: '2019考研政治大纲发布后形策及政经变化',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5b9cbfb226c52.html'
  },
  {
    text: '2019年考研大纲出来后的马原复习',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5b9cbf267db15.html'
  },
  {
    text: '2019考研政治大纲出来后的史纲复习',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5b9cbef556ab5.html'
  },
  {
    text: '从19年考研政治大纲看最后阶段政治复习',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5b9cbea5e0a93.html'
  },
  {
    text: '2019考研政治大纲原文（文字版）',
    url: 'http://www.kaoyan.com/zhengzhi/dagang/5b9cbc2218ee7.html'
  }
]
const platformList = [
  { title: '1、中国政治学：', content: 'chinaps.cass.cn' },
  { title: '2、中国共产党新闻网--人民网：', content: 'cpc.people.com.cn' },
  { title: '3、徐涛考研政治：', content: 'https://www.bilibili.com/cheese/play/ss223' },
  { title: '4、徐涛bilibili主页：', content: 'https://space.bilibili.com/342722155' },
  { title: '5、共产党员网_中共中央组织部', content: 'www.12371.cn' },
  { title: '作者的gitee', content: 'https://gitee.com/luofan18' },
  { title: '作者的小游戏', content: 'https://luofan18.gitee.io/games' }
]
export default {
  name: 'Politics',
  components: { Main, Aside },
  setup () {
    return { subject, itemList, list1, list2, list3, platformList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.politics{
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

<template>
  <div class="home">
    <div class="left">
      <div class="left__title">学校排名</div>
      <table class="left__schools">
        <tr class="left__schools__item">
          <th>排名</th>
          <th>学校名称</th>
          <th>省份</th>
        </tr>
        <tr
          class="left__schools__item"
          v-for="(item,index) in schoolList" :key="item"
        >
          <td class="left__item__order">{{index+1}}</td>
          <td class="left__item__name">{{item.name}}</td>
          <td class="left__item__province">{{item.province}}</td>
        </tr>
      </table>
    </div>
    <div class="center">
      <el-carousel class="el-carousel" height="3rem"  indicator-position="outside">
        <el-carousel-item v-for="item in 3" :key="item">
          <img :src="require(`../../assets/banner${item}.png`)" alt="">
        </el-carousel-item>
      </el-carousel>
      <Tags :itemList="itemList" />
    </div>
    <div class="right">
      <div class="right__plan">
        <div class="right__plan__title">学习计划</div>
        <div class="right__plan__item" v-for="item in planList" :key="item">
          <div class="right__item__title">{{item.title}}</div>
          <div class="right__item__content">{{item.content}}</div>
        </div>
      </div>
      <div class="right__platform">
        <div class="right__platform__title">官方知名网站</div>
        <div class="right__platform__item" v-for="item in platformList" :key="item">
          <div class="right__item__title">{{item.title}}</div>
          <div class="right__item__content">{{item.content}}</div>
        </div>
      </div>
      <!--
      ⭐️2021.1—2021.2（准备阶段）

      1.定专业、择校：如何择校可以看学姐之前分享的文章（考研经验）

      2.找资料、找攻略：必备资料：一本英语单词书，英语真题（推荐黄皮书）

      3.春节：春节还是可以好好放松下的，毕竟后面是一场长期战

      ⭐️2021.3-2021.6（大三下学期—基础夯实期）

      我个人认为这一阶段是最重要的，毕竟万丈高楼平地起，你只有基础打好了，才能去建房子吧，所以前期复习一定要仔细，不要想着时间还早❌

      每日学习时长：6h以上

      英语（每天3h以上）：背单词、学语法、做05-15年的英语阅读真题

      专业课（每天3h以上）：弄完一二轮复习——熟悉教材，整理教材框架

      ⭐️2021.7-2021.8（大三暑假—强化提升期）

      每日学习时长：10h以上（基础要打好，不然之后大四可能会有课）

      英语：继续背单词，做05-15英语真题，主要还是在阅读

      专业课：第三轮复习—继续看书（书本是最好的参考书），做题，熟悉做题技巧以及出题重点

      政治：如果毫无基础的同学可以开始刷肖秀荣的1000题或者跟其他政治老师开始上课，我那个时候跟的是腿姐

      ⭐️2021.9-2021.10（大四上学期—强化提升期）

      每日学习时长：8h以上（以防需要上课，老师喜欢点到的）

      英语：做10-18年真题，可以准备一套一套的做了，但还是阅读为主，其他题型为辅，作文先不做

      专业课：第四轮复习，可以开始背书了，刷题，重点关注你报考学校的题目，含金量很高，

      政治：非常建议跟着老师上课，会省很多事，不用自己再去额外找资料或者关注时事等

      ⭐️2021.11-2020.12（大四上学期，冲刺阶段）

      每日学习时长：10-12h以上

      英语：利用留下来最新的19-21三套真题进行模考，查漏补缺，逐个突击，11月份可以开始写作文了

      专业课：第五轮复习，重点背书，结合之前笔记总结重点，进行模考，合理安排做题时间

      政治：背诵肖四肖八，紧跟老师，政治完全是可以短期速成的，背就完事了
      -->
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Tags from '../../components/Tags.vue'
import { post } from '../../utils/request'
const useIndexEffect = () => {
  const data = reactive({ itemList: [] })
  const getIndexBlogs = async () => {
    const result = await post('/Index/blogs',
      {})
    if (result?.data?.data && result?.data?.erron === '0') {
      console.log(result?.data)
      data.itemList = result?.data?.data
    }
  }
  getIndexBlogs()
  const { itemList } = toRefs(data)
  return { itemList }
}
const schoolList = [
  { name: '清华大学', province: '北京' },
  { name: '北京大学', province: '北京' },
  { name: '浙江大学', province: '北京' },
  { name: '上海交通大学', province: '北京' },
  { name: '上海交通大学', province: '北京' },
  { name: '上海交通大学', province: '北京' },
  { name: '上海交通大学', province: '北京' },
  { name: '上海交通大学', province: '北京' },
  { name: '上海交通大学', province: '北京' },
  { name: '上海交通大学', province: '北京' },
  { name: '上海交通大学', province: '北京' },
  { name: '上海交通大学', province: '北京' }
]
const planList = [
  { title: '⭐️2021.1—2021.2（准备阶段）', content: '定专业、择校：如何择校可以看学姐之前分享的文章（考研经验）' },
  { title: '⭐️2021.1—2021.2（准备阶段）', content: '定专业、择校：如何择校可以看学姐之前分享的文章（考研经验）' },
  { title: '⭐️2021.1—2021.2（准备阶段）', content: '定专业、择校：如何择校可以看学姐之前分享的文章（考研经验）' },
  { title: '⭐️2021.1—2021.2（准备阶段）', content: '定专业、择校：如何择校可以看学姐之前分享的文章（考研经验）' },
  { title: '⭐️2021.1—2021.2（准备阶段）', content: '定专业、择校：如何择校可以看学姐之前分享的文章（考研经验）' }
]
const platformList = [
  { title: '中国教育在线', content: 'www.baidu.com' },
  { title: '中国研究生信息招生网', content: 'www.baidu.com' },
  { title: '⭐️2021.1—2021.2（准备阶段）', content: 'www.baidu.com' },
  { title: '⭐️2021.1—2021.2（准备阶段）', content: 'www.baidu.com' },
  { title: '⭐️2021.1—2021.2（准备阶段）', content: 'www.baidu.com' },
  { title: '⭐️2021.1—2021.2（准备阶段）', content: 'www.baidu.com' }
]
export default {
  name: 'Home',
  components: { Tags },
  setup () {
    const { itemList } = useIndexEffect()
    return { itemList, schoolList, planList, platformList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.home{
  display: flex;
  margin: .1rem;
  .left{
    width: 25%;
    @include boxShadow;
    padding: .1rem;
    &__title{
      text-align: center;
      padding: .1rem;
      border-bottom: .01rem solid $mostColor;
      font-size: .2rem;
      color: $mostColor;
    }
    &__schools{
      display: block;
      margin: .1rem;
      border-collapse: collapse;
      border: .01rem solid $mostColor;

      &__item{
        display: block;
        &>th,&>td{
          display: inline-block;
          text-align: center;
          border: .01rem solid $mostColor;
          padding: .1rem 0;
        }
        &>th:nth-of-type(1),.left__item__order{
          width: 15%;
        }
        &>th:nth-of-type(2),.left__item__name{
          width: 65%;
        }
        &>th:nth-of-type(3),.left__item__province{
          width: 20%;
        }
      }
    }
  }
  .center{
    width: 48%;
    margin: 0 1%;
    .el-carousel{
      text-align: center;
      img{
        height: 100%;
      }
    }

  }
  .right{
    width: 25%;
    &__plan,&__platform{
      &__title{
        text-align: center;
        padding: .1rem;
        border-bottom: .01rem solid $mostColor;
        font-size: .2rem;
        color: $mostColor;
      }
    }
    &__plan{
      padding: .1rem;
      margin-bottom: .1rem;
      @include boxShadow;
      &__item{
        .right__item__title{
          padding: .1rem 0;
        }
        .right__item__content{
          padding: .1rem;
          font-size: .14rem
        }
      }
    }
    &__platform{
      @include boxShadow;
      padding: .1rem;
      margin-bottom: .1rem;
      &__item{
        .right__item__title{
          padding: .1rem 0;
        }
        .right__item__content{
          padding: 0 .1rem;
        }
      }
    }

  }
}
</style>

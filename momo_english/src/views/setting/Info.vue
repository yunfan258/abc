<template>
    <!-- <Set /> -->
    <div class="info">
      <div class="info__top">
        <img class="info__top__img" src="../../assets/setting/boy.jpg" alt="" >
        <div class="info__top__username">
        <span>墨墨学员 _ 方方</span>
          <span class="info__person">
          <span class="info__person__details"></span>
          <span class="info__person__icon iconfont">&#xe622;</span>
          </span>
        </div>
        <div class="info__top__id">UID：zaiwlw / LVL 2</div>
      </div>
      <div class="info__bottom">
        <div class="info__item" v-for="(item,key) in infoBottomItemList" :key="key">
          <div class="info__item__count">{{item.count}}</div>
          <div class="info__item__name">{{item.name}}</div>
        </div>
      </div>
    </div>
    <!-- <Notice />
    <Options :optionList="optionList"/>
    <Options :optionList="optionList2"/> -->
  <!-- <Docker whichPage="我的"/> -->
</template>

<script>
// import { reactive, toRefs } from 'vue'
// import Docker from '../../components/Docker'
// // import { get } from '../../utils/request'
// import Notice from './Notice'
// import Set from './Set'
// import Options from './Options'

const infoBottomItem = {
  item1: { name: '连续签到', count: 35 },
  item2: { name: '累计签到', count: 121 },
  item3: { name: '最大连续', count: 12 }

}
const optionList = [
  { icon: '&#xe6f0;', name: '我的课程', right: '&#xe622;' },
  { icon: '&#xe694;', name: '课程订单', right: '&#xe622;' },
  { icon: '&#xe623;', name: '贝壳', right: '&#xe622;' },
  { icon: '&#xe60a;', name: '优惠券', right: '&#xe622;' },
  { icon: '&#xe8ad;', name: '创作和发言', right: '&#xe622;' },
  { icon: '&#xe640;', name: '我的准考证', right: '&#xe622;' },
  { icon: '&#xe614;', name: '我的活动', right: '&#xe622;' }
]
const optionList2 = [
  { icon: '&#xe695;', name: '消息中心', right: '&#xe622;' },
  { icon: '&#xe639;', name: '帮助与反馈', right: '&#xe622;' },
  { icon: '&#xe618;', name: '安全与隐私', right: '&#xe622;' },
  { icon: '&#xe632;', name: '分享学习心得', right: '&#xe622;' },
  { icon: '&#xe617;', name: '给个好评', right: '&#xe622;' }
]
// const useGetMyPageInfoEffet = () => {
//   const data = reactive({ info: {} })
//   const getMyPageInfo = async () => {
//     const result = await get('/api/user/info')
//     if (result?.errno === 0 && result?.data) {
//       data.info = result?.data
//     }
//   }
//   getMyPageInfo()
//   const { info } = toRefs(data)
//   return { info }
// }

export default {
  name: 'MyPage',
  //   components: { Docker, Notice, Options, Set },
  setup () {
    // const { info } = useGetMyPageInfoEffet()
    const infoBottomItemList = infoBottomItem
    return { infoBottomItemList, optionList, optionList2 }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.info{
  position: relative;
  margin: .0rem .16rem .16rem .16rem;
  background: $bgColor;
//   box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
//   border-radius: .08rem;
  &__top{
    &__img{
      // border-radius: 50%;
      width: .6rem;
      height: .6rem;
      position: absolute;
      top: .2rem;
      left: .2rem;
    }
    &__username{
      font-family: PingFangSC-Regular;
      font-size: .16rem;
      color: #262628;
      letter-spacing: .0019rem;
      padding: .3rem .2rem 0 1rem;
    }
    &__id{
      font-family: PingFangSC-Regular;
      font-size: .14rem;
      color: #C1C0C9;
      margin: 0 0 .3rem 1rem;
    }
  }
  &__bottom{
    display: flex;
    border-top: .01rem solid $content-bgColor;
    padding: .12rem 0 .16rem 0;
    background-color: #f9f9f9;
    border-radius: .1rem;
    .info__item{
      flex: 1;
      &__count{
        font-family: PingFangSC-Regular;
        font-size: .16rem;
        color: $mostColor;
        text-align: center;
      }
      &__name{
        font-family: PingFangSC-Regular;
        font-size: .12rem;
        line-height: .17rem;
        color: #C1C0C9;
        text-align: center;
        margin: .02rem 0 .02rem 0;
      }

    }
  }
  &__person{
    position: absolute;
    top: .4rem;
    right: .18rem;
    font-size: .12rem;
    &__details{
      color: #aaa;
    }
    &__icon{
      font-size: .12rem;
    }
  }
}

</style>

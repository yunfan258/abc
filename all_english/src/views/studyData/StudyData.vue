<template>
  <TopArea  whichName="学习数据" />
  <div class="block">
    <el-timeline>
    <template  v-for="item in studyList" :key="item">
      <el-timeline-item :timestamp="item.time" placement="top">
        <div class="study">
          <div class="study__item">
            <div class="study__item__title">{{item.title}}</div>
            <div class="study__item__text">{{item.content}}</div>
          </div>
        </div>
      </el-timeline-item>
    </template>
    </el-timeline>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import TopArea from '../../components/TopArea.vue'
const useGetTopicEffect = () => {
  const list = reactive({ studyList: [] })
  const getTopic = async () => {
    const result = await get('/home/studyData')
    if (result?.data) {
      list.studyList = result?.data?.studyList
    }
  }
  const { studyList } = toRefs(list)
  return { studyList, getTopic }
}

export default {
  name: 'Calender',
  components: { TopArea },
  setup () {
    const { studyList, getTopic } = useGetTopicEffect()
    getTopic()
    return { studyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.block{
  padding-top: .6rem;
  margin: 0 .18rem;
}

.study{
  /*margin: .1rem auto .1rem auto;*/
  &__item{
    font-size: .16rem;
    padding: .1rem 0 .2rem 0;
    border-bottom: 1px solid #ccc;
    &__title{
      color: $mostColor;
    }
    &__text{
      /*overflow: auto;*/
      width: 100%;
    }
  }
}
</style>

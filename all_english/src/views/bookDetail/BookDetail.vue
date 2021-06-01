<template>
  <TopArea  whichName="书籍详情" />
  <div class="padding"></div>
<el-row>
  <el-col :span="10" v-for="(o) in 6" :key="o" :offset="1">
    <el-card :body-style="{ padding: '.1rem' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom">
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
import { ref } from 'vue'
import TopArea from '../../components/TopArea'
const currentDate = ref(new Date())
export default {
  name: 'BookDetails',
  components: { TopArea },
  setup () {
    return { currentDate }
  }
}
</script>

<style scoped>
.padding{
  padding-top: .5rem;
}
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>

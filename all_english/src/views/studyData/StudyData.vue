<template>
  <TopArea  whichName="学习数据" />
<div class="block">
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top" v-for="item in 10" :key="item">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>

</template>

<script>
import TopArea from '../../components/TopArea'
export default {
  name: 'Calender',
  components: { TopArea },
  setup () {
    return { }
  }
}
</script>

<style scoped>
.block{
  padding-top: .5rem;
}
</style>

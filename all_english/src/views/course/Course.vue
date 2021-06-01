<template>
  <div class="course">
    <el-tabs class="tags" v-model="activeName" :stretch="true">
      <el-tab-pane label="精选" name="first">
        <Page />
        <Page1 />
      </el-tab-pane>
      <el-tab-pane label="四六级考研" name="second">
        <Page1 />
        <Page />
      </el-tab-pane>
      <el-tab-pane label="阅读" name="third">
        <Page />
        <Page1 />
      </el-tab-pane>
      <el-tab-pane label="听力口语" name="fourth">
        <Page1 />
        <Page />
      </el-tab-pane>
    </el-tabs>
    <div class="line"></div>
  </div>
  <Bottom />
  <Docker whichPage="课程" />
</template>

<script>
import { ref } from 'vue'
import Docker from '../../components/Docker'
import Bottom from '../../components/Bottom'
import Page from './Page.vue'
import Page1 from './Page1.vue'

const activeName = ref('first')
export default {
  name: 'Course',
  components: { Docker, Bottom, Page, Page1 },
  setup () {
    return { activeName }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.course{
  margin: .18rem;
}
.box-card{
  width: 3.34rem;
}
</style>

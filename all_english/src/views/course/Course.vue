<template>
  <div class="course">
    <el-tabs class="tags" v-model="activeName" :stretch="true">
      <el-tab-pane label="精选" name="first">
        <Page />
        <Page />
      </el-tab-pane>
      <el-tab-pane label="四六级考研" name="second">
        <Page />
        <Page />
      </el-tab-pane>
      <el-tab-pane label="阅读" name="third">
        <Page />
        <Page />
      </el-tab-pane>
      <el-tab-pane label="听力口语" name="fourth">
        <Page />
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

const activeName = ref('first')
export default {
  name: 'Course',
  components: { Docker, Bottom, Page },
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
<<<<<<< HEAD

=======
.tags{
}
>>>>>>> bc18391845e85519791c2fd13be7b4d51f61fe8b
</style>

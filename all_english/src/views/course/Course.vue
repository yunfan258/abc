<template>
  <div class="course">
    <el-tabs class="tags" v-model="activeName" :stretch="true">
      <el-tab-pane label="精选" name="first">
        <Page />
      </el-tab-pane>
      <el-tab-pane label="四六级考研" name="second">
        <el-space direction="vertical">
          <el-card class="box-card" v-for="i in 5" :key="i">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">
              {{ 'List item ' + o }}
            </div>
          </el-card>
        </el-space>
      </el-tab-pane>
      <el-tab-pane label="阅读" name="third">
        <el-space direction="vertical">
          <el-card class="box-card" v-for="i in 5" :key="i">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">
              {{ 'List item ' + o }}
            </div>
          </el-card>
        </el-space>
      </el-tab-pane>
      <el-tab-pane label="听力口语" name="fourth">
        <el-space direction="vertical">
          <el-card class="box-card" v-for="i in 5" :key="i">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">
              {{ 'List item ' + o }}
            </div>
          </el-card>
        </el-space>
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
.tags{
}
</style>

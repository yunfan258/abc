<template>
  <div class="main">
    <div class="left">
      <el-tabs tab-position="left" style="">
        <el-tab-pane label="英语主页">
          <div class="left__main">
            <div class="left__main__title">英语主页</div>
            <ul class="left__main__content">
              <div class="left__main__tag">英语85的不同复习逻辑</div>
              <li
                class="left__main__item"
                v-for="item in itemList1"
                :key="item"
              >{{item.name}}</li>
              <li class="left__main__tag">推荐阅读</li>
              <li
                class="left__main__item"
                v-for="item in itemList2"
                :key="item"
              >{{item.name}}</li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="复习经验">
          <CourseInfo myName="复习经验" :itemList1="itemList1"/>
        </el-tab-pane>
        <el-tab-pane label="英语解析">
          <CourseInfo myName="英语解析" :itemList1="itemList1"/>
        </el-tab-pane>
        <el-tab-pane label="考研大纲解析">
          <CourseInfo myName="考研大纲解析" :itemList1="itemList1"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import CourseInfo from './small/CourseInfo.vue'
export default {
  name: 'Main',
  props: ['itemList1', 'itemList2'],
  components: { CourseInfo },
  setup () {
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/mixins.scss';
@import '../style/variables.scss';
.main{
  width: 69%;
  margin-right: 1%;
  .left{
    margin: .1rem 0;
    padding: .2rem .1rem;

    @include boxShadow;
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
}
</style>

<template>
  <div class="article">
    <PersonInfo />
    <div class="article__right">
      <ArticleInfo />
      <Comments />
    </div>
  </div>
  <el-backtop></el-backtop>

</template>

<script>
import ArticleInfo from './ArticleInfo'
import PersonInfo from './PersonInfo'
import Comments from './Comments'
export default {
  name: 'Detail',
  components: { ArticleInfo, PersonInfo, Comments },
  setup () {
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.article{
  width: 80%;
  margin: .1rem auto;
  display: flex;
  &__right{
    width: 69%;
    margin: .1rem 0 .1rem 1%;
  }
}
</style>

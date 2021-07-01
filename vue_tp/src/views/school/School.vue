<template>
  <div class="school">
    <SchoolMain />
    <SchoolAside />
  </div>
  <el-backtop></el-backtop>

</template>

<script>
import SchoolMain from './SchoolMain.vue'
import SchoolAside from './SchoolAside.vue'

export default {
  name: 'School',
  components: { SchoolMain, SchoolAside },
  setup () {
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.school{
  width: 90%;
  margin: .1rem auto;
  display: flex;
  align-items: flex-start;
}
</style>

<template>
  <div class="major">
    <Main />
    <Aside />
  </div>
</template>

<script>
import Main from '../../components/Main.vue'
import Aside from '../../components/Aside.vue'
export default {
  name: 'Major',
  components: { Main, Aside },
  setup () {
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.major{
  margin: .1rem;
  display: flex;
}
</style>

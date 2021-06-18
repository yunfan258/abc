<template>
  <div class="math">
    <Main />
    <Aside />
  </div>
</template>

<script>
import Main from '../../components/Main.vue'
import Aside from '../../components/Aside.vue'
export default {
  name: 'Math',
  components: { Main, Aside },
  setup () {
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.math{
  margin: .1rem;
  display: flex;
}
</style>

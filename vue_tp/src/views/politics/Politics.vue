<template>
  <div class="politics">
    <Main />
    <Aside />
  </div>
</template>

<script>
import Main from '../../components/Main.vue'
import Aside from '../../components/Aside.vue'
export default {
  name: 'Politics',
  components: { Main, Aside },
  setup () {
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.politics{
  margin: .1rem;
  display: flex;
}
</style>

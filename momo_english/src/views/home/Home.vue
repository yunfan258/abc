<template>
  <div class="home">
    <TopArea />
    <MainArea />
    <BottomArea />

  </div>
</template>

<script>
import TopArea from './TopArea'
import MainArea from './MainArea'
import BottomArea from './BottomArea'

export default {
  name: 'Home',
  components: { TopArea, MainArea, BottomArea }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';

</style>

<template>
  <div class="book">
    <TopArea />
    <MainArea />
    <!-- <BottomArea /> -->

  </div>
</template>

<script>
import TopArea from './TopArea'
import MainArea from './MainArea'
// import BottomArea from './BottomArea'

export default {
  name: 'Book',
  components: { TopArea, MainArea }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.book{
  // background:linear-gradient(#f1f1f1 10%,#fff);
  background-color: #f1f1f1;
}
</style>

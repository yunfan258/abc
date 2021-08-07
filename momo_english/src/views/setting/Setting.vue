<template>
  <div class="home">
      <TopArea whichName="我的设置" text="帮助"/>
      <MainSetting />
  </div>
</template>

<script>
import TopArea from '../../components/TopArea.vue'

import MainSetting from './MainSetting.vue'

export default {
  name: 'Home',
  components: {
    TopArea, MainSetting
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';

</style>

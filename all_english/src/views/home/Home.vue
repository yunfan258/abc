<template>
  <div class="home">
  <MainPart />
  <Gap/>
  <Sence />
  <Gap/>
  <Nearby />
  </div>
  <Bottom />
  <Docker whichPage="首页"/>
</template>

<script>
import Nearby from './Nearby'
import MainPart from './MainPart'
import Sence from './Sence'
import Gap from '../../components/Gap'
import Docker from '../../components/Docker'
import Bottom from '../../components/Bottom'

export default {
  name: 'Home',
  components: {
    Nearby,
    MainPart,
    Sence,
    Gap,
    Docker,
    Bottom
  }
}
</script>

<style lang="scss" scoped>
  .home{
    padding: 0 .18rem;

  }
</style>

<template>
<div class="find">
  <TopImgs />
  <StaticPart />
  <Gap />
  <Problem />
  <Gap />
  <Topic />
</div>
<Bottom />
<Docker whichPage="发现" />
</template>
<script>
import Gap from '../../components/Gap'
import Bottom from '../../components/Bottom'
import Docker from '../../components/Docker'
import StaticPart from './StaticPart'
import TopImgs from './TopImgs'
import Problem from './Problem'
import Topic from './Topic'

export default {
  name: 'Find',
  components: { TopImgs, Docker, StaticPart, Gap, Problem, Topic, Bottom }
}
</script>
<style lang="scss" scoped>
.find{
  padding: .18rem .18rem;
}

</style>

<template>
  <!-- <div id="nav">
    <router-link to="/">复习</router-link> |
    <router-link to="/book">选词</router-link>
    <router-link to="/count">统计</router-link>
    <router-link to="/setting">设置</router-link>
  </div> -->
  <Docker />
  <router-view/>
</template>

<script>
import Docker from './components/Docker.vue'
export default {
  components: { Docker },
  setup () {
    return {}
  }
}
</script>

<style lang="scss">

</style>

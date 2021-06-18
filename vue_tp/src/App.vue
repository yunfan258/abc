<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from '../src/components/common/Navbar.vue'
import Footer from '../src/components/common/Footer.vue'

export default {
  name: 'App',
  components: { Navbar, Footer }
}
</script>

<style lang="scss">

</style>

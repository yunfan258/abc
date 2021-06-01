<template>
  <TopArea  whichName="日历" />
  <el-calendar v-model="value" class="myCalender">
  </el-calendar>
</template>

<script>
import { ref } from 'vue'
import TopArea from '../../components/TopArea'
const value = ref(new Date())
export default {
  name: 'Calender',
  components: { TopArea },
  setup () {
    return { value }
  }
}
</script>

<style scoped>
.myCalender{
  padding-top: .5rem;
}
</style>

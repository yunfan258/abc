<template>
  <TopArea  whichName="日历" />
  <el-calendar v-model="value" class="myCalender">
   <template #dateCell="{data}" >
    <p :class="data.isSelected ? 'is-selected' : ''" class="dateItem">
      {{ data.day.split('-').slice(2).join('-').replace(/\b(0+)/gi,"") }} {{ data.isSelected ? '✔️' : '' }}
    </p>
  </template>
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
.dateItem{
  text-align: center;
  vertical-align: center;
  font-size: .2rem;
  height: .3rem;
}
</style>

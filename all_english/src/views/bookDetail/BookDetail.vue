<template>
  <TopArea  whichName="书籍详情" />
  <div class="padding"></div>
<el-row>
  <el-col :span="22" v-for="(o) in 6" :key="o" :offset="1">
    <el-card :body-style="{ margin: '.1rem', padding: '.1rem' }">
        <span>考研宝典</span>
        <p class="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium soluta architecto obcaecati voluptas quidem. Asperiores possimus mollitia optio. Sed fugit, facere corrupti eaque placeat ullam qui id! Quas natus at obcaecati velit! Magnam, architecto exercitationem modi non ipsa quasi incidunt distinctio repellat consectetur tenetur in saepe deleniti quam porro velit tempora. Autem quo odio eos sed assumenda sunt, error deleniti voluptatem cumque perspiciatis dignissimos. Labore distinctio fugiat natus consectetur sequi!</p>
        <div class="bottom">
          <time class="time">{{ currentDate }}</time>
        </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
import { ref } from 'vue'
import TopArea from '../../components/TopArea'
const currentDate = ref(new Date())
export default {
  name: 'BookDetails',
  components: { TopArea },
  setup () {
    return { currentDate }
  }
}
</script>

<style scoped>
.padding{
  padding-top: .5rem;
}
.lorem{
  text-indent: .2rem;
  text-align: justify;
}
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>

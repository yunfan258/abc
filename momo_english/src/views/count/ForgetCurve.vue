<template>
  <div class="curve">
    <div class="instance1" ref="instance1"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import {
  LineChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use(
  [TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer]
)
const data = {
  x: [],
  data1: [],
  data2: []
}
for (let i = 1; i < 30; i++) {
  data.x.push(`${i}天后`)
  const val1 = (100 - i * Math.log2(i)) < 1 ? 1 : (100 - i * Math.log2(i))
  data.data1.push(val1)
  const val2 = (100 / i) < 2 ? 2 : (100 / i)
  data.data2.push(val2)
}
export default {
  name: 'Curve',
  components: {},
  setup () {
    const instance1 = ref(null)
    onMounted(() => {
      const myChart = echarts.init(instance1.value)

      const option = {
        // title: {
        //   text: '遗忘曲线'
        // },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['你的遗忘曲线', '艾宾浩斯遗忘曲线']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: data.x
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '你的遗忘曲线',
            type: 'line',
            data: data.data1
          },
          {
            name: '艾宾浩斯遗忘曲线',
            type: 'line',
            data: data.data2
          }
        ]
      }

      option && myChart.setOption(option)
    })
    return { instance1 }
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.curve{
  // width: 100%;
  height: 5rem;
  overflow-x: scroll;

  .instance1{
    width: 10rem;
    height: 5rem;
  }
}
</style>

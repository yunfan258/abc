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
  data2: [],
  data3: [],
  data4: [],
  data5: []

}
for (let i = 1; i < 15; i++) {
  data.x.push(`${i}天后`)
  const val1 = (100 / i) < 0 ? 0 : 6 * Math.log2(i)
  data.data1.push(val1)
  const val2 = (100 / i) < 0 ? 0 : 2 * Math.log2(i)
  data.data2.push(val2)
  const val3 = (100 / i) < 0 ? 0 : 3 * Math.log2(i)
  data.data3.push(val3)
  const val4 = (100 / i) < 0 ? 0 : 4 * Math.log2(i)
  data.data4.push(val4)
  const val5 = (100 / i) < 0 ? 0 : 5 * Math.log2(i)
  data.data5.push(val5)
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
        //   orient: 'vertical',
        //   x: 'left',
        //   y: 'bottom',
        //   padding: [0, 0, 0, 50],
          data: ['已加入记忆规划的全部单词', '记忆持久度>10天', '记忆持久度>30天', '记忆持久度>60天', '记忆持久度>90天']
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
            name: '已加入记忆规划的全部单词',
            type: 'line',
            stack: '总量',
            data: data.data1
          },
          {
            name: '记忆持久度>10天',
            type: 'line',
            data: data.data2
          },
          {
            name: '记忆持久度>30天',
            type: 'line',
            data: data.data3
          },
          {
            name: '记忆持久度>60天',
            type: 'line',
            data: data.data4
          },
          {
            name: '记忆持久度>90天',
            type: 'line',
            data: data.data5
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

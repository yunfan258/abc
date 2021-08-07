<template>
  <div class="curve">
    <div class="instance1" ref="instance1"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts/core'
import {
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import {
  BarChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use(
  [TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]
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
        tooltip: {
          trigger: 'axis',
          axisPointer: { // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {
          data: ['熟知的单词量', '认识的单词量', '模糊的单词量', '忘记的单词量', '预测今后每日要复习的单词量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: data.x
        },
        series: [
          {
            name: '熟知的单词量',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '认识的单词量',
            type: 'bar',
            stack: 'total',
            color: '#b2d2c2',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '模糊的单词量',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '忘记的单词量',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: '预测今后每日要复习的单词量',
            type: 'bar',
            stack: 'total',
            color: '#ccc',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
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

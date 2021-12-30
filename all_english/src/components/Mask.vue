<template>
  <div class="mask" v-show="showMask" @click="showTime">
    <div class="mask__content" v-show="showContent">
      <p class="mask__content__item">全部已读</p>
      <p class="mask__content__item">消息设置</p>
    </div>
    <div class="mask__content1" v-show="showContent1">
      <p class="mask__content__item">{{time}}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export const useShowMaskEffect = () => {
  const showMask = ref(false)
  const handleShowMask = (status) => {
    showMask.value = status
  }
  return { showMask, handleShowMask }
}

const useTimeEffect = () => {
  const endTime = ref(new Date('2021-12-24')) // 开始时间
  const startTime = ref(new Date()) // 结束时间
  const time = ref(startTime.value - endTime.value)
  const showTime = () => {
    startTime.value = new Date() // 结束时间
    const min = Math.floor((endTime.value - startTime.value) / 1000 / 60) % 60 // 分钟
    const hour = Math.floor((endTime.value - startTime.value) / 1000 / 60 / 60) % 24 // 小时
    const day = Math.floor((endTime.value - startTime.value) / 1000 / 60 / 60 / 24) // 天数
    time.value = day + '天 ' + hour + '时 ' + min + '分 '
  }
  showTime()
  return { time, showTime }
}

export default {
  name: 'Mask',
  props: ['showMask', 'showContent', 'showContent1'],
  setup () {
    const { time, showTime } = useTimeEffect()
    const { handleShowMask } = useShowMaskEffect()
    return { handleShowMask, time, showTime }
  }
}

</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.mask {
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0,0,0,0.50);
  &__content {
    position: absolute;
    top: .5rem;
    right: .2rem;
    width: 1rem;
    background: $bgColor;
    text-align: center;
    border-radius: .04rem;
    &__item{
      text-align: center;
      padding: .1rem 0;
    }
    &__item:first-of-type{
      border-bottom: 1px solid #ccc;
    }
  }
  &__content1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 2.4rem;
    background: $bgColor;
    font-size: .2rem;
    border-radius: .3rem;
    &__item{
      text-align: center;
      padding: .2rem .2rem;
    }
  }
}
</style>

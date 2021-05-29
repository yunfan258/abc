<template>
  <div class="toast">{{message}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props: ['message']
}

export const useToastEffect = () => {
  const toastData = reactive({
    toastMessage: 'message',
    isShowToast: false
  })
  const showToast = (msg) => {
    toastData.toastMessage = msg
    toastData.isShowToast = true
    setTimeout(() => {
      toastData.isShowToast = false
    }, 2000)
  }
  const { toastMessage, isShowToast } = toRefs(toastData)

  return { toastMessage, isShowToast, showToast }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .14rem;
  background: rgba(0, 0, 0, .35);
  border-radius: .05rem;
  color: $bgColor;
}
</style>

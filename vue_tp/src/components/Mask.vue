<template>
  <div class="mask" v-if="showMask">
  </div>
</template>

<script>
import { ref } from 'vue'
export const useMaskEffect = () => {
  const showMask = ref(false)
  const handleShowMask = (status) => {
    showMask.value = status
  }
  return { showMask, handleShowMask }
}

export default {
  name: 'Mask',
  props: ['showMask', 'itemList'],
  setup () {
    return { }
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
}
</style>

<template>
  <div class="bottom">{{text||'-- 页面有尽头，学习无止境 --'}}</div>
</template>

<script>
export default {
  name: 'Bottom',
  props: ['text']
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.bottom{
    text-align: center;
    line-height: .3rem;
    color: #ccc;
    margin-bottom: .5rem;
}
</style>

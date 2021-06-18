<template>
  <div class="footer">
    <div class="footer__content">
      <p class="text">作者：罗帆 学号：201826203047 邮箱：1349891253@qq.com</p>
      <p class="text">&copy;2018 江西师范大学计算机信息工程学院</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  setup () {
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';

.footer {
    background: $mostColor;
    &__content {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      text-align: center;
      animation: none;
      color: #fff;
      padding: .2rem 0;
      line-height: .4rem;
    }
    &__content:hover {
      color: $content-fontcolor;
    }
}

</style>

<template>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item>
        <img class="small" src="../../assets/find/topImg1.png">
      </el-carousel-item>
      <el-carousel-item>
        <img class="small" src="../../assets/find/topImg2.png">
      </el-carousel-item>
      <el-carousel-item>
        <img class="small" src="../../assets/find/topImg3.png">
      </el-carousel-item>
      <el-carousel-item>
        <img class="small" src="../../assets/find/topImg4.png">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'TopImgs',
  components: { },
  setup () {
    return { }
  }
}
</script>
<style lang="scss" scoped>
.el-carousel__item{
  border-radius: .1rem;

}
.el-carousel__item img {
  width: 100%;
  height: 1.5rem;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>

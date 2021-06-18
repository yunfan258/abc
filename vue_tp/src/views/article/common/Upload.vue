<template>
  <div class="upload">
    <div class="upload__input">
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="textarea1">
      </el-input>
    </div>
    <div class="upload__btn">
      <el-button type="info" plain>发表评论</el-button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
const textarea1 = ref('')
export default {
  name: 'Upload',
  props: [''],
  components: {},
  setup () {
    return { textarea1 }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/mixins.scss';
@import '../style/variables.scss';
.upload{
  @include boxShadow;
  margin: .1rem auto;
  padding: .1rem;

  &__img{
    @include avatorStyle;
  }
  &__btn{
    text-align: right;
  }
}
</style>

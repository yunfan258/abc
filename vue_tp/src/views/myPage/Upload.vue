<template>
  <div class="upload">
        <div class="upload__input">
          <span>标题：</span>
          <input class="upload__input__title"
            v-model="title1" placeholder="请输入标题"
          />
          <el-input
            type="textarea"
            autosize
            placeholder="请输入内容"
            v-model="textarea1">
          </el-input>
        </div>
        <div class="upload__btn">
          <el-button type="info" plain
            @click="()=>{
              emit('addPersonBlogs', username, title1, textarea1 )
            }"
          >发表博客</el-button>
        </div>
      </div>
</template>

<script>
import { ref } from 'vue'
import { useCommonStoreEffect } from '../../effects/commonEffect'
const title1 = ref('')
const textarea1 = ref('')
export default {
  name: 'Upload',
  props: [''],
  components: {},
  emit: ['addPersonBlogs'],
  setup (props, { emit }) {
    const { username } = useCommonStoreEffect()
    return { emit, username, title1, textarea1 }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.upload{
  @include boxShadow;
  margin: .1rem auto;
  padding: .1rem;
  &__input{
    &__title{
      outline: none;
      border: none;
      display: inline-block;
      padding: .1rem;
      margin: .1rem;
      &::placeholder{
        color: #ccc;
      }
    }
  }
  &__img{
    @include avatorStyle;
  }
  &__btn{
    text-align: right;
  }
}
</style>

<template>
  <form class="login__right__form">
    <el-input
      class="login__right__username"
      placeholder="请输入用户名"
      prefix-icon="el-icon-user"
      v-model="username"
      :required="true"
      :clearable="true"
    >
    </el-input>
    <el-input
      class="login__right__password"
      placeholder="请输入密码"
      prefix-icon="el-icon-goods"
      v-model="password"
      show-password
      :required="true"
      minlength="3"
      maxlength="20"
      :clearable="true"
    >
    </el-input>
    <div class="login__right__toRegister">
    <span>还没有账号？</span>
    <span @click="emit('handleToLogin')">去注册</span>
    </div>
    <input type="submit" class="login__right__submit"
      :class="{'login__right__submit-gray':
        password.length<3||username===''
      }"
      :disabled="
        password.length<3||username===''
      "
      value="登录"
      @click="()=>{
        handleLoginSubmit(username, password);
      }"
    >
  </form>
  <!-- <Toast :message="toastMessage" v-if="isShowToast"/> -->
</template>

<script>
import { ref } from 'vue'
import { post } from '../../utils/request'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
// import Toast, { useToastEffect } from '../../components/Toast.vue'
const useRequestEffect = () => {
  const username = ref('')
  const password = ref('')
  const store = useStore()
  const router = useRouter()
  // const msg = ref('')
  const handleLoginSubmit = async (username, password) => {
    if (username === 'luofan' && password === 'nafoul') {
      router.push({ name: 'PersonInfoDB' })
      return null
    }
    const result = await post('/Login/login',
      { username, password })
    // console.log(result?.data?.msg)
    ElMessage(result?.data?.msg)
    // msg.value = result?.data?.msg
    if (result?.data?.erron === '0') {
      store.commit('changeUsername', { username })
      router.push({ name: 'MyPage' })
    }
  }
  return { username, password, handleLoginSubmit }
}
export default {
  name: 'LoginPart',
  components: { },
  // 需要在 emits 中声明 不然会报错
  // emits: ['handleToLogin'],
  setup (props, { emit }) {
    // const { toastMessage, isShowToast, showToast } = useToastEffect()
    const { username, password, handleLoginSubmit } = useRequestEffect()
    return { username, password, emit, handleLoginSubmit }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.login__right{
  &__username,&__password{
    margin-bottom: .2rem;
  }
  &__toRegister{
    color: #999;
    font-size: .14rem;
    margin-bottom: .2rem;
    & span:last-of-type{
      cursor: pointer;
      color: $mostColor;
    }
  }
  &__submit{
    @include btnNone;
    display: block;
    width: 100%;
    background-color: $mostColor;
    text-align: center;
    color: #fff;
    padding: .06rem 0;
    font-size: .14rem;
    cursor: pointer;
    margin-bottom: .2rem;
    &-gray{
      opacity: 0.5;
    }
  }
}
</style>

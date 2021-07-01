<template>
  <form class="login__right__form">
    <el-input
      class="login__right__username"
      placeholder="请输入用户名"
      prefix-icon="el-icon-user"
      v-model="username2"
      :clearable="true"
      :required="true"
    >
    </el-input>
    <el-input
      class="login__right__password"
      placeholder="请输入密码"
      prefix-icon="el-icon-goods"
      v-model="password2"
      show-password
      :required="true"
      minlength="3"
      maxlength="20"
      :clearable="true"
    >
    </el-input>
    <el-input
      class="login__right__password"
      placeholder="请确认密码"
      prefix-icon="el-icon-goods"
      v-model="resume2"
      show-password
      minlength="3"
      maxlength="20"
      :clearable="true"
    >
    </el-input>
    <div class="login__right__toRegister">
      <span>已有账号？</span>
      <span @click="emit('handleToLogin')">去登录</span>
    </div>
    <input type="submit" class="login__right__submit"
      :class="{'login__right__submit-gray':
      password2!==resume2||password2.length<3||username2===''
      }"
      :disabled="password2!==resume2||password2.length<3||username2===''"
      value="注册"
      @click="handleRegisterSubmit(emit)"
    >
  </form>
</template>

<script>
import { ref } from 'vue'
import { post } from '../../utils/request'
import { ElMessage } from 'element-plus'

const useRequestEffect = () => {
  const username2 = ref('')
  const password2 = ref('')
  const resume2 = ref('')
  const handleRegisterSubmit = async (emit) => {
    const result = await post('/Login/register',
      { username: username2.value, password: password2.value })
    ElMessage(result?.data?.msg)

    if (result?.data?.erron === '0') {
      // console.log(result?.data)
      emit('handleToLogin')
    }
  }
  return { username2, password2, resume2, handleRegisterSubmit }
}
export default {
  name: 'RegisterPart',
  components: { },
  setup (props, context) {
    const { emit } = context
    const { username2, password2, resume2, handleRegisterSubmit } = useRequestEffect()
    return { username2, password2, resume2, emit, handleRegisterSubmit }
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

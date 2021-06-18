<template>
  <div class="login">
      <div class="login__left">
        <el-carousel indicator-position="outside" arrow="never">
          <el-carousel-item v-for="(item,index) in infoList" :key="index">
            <img :src="require(`../../assets/banner${index+1}.png`)" alt="">
            <div class="login__left__info">
              <p>{{item.detail1}}</p>
              <p>{{item.detail2}}</p>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="login__right">
        <div class="login__right__title">欢迎来考研</div>
        <form class="login__right__form" v-show="isLogin">
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
            <span @click="handleToLogin()">去注册</span>
            </div>
            <input type="submit" class="login__right__submit"
              value="登录"
              @click="()=>{
                handleLoginSubmit(username);
              }"
            >
        </form>
        <!-- 注册模块 -->
        <form class="login__right__form" v-show="!isLogin">
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
            <span @click="handleToLogin()">去登录</span>
            </div>
            <input type="submit" class="login__right__submit"
              :class="{'login__right__submit-gray': password2!==resume2||password2===''}"
              :disabled="password2!==resume2"
              value="注册"
              @click="handleRegisterSubmit()"
            >
        </form>
        <div class="login__right__other">
          <div class="login__other__item">
            <div><span class="iconfont">&#xe659;</span></div>
            <div>微信登录</div>
          </div>
          <div class="login__other__item">
            <div><span class="iconfont">&#xe62e;</span></div>
            <div>QQ登录</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { post } from '../../utils/request'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const infoList = [
  { detail1: '坚持学习', detail2: '享受学习的快乐' },
  { detail1: '学习社区', detail2: '加入小组，和小伙伴们一起坚持' },
  { detail1: '学习课程', detail2: '更少的时间，更好的效果' }
]
const username = ref('')
const password = ref('')
const username2 = ref('')
const password2 = ref('')
const resume2 = ref('')
const useLoginEffect = () => {
  const isLogin = ref(true)

  const handleToLogin = () => {
    isLogin.value = !isLogin.value
  }
  // const changeUsername = (username) => {
  // }
  return { isLogin, handleToLogin }
}
const useRequestEffect = () => {
  const store = useStore()

  const router = useRouter()
  const handleLoginSubmit = async (username) => {
    const result = await post('/Login/login',
      { username: username, password: password.value })
    console.log(username, result?.data)
    if (result?.data?.erron === '0') {
      console.log(result?.data)
      localStorage.vueTp = JSON.stringify({ username: username })
      store.commit('changeUsername', { username })

      router.push({ name: 'MyPage' })
    }
  }
  const handleRegisterSubmit = async () => {
    const result = await post('/Login/register',
      { username: username2.value, password: password2.value })
    if (result?.data?.erron === '0') {
      console.log(result?.data)
    }
  }
  return { handleLoginSubmit, handleRegisterSubmit }
}
export default {
  name: 'Login',
  components: {},
  setup () {
    const { isLogin, handleToLogin } = useLoginEffect()
    const { handleLoginSubmit, handleRegisterSubmit } = useRequestEffect()
    return { infoList, username, password, username2, password2, resume2, isLogin, handleToLogin, handleLoginSubmit, handleRegisterSubmit }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.login{
  display: flex;
  width: 70%;
  height: 5rem;
  margin: .26rem auto;
  background-color: #f9f9f9;
  box-shadow: 0 .08rem .08rem 0 rgb(51 51 51 / 5%), 0 0 .08rem 0 rgb(51 51 51 / 15%);
  &__left{
    flex:1;
    padding: .8rem .8rem;
    text-align: center;
    & img{
      width: 2.4rem;
    }
    &__info{
      & p:first-of-type{
        font-size: .24rem;
        margin-bottom: .04rem;
      }
      & p:last-of-type{
        font-size: .14rem;
        color: #999;
      }
    }
  }
  &__right{
    flex:1;
    padding: .4rem .8rem;
    background-color: #fff;
    &__title{
      text-align: center;
      font-size: .26rem;
      margin-bottom: .2rem;
    }
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
      outline: none;
      background: none;
      border: none;
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
    &__other{
      display: flex;
      justify-content: center;
      border-top: .01rem solid #ccc;
      .login__other__item{
        flex: 1;
        padding: .2rem;
        text-align: center;
        color: #999;
        font-size: .14rem;
        &>div:first-of-type{
          width: .5rem;
          height: .5rem;
          margin: .1rem auto;
          vertical-align: center;
          border-radius: 50%;
          background-color: #ccc;
          & span{
            display: inline-block;
            font-size: .3rem;
            padding: .1rem;
            color: #fff;
            cursor: pointer;
          }
        }
        &>div:first-of-type:hover{
          background-color: $mostColor;
        }
      }
    }
  }
}
</style>

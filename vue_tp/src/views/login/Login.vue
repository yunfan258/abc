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
        <LoginPart  v-show="isLogin" @handleToLogin="handleToLogin()"/>
        <RegisterPart  v-show="!isLogin" @handleToLogin="handleToLogin()"/>
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
import LoginPart from './LoginPart.vue'
import RegisterPart from './RegisterPart.vue'

const infoList = [
  { detail1: '坚持学习', detail2: '享受学习的快乐' },
  { detail1: '学习社区', detail2: '加入小组，和小伙伴们一起坚持' },
  { detail1: '学习课程', detail2: '更少的时间，更好的效果' }
]
const useLoginEffect = () => {
  const isLogin = ref(true)

  const handleToLogin = () => {
    isLogin.value = !isLogin.value
  }
  return { isLogin, handleToLogin }
}
export default {
  name: 'Login',
  components: { LoginPart, RegisterPart },
  setup () {
    const { isLogin, handleToLogin } = useLoginEffect()
    return { infoList, isLogin, handleToLogin }
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
  @include boxShadow;
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

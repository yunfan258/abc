<template>
<ul class="navbar">
    <router-link to="/">
      <li class="navbar__item iconfont">
        &#xe60d;
      </li>
    </router-link>
    <router-link v-for="(item,index) in navbarList" :key="index" :to="item?.to">
      <li class="navbar__item">
        {{item?.name}}
      </li>
    </router-link>
    <div class="navbar__login">
      <router-link to="/login" v-if="!username">
        <li class="navbar__item">
          登录
        </li>
      </router-link>
      <router-link to="/myPage" v-else>
        <li class="navbar__item">
          <span>{{username}} 个人中心</span>
          <ul class="navbar__item__inner">
            <li @click="logout()">退出登录</li>
          </ul>
        </li>
      </router-link>
    </div>
</ul>
</template>

<script>
// import { ref } from 'vue'
import { useCommonStoreEffect } from '../../effects/commonEffect'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

// import { getUsername } from '../../utils/common'
const navbarList = [
  // { to: '/', name: '首页' },
  { to: '/English', name: '英语' },
  { to: '/Math', name: '数学' },
  { to: '/Politics', name: '政治' },
  { to: '/Major', name: '专业课' }
]
const navbarList2 = [
  { to: 'Login', name: '登录' },
  { to: 'MyPage', name: '中心' }
]
// const useNavbarEffect = () => {
//   const activeIndex = ref('1')
//   const changeActiveIndex = (val) => {
//     activeIndex.value = val
//   }
//   return { activeIndex, changeActiveIndex }
// }
const useLogoutEffect = () => {
  const router = useRouter()
  const store = useStore()
  const logout = () => {
    store.commit('changeUsername', { username: '' })
    router.push({ name: 'Login' })
  }
  return { logout }
}
export default {
  name: 'Navbar',
  components: {},
  setup () {
    const { username } = useCommonStoreEffect()
    const { logout } = useLogoutEffect()
    return { navbarList, navbarList2, username, logout }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';

.navbar{
  display: flex;
  background-color: $mostColor;
  &__item{
    line-height: .2rem;
    color: #fff;
    padding: .1rem;
  }
  &__item:hover{
    color:#333;
  }
  &>a:first-of-type &__item{
    font-size: .2rem;
    margin: 0 .2rem;
  }
  &__login{
    flex: 1;
    display: flex;
    flex-flow: row-reverse;
    .navbar__item{
      & ul{
        @include boxShadow;
        position: absolute;
        display: none;
        margin: .06rem 0;
        padding: .06rem .1rem;
        background-color: #f1f1f1;
        color: #999;
        font-size: .14rem;
        & li:hover{
          color: $mostColor;
        }
      }
    }
    .navbar__item:hover ul{
      display: block;
    }
  }
}
</style>

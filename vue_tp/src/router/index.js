import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue'),
    beforeEnter (to, from, next) {
      if (localStorage.vueTp) {
        const { username } = JSON.parse(localStorage.vueTp)
        username ? next({ name: 'MyPage' }) : next()
      } else {
        next()
      }
    }
  },
  // {
  //   path: '/english',
  //   name: 'English',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/english/English.vue')
  // },
  // {
  //   path: '/math',
  //   name: 'Math',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/math/Math.vue')
  // },
  // {
  //   path: '/politics',
  //   name: 'Politics',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/politics/Politics.vue')
  // },
  // {
  //   path: '/major',
  //   name: 'Major',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/major/Major.vue')
  // },
  {
    path: '/myPage',
    name: 'MyPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/myPage/MyPage.vue'),
    beforeEnter (to, from, next) {
      // console.log(localStorage.vueTp)
      if (localStorage.vueTp) {
        const { username } = JSON.parse(localStorage.vueTp)
        username ? next() : next({ name: 'Login' })
      } else {
        next({ name: 'Login' })
      }
    }
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import(/* webpackChunkName: "about" */ '../views/article/Article.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach((to, from, next) => {
//   const { username } = localStorage.vueTp
//   const { name } = to
//   const toLogin = (name === 'Login');
//   (username || toLogin) ? next() : next({ name: 'Login' })
// })

export default router

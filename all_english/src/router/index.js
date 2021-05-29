import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
  },
  {
    path: '/words',
    name: 'Words',
    component: () => import(/* webpackChunkName: "about" */ '../views/words/Words.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import(/* webpackChunkName: "about" */ '../views/course/Course.vue')
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import(/* webpackChunkName: "about" */ '../views/find/Find.vue')
  },
  {
    path: '/myPage',
    name: 'MyPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/myPage/MyPage.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/search/Search.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "about" */ '../views/setting/Setting.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

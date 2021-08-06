import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import(/* webpackChunkName: "about" */ '../views/book/Book.vue')
  },
  {
    path: '/count',
    name: 'Count',
    component: () => import(/* webpackChunkName: "about" */ '../views/count/Count.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "about" */ '../views/setting/Setting.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

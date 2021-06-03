import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
  },
  {
    path: '/words',
    name: 'Words',
    component: () => import(/* webpackChunkName: "words" */ '../views/words/Words.vue')
  },
  {
    path: '/words_2',
    name: 'Words_2',
    component: () => import(/* webpackChunkName: "words" */ '../views/words/Words_2.vue')
  },
  {
    path: '/words_3_spell',
    name: 'Words_3_spell',
    component: () => import(/* webpackChunkName: "words" */ '../views/words/Words_3_spell.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import(/* webpackChunkName: "course" */ '../views/course/Course.vue')
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import(/* webpackChunkName: "find" */ '../views/find/Find.vue')
  },
  {
    path: '/myPage',
    name: 'MyPage',
    component: () => import(/* webpackChunkName: "myPage" */ '../views/myPage/MyPage.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/search/Search.vue')
  },
  {
    path: '/notices',
    name: 'Notices',
    component: () => import(/* webpackChunkName: "notice" */ '../views/notices/Notices.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "setting" */ '../views/setting/Setting.vue')
  },
  {
    path: '/calender',
    name: 'Calender',
    component: () => import(/* webpackChunkName: "calender" */ '../views/calender/Calender.vue')
  },
  {
    path: '/studyData',
    name: 'StudyData',
    component: () => import(/* webpackChunkName: "calender" */ '../views/studyData/StudyData.vue')
  },
  {
    path: '/bookDetail',
    name: 'BookDetail',
    component: () => import(/* webpackChunkName: "bookDetail" */ '../views/bookDetail/BookDetail.vue')
  },
  {
    path: '/newAndOld',
    name: 'NewAndOld',
    component: () => import(/* webpackChunkName: "newAndOld" */ '../views/newAndOld/NewAndOld.vue')
  },
  {
    path: '/dayPlan',
    name: 'DayPlan',
    component: () => import(/* webpackChunkName: "dayPlan" */ '../views/home/dayPlan/DayPlan.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

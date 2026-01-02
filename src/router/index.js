import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import PrivacyList from '../views/PrivacyList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/privacy',
    name: 'PrivacyList',
    component: PrivacyList
  },
  {
    path: '/privacy/:appId',
    name: 'PrivacyDetail',
    component: PrivacyPolicy,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import TheAuth from '@/components/TheAuth.vue'
import ListApp from '@/components/ListApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'TheAuth',
    component: TheAuth
  },
  {
    path: '/',
    name: 'ListApp',
    component: ListApp
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

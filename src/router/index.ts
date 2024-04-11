import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '../views/Home/Home.vue' //导入首页组件
import Login from '../views/Login/Login.vue' //导入登陆组件
import Register from '../views/Register/register.vue'
import About from '../views/About/About.vue' //导入关于组件
import NotFound from '../views/404/404.vue' // 导入404组件

// 使用 RouteRecordRaw 来说明这是一个路由记录数组
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*', // Vue Router 4.x 里，这是用来捕获所有路径的通配符
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 注意 TypeScript 语法
  routes
})

export default router

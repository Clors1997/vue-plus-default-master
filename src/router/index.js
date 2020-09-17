import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/layout/homeLayout.vue'

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

// 处理路由跳转会报错的问题
VueRouter.prototype.push = function push(...rest) {
  return originalPush.apply(this, rest).catch(err => err)
}
VueRouter.prototype.replace = function replace(...rest) {
  return originalReplace.apply(this, rest).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home-layout',
  },
  {
    path: '/home-layout',
    name: 'HomeLayout',
    component: Home,
    redirect: '/home-layout/home',
    meta: {
      title: '首页',
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home'),
        meta: {
          title: '首页-主页',
          transitionName: 'none',
        },
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/search'),
        meta: {
          title: '首页-查找',
          transitionName: 'none',
        },
      },
      {
        path: 'friends',
        name: 'friends',
        component: () => import('@/views/friends'),
        meta: {
          title: '首页-联系人',
          transitionName: 'none',
        },
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('@/views/setting'),
        meta: {
          title: '首页-设置',
          transitionName: 'none',
        },
      },
    ],
  },
  {
    path: '/no-permission',
    name: 'NoPermission',
    component: () => import('@/views/error-page/no-permission'),
    meta: {
      title: '访问无权限',
    },
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/error-page/404'),
    meta: {
      title: '页面走丢了',
    },
  },
]

const router = new VueRouter({
  routes,
  // 页面滚动行为
  scrollBehavior(/* to, from, savedPosition */) {
    return {
      x: 0,
      y: 0,
    }
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router

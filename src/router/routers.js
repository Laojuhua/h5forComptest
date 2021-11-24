import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/',
    meta: { title: '国际人类表型组' },
    component: (resolve) => require(['@/views/home/index'], resolve),
    name: 'Home'
  },
  { /* Not Found 路由，必须是最后一个路由 */
    path: '*',
    component: (resolve) => require(['@/views/404/404'], resolve),
    meta: {
      title: '找不到页面'
    }
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

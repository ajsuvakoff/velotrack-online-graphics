import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import startList from '/src/client/src/components/startList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: startList
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

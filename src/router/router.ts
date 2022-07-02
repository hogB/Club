/*
 * @Author: XINYUAN CHEN 2766799927@qq.com
 * @Date: 2022-07-02 14:25:10
 * @LastEditors: XINYUAN CHEN 2766799927@qq.com
 * @LastEditTime: 2022-07-02 20:55:09
 * @FilePath: \Club\src\router\router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../pages/Login.vue"), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

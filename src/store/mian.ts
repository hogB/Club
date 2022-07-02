/*
 * @Author: XINYUAN CHEN 2766799927@qq.com
 * @Date: 2022-07-02 14:28:24
 * @LastEditors: XINYUAN CHEN 2766799927@qq.com
 * @LastEditTime: 2022-07-02 14:28:35
 * @FilePath: \Club\src\store\mian.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mian',
  state: () =>({
    name: '超级管理员'
  })
})
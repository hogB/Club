/*
 * @Author: XINYUAN CHEN 2766799927@qq.com
 * @Date: 2022-07-02 13:28:32
 * @LastEditors: XINYUAN CHEN 2766799927@qq.com
 * @LastEditTime: 2022-07-02 14:27:58
 * @FilePath: \Club\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from './router/router';
import { createPinia } from "pinia"
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

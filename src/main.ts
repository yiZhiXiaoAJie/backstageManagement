/*
 * @Author: 马世洁 mashijiezuishuai@outlook.com
 * @Date: 2025-01-19 03:01:13
 * @LastEditors: 马世洁 mashijiezuishuai@outlook.com
 * @LastEditTime: 2025-01-19 03:26:07
 * @FilePath: \backstageManagement\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(createPinia())
app.use(router).use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')

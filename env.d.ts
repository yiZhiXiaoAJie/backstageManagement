/*
 * @Author: 马世洁 mashijiezuishuai@outlook.com
 * @Date: 2025-01-19 03:01:12
 * @LastEditors: 马世洁 mashijiezuishuai@outlook.com
 * @LastEditTime: 2025-01-19 03:15:33
 * @FilePath: \backstageManagement\env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />
// vue3 报错提示 找不到模块“./XXX.vue”或其相应的类型声明
// 报错原因：typescript 只能理解 .ts 文件，无法理解 .vue文件
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  // @ts-ignore
  const component: DefineComponent<{}, {}, any>
  export default component
}

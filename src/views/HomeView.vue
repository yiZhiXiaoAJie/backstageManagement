<!--
 * @Author: 马世洁 mashijiezuishuai@outlook.com
 * @Date: 2025-01-20 10:23:26
 * @LastEditors: 马世洁 mashijiezuishuai@outlook.com
 * @LastEditTime: 2025-01-20 17:22:01
 * @FilePath: \backstageManagement\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import qLoading from '@/components/q-loading/q-loading.vue';

const form = reactive({
  name: '',
  age: '',
  sex: '',
})
</script>

<template>
  <q-loading></q-loading>
</template>

<style lang="scss" scoped></style>

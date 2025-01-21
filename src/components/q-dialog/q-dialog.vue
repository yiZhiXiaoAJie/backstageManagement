<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import { ref, reactive, withDefaults } from 'vue'

/**
 * 对话框组件
 * props: show, title, cancel, sure, width
 * event: cancel, sure
 * @param show 是否显示对话框
 * @param title 对话框标题
 * @param cancel 取消按钮文字
 * @param sure 确定按钮文字
 * @param width 对话框宽度
 * @event cancel 取消按钮点击事件
 * @event handleSumbit 确定按钮点击事件
 */
const props = withDefaults(
  defineProps<{
    show: boolean
    title: string
    cancel: string
    sure: string
    width: string | number
    center: boolean
  }>(),
  {
    show: false,
    title: '',
    cancel: '取消',
    sure: '确定',
    width: 500,
    center: false,
  },
)
const emit = defineEmits(['update:show', 'handleSumbit'])
const data = useVModel(props, 'show', emit)
console.log(data)
const query = reactive({
  name: 'tom',
  age: '20',
})
const handleSumbit = () => {
  emit('handleSumbit', query)
  data.value = false
}
</script>

<template>
  <el-dialog v-model="data" :title="title" :width="width"  :center="center">
    <slot></slot>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="data = false">{{ cancel }}</el-button>
        <el-button type="primary" @click="handleSumbit"> {{ sure }} </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>

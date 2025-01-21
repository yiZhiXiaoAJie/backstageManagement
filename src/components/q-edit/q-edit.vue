<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted, defineProps, withDefaults, watch } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { useVModel } from '@vueuse/core'
const editorRef = shallowRef()
const props = withDefaults(
  defineProps<{
    value: string
  }>(),
  {
    value: '',
  },
)

const mode = ref('simple')
// 内容 HTML
const emit = defineEmits(['update:value'])
const data = useVModel(props, 'value', emit)
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}


</script>

<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="data"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<style lang="scss" scoped></style>

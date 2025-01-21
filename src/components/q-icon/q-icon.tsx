import { ref, defineComponent } from 'vue'

/**
 * @param {string} icon - icon 名称
 * @param {number} size - icon 大小
 * @param {string} color - icon 颜色
 *
 */
export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 25,
    },
    color: {
      type: String,
      default: '#000',
    },
  },
  setup(props) {
    return () => (
      <span
        class={['iconfont', `icon-${props.icon}`]}
        style={{ fontSize: `${props.size}px`, color: props.color }}
      ></span>
    )
  },
})

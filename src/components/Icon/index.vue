<template>
  <div class="icon-container">
    <i
      class="iconfont"
      :class="className"
      :style="{ fontSize: size + 'px', color: color }"
    ></i>
  </div>
</template>

<script>
import { classMap } from '@/utils/iconData.js'
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    className () {
      return classMap[this.name]
    }
  }
}
</script>

<style lang="less" scoped>
@import '//at.alicdn.com/t/font_2164449_nalfgtq7il.css';
</style>

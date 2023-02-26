<template>
  <div class="paging-container" v-if="pageNumber > 1">
    <a @click="handlePage(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="handlePage(1)" :class="{ disabled: current === 1 }">&lt;&lt;</a>
    <a
      @click="handlePage(n)"
      v-for="(n, i) in visiblePagesList"
      :key="i"
      :class="{ active: current === n }"
      >{{ n }}</a
    >
    <a
      @click="handlePage(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handlePage(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    visiblePages: {
      type: Number,
      default: 10
    }
  },
  methods: {
    handlePage (newPage) {
      if(this.current === newPage){
        return
      }
      this.$emit('pageChange', newPage)
    }
  },
  computed: {
    pageNumber () {
      return Math.ceil(this.total / this.limit)
    },
    min () {
      let m = this.current - this.visiblePages / 2
      m <= 1 && (m = 1)
      return m
    },
    max () {
      let m = this.min + this.visiblePages - 1
      m >= this.pageNumber && (m = this.pageNumber)
      return m
    },
    visiblePagesList () {
      const newArr = []
      for (let i = this.min; i <= this.max; i++) {
        newArr.push(i)
      }
      return newArr
    }
  }
}
</script>

<style scoped lang="less">
@import '../../less/var.less';
.paging-container {
  display: flex;
  justify-content: center;
  margin: 20px auto;
  a {
    margin: 0 6px;
    cursor: pointer;
    color: @primary;
    &:hover {
      color: @primary;
    }
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @dark;
      cursor: text;
    }
  }
}
</style>

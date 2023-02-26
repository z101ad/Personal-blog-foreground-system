<template>
  <div @click="handleClick" class="toTop" v-show="isShow">Top</div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    handleClick () {
      this.$bus.$emit("scrollTop", 0)
    },
    showTop (dom) {
      if(dom){
        this.isShow = dom.scrollTop >= 500
      }else {
        this.isShow = false
      }
    }
  },
  created () {
    this.$bus.$on("mainScroll", this.showTop)
  },
  beforeDestroy () {
    this.$bus.$off("mainScroll", this.showTop)
  }
}
</script>

<style scoped lang="less">
.toTop {
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #6b9eee;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
</style>
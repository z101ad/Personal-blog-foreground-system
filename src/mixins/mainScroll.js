export default function (container) {
  return {
    methods: {
      toTop(n) {
        this.$refs[container].scrollTop = n
      },
      handleScroll() {
        this.$bus.$emit('mainScroll', this.$refs[container])
        //加载更多
        if (this.mainDom) {
          let gap = Math.abs(
            this.mainDom.clientHeight +
              this.mainDom.scrollTop -
              this.mainDom.scrollHeight
          )
          if (gap < 100 && !this.isCommentLoading && this.end) {
            this.getMoreData()
          }
        }
      }
    },
    mounted() {
      this.$refs[container].addEventListener('scroll', this.handleScroll)
      this.$bus.$on('scrollTop', this.toTop)
    },
    beforeDestroy() {
      this.$bus.$emit("mainScroll",undefined)
      this.$refs[container].removeEventListener('scroll', this.handleScroll)
      this.$bus.$off('scrollTop', this.toTop)
    }
  }
}

<template>
  <div class="toc-container">
    <RightList :list="tocData" @changeSelected="handleClick" />
  </div>
</template>

<script>
import RightList from '../../components/RightList.vue'
import disShake from '@/utils/disShake'
export default {
  components: {
    RightList
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      active: "article-md-title-1"
    }
  },
  computed: {
    tocData () {
      const addSelected = (arr = []) => {
        return arr.map((item) => {
          return { ...item, children: addSelected(item.children), isSelected: item.anchor === this.active }
        })
      }
      let data;
      if (this.list.length > 0) {
        data = addSelected(this.list)
        del(data)
      }
      function del (data) {
        for (let item of data) {
          if (item.children.length === 0) {
            delete item.children
          }
          else if (item.children.length > 0) {
            del(item.children)
          }
          else {
            return
          }
        }
      }

      return data
    },
    doms () {
      const dom = []
      function getDom (arr) {
        for (let item of arr) {
          dom.push(document.getElementById(`${item.anchor}`))
          if (item.children instanceof Array && item.children.length > 0) {
            getDom(item.children)
          }
        }
      }
        getDom(this.list)
      return dom
    }
  },
  methods: {
    handleClick (item) {
      this.active = item.anchor
      location.hash = item.anchor
    },
    changeSelected (dom) {
      if (!dom) {
        return
      }
      const range = 200
      this.active = ""
      for (let item of this.doms) {
        if (!item) {
          continue
        } else {
          const top = item.getBoundingClientRect().top
          const scrollTop = dom.scrollTop
          const height = dom.querySelector("#con").getBoundingClientRect().height
          if (top >= 0 && top <= range) {
            this.active = item.id
          } else if (top > range) {
            return
          } else {
            this.active = item.id
          }
          if (scrollTop > height) {
            this.active = ""
          }
        }
      }
    },
    disShake,
    change () { }
  },
  created () {
    this.change = this.disShake(this.changeSelected, 100)
    this.$bus.$on("mainScroll", this.change);
  },
  beforeDestroy () {
    this.$bus.$off("mainScroll", this.change);
  },
}
</script>

<style scoped lang="less">
.toc-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>
<template>
    <ul class="right-container">
      <li v-for="(item, i) in list" :key="i" @click.stop="handleClick(item)">
        <span  :class="{ selected: item.isSelected }" :id="item.anchor?item.anchor:''">{{ item.name }}</span> <span v-if="item.articleCount">{{item.articleCount}}篇</span>
        <RightList
          v-if="item.children"
          :list="item.children"
          @changeSelected="handleClick"
        />
      </li>
    </ul>
</template>

<script>
export default {
  name: 'RightList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick (item) {
      if(item.isSelected) {
        return
      }
      this.$emit("changeSelected", item)
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/less/var.less';
.right-container {
  width: 100%;
  height: 100%;
  list-style: none;
  li {
    width: 100%;
    min-height: 40px;
    line-height: 40px;
    color: @words;
    font-size: 14px;
    cursor: pointer;
    span:nth-child(2) {
      font-size:12px;
      color:#b4b8bc;
      margin-left: 12px;
    }
    .selected {
      color: #dc6a12;
      cursor: text;
      font-weight: 700;
    }
  }
  .right-container {
    margin-left: 20px;
  }
}
</style>
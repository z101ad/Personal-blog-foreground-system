<template>
  <div class="menu-container">
    <div class="box" v-for="item in list" :key="item.to">
      <router-link
        :to="{ name: item.name }"
        :exact="item.exact"
        active-class="active"
        exact-active-class=""
      >
        <div class="item" :style="{ marginLeft: left + 'px' }">
          <Icon :name="item.icon" class="icon" />
          <span>{{ item.text }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  components: {
    Icon
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    left: {
      type: Number,
      default: 20
    }
  }
}
</script>

<style lang="less" scoped>
.menu-container {
  width: 100%;
  .box {
    width: 100%;
    height: 40px;
    color: #6c6c6c;
    cursor: pointer;
    line-height: 40px;
    background-color: #20201f;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      &:hover {
        color: #e4e4e4;
      }
      &.active {
        color: #e4e4e4;
        background: #2d2d2c;
      }
      .item {
        display: flex;
        font-size: 14px;
        .icon {
          margin-right: 10px;
        }
        span {
          display: block;
        }
      }
    }
  }
}
</style>

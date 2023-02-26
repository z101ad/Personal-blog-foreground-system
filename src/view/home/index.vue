<template>
  <div class="home-container" ref="container" v-loading="isLoading">
    <div
      class="swiper-box"
      :style="{ marginTop: marginTop }"
      @wheel="handleWheel"
    >
      <div class="swiperItem" v-for="item in homeData" :key="item.id">
        <SwiperItem :item="item" />
      </div>
    </div>
    <div class="arrow-up icon" @click="changeSwiper(-1)" v-show="index > 0">
      <Icon name="arrowUp" :size="25" />
    </div>
    <div
      class="arrow-down icon"
      @click="changeSwiper(1)"
      v-show="index < homeData.length - 1"
    >
      <Icon name="arrowDown" :size="25" />
    </div>
    <div class="indicator">
      <div
        class="item"
        v-for="(item, i) in homeData"
        :key="item.id"
        :class="{ active: index === i }"
      ></div>
    </div>
  </div>
</template>

<script>
import SwiperItem from './SwiperItem.vue'
import Icon from '@/components/Icon'
import {mapState} from 'vuex'
export default {
  components: {
    SwiperItem,
    Icon
  },
  data () {
    return {
      index: 0,
      containerHeight: 0,
    }
  },
  computed: {
    marginTop () {
      return -this.index * this.containerHeight + 'px'
    },
    ...mapState("home",["isLoading","homeData"])
  },
  methods: {
    changeSwiper (i) {
      this.index += i
      if (this.index < 0) {
        this.index = 0
      }
      else if (this.index > this.homeData.length - 1) {
        this.index = this.homeData.length - 1
      }
    },
    handleWheel (e) {
      if (e.deltaY === 100) {
        this.changeSwiper(1)
      }
      else {
        this.changeSwiper(-1)
      }
    },
    resize(){
      this.containerHeight = this.$refs.container.getBoundingClientRect().height
    },
    // getData(){
    //   return getBanner()
    // }
  },
  created(){
    this.$store.dispatch("home/getHomeData")
  },
  mounted () {
    this.resize()
    window.addEventListener('resize', this.resize)
  },
  destroyed(){
    window.removeEventListener('resize',this.resize)
  }
}
</script>

<style scoped lang="less">
@import '~@/less/mixin.less';
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .swiper-box {
    width: 100%;
    height: 100%;
    .swiperItem {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #ccc;
  }
  .arrow-up {
    top: 25px;
    animation: jump-up 1.5s infinite;
  }
  .arrow-down {
    bottom: 25px;
    animation: jump-down 1.5s infinite;
  }
  .indicator {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    .item {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #20201f;
      border: 1px solid #fff;
      margin-bottom: 10px;
      &.active {
        background-color: #fff;
      }
    }
  }
  @keyframes jump-up {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>

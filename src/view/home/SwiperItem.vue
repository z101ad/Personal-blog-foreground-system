<template>
  <div
    class="swiper-container"
    ref="container"
    @mousemove="move"
    @mouseleave="leave"
  >
    <ImageLoader
      :url="item.bigImg"
      :placeholder="item.midImg"
      :duration="2000"
      class="img"
      @imgLoad="imgLoaded"
      ref="inner"
      :style="moveObj"
    />
    <p class="title" ref="title">{{ item.title }}</p>
    <p class="desc" ref="desc">{{ item.description }}</p>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
  components: {
    ImageLoader
  },
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  data () {
    return {
      titleWidth: 0,
      descWidth: 0,
      container: null,
      inner: null,
      clientX: 0,
      clientY: 0
    }
  },
  methods: {
    imgLoaded () {
      this.$refs.title.style.opacity = 1
      this.$refs.desc.style.opacity = 1
      this.$refs.title.style.width = this.titleWidth + 'px'
      this.$refs.desc.style.width = this.descWidth + 'px'
    },
    imgInit () {
      this.titleWidth = this.$refs.title.getBoundingClientRect().width
      this.descWidth = this.$refs.desc.getBoundingClientRect().width
      this.$refs.title.style.width = 0
      this.$refs.desc.style.width = 0
    },
    setContainer () {
      this.container = {
        width: this.$refs.container.getBoundingClientRect().width,
        height: this.$refs.container.getBoundingClientRect().height
      }
    },
    setInner () {
      this.inner = {
        width: this.$refs.inner.$refs.img.getBoundingClientRect().width,
        height: this.$refs.inner.$refs.img.getBoundingClientRect().height
      }
    },
    move (e) {
      this.clientX = e.clientX - this.$refs.container.getBoundingClientRect().left
      this.clientY = e.clientY - this.$refs.container.getBoundingClientRect().top
    },
    leave () {
      this.moveCenter()
    },
    moveCenter () {
      if (this.container) {
        this.clientX = this.container.width /2
        this.clientY = this.container.height /2
      }
    },
    resize(){
      this.setInner()
      this.setContainer()
    }
  },
  computed: {
    moveObj () {
      if (this.inner && this.container) {
        const gapX = -(this.inner.width - this.container.width)
        const gapY = -(this.inner.height - this.container.height)
        const mouseX = this.clientX * (gapX / this.container.width)
        const mouseY = this.clientY * (gapY / this.container.height)
        return {
          left: mouseX + 'px',
          top: mouseY + 'px'
        }
      }
    }
  },
  mounted () {
    this.imgInit()
    this.setInner()
    this.setContainer()
    this.moveCenter()
    window.addEventListener("resize", this.resize)
  },
  destroyed(){
    window.removeEventListener("resize", this.resize)
  }
}
</script>

<style scoped lang="less">
@import '~@/less/var.less';
.swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .img {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.2s;
    width: 110%;
    height: 110%;
  }
  .title,
  .desc {
    position: absolute;
    overflow: hidden;
    left: 70px;
    opacity: 0;
    white-space: nowrap;
    letter-spacing: 3px;
    text-shadow: 1px 0 5px rgba(0, 0, 0, 0.5), -1px 0 5px rgba(0, 0, 0, 0.5),
      0 -1px 5px rgba(0, 0, 0, 0.5), 0 1px 5px rgba(0, 0, 0, 0.5);
  }
  .title {
    transition: all 1s;
    top: calc(50% - 40px);
    color: lighten(@gray, 80%);
    font-size: 1.5em;
  }
  .desc {
    transition: all 2s 1s;
    top: calc(50% + 20px);
    color: @gray;
    font-size: 1em;
  }
}
</style>
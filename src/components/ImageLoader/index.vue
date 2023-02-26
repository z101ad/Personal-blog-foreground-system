<template>
  <div class="image-container">
    <img :src="placeholder" class="placeImg" v-if="!isDelImg" />
    <img
      :src="url"
      class="img"
      @load="changeImg"
      ref="img"
      :style="{ transition: `all ${duration}ms ease-in`, opacity: opacity }"
    />
  </div>
</template>

<script>

export default {
  data () {
    return {
      isLoaded: false,
      isDelImg: false
    }
  },
  props: {
    url: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  computed: {
    opacity () {
      return this.isLoaded ? 1 : 0
    }
  },
  methods: {
    changeImg () {
      this.isLoaded = true
      setTimeout(() => {
        this.$emit('imgLoad')
        this.isDelImg = true
      }, this.duration)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/less/mixin.less';
.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .img {
    opacity: 0;
  }
  .placeImg {
    filter: blur(20px);
  }
}
</style>

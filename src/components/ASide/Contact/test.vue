<template>
  <div class="box">
    <Contact icon="qq" :url="qqUrl" text="1072632438" />
  </div>
</template>

<script>
import qqUrl from '@/assets/qq.png'
import wxUrl from '@/assets/weixin.png'
import Contact from './'
export default {
  components: {
    Contact
  },
  data () {
    return {
      qqUrl,
      wxUrl
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  // overflow: hidden;
    margin-top: 200px;
}
</style>

<template>
  <div id="app">
    <Layout class="container">
      <template #left>
        <ASide class="aside" :width="250" />
      </template>
      <div class="main" ref="main">
        <router-view />
        <ToTop />
        </div>
    </Layout>
  </div>
</template>

<script>
import ASide from '@/components/ASide'
import Layout from '@/components/Layout'
import ToTop from '@/view/blog/components/ToTop.vue'
export default {
  components: {
    ASide,
    Layout,
    ToTop
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import './less/mixin.less';
#app {
  .self-fill(fixed);
  .aside {
    width: 250px;
    height: 100%;
  }
}
</style>

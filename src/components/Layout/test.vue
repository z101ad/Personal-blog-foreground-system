<template>
  <Layout class="container">
    <template #left>
      <div class="left">123</div>
    </template>
    <div class="main">345</div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
export default {
  components: {
    Layout
  }
}
</script>
<style scoped lang="less">
@import '~@/less/mixin.less';
.container {
width: 100%;
  .self-fill();
  .left {
    width: 250px;
    height: 100%;
    background-color: red;
  }
  .main {
    width: 100%;
    height: 100%;
    background-color: pink;
  }
}
</style>

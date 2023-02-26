<template>
  <Layout>
    <List class="list" />
    <template #right>
      <Classify class="classify" />
    </template>
  </Layout>
</template>

<script>
import Classify from './classify'
import List from './list'
import Layout from '@/components/Layout'
export default {
  components: {
    Classify,
    List,
    Layout
  },
  data () {
    return {
    }
  },
  methods:{
  },

}
</script>

<style scoped lang="less">
.classify {
  width: 300px;
  height: 100%;
  padding: 20px;
}
</style>

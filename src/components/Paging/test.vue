<template>
  <div>
    <Paging :current="current" :total="total" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Paging from './'
export default {
  components: {
    Paging
  },
  data () {
    return {
      current: 1,
      total: 356
    }
  },
  methods: {
    handlePageChange (newPage) {
      this.current = newPage
    }
  }
}
</script>

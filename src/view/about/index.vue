<template>
  <iframe
    :src="aboutData"
    frameborder="0"
    v-loading="isLoading"
  ></iframe>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('about', ['isLoading', 'aboutData'])
  },
  created () {
    this.$store.dispatch('about/getAboutData')
  }
}
</script>

<style scoped >
iframe {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>

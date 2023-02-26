<template>
  <img :src="errUrl" alt="" />
</template>

<script>
import errUrl from "@/assets/404.jpg"
export default {
    data(){
        return {
            errUrl
        }
    }
}
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
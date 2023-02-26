<template>
  <div class="comment-container">
    <Form class="sendForm" v-on="$listeners"/>
    <List :list="list" />
    <div class="loading" v-loading="isLoading">{{isShow?"":"-----触底了-----"}}</div>
  </div>
</template>

<script>
import Form from './form'
import List from './list'
export default {
    components: {
        Form,
        List
    },
    props:["list","isLoading"],
    computed:{
      isShow(){
        if(this.list.rows){
          return this.list.rows.length<this.list.total
        }
      }
    }
}
</script>

<style lang="less" scoped>
.comment-container {
  position: relative;
  width: 100%;
  .sendForm {
    width: 100%;
    margin-bottom: 20px;
  }
  .loading {
  position: relative;
  text-align: center;
  line-height: 100px;
  font-size: 14px;
  letter-spacing: 3px;
  height: 100px;
}
}
</style>
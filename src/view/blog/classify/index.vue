<template>
  <div class="classify-container" v-loading="isLoading">
    <h2 v-if="list[0].articleCount">文章分类</h2>
    <RightList :list="list" @changeSelected="handleClick" v-if="list[0].articleCount" />
  </div>
</template>

<script>
import RightList from '../components/RightList.vue'
import { getBlogType } from '@/api'
export default {
  components: {
    RightList
  },
  data () {
    return {
      data:{},
      isLoading:true
    }
  },
  methods: {
    handleClick (item) {
      const query = {page:1,limit:this.routeInfo.limit}
      if(item.id === -1){
        console.log("全部");
        this.$router.push({
          name:"blog",
          query
        })
      }
      else {
        this.$router.push({
          name:"cateBlog",
          query,
          params:{cateId:item.id}
        })
      }
    }
  },
  computed:{
    list(){
      let list = Array.from(this.data)
      const total = list.reduce((sum,item)=>sum+item.articleCount,0)
      list = [{id:-1,name:"全部",articleCount:total},...list]
      list = list.map(item=>{return{...item,isSelected:item.id===this.routeInfo.cateId}})
      return list
    },
    routeInfo(){
      return {
        cateId:+this.$route.params.cateId || -1,
        page:+this.$route.query.page || 1,
        limit:+this.$route.query.limit || 10
      }
    },
  },
  async created(){
    this.data = await getBlogType()
    this.isLoading = false
  }
}
</script>

<style scoped lang="less">
.classify-container {
  position: relative;
  width: 100%;
  height: 100%;
  h2 {
    font-size:16px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }
}
</style>
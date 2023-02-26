<template>
  <div class="content-container">
    <h2>{{ list.title }}</h2>
    <div class="info">
      日期：<span>{{ formatDate(list.createDate) }}</span> 浏览：<span>{{
        list.scanNumber
      }}</span>
      <a href="#form-container"
        >评论：<span>{{ list.commentNumber }}</span></a
      >
      <router-link
        :to="{ name: 'cateBlog', params: { cateId: list.category.id } }"
        ><span>{{ list.category.name }}</span></router-link
      >
    </div>
    <div class="markdown-body" v-html="list.htmlContent"></div>
  </div>
</template>

<script>
import formatDate from '@/utils/formatDate'
import '@/less/markdown.css'
import "highlight.js/styles/github.css";
export default {
  props: {
    list: {
      default: () => {}
    }
  },
  methods: {
    formatDate,
  },
  computed:{
    data(){
      
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/less/var.less';
.content-container {
  width: 100%;
  h2 {
    font-size: 2em;
    margin: 21px 0;
  }
  .info {
    margin-bottom: 2em;
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
}
</style>
<template>
  <Layout>
    <div class="content" v-loading="isLoading" ref="mainContainer">
      <Content :list="blogData" v-if="blogData.id" id="con" />
      <Comment
        v-if="!isLoading"
        :list="list"
        class="comment"
        @sendForm="send"
        :isLoading ="isCommentLoading"
      />
    </div>
    <template #right>
      <div class="toc" v-loading="isLoading">
        <TocList :list="blogData.toc" v-if="blogData.id" />
      </div>
    </template>
  </Layout>
</template>

<script>
import { getBlogItem, getComment, postComment } from '@/api'
import TocList from './toc'
import Content from './content'
import Layout from '@/components/Layout'
import Comment from '@/components/Comment'
import mainScroll from '@/mixins/mainScroll'
export default {
  mixins:[mainScroll("mainContainer")],
  components: {
    Layout,
    TocList,
    Content,
    Comment
  },
  data () {
    return {
      blogData: {},
      isLoading: true,
      commentDate: {},
      postComment: {},
      options:{
        blogid: this.$route.params.id,
        page:1,
        limit:10
      },
      mainDom:null,
      isCommentLoading:false
    }
  },
  computed: {
    list () {
      const list = { useTitle: "评论列表", ...this.commentDate }
      return list
    },
    end(){
      if(this.commentDate.rows){
        return this.commentDate.rows.length < this.commentDate.total
      }
    }
  },
  methods: {
    async send (form, callback) {
      form.blogId = this.$route.params.id
      this.postComment = await postComment(form)
      callback("评论成功","success",1500)
      this.commentDate.rows.unshift(this.postComment)
      this.commentDate.total++
    },
    async getMoreData(){
        this.isCommentLoading = true
        this.options.page++
        const res = await getComment(this.options)
        this.commentDate.rows = [...this.commentDate.rows,...res.rows]
        this.isCommentLoading = false
    },
  },
  async created () {
    this.blogData = await getBlogItem(this.$route.params.id)
    this.isLoading = false
    if(!this.blogData){
      this.$router.push("/error")
    }
    this.commentDate = await getComment(this.options)
  },
  mounted () {
    this.mainDom = this.$refs.mainContainer
  },
  updated () {
    const hash = location.hash
    location.hash = "#"
    setTimeout(() =>{
      location.hash = hash
    },30)
  }
}
</script>

<style scoped lang="less">
.toc {
  width: 300px;
  height: 100%;
  padding: 20px;
  position: relative;
}
.content {
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  scroll-behavior: smooth;
  .comment {
    width: 100%;
    margin: 30px 0;
  }
}
</style>
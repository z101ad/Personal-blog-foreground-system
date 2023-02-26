<template>
  <div class="message-container" ref="message" v-loading="isLoading">
    <Comment
      :list="list"
      :isLoading="isCommentLoading"
      v-if="!isLoading"
      @sendForm="send"
    />
  </div>
</template>

<script>
import Comment from '@/components/Comment'
import getData from '@/mixins/getData'
import mainScroll from '@/mixins/mainScroll'
import getMoreMsg from '@/mixins/getMoreMsg'
import { getMessage, postMessage } from '@/api'
export default {
  mixins: [getData({}), mainScroll("message"), getMoreMsg(getMessage, "message")],
  components: {
    Comment
  },
  methods: {
    getData () {
      return getMessage()
    },
    async send (form, callback) {
      const postData = await postMessage(form)
      callback("留言成功", "success", 1500)
      this.data.rows.unshift(postData)
      this.data.total++
    }
  },
  computed: {
    list () {
      return { useTitle: "留言板", ...this.data }
    }
  }
}
</script>

<style scoped lang="less">
.message-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  scroll-behavior: smooth;
  .comment-container {
    width: 700px;
    height: 100%;
    margin: 0 auto;
    margin-top: 20px;
  }
}
</style>

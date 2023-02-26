<template>
  <div class="list-container" v-loading="isLoading" ref="container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="img">
          <router-link :to="{ name: 'blogItem', params: { id: item.id } }">
            <img v-lazy="item.thumb" alt="" />
          </router-link>
        </div>
        <div class="main">
          <router-link :to="{ name: 'blogItem', params: { id: item.id } }"
            ><h2>
              {{ item.title }}
            </h2></router-link
          >
          <div class="date">
            日期：<span>{{ formatDate(item.createDate) }}</span
            >浏览：<span>{{ item.scanNumber }}</span
            >评论：<span>{{ item.commentNumber }}</span>
            <router-link
              :to="{ name: 'cateBlog', params: { cateId: item.category.id } }"
              >分类<span>{{ item.category.id }}</span></router-link
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Paging
      :current="routeInfo.page"
      :total="data.total"
      v-if="data.total"
      @pageChange="handleClick"
    />
  </div>
</template>

<script>
import qqUrl from '@/assets/qq.png'
import { getBlog } from '@/api'
import formatDate from '@/utils/formatDate'
import Paging from '@/components/Paging'
import mainScroll from '@/mixins/mainScroll'
export default {
  mixins: [mainScroll("container")],
  components: {
    Paging
  },
  data () {
    return {
      qqUrl,
      data: [],
      formatDate,
      isLoading: true
    }
  },
  computed: {
    routeInfo () {
      return {
        cateId: +this.$route.params.cateId || -1,
        page: +this.$route.query.page || 1,
        limit: +this.$route.query.limit || 10
      }
    },
  },
  methods: {
    handleClick (newPage) {
      const query = { page: newPage, limit: this.routeInfo.limit }
      if (this.routeInfo.cateId === -1) {
        this.$router.push({
          name: "blog",
          query
        })
      }
      else {
        this.$router.push({
          name: "cateBlog",
          query,
          params: { cateId: this.routeInfo.cateId }
        })
      }
    },
    async getData () {
      this.data = await getBlog({ page: this.routeInfo.page, limit: this.routeInfo.limit, cateId: this.routeInfo.cateId })
    }
  },
  watch: {
    async $route () {
      this.isLoading = true
      this.$refs.container.scrollTop = 0
      await this.getData()
      this.isLoading = false
    }
  },
  async created () {
    await this.getData()
    this.isLoading = false
  }
}
</script>

<style scoped lang="less">
.list-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  scroll-behavior: smooth;
  transition: all 0.3s;
  li {
    display: flex;
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #b4b8bc;
    .img {
      max-width: 200px;
      flex: 0 0 auto;
      margin-right: 15px;
      a {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
        }
      }
    }
    .main {
      flex: 1 1 auto;
      line-height: 1.7;
      h2 {
        font-size: 24px;
        &:hover {
          color: #6b9eee;
        }
      }
      .desc {
        margin: 15px 0;
        font-size: 14px;
      }
      .date {
        color: #b4b8bc;
        font-size: 12px;
        span {
          margin-right: 15px;
          &:nth-child(4) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
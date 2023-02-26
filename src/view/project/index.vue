<template>
  <div class="project-container" v-loading="isLoading" ref="project">
    <div class="item" v-for="(item, i) in proData" :key="i">
      <a :href="item.projectHref"><img v-lazy="item.thumb" alt="" /></a>
      <div class="info">
        <a :href="item.projectHref"
          ><h2>{{ item.name }}</h2></a
        >
        <div class="github">
          github:<a :href="item.github">{{ item.github }}</a>
        </div>
        <div class="desc" v-for="(item1, i1) in item.description" :key="i1">
          {{ item1 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import mainScroll from '@/mixins/mainScroll'
export default {
  mixins: [mainScroll("project")],
  created () {
    this.$store.dispatch("project/getProData")
  },
  computed: {
    ...mapState("project", ["isLoading", "proData"])
  }
}
</script>

<style scoped lang="less">
@import '~@/less/var.less';
.project-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  scroll-behavior: smooth;
  .item {
    overflow: hidden;
    display: flex;
    width: 100%;
    margin: 10px 0;
    padding: 20px;
    transition: all 0.5s;
    border-radius: 10px;
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 0 5px transparent, 0 0 10px 5px rgba(134, 176, 241, 0.5);
    }
    img {
      width: 200px;
      height: 200px;
      margin-right: 20px;
    }
    .info {
      flex: 1 1 auto;
      h2 {
        margin: 10px 0;
        &:hover {
          color: @primary;
        }
      }
      .github {
        font-size: 14px;
        margin-bottom: 10px;
        a {
          color: @primary;
        }
      }
      .desc {
        width: 100%;
        font-size: 14px;
        color: @words;
        margin-bottom: 10px;
        line-height: 1.5;
      }
    }
  }
}
</style>

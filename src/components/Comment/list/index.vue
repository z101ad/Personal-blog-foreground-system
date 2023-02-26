<template>
  <div class="list-container" >
    <h3>{{list.useTitle}}({{list.total}})</h3>
    <ul>
      <li class="list-item" v-for="item in list.rows" :key="item.id">
        <img :src="item.avatar" alt="">
        <div class="main">
          <div class="title">{{item.nickname}}</div>
          <div class="date">{{formatDate(item.createDate,true)}}</div>
          <div class="content">{{item.content}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import formatDate from '@/utils/formatDate'
export default {
  props:{
    list:{
      type:Object,
      default:()=>{}
    }
  },
  methods:{
    formatDate,
  }
}
</script>

<style scoped lang="less">
@import '~@/less/var.less';
.list-container {
  width: 100%;
  h3 {
    margin:20px 0;
  }
  ul {
    width: 100%;
    .list-item {
      display:flex;
      position: relative;
      padding:15px 0;
      img {
        width: 44px;
        height: 44px;
        margin-right: 15px;
      }
      .main {
        flex:1 1 auto;
        .title {
          font-size:16px;
          color:@success;
          margin-bottom: 10px;
        }
        .date {
          position: absolute;
          top: 20px;
          right: 5px;
          font-size:12px;
          color:@gray;
        }
        .content {
          font-size:14px;
          color:@words;
        }
      }
    }
  }
}
</style>
<template>
  <div class="aside-container" :style="{ width: width + 'px' }">
    <AvatarImage
      :url="settingData.avatar"
      :size="100"
      class="avatar"
    />
    <p>{{settingData.siteTitle}}</p>
    <Menu :list="list" class="menu" :left="40" />
    <Contact icon="github" :text="settingData.githubName" class="contact" :href="settingData.github" v-if="settingData.githubName"/>
    <Contact
      icon="mail"
      text="zhuang9766@163.com"
      class="contact"
      :href="'mailto:'+settingData.mail"
    />
    <Contact
      icon="qq"
      text="1072632438"
      :url="qqUrl"
      class="contact"
      :href="settingData.qqHref"
    />
    <Contact icon="weixin" text="zhuang-ex" :url="wxUrl" class="contact" />
    <div class="footer">
      {{settingData.icp}}
    </div>
  </div>
</template>

<script>
import Contact from './Contact'
import Menu from './Menu'
import AvatarImage from '@/components/AvatarImage'
import qqUrl from '@/assets/qq.png'
import wxUrl from '@/assets/weixin.png'
import {mapState} from "vuex"
export default {
  components: {
    Contact,
    Menu,
    AvatarImage
  },
  data(){
    return {
      list: [
        { name: 'home', icon: 'home', text: '首页', to: '/', exact: true },
        { name: 'blog', icon: 'blog', text: '文章', to: '/blog', exact: false },
        { name: 'about', icon: 'about', text: '关于我', to: '/about', exact: true },
        { name: 'project', icon: 'code', text: '项目&效果', to: '/project', exact: true },
        { name: 'message', icon: 'chat', text: '留言板', to: '/message', exact: true }
      ],
      qqUrl,
      wxUrl
    }
  },
  computed:{
    ...mapState("setting",["isLoading","settingData"])
  },
  props: {
    width: {
      type: Number,
      default: 300
    }
  },
  async created(){
    this.$store.dispatch("setting/getSetting")
  }
}
</script>

<style scoped lang="less">
.aside-container {
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  background-color: #20201f;
  padding:20px 0;
  .avatar {
    margin: 15px auto;
  }
  p {
    height: 20px;
    line-height: 20px;
    font-size:16px;
    color:#fff;
    text-align: center;
  }
  .menu {
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .contact {
    margin: 10px auto;
  }
  .footer {
    text-align: center;
    font-size:14px;
    margin-top: 30px;
  }
}
</style>

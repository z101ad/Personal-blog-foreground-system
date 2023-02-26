<template>
  <div class="contact-container">
    <a class="content" :href="href?href:'javascript:;'" :target="href?'_blank':'_self'">
      <Icon :name="icon" :size="25" class="icon" /><span class="text">{{
        text
      }}</span>
      <div class="qr" v-if="url">
        <img :src="url" alt="" />
      </div>
    </a>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  components: {
    Icon
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped lang="less">
.contact-container {
  background-color: #20201f;
  .content {
    position: relative;
    display: flex;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    color: #fff;
    transform: translateX(30px);
    &:hover .qr {
      transform: scaleY(1);
    }
    &:hover {
      color:#6b9eee;
    }
    .icon {
      color: inherit;
    }
    .text {
      margin-left: 10px;
      font-size: 14px;
      color: inherit;
    }
    .qr {
      position: absolute;
      bottom: 35px;
      left: 0;
      width: 150px;
      height: 150px;
      padding: 10px;
      transform: scaleY(0);
      transition: all 0.5s;
      transform-origin: center bottom;
      background-color: #fff;
      border-radius: 10px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background: #fff;
      }
    }
  }
}
</style>

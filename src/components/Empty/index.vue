<template>
  <div class="empty-container">
    <Icon name="empty" :size="100" color="#b4b8bc" />
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  components: {
    Icon
  },
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/less/mixin.less';
.empty-container {
    .abs-center(fixed);
    p {
        color:#b4b8bc;
        font-weight: 700;
        text-align: center;
    }
}
</style>

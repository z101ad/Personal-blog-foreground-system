<template>
    <img
      :src="url?url:placeHolder"
      :style="{ width: size + 'px', height: size + 'px' }"
      alt=""
      class="avatar"
    />
</template>
<script>
export default {
  data(){
    return {
      placeHolder:"https://i04piccdn.sogoucdn.com/5a8da78776839f63"
    }
  },
  props: {
    url: {
      type: String,
      default:""
    },
    size: {
      type: Number,
      default: 100
    }
  }
}
</script>

<style>
.avatar {
  display: block;
  border-radius: 50%;
}
</style>

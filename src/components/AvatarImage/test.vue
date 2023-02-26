<template>
  <div>
    <AvatarImage
      url="https://img2.baidu.com/it/u=617579813,2960860841&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1670778000&t=00d8946c1d91cde84878f164eee1052c"
      :size="50"
    />
    <AvatarImage
      url="https://img2.baidu.com/it/u=1003272215,1878948666&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1670778000&t=d330a27f29353fb69daebb8496ce54e7"
      :size="150"
    />
  </div>
</template>

<script>
import AvatarImage from './'
export default {
  components: {
    AvatarImage
  }
}
</script>

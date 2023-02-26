<template>
  <div>
    <ImageLoader
      :url="bigUrl"
      :placeholder="smallUrl"
      :duration="2000"
      @imgLoad="loaded"
    />
  </div>
</template>

<script>
import ImageLoader from './'
import bigUrl from '@/assets/风景.jpg'
import smallUrl from '@/assets/风景s.jpg'
export default {
  components: {
    ImageLoader
  },
  data () {
    return {
      bigUrl: bigUrl,
      smallUrl: smallUrl
    }
  },
  methods: {
    loaded () {
      console.log('图片加载完成')
    }
  }
}
</script>

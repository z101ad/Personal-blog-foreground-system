import defaultUrl from '@/assets/default.gif'
import disShake from '@/utils/disShake'
import eventBus from '@/eventBus'
//存放当前页面的图片
let imgs = []
//设置单个图片
function setImage(img) {

  img.dom.src = defaultUrl
  const clientHeight = document.documentElement.clientHeight
  const rect = img.dom.getBoundingClientRect()
  const height = rect.height || 150
  if (rect.top >= -height && rect.top <= clientHeight) {
    let image = new Image()
    image.src = img.src
    image.onload = ()=>{
      img.dom.src = img.src
      //处理完了就删除该图片
      imgs = imgs.filter((item) => item !== img)
      image.onload = null
    }
  }
}
//设置所有图片
function setImages() {
  for (let img of imgs) {
    img.src && (setImage(img))
  }
}

eventBus.$on('mainScroll', disShake(setImages, 50))
export default {
  inserted(el, binding) {
    let imgObj = {
      dom: el,
      src: binding.value
    }
    imgObj.src && imgs.push(imgObj)
    imgObj.src && setImage(imgObj)
  },
  unbind(el) {
    //销毁绑定组件时执行
    imgs = imgs.filter((img) => img.dom !== el)
  }
}

import imgUrl from '@/assets/loading.svg'
import style from './loading.module.less'
function isExist(el) {
  return el.querySelector("img[data-role='loading']")
}

function createImg() {
  const img = document.createElement('img')
  img.dataset.role = 'loading'
  img.src = imgUrl
  img.className = `${style.loading}`
  return img
}
export default function (el, binding) {
   const img = isExist(el) 
  if(binding.value) {
    if(!img){
        el.appendChild(createImg())
    }
  }
  else {
    img && img.remove()
  }
}

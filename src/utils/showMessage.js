import getComponentRootDom from './getComponentRootDom.js'
import Icon from '@/components/Icon'
import style from './showMessage.module.less'

function showMessage(option = {}) {
  const content = option.content || ''
  const type = option.type || 'info'
  const duration = option.duration || 2000
  const container = option.container || document.body
  const div = document.createElement('div')

  const iconDom = getComponentRootDom(Icon, { name: type })
  div.innerHTML = `<span class='${style.icon}'>${iconDom.outerHTML}</span><div >${content}</div>`
  const typeClass = style[`message-${type}`]
  div.className = `${style.message} ${typeClass}`
  if (getComputedStyle(container).position === 'static' && option.container) {
    container.style.position = 'relative'
  }
  container.appendChild(div)
  container.clientWidth
  div.style.transform = 'translate(-50%, -50%)'
  div.style.opacity = 1
  setTimeout(()=>{
    div.style.transform = 'translate(-50%, -50%) translateY(-25px)'
    div.style.opacity = 0
    div.addEventListener("transitionend",()=>{
        div.remove()
        option.callback && option.callback()
    },{once:true})
  },duration)
}

export default showMessage

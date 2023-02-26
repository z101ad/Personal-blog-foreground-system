import axios from 'axios'
import { start, done, configure } from 'nprogress'
import showMessage from '../utils/showMessage'

configure({
  trickleSpeed: 20,
  showSpinner: false
})
const ins = axios.create() // 创建一个axios的实例
ins.interceptors.request.use((config) => {
  start()
  if (config) {
    config.authorization = sessionStorage.getItem('token') || ''
  }
  return config
})
ins.interceptors.response.use(function (resp) {
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: 'error',
      duration: 1500
    })
    done()
    return null
  }
  done()
  return resp.data.data
})

export default ins

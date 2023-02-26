import Vue from 'vue'
import App from './App.vue'
import './less/global.less'
import router from './router'
import showMessage from './utils/showMessage.js'
// import './mock'
import loading from './directives/loading'
import "./eventBus.js";
import lazy from './directives/lazy'
import store from './store'
import 'nprogress/nprogress.css'
Vue.config.productionTip = false
Vue.prototype.$showMessage = showMessage
Vue.directive("loading",loading)
Vue.directive("lazy",lazy)
const vm =  new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

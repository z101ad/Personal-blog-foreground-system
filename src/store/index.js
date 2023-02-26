import Vuex from 'vuex'
import Vue from 'vue'
import home from './home'
import setting from './setting'
import project from './project'
import about from './about'
if (!window.Vuex) {
  Vue.use(Vuex)
}
export default new Vuex.Store({
  modules: { home, setting, project, about },
  strict: true
})

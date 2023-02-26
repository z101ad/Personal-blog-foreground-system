import { getSetting } from '../api'
import titleAPI from '@/utils/setTitle.js'
export default {
  namespaced: true,
  state: {
    settingData: {},
    isLoading: false
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload
    },
    setData(state, payload) {
      state.settingData = payload
    }
  },
  actions: {
    async getSetting(ctx) {
      if (!ctx.state.settingData.length) {
        ctx.commit('setLoading', true)
        const data = await getSetting()
        ctx.commit('setData', data)
        ctx.commit('setLoading', false)
        if (data.favicon) {
          if (document.querySelector("link[rel='icon']")) {
            return
          }
          const link = document.createElement('link')
          link.rel = 'icon'
          link.href = data.favicon
          document.querySelector("head").appendChild(link)
        }
        if(data.siteTitle){
            titleAPI.setSiteTitle(data.siteTitle)
        }
      }
    }
  }
}

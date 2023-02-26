import { getAbout } from '@/api'
export default {
  namespaced: true,
  state: {
    aboutData: {},
    isLoading: false
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload
    },
    setAboutData(state, payload) {
      state.aboutData = payload
    }
  },
  actions: {
    async getAboutData(ctx) {
      if (!ctx.state.aboutData.length) {
        ctx.commit('setLoading', true)
        const data = await getAbout()
        ctx.commit('setAboutData', data)
        ctx.commit('setLoading', false)
      }
    }
  }
}

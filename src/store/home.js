import { getBanner } from '@/api'
export default {
  namespaced: true,
  state: {
    isLoading: false,
    homeData: []
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload
    },
    setHomeData(state, payload) {
      state.homeData = payload
    }
  },
  actions: {
    async getHomeData(ctx) {
      if (!ctx.state.homeData.length) {
        ctx.commit('setLoading', true)
        const data = await getBanner()
        ctx.commit('setHomeData', data)
        ctx.commit('setLoading', false)
      }
    }
  }
}

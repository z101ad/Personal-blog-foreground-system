import { getProject } from '../api'
export default {
  namespaced: true,
  state: {
    proData: [],
    isLoading: false
  },
  mutations: {
    setProData(state, payload) {
      state.proData = payload
    },
    setLoading(state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    async getProData(ctx) {
      if (!ctx.state.proData.length) {
        ctx.commit('setLoading', true)
        const data = await getProject()
        ctx.commit('setProData', data)
        ctx.commit('setLoading', false)
      }
    }
  }
}

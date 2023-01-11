import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    $PlayGround: '',
  },

  getters: {
  },
  
  mutations: {
    getPlayGround(state, value) {
      state.$PlayGround = value
    },
  },

  actions: {
  },

  modules: {
  }
})

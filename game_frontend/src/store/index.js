import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    $PlayGround: {},
  },

  getters: {
  },
  
  mutations: {
    getPlayGround(state, { width, height }) {
      state.$PlayGround.width = width
      state.$PlayGround.height = height
      console.log(state.$PlayGround)
    },
  },

  actions: {
  },

  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    $PlayGround: {},
    $ctx: {},
  },

  getters: {
  },
  
  mutations: {
    getPlayGround(state, { width, height }) {
      state.$PlayGround.width = width
      state.$PlayGround.height = height
    },
    getCanvas(state, value) {
      state.$ctx = value
    }
  },

  actions: {
  },

  modules: {
  }
})

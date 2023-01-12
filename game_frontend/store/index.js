import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    $PlayGround: {},
    $canvas: {},
    Game_OBJECTS: [],
  },

  getters: {
  },
  
  mutations: {
    getPlayGround(state, { width, height }) {
      state.$PlayGround.width = width
      state.$PlayGround.height = height
    },
    getCanvas(state, value) {
      state.$canvas = value
    },
    addGameObject(state, value) {
      state.Game_OBJECTS.push(value)
    },
    destoryGameObject(state,value) {
      // 找到数组中对应的对象，删掉
      for (let i = 0; i < state.Game_OBJECTS.length; i ++ ) {
        if (state.Game_OBJECTS[i] === value) {
          state.Game_OBJECTS.splice(i,1);
          break;
        }
      }
    }
  },

  actions: {
  },

  modules: {
  }
})

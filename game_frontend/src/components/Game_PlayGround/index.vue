<template>
  <div ref="playground" class="game-playground">
    <div @click="returnMenu">退出</div>
    <GameMap></GameMap>
    <Player></Player>
  </div>
</template>
<script>
import Player from './Player/index.vue'
import GameMap from './Game_Map/index.vue'
export default {
  name: 'GamePlayGround',
  components: {
    Player,
    GameMap,
  },
  props: {
    show: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {
      PlayGroundWidth: 0,
      PlayGroundHeight: 0,
    }
  },
  mounted() {
    this.$store.commit('getPlayGround',{width: this.$refs.playground.clientWidth, height: this.$refs.playground.clientHeight})
    this.PlayGroundWidth = this.$refs.playground.clientWidth
    this.PlayGroundHeight = this.$refs.playground.clientHeight
  },
  methods: {
    returnMenu() {
      this.$emit('returnMenu')
    },
  }
}
</script>
<style scoped>
.game-playground {
  width: 100%;
  height: 100%;
  user-select:none;
  background-color:grey;
}
canvas {
  width: 100%;
  height: 100%;
  position:relative;
  display: block;
}
</style>
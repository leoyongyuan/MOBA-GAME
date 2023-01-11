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
  
    }
  },
  mounted() {
    this.$store.commit('getPlayGround',this.$refs.playground)
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
.game-playground > canvas {
  position:relative;
  display: block;
  margin: 0 auto;
  transform:translate(-50%,-50%);
}
</style>